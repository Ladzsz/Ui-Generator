function generateCode() {

    //grabbing values of dropdowns
    const display = document.getElementById('display').value;
    const flexDirection = document.getElementById('flex-direction').value;
    const flexWrap = document.getElementById('flex-wrap').value;
    const justifyContent = document.getElementById('justify-content').value;
    const alignItems = document.getElementById('align-items').value;
    const alignContent = document.getElementById('align-content').value;

    // Displaying the previews styles
        const cssCode = `
    .container {
    display: ${display};
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};
    }
    `;

    // Update CSS preview
    const previewBox = document.getElementById('preview-box');
    previewBox.style.display = display;
    previewBox.style.flexDirection = flexDirection;
    previewBox.style.flexWrap = flexWrap;
    previewBox.style.justifyContent = justifyContent;
    previewBox.style.alignItems = alignItems;
    previewBox.style.alignContent = alignContent;

    // Display generated CSS code
    document.getElementById('output').textContent = cssCode;
}