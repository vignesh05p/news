import { useState } from 'react';

const LazyImage = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const fallbackImage = "/sample.jpg"; // local fallback

  const handleError = () => {
    setImgSrc(fallbackImage);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={handleError}
    />
  );
};

export default LazyImage;
