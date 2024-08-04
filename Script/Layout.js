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
    previewBox.style.gap = gap + 'px';

    // Generating HTML and CSS code
    //grabbing all p elements in preview box
    const items = previewBox.querySelectorAll('p');

    //setting up dynamic html code
    let htmlCode = '<div id="preview-box">\n';
    items.forEach((item, index) => {
        htmlCode += `<p>Cell ${index + 1}</p>\n`;
    });
    htmlCode += '</div>';

    const cssCode = `#preview-box {
    display: ${display};
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};
    gap: ${gap}px;
    }`;

    // Displaying the generated code
    document.getElementById('generated-html').textContent = htmlCode;
    document.getElementById('generated-css').textContent = cssCode;
}

//function to create child elements in preview upon user click
function addchildElements() {
    // Create a new paragraph element
    var newItem = document.createElement("p");

    // Get the current number of items in the preview box
    var itemCount = document.querySelectorAll("#preview-box p").length;

    // Set the text content of the new item
    newItem.textContent = "Cell " + (itemCount + 1);

    // Add the new item to the preview box
    document.getElementById("preview-box").appendChild(newItem);
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

