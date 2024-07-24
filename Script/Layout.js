//function to generate layouts

function generatelayout() {
    //function to generate rows

    function cellAmount() {

            const cellInput = document.getElementById('cells');

            // Adding event listener for input changes
            cellInput.addEventListener('change', function() {
            const count = parseInt(this.value);

            // Get the container and the preview div
            const container = document.querySelector(".preview-div");
            const preDiv = document.querySelector(".preview-div-cell");

            // Clear previous rows except for the first one
            const cells = container.querySelectorAll(".preview-div-cell");
            cells.forEach((cell, index) => {
                if (index > 0) { 
                    container.removeChild(cell);
                }
            });

            // Create new rows
            for (let i = 1; i < count; i++) {
                const cell = preDiv.cloneNode(true);
                cell.querySelector('p').textContent = `Cell ${i + 1}`; 
                container.appendChild(cell); 
            }
        });

        //bringing in the dropdown

        let rowcount = document.getElementById("cells");    

        //running the dropdown automatically
        rowcount.addEventListener('change', cloneElement); 

        document.addEventListener('DOMContentLoaded', function() {

            // Setting up event listeners on radio buttons
            document.getElementById("Flexbox-btn").addEventListener('change', FlexorGrid);
            document.getElementById("Grid-btn").addEventListener('change', FlexorGrid);
        
            // Calling flex or grid
            FlexorGrid();

            //calling generate layout
            generatelayout()
        });
        
        function FlexorGrid() {
            // Grabbing elements
            let FlexSection = document.querySelector('.Flexinputs');
            let GridSection = document.querySelector('.Grid-inputs');
        
            // Choosing function to run and screen to display based on radio button
            if (document.getElementById("Flexbox-btn").checked ) {
                GridSection.style.display = "none";
                FlexSection.style.display = "block";
                generateFlexbox();
            } else if (document.getElementById("Grid-btn").checked) {
                FlexSection.style.display = "none";
                GridSection.style.display = "block";
                generateGrid();
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
                const CellStyles = {
                    order: document.getElementById('order').value,
                    flexGrow: document.getElementById('flex-grow').value,
                    flexShrink: document.getElementById('flex-shrink').value,
                    flexBasis: document.getElementById('flex-basis').value,
                    alignSelf: document.getElementById('align-self').value
                };

                //submit button to preview flex and generate code
                document.querySelector('.submit-flex-button').addEventListener('click', (event) => {
                    event.preventDefault();

                    //manipulating the preview div
                    const preview = document.querySelector('.preview-div');

                    //setting styles for div
                    preview.style.display = containerStyles.display;
                    preview.style.flexDirection = containerStyles.flexDirection;
                    preview.style.flexWrap = containerStyles.flexWrap;
                    preview.style.justifyContent = containerStyles.justifyContent;
                    preview.style.alignItems = containerStyles.alignItems;
                    preview.style.alignContent = containerStyles.alignContent;
                    preview.style.gap = containerStyles.gap;

                    //manipulating the cells

                    const previewCell = document.querySelector('.preview-div-cell');

                    //setting styles for the cells
                    previewCell.style.order = CellStyles.order;
                    previewCell.style.flexGrow = CellStyles.flexGrow;
                    previewCell.style.flexShrink = CellStyles.flexShrink;
                    previewCell.style.flexBasis = CellStyles.flexBasis;
                    previewCell.style.alignSelf = CellStyles.alignSelf;
                

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
                    document.getElementById('generated-html').innerHTML = `<textarea rows="10" cols="50" style="background-color: #1E1E1E; color: #4EC9B0; padding: 20px;">${htmlCode}<br><br></textarea>`;
                    document.getElementById('generated-css').innerHTML = `<textarea rows="10" cols="50" style="background-color: #1E1E1E; color: #4EC9B0; padding: 20px;">${cssCode}<br><br></textarea>`;
                    
                });

            }
            

            //function to take grid inputs and generate preview and code

            function generateGrid() {
                console.log("grid")
            }
        }

        //calling flex or grid
        FlexorGrid();

    } 
    //calling row amount
    cellAmount();

}


//calling generate latyout
generatelayout();
