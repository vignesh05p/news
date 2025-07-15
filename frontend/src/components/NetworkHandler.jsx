import { useEffect } from 'react';

const NetworkHandler = () => {
  useEffect(() => {
    if ('connection' in navigator) {
      const type = navigator.connection.effectiveType;
      if (type.includes('2g') || navigator.connection.saveData) {
        alert("You're on a slow or metered connection. Some content may be simplified.");
      }

      navigator.connection.addEventListener('change', () => {
        console.log('📶 Network type changed:', navigator.connection.effectiveType);
      });
    }
  }, []);

  return null;
};

export default NetworkHandler;
