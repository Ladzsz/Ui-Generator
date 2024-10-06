//Function to generate code

function generateButton() {
    //Getting inputs
    const text = document.getElementById('text').value;
    const bgColor = document.getElementById('bgColor').value;
    const textColor = document.getElementById('textColor').value;
    const padding = document.getElementById('padding').value;
    const border = document.getElementById('border').value;
    const borderRadius = document.getElementById('borderRadius').value;
    const fontSize = document.getElementById('fontSize').value;
    const fontWeight = document.getElementById('fontWeight').value;

    //creating preview button
    const previewButton = document.getElementById('preview-button');
    previewButton.textContent = text;
    previewButton.style.backgroundColor = bgColor;
    previewButton.style.color = textColor;
    previewButton.style.padding = padding;
    previewButton.style.border = border;
    previewButton.style.borderRadius = borderRadius;
    previewButton.style.fontSize = fontSize;
    previewButton.style.fontWeight = fontWeight;

    //displaying html and css code to user
    const htmlCode = `<button>${text}</button>`;
    const cssCode = `button {
    background-color: ${bgColor};
    color: ${textColor};
    padding: ${padding};
    border: ${border};
    border-radius: ${borderRadius};
    font-size: ${fontSize};
    font-weight: ${fontWeight}
    }`;

    // Updating the code display areas
    document.getElementById('generated-html').textContent = htmlCode;
    document.getElementById('generated-css').textContent = cssCode;
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault(); 
    generateButton(); 
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