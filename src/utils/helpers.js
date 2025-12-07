/**
 * Gets the text color based on button background color
 * @param {string} btnColor - The button background color
 * @returns {string} The appropriate text color
 */
export const getButtonTextColor = (btnColor) => {
  return btnColor === '#fff' ? '#222' : '#fff';
};

/**
 * Debounces a function call
 * @param {Function} func - The function to debounce
 * @param {number} wait - The debounce delay in milliseconds
 * @returns {Function} The debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Validates if a string is a valid hex color
 * @param {string} color - The color string to validate
 * @returns {boolean} Whether the color is a valid hex color
 */
export const isValidHexColor = (color) => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
};
