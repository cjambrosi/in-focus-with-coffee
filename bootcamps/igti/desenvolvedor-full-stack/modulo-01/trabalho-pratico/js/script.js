window.addEventListener('load', start);

let inputsText = {
    redInput: null,
    greenInput: null,
    blueInput: null
};

let radioInputs = {
    redIRadio: null,
    greenRadio: null,
    blueRadio: null
};

let rgb = [];

function start() {
    radioInputs = {
        redIRadio: document.querySelector('#redRange'),
        greenRadio: document.querySelector('#greeRange'),
        blueRadio: document.querySelector('#blueRange')
    };

    inputsText = {
        redInput: document.querySelector('#redInputValue'),
        greenInput: document.querySelector('#greenInputValue'),
        blueInput: document.querySelector('#blueInputValue')
    };

    rgb = [radioInputs.redIRadio.value, radioInputs.greenRadio.value, radioInputs.blueRadio.value];
    
    inputsText.redInput.value = radioInputs.redIRadio.value;
    inputsText.greenInput.value = radioInputs.greenRadio.value;
    inputsText.blueInput.value = radioInputs.blueRadio.value;

    setRGB();
    redRange();
    greeRange();
    blueRange();
}

const setRGB = () => {
    let gradient = document.querySelector('#gradient');
    gradient.style.backgroundColor = `rgb(${rgb})`;
    console.log(gradient.style.backgroundColor);
}


const redRange = () => {
    const setRangeValue = () => {
        rgb[0] = range.value;
        inputsText.redInput.value = range.value;
        setRGB();
        console.log(range.value);
    }

    let range = document.querySelector('#redRange');
    range.addEventListener('input', setRangeValue);
}

const greeRange = () => {
    const setRangeValue = () => {
        rgb[1] = range.value;
        inputsText.greenInput.value = range.value;
        setRGB();
        console.log(range.value);
    }

    let range = document.querySelector('#greeRange');
    range.addEventListener('input', setRangeValue);
}

const blueRange = () => {
    const setRangeValue = () => {
        rgb[2] = range.value;
        inputsText.blueInput.value = range.value;
        setRGB();
        console.log(range.value);
    }

    let range = document.querySelector('#blueRange');
    range.addEventListener('input', setRangeValue);
}

