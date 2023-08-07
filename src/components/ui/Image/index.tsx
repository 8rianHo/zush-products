import { FC } from "react";

// switch to Next/Image if necessary
const Image: FC<Partial<HTMLImageElement>> = ({ alt, src, className }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={className} alt={alt} src={src} />;
};

export default Image;
