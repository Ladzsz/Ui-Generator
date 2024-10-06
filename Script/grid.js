function generateCode() {
    // Grabbing values from grid container form inputs
    const display = document.getElementById('display').value;
    const gridTemplateColumns = document.getElementById('grid-template-columns').value;
    const gridTemplateRows = document.getElementById('grid-template-rows').value;
    const gridColumnGap = document.getElementById('grid-column-gap').value;
    const gridRowGap = document.getElementById('grid-row-gap').value;
    const justifyItems = document.getElementById('justify-items').value;
    const alignItems = document.getElementById('align-items').value;
    const justifyContent = document.getElementById('justify-content').value;
    const alignContent = document.getElementById('align-content').value;
    const gap = document.getElementById('gap').value;

    // Displaying the preview styles
    const previewBox = document.getElementById('preview-box');
    previewBox.style.display = display;
    previewBox.style.gridTemplateColumns = gridTemplateColumns;
    previewBox.style.gridTemplateRows = gridTemplateRows;
    previewBox.style.columnGap = gridColumnGap;
    previewBox.style.rowGap = gridRowGap;
    previewBox.style.justifyItems = justifyItems;
    previewBox.style.alignItems = alignItems;
    previewBox.style.justifyContent = justifyContent;
    previewBox.style.alignContent = alignContent;
    previewBox.style.gap = gap;

    // Grabbing values from item properties form
    const order = document.getElementById('order').value;
    const gridColumn = document.getElementById('grid-column').value;
    const gridRow = document.getElementById('grid-row').value;
    const gridArea = document.getElementById('grid-area').value;
    const justifySelf = document.getElementById('justify-self').value;
    const alignSelf = document.getElementById('align-self').value;
    const margin = document.getElementById('margin').value;

    // Get the selected item
    const selectedItem = document.querySelector('.boxItem.selected');

    // Add styles to the selected item
    if (selectedItem) {
        selectedItem.style.order = order;
        selectedItem.style.gridColumn = gridColumn;
        selectedItem.style.gridRow = gridRow;
        selectedItem.style.gridArea = gridArea;
        selectedItem.style.justifySelf = justifySelf;
        selectedItem.style.alignSelf = alignSelf;
        selectedItem.style.margin = margin;
    }

    // Generating HTML and CSS code
    // Grabbing all p elements in preview box
    const items = previewBox.querySelectorAll('p');

    // Setting up dynamic HTML code
    let htmlCode = '<div id="preview-box">\n';
    items.forEach((item, index) => {
        htmlCode += `<p class="Cell-${index + 1}">Cell ${index + 1}</p>\n`;
    });
    htmlCode += '</div>';

    // Setting up the CSS code for the container styles
    const cssCode = `#preview-box {
    display: ${display};
    grid-template-columns: ${gridTemplateColumns};
    grid-template-rows: ${gridTemplateRows};
    column-gap: ${gridColumnGap};
    row-gap: ${gridRowGap};
    justify-items: ${justifyItems};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    align-content: ${alignContent};
    gap: ${gap};
    }`;

    // Generating CSS for each child element
    let itemCSScode = '';
    items.forEach((item, index) => {
        const order = item.style.order || '0';
        const gridColumn = item.style.gridColumn || 'auto';
        const gridRow = item.style.gridRow || 'auto';
        const gridArea = item.style.gridArea || 'auto';
        const justifySelf = item.style.justifySelf || 'auto';
        const alignSelf = item.style.alignSelf || 'auto';
        const margin = item.style.margin || '0px';

        // Generate CSS only if the styles differ from the defaults
        if (order !== '0' || gridColumn !== 'auto' || gridRow !== 'auto' || gridArea !== 'auto' || justifySelf !== 'auto' || alignSelf !== 'auto' || margin !== '0px') {
            itemCSScode += `.Cell-${index + 1} {\n` +
                `  order: ${order};\n` +
                `  grid-column: ${gridColumn};\n` +
                `  grid-row: ${gridRow};\n` +
                `  grid-area: ${gridArea};\n` +
                `  justify-self: ${justifySelf};\n` +
                `  align-self: ${alignSelf};\n` +
                `  margin: ${margin};\n` +
                `}\n\n\n\n`;
        }
    });

    // Displaying the generated code
    document.getElementById('generated-html').textContent = htmlCode;
    document.getElementById('generated-css').textContent = cssCode;
    document.getElementById('item-css').textContent = itemCSScode;
}

//html copy function
function htmlText() {
    // Get the generated HTML code
    const htmlCode = document.getElementById('generated-html').textContent;

    // Copy the HTML to clipboard
    navigator.clipboard.writeText(htmlCode).then(() => {
        alert("HTML has been copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy HTML: ", err);
    });
}

//css copy function
function cssText() {
    // Get the generated CSS code
    const cssCode = document.getElementById('generated-css').textContent;

    // Copy the CSS to clipboard
    navigator.clipboard.writeText(cssCode).then(() => {
        alert("CSS has been copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy CSS: ", err);
    });
}

// Function to update the color of selected items
function updateSelectedItemColor() {
    // Get all items
    const items = document.querySelectorAll('.boxItem');
    
    // Reset color for all items
    items.forEach(item => {
        item.style.backgroundColor = "";
    });
    
    // Apply selected color to the currently selected item
    const selectedItem = document.querySelector('.boxItem.selected');
    if (selectedItem) {
        selectedItem.style.backgroundColor = "#ADD8E6"; 
    }
}

// Function to handle item clicks
function handleItemClick(event) {
    // Grabbing the items
    const items = document.querySelectorAll('.boxItem');
    // Removing 'selected' class from non-selected items
    items.forEach(item => item.classList.remove('selected')); 
    // Adding 'selected' class to the selected item
    event.target.classList.add('selected'); 

    updateSelectedItemColor();

    generateCode(); 
}

// Event listener to handle the item click
function initializeItemEventListeners() {
    const boxItems = document.querySelectorAll('.boxItem');
    boxItems.forEach(item => {
        item.addEventListener('click', handleItemClick);
    });
}
initializeItemEventListeners();

// Function to create child elements in preview upon user click
function addchildElements() {
    // Create a new paragraph element
    var newItem = document.createElement("p");

    // Get the current number of items in the preview box
    var itemCount = document.querySelectorAll("#preview-box p").length;

    // Set the text content of the new item
    newItem.textContent = "Cell " + (itemCount + 1);
    newItem.classList.add("boxItem");

    // Add the new item to the preview box
    document.getElementById("preview-box").appendChild(newItem);
    newItem.addEventListener('click', handleItemClick);
}

// Function to remove child elements upon user click
function removechildElements() {
    // Get the preview box element
    var previewBox = document.getElementById("preview-box");

    // Check if there are any child elements to remove
    if (previewBox.childNodes.length > 0) {
        // Remove the last child element
        previewBox.removeChild(previewBox.lastChild);
    }
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault(); 
    generateCode(); 
}
