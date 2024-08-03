function generateCode() {
    // Grabbing values from dropdowns
    const display = document.getElementById('display').value;
    const flexDirection = document.getElementById('flex-direction').value;
    const flexWrap = document.getElementById('flex-wrap').value;
    const justifyContent = document.getElementById('justify-content').value;
    const alignItems = document.getElementById('align-items').value;
    const alignContent = document.getElementById('align-content').value;

    // Displaying the preview styles
    const previewBox = document.getElementById('preview-box');
    previewBox.style.display = display;
    previewBox.style.flexDirection = flexDirection;
    previewBox.style.flexWrap = flexWrap;
    previewBox.style.justifyContent = justifyContent;
    previewBox.style.alignItems = alignItems;
    previewBox.style.alignContent = alignContent;

    // Generating HTML and CSS code
    const htmlCode = `<div id="preview-box">Preview Box</div>`;

    const cssCode = `#preview-box {
    display: ${display};
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};
    }`;

    // Displaying the generated code
    document.getElementById('generated-html').textContent = htmlCode;
    document.getElementById('generated-css').textContent = cssCode;
}
