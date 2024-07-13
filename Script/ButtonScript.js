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

    //creating preview button
    const previewButton = document.getElementById('preview-button');
    previewButton.textContent = text;
    previewButton.style.backgroundColor = bgColor;
    previewButton.style.color = textColor;
    previewButton.style.padding = padding;
    previewButton.style.border = border;
    previewButton.style.borderRadius = borderRadius;
    previewButton.style.fontSize = fontSize;

    //displaying html and css code to user
    const htmlCode = `<button>${text}</button>`;
    const cssCode = `button {
    background-color: ${bgColor};
    color: ${textColor};
    padding: ${padding};
    border: ${border};
    border-radius: ${borderRadius};
    font-size: ${fontSize};
    }`;

    document.getElementById('generated-html').textContent = htmlCode;
    document.getElementById('generated-css').textContent = cssCode;
}