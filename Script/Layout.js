//function to generate layout

document.addEventListener('DOMContentLoaded', () => {
    generatelayout();
    cellAmount();
    generateFlexbox();
});




//function to create cells and erase them
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
            for (let i = 1; i <= count; i++) {
                const cell = preDiv.cloneNode(true);
                cell.querySelector('p').textContent = `Cell ${i}`; 
                container.appendChild(cell); 
            }
        });

    } 

    let cellcount = document.getElementById("cells");    

        //running the dropdown automatically
        cellcount.addEventListener('change', cellAmount); 

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

        const previewCell = document.querySelectorAll('.preview-div-cell');

        //setting styles for the cells
        previewCell.forEach(cell => {
            cell.style.order = CellStyles.order;
            cell.style.flexGrow = CellStyles.flexGrow;
            cell.style.flexShrink = CellStyles.flexShrink;
            cell.style.flexBasis = CellStyles.flexBasis;
            cell.style.alignSelf = CellStyles.alignSelf;
        });
    

        //generated html
        const htmlCode = `<div class="container">
                ${Array.from(document.querySelectorAll('.preview-div-cell')).map(cell => `<div class="cell">${cell.querySelector('p').textContent}</div>`).join('\n')}
                </div>`;

        //generated css        
        const cssCode = `.container {\n
            display: ${containerStyles.display};
            flex-direction: ${containerStyles.flexDirection};
            flex-wrap: ${containerStyles.flexWrap};
            justify-content: ${containerStyles.justifyContent};
            align-items: ${containerStyles.alignItems};
            align-content: ${containerStyles.alignContent};
            gap: ${containerStyles.gap};
        }
        \n
        .cell {
            order: ${CellStyles.order};
            flex-grow: ${CellStyles.flexGrow};
            flex-shrink: ${CellStyles.flexShrink};
            flex-basis: ${CellStyles.flexBasis};
            align-self: ${CellStyles.alignSelf};
            }`;

        //displaying code in styled text boxes    
        document.getElementById('generated-html').innerHTML = `<textarea rows="10" cols="50" style="background-color: #1E1E1E; color: #4EC9B0; padding: 20px;">${htmlCode}</textarea>`;
        document.getElementById('generated-css').innerHTML = `<textarea rows="10" cols="50" style="background-color: #1E1E1E; color: #4EC9B0; padding: 20px;">${cssCode}</textarea>`;
            
         
    }
  
