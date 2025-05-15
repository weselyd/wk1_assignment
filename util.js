function checkForNull(value) {
  if (value === null || value === undefined) {
    showErrorBox("No value entered, please enter a numeric value");
    return true;
  }
  return false;
}
function validateNumeric(value, element) {
  if (!isNaN(value) && isFinite(value)) {
    return true;
  } else {
    addClassToElement(element);
    showErrorBox("Enter a numeric value");
    return false;
  }
}
function addClassToElement(element) {
  if (element && element.classList) {
    element.classList.add("error");
  }
}
function showErrorBox(message) {  // Create the box element
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
// Enable dark mode by default on page load
document.body.classList.add('dark-mode');
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.textContent = 'Light Mode';
darkModeBtn.style.background = '#fff';
darkModeBtn.style.color = '#000';

// Dark mode toggle
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