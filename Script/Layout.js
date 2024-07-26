//function to generate layout

function generatelayout() {

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

                //creating the cells
                const cell = document.createElement("div");
                cell.classList = ("preview-div-cell");
                preview_container.appendChild(cell);
            }
        })
        

        
    }

    //calling create cells
    createCells();
}

//calling generate layout

generatelayout();