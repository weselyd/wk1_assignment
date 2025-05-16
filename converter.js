// Temperature conversion logic
function convertTemperature(direction) {
    const celsiusInput = document.getElementById('celsiusInput');  // Retrives value from Celsius input field
    const fahrenheitInput = document.getElementById('fahrenheitInput');  // Retrives value from Fahrenheit input field
    celsiusInput.classList.remove('error');  // Clears error class from element if it exists
    fahrenheitInput.classList.remove('error');  // Clears error class from element if it exists
    let value, result;  // Declare variables for value and result
    if (direction === 'CtoF') {  // If converting from Celsius to Fahrenheit, starts here
        value = celsiusInput.value;
        if (value.trim() === "") {  // Checks if celsius field is empty.  If it is, add error class.
            addClassToElement(celsiusInput);
            showErrorBox("No value entered, please enter a numeric value");
            fahrenheitInput.value = "";
            return;
        }
        if (!validateNumeric(value, celsiusInput)) {
            fahrenheitInput.value = "";  // Checks if farenheit field is empty.  If it is, add error class.
            return;
        }
        // Celsius to Fahrenheit calculation
        result = parseFloat(value) * 9 / 5 + 32;
        fahrenheitInput.value = result.toFixed(2);
    } else {  // If not converting from Celsius to Fahrenheit, then assume we are converting Fahrenheit to 
              // Celsius and follow similar steps as CtoF
        value = fahrenheitInput.value;
        if (value.trim() === "") {
            addClassToElement(fahrenheitInput);
            showErrorBox("No value entered, please enter a numeric value");
            celsiusInput.value = "";
            return;
        }
        if (!validateNumeric(value, fahrenheitInput)) {
            celsiusInput.value = "";
            return;
        }
        // Fahrenheit to Celsius calculation
        result = (parseFloat(value) - 32) * 5 / 9;
        celsiusInput.value = result.toFixed(2);
    }
}

// Distance conversion logic, similar functionality to temperature conversion
function convertDistance(direction) {
    const kmInput = document.getElementById('kmInput');
    const miInput = document.getElementById('miInput');
    kmInput.classList.remove('error');
    miInput.classList.remove('error');
    let value, result;
    if (direction === 'kmToMi') {
        value = kmInput.value;
        if (value.trim() === "") {
            addClassToElement(kmInput);
            showErrorBox("No value entered, please enter a numeric value");
            miInput.value = "";
            return;
        }
        if (!validateNumeric(value, kmInput)) {
            miInput.value = "";
            return;
        }
        // Kilometers to Miles calculation
        result = parseFloat(value) * 0.621371;
        miInput.value = result.toFixed(2);
    } else {
        value = miInput.value;
        if (value.trim() === "") {
            addClassToElement(miInput);
            showErrorBox("No value entered, please enter a numeric value");
            kmInput.value = "";
            return;
        }
        if (!validateNumeric(value, miInput)) {
            kmInput.value = "";
            return;
        }
        // Miles to Kilometers calculation
        result = parseFloat(value) / 0.621371;
        kmInput.value = result.toFixed(2);
    }
}

// Weight conversion logic, similar functionality to temperature conversion
function convertWeight(direction) {
    const kgInput = document.getElementById('kgInput');
    const lbInput = document.getElementById('lbInput');
    kgInput.classList.remove('error');
    lbInput.classList.remove('error');
    let value, result;
    if (direction === 'kgToLb') {
        value = kgInput.value;
        if (value.trim() === "") {
            addClassToElement(kgInput);
            showErrorBox("No value entered, please enter a numeric value");
            lbInput.value = "";
            return;
        }
        if (!validateNumeric(value, kgInput)) {
            lbInput.value = "";
            return;
        }
        // Kilograms to Pounds calculation
        result = parseFloat(value) * 2.20462;
        lbInput.value = result.toFixed(2);
    } else {
        value = lbInput.value;
        if (value.trim() === "") {
            addClassToElement(lbInput);
            showErrorBox("No value entered, please enter a numeric value");
            kgInput.value = "";
            return;
        }
        if (!validateNumeric(value, lbInput)) {
            kgInput.value = "";
            return;
        }
        // Pounds to Kilograms calculation
        result = parseFloat(value) / 2.20462;
        kgInput.value = result.toFixed(2);
    }
}

// Attach functions to the global scope
window.convertTemperature = convertTemperature;
window.convertDistance = convertDistance;
window.convertWeight = convertWeight;
