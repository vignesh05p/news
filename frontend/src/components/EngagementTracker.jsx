import { useRef, useEffect } from 'react';
import getNetworkType from '../utils/idleCallback';

const EngagementTracker = ({ sectionId }) => {
  const sectionRef = useRef(null);
  const viewStart = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        viewStart.current = Date.now();
      } else {
        if (viewStart.current) {
          const viewTime = Date.now() - viewStart.current;
          const networkType = getNetworkType();

          requestIdleCallback(() => {
            fetch('http://localhost:3001/api/engagement', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                sectionId,
                viewTime,
                timestamp: new Date().toISOString(),
                networkType,
              }),
            });
          });

          viewStart.current = null;
        }
      }
    }, { threshold: 0.6 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return <div ref={sectionRef} />;
};

export default EngagementTracker;
