import defaultImg from '../../../public/default-img.jpeg';
import type { MediaWrapperProps } from 'types/contentful-types';

export const Image = ({ altText, ...props }: MediaWrapperProps) => {
  const urlImage = props.desktopAsset?.file?.url ? props.desktopAsset.file?.url : defaultImg;

  return <img className="rounded-full" src={urlImage} alt={altText} />;
};
