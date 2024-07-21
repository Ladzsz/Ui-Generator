//function to generate layouts

function generatelayout() {
    //function to generate rows

    function rowAmount() {
        //grabbing inputs
        document.getElementById('Rowcount').addEventListener('change', function() {
            const count = parseInt(this.value);
            const inputContainer = document.getElementById('inputContainer');
            inputContainer.innerHTML = '';

            //creating text inputs based off the dropdown

            for (let i = 1; i <= count; i++) {
                const inputBox = document.createElement('div');
                inputBox.classList.add('input-box');

                const inputlabel = document.createElement('div');
                inputlabel.classList.add('input-label');
                
                const label = document.createElement('label');
                label.textContent = `Column amount for Row ${i}: `;
                
                const input = document.createElement('input');
                input.type = 'text';
                input.name = `Row${i}`;
                input.classList.add('js-input');

                inputlabel.appendChild(label);
                inputlabel.appendChild(input);
                inputBox.appendChild(inputlabel);
                inputContainer.appendChild(inputBox);
              }
            });

        //running the dropdown automatically
            
        document.getElementById('Rowcount').dispatchEvent(new Event('change')); 

        //function to choose either flexbox or grid

        function FlexorGrid() {

            //grabbinng elements
            document.getElementById("Flexbox-btn").addEventListener('change', FlexorGrid);
            document.getElementById("Grid-btn").addEventListener('change', FlexorGrid);
            let FlexSection = document.querySelector('.Flexinputs');
            let GridSection = document.querySelector('.Grid-inputs')

            //choosing function to run and screen to display based on radio button
            if (document.getElementById("Flexbox-btn").checked ) {
                GridSection.style.display = "none";
                FlexSection.style.display = "block";
                generateFlexbox();
            } else if (document.getElementById("Grid-btn").checked) {
                FlexSection.style.display = "none";
                GridSection.style.display = "block";
                generateGrid();
            }
        }

        //function to take flex inputs and generate preview and code

        function generateFlexbox() {
            //getting all the container properties
            const containerStyles = {
                display: document.getElementById('display').value,
                flexDirection: document.getElementById('flex-direction').value,
                flexWrap: document.getElementById('flex-wrap').value,
                justifyContent: document.getElementById('justify-content').value,
                alignItems: document.getElementById('align-items').value,
                alignContent: document.getElementById('align-content').value,
                gap: document.getElementById('gap').value
            };

            //getting all the item properties
            const itemStyles = {
                order: document.getElementById('order').value,
                flexGrow: document.getElementById('flex-grow').value,
                flexShrink: document.getElementById('flex-shrink').value,
                flexBasis: document.getElementById('flex-basis').value,
                alignSelf: document.getElementById('align-self').value
            };

            //submit button to preview flex result
            document.querySelector('.submit-flex-btn').addEventListener('click', (event) => {
                event.preventDefault();
                PreviewFlex();
                GenratedFlexCode();
            });

            //function to preview flex result
            function PreviewFlex() {

                //manipulating the preview div
                const preview = document.querySelector('.preview-div');
                preview.style.display = containerStyles.display;
                preview.style.flexDirection = containerStyles.flexDirection;
                preview.style.flexWrap = containerStyles.flexWrap;
                preview.style.justifyContent = containerStyles.justifyContent;
                preview.style.alignItems = containerStyles.alignItems;
                preview.style.alignContent = containerStyles.alignContent;
                preview.style.gap = containerStyles.gap;
            }

            //function to display generated flex code
            function GenratedFlexCode() {

                //generated html
                const htmlCode = `<div class="container">
                        <div class="item">Item 1</div>
                        <div class="item">Item 2</div>
                        <div class="item">Item 3</div>
                        </div>`;

                //generated css        
                const cssCode = `.container {
                        display: ${containerStyles.display};
                        flex-direction: ${containerStyles.flexDirection};
                        flex-wrap: ${containerStyles.flexWrap};
                        justify-content: ${containerStyles.justifyContent};
                        align-items: ${containerStyles.alignItems};
                        align-content: ${containerStyles.alignContent};
                        gap: ${containerStyles.gap};
                    }

                    .item {
                        order: ${itemStyles.order};
                        flex-grow: ${itemStyles.flexGrow};
                        flex-shrink: ${itemStyles.flexShrink};
                        flex-basis: ${itemStyles.flexBasis};
                        align-self: ${itemStyles.alignSelf};
                    }`;

                //displaying code in styled text boxes    
                document.getElementById('generated-html').innerHTML = `<textarea rows="10" cols="50" style="background-color: #1E1E1E; color: #4EC9B0; padding: 20px;">${htmlCode}</textarea>`;
                document.getElementById('generated-css').innerHTML = `<textarea rows="10" cols="50" style="background-color: #1E1E1E; color: #4EC9B0; padding: 20px;">${cssCode}</textarea>`;
            }
        }

        //function to take grid inputs and generate preview and code

        function generateGrid() {
            console.log("grid")
        }

        //calling flex or grid
        FlexorGrid();

    } 
    //calling row amount
    rowAmount();

}
//calling generate latyout
generatelayout();
