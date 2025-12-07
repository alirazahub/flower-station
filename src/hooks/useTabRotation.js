import { useState, useEffect } from 'react';

/**
 * Custom hook for managing tab rotation
 * @param {Array} tabs - Array of tab names
 * @param {number} interval - Rotation interval in milliseconds
 * @returns {Object} Active tab and setter function
 */
export const useTabRotation = (tabs, interval) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    if (!tabs || tabs.length === 0) return;

    const rotationInterval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, interval);

    return () => clearInterval(rotationInterval);
  }, [tabs, interval]);

  return { activeTab, setActiveTab };
};
