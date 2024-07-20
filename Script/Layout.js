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

            //choosing function to run based on radio button
            if (document.getElementById("Flexbox-btn").checked ) {
                generateFlexbox();
            } else if (document.getElementById("Grid-btn").checked) {
                generateGrid();
            }
        }

        //function to take flex inputs and generate preview and code

        function generateFlexbox() {
            console.log("flex")
        }

        //function to take grid inputs and generate preview and code

        function generateGrid() {
            console.log("grid")
        }

        FlexorGrid();

    } 
    rowAmount();

}
generatelayout();
