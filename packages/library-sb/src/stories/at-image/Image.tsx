import defaultImg from '../../../public/default-img.jpeg';
import type { MediaWrapperProps } from 'types/contentful-types';

interface ImageProps extends MediaWrapperProps {
  className?: string;
}

export const Image = ({ altText, className, ...props }: ImageProps) => {
  const urlImage = props.desktopAsset?.file?.url ? props.desktopAsset.file?.url : defaultImg;

  return <img className={className} src={urlImage} alt={altText} />;
};
