/**
 * Accepts one value and checks if the provided value is null or undefined.
 * If it is null or undefined, calls showErrorBox vunction and returns true,
 * else returns false.
 * @param {*} value - The value to check.
 * @returns {boolean} True if value is null or undefined, otherwise false.
 */
function checkForNull(value) {
  if (value === null || value === undefined) {
    showErrorBox("No value entered, please enter a numeric value");
    return true;
  }
  return false;
}

/**
 * Validates if the provided value is numeric and finite.  If it is, 
 * returns true, else calls addClassToElement and showErrorBox functions 
 * which will highlight to user that their input is invalid.
 * @param {*} value - The value to validate.
 * @param {HTMLElement} element - The input element to mark as error.
 * @returns {boolean} True if value is numeric and finite, otherwise false.
 */
function validateNumeric(value, element) {
  if (!isNaN(value) && isFinite(value)) {
    return true;
  } else {
    addClassToElement(element);
    showErrorBox("Enter a numeric value");
    return false;
  }
}

/**
 * Generic function used to add the CSS "error" class to the given 
 * element.
 * @param {HTMLElement} element - The element to add the error class to.
 */
function addClassToElement(element) {
  if (element && element.classList) {
    element.classList.add("error");
  }
}

/**
 * Accepts single parameter which is intended to be text to be displayed 
 * in a temporaily displayed error box.  It will display for 4 seconds then 
 * fade out.
 * @param {string} message - The message to display in the error box.
 */
function showErrorBox(message) {
  const box = document.createElement('div');
  box.textContent = message;
  box.style.position = 'fixed';
  box.style.top = '20px';
  box.style.left = '50%';
  box.style.transform = 'translateX(-50%)';
  box.style.background = '#333';
  box.style.color = '#fff';
  box.style.padding = '16px 32px';
  box.style.borderRadius = '8px';
  box.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
  box.style.opacity = '1';
  box.style.transition = 'opacity 1s';

  document.body.appendChild(box);

  // Fade out after 4 seconds then remove from DOM
  setTimeout(() => {
    box.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(box);
    }, 1000); // Wait for fade out transition
  }, 4000);
}
/**
 * Enables dark mode by default on page load
 */
document.body.classList.add('dark-mode');
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.textContent = 'Light Mode';
darkModeBtn.style.background = '#fff';
darkModeBtn.style.color = '#000';

/**
 * Dark mode toggle on button click
 */
darkModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = 'Light Mode';
        darkModeBtn.style.background = '#fff';
        darkModeBtn.style.color = '#000';
    } else {
        darkModeBtn.textContent = 'Dark Mode';
        darkModeBtn.style.background = '#333';
        darkModeBtn.style.color = '#fff';
    }
});