//function to generate code upon user click
function generateCode() {

    // Grabbing values from dropdowns
    const display = document.getElementById('display').value;
    const flexDirection = document.getElementById('flex-direction').value;
    const flexWrap = document.getElementById('flex-wrap').value;
    const justifyContent = document.getElementById('justify-content').value;
    const alignItems = document.getElementById('align-items').value;
    const alignContent = document.getElementById('align-content').value;
    const gap = document.getElementById('gap').value;

    // Displaying the preview styles
    const previewBox = document.getElementById('preview-box');
    previewBox.style.display = display;
    previewBox.style.flexDirection = flexDirection;
    previewBox.style.flexWrap = flexWrap;
    previewBox.style.justifyContent = justifyContent;
    previewBox.style.alignItems = alignItems;
    previewBox.style.alignContent = alignContent;
    previewBox.style.gap = gap;

    // Grabbing values from item properties form
    const order = document.getElementById('order').value;
    const flexGrow = document.getElementById('flex-grow').value;
    const flexShrink = document.getElementById('flex-shrink').value;
    const flexBasis = document.getElementById('flex-basis').value;
    const alignSelf = document.getElementById('align-self').value;
    const margin = document.getElementById('margin').value;

    // Get the selected item
    const selectedItem = document.querySelector('.boxItem.selected');

    //add styles to the selcted item
    if (selectedItem) {
        selectedItem.style.order = order;
        selectedItem.style.flexGrow = flexGrow;
        selectedItem.style.flexShrink = flexShrink;
        selectedItem.style.flexBasis = flexBasis;
        selectedItem.style.alignSelf = alignSelf;
        selectedItem.style.margin = margin; 
    }

    // Generating HTML and CSS code
    //grabbing all p elements in preview box
    const items = previewBox.querySelectorAll('p');

    //setting up dynamic html code
    let htmlCode = '<div id="preview-box">\n';
    items.forEach((item, index) => {
        htmlCode += `<p class="Cell-${index + 1}">Cell ${index + 1}</p>\n`;
    });
    htmlCode += '</div>';

    //setting up the css code for the container styles
    const cssCode = `#preview-box {
    display: ${display};
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};
    gap: ${gap};
    }`;

   // Generating CSS for each child element
   let itemCSScode = '';
   items.forEach((item, index) => {
       const order = item.style.order || '0';
       const flexGrow = item.style.flexGrow || '0';
       const flexShrink = item.style.flexShrink || '1';
       const flexBasis = item.style.flexBasis || 'auto';
       const alignSelf = item.style.alignSelf || 'auto';
       const margin = item.style.margin || '0px';

       // Generate CSS only if the styles differ from the defaults
       if (order !== '0' || flexGrow !== '0' || flexShrink !== '1' || flexBasis !== 'auto' || alignSelf !== 'auto' || margin !== '0px') {
           itemCSScode += `.Cell-${index + 1} {\n` +
               `  order: ${order};\n` +
               `  flex-grow: ${flexGrow};\n` +
               `  flex-shrink: ${flexShrink};\n` +
               `  flex-basis: ${flexBasis};\n` +
               `  align-self: ${alignSelf};\n` +
               `  margin: ${margin};\n` +
               `}\n\n\n\n`;
       }
   });

    // Displaying the generated code
    document.getElementById('generated-html').textContent = htmlCode;
    document.getElementById('generated-css').textContent = cssCode;
    document.getElementById('item-css').textContent = itemCSScode
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
    //grabbing the items
    const items = document.querySelectorAll('.boxItem');
    //removing item class for non selected items
    items.forEach(item => item.classList.remove('selected')); 
    ///adding class to the selcted item
    event.target.classList.add('selected'); 

    updateSelectedItemColor();

    generateCode(); 
}

//event listener to handle the item click
const boxItems = document.querySelectorAll('.boxItem');
boxItems.forEach(item => {
    item.addEventListener('click', handleItemClick);
});

//function to create child elements in preview upon user click
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

//function to remove child elements upon user click
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