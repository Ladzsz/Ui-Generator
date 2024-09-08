function generateLink() {
    // Getting inputs
    const text = document.getElementById('text').value;
    const href = document.getElementById('href').value;
    const bgColor = document.getElementById('bgColor').value;
    const textColor = document.getElementById('textColor').value;
    const border = document.getElementById('border').value;
    const borderRadius = document.getElementById('borderRadius').value;
    const fontSize = document.getElementById('fontSize').value;
    const fontWeight = document.getElementById('fontWeight').value;
    const noopenerChecked = document.getElementById('noopener').checked;

    // Creating the link preview
    const previewLink = document.createElement('a');
    previewLink.textContent = text;
    previewLink.href = href;
    previewLink.style.backgroundColor = bgColor;
    previewLink.style.color = textColor;
    previewLink.style.border = border;
    previewLink.style.borderRadius = borderRadius;
    previewLink.style.fontSize = fontSize;
    previewLink.style.fontWeight = fontWeight;

    // Additional attributes
    if (noopenerChecked) {
        previewLink.target = "_blank";
        previewLink.rel = "noopener";
    }

    // Add preview link to DOM
    const previewArea = document.getElementById('preview-link');
    previewArea.innerHTML = ''; // Clear any existing preview
    previewArea.appendChild(previewLink);

    // Generating HTML and CSS code
    const noopenerHTML = noopenerChecked ? ' target="_blank" rel="noopener"' : '';
    const htmlCode = `<a href="${href}"${noopenerHTML}>${text}</a>`;
    const cssCode = `a {
    background-color: ${bgColor};
    color: ${textColor};
    border: ${border};
    border-radius: ${borderRadius};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    text-decoration: none;
    display: inline-block;
    }`;

    // Updating the code display areas
    document.getElementById('generated-html').textContent = htmlCode;
    document.getElementById('generated-css').textContent = cssCode;
}

// Handle form submission
function handleLinkSubmit(event) {
    event.preventDefault(); 
    generateLink(); 
}
