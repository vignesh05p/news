// Fallback if requestIdleCallback is not supported
const getNetworkType = () => {
  if ('connection' in navigator) {
    return navigator.connection.effectiveType || 'unknown';
  }
  return 'unsupported';
};

export default getNetworkType;
