//function to generate layout

function generatelayout() {

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


        //manipulating the preview div
        const preview = document.querySelector('.preview-div');
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
        cell.style.order = itemStyles.order;
        cell.style.flexGrow = itemStyles.flexGrow;
        cell.style.flexShrink = itemStyles.flexShrink;
        cell.style.flexBasis = itemStyles.flexBasis;
        cell.style.alignSelf = itemStyles.alignSelf;
    });

    //function to create and display amount of cells based off dropdown input

    function createCells() {

            //event listenr so dropdown activates on change and creates more

            document.getElementById("cells").addEventListener("change", function () {
            //grabbing the dropdown menu

            let dropdown = document.getElementById("cells");

            //grabbing the preview div container

            let preview_container = document.querySelector(".preview-div");

             //clear any existing cells
            preview_container.innerHTML = '';

            //Get the selected number
            const selectedNUM = parseInt(dropdown.value);

            //for loop to determine cell amount
            for (let i = 1; i <= selectedNUM; i++) {

                //creating the p element to populate cells
                const cellContent = document.createElement("p");
                cellContent.textContent = `Cell ${i}`;

                //creating the cells
                const cell = document.createElement("div");
                cell.classList = ("preview-div-cell");
                
                // Appending the p element to the cell
                cell.appendChild(cellContent);

                // Appending the cell to the preview container
                preview_container.appendChild(cell);
            }
        })

    }
    //calling create cells
    createCells();

}

//calling generate layout

generatelayout();