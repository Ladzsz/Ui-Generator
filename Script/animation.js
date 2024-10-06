// Function to generate animation
function generateAnimation() {
    // Getting inputs
    const animationType = document.getElementById('animationType').value;
    const duration = document.getElementById('duration').value + 's';
    const timingFunction = document.getElementById('timingFunction').value;
    const delay = document.getElementById('delay').value + 's';
    const iterationCount = document.getElementById('iterationCount').value;
    const direction = document.getElementById('direction').value;

    //Getting animation button to style
    const animatedButton = document.getElementById('animated-button');
    
    // Mapping animation types to CSS keyframes
    let keyframes;

    // Switch statement to control keyframes for each
    //animation type
    switch (animationType) {
        case 'bounce':
            keyframes = `
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
            `;
            break;
        case 'fade':
            keyframes = `
                @keyframes fade {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
            `;
            break;
        case 'slide':
            keyframes = `
                @keyframes slide {
                    from { transform: translateX(0); }
                    to { transform: translateX(100px); }
                }
            `;
            break;
        case 'rotate':
            keyframes = `
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `;
            break;
        default:
            keyframes = '';
    }

    // Applying the animation styles to the button
    animatedButton.style.animationName = animationType;
    animatedButton.style.animationDuration = duration;
    animatedButton.style.animationTimingFunction = timingFunction;
    animatedButton.style.animationDelay = delay;
    animatedButton.style.animationIterationCount = iterationCount;
    animatedButton.style.animationDirection = direction;

    // Inserting keyframes into a style element in the document
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    // Resetting the animation
    animatedButton.style.animation = 'none'; 

    // Trigger reflow to restart the animation
    void animatedButton.offsetWidth; 
    animatedButton.style.animation = `${animationType} ${duration} ${timingFunction} ${delay} ${iterationCount} ${direction}`; 

    // Displaying generated HTML and CSS code to the user
    const htmlCode = `<button class="animated-button">Animate Me</button>`;
    const cssCode = `.animated-button {
        animation-name: ${animationType};
        animation-duration: ${duration};
        animation-timing-function: ${timingFunction};
        animation-delay: ${delay};
        animation-iteration-count: ${iterationCount};
        animation-direction: ${direction};
    }

    ${keyframes}`;

    // Updating the code display areas
    document.getElementById('generated-html').textContent = htmlCode;
    document.getElementById('generated-css').textContent = cssCode;
}

// Handle form submission
function handleAnimationSubmit(event) {
    event.preventDefault(); 
    generateAnimation(); 
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