import { useState, useEffect, useRef } from "react";

/**
 * Custom hook for managing tab rotation
 * @param {Array} tabs - Array of tab names
 * @param {number} interval - Rotation interval in milliseconds
 * @returns {Object} Active tab and setter function
 */
export const useTabRotation = (tabs, interval) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, interval);
  };

  useEffect(() => {
    if (!tabs || tabs.length === 0) return;

    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, [tabs, interval]);

  useEffect(() => {
    resetInterval();
  }, [activeTab]);

  return { activeTab, setActiveTab };
};
