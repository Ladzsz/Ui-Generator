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
                
                const label = document.createElement('label');
                label.textContent = `Input ${i}: `;
                
                const input = document.createElement('input');
                input.type = 'text';
                input.name = `input${i}`;

                inputBox.appendChild(label);
                inputBox.appendChild(input);
                inputContainer.appendChild(inputBox);
              }
            });
        //running the dropdown automatically
            
        document.getElementById('Rowcount').dispatchEvent(new Event('change')); 
    } 
    rowAmount();
}

generatelayout();
