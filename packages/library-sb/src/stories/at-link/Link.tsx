import { Image } from '../at-image/Image';
import type { LinkProps } from '../../types/components-type-props';

export const Link = ({ media, ...props }: LinkProps) => {
  return (
    <a href={props.actionUrl} target={props.actionType}>
      {!media ? props?.label : <Image className="h-full" desktopAsset={media.desktopAsset} />}
    </a>
  );
};
