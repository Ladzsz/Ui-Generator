function generateImage() {
    // Getting inputs
    const imageUrl = document.getElementById('imageUrl').value;
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const border = document.getElementById('border').value;
    const borderRadius = document.getElementById('borderRadius').value;
    const boxShadow = document.getElementById('boxShadow').value;
    const opacity = document.getElementById('opacity').value;

    // Creating preview image
    const previewImage = document.getElementById('preview-image');
    previewImage.src = imageUrl;
    previewImage.style.width = width;
    previewImage.style.height = height;
    previewImage.style.border = border;
    previewImage.style.borderRadius = borderRadius;
    previewImage.style.boxShadow = boxShadow;
    previewImage.style.opacity = opacity;

    // Displaying HTML and CSS code to the user
    const htmlCode = `<img src="${imageUrl}" alt="Generated Image">`;
    const cssCode = `img {
    width: ${width};
    height: ${height};
    border: ${border};
    border-radius: ${borderRadius};
    box-shadow: ${boxShadow};
    opacity: ${opacity};
    }`;

    // Updating the code display areas
    document.getElementById('generated-html').textContent = htmlCode;
    document.getElementById('generated-css').textContent = cssCode;
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault(); 
    generateImage(); 
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