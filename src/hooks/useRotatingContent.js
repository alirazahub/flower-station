import { useState, useEffect } from 'react';

/**
 * Custom hook for rotating through a list of items
 * @param {Array} items - Array of items to rotate through
 * @param {number} interval - Rotation interval in milliseconds
 * @param {number} fadeDuration - Fade transition duration in milliseconds
 * @returns {Object} Current index, current item, and visibility state
 */
export const useRotatingContent = (items, interval, fadeDuration = 500) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!items || items.length === 0) return;

    const intervalId = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setIsVisible(true);
      }, fadeDuration);
    }, interval);

    return () => clearInterval(intervalId);
  }, [items, interval, fadeDuration]);

  return {
    currentIndex,
    currentItem: items[currentIndex],
    isVisible
  };
};
