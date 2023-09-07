import { Image } from '../at-image/Image';
import { LinkAnchor } from '../at-link/Link';
import type { FooterProps } from '../../types/components-type-props';

export const Footer = ({ rrss = [] }: FooterProps) => {
  return (
    <footer className="grid grid-cols-4 col-span-full h-full py-20">
      <ul className="col-start-2 col-span-2 flex gap-x-10 h-3/5 self-center justify-center">
        {rrss.map((elem, i) => (
          <LinkAnchor key={i} {...elem}>
            <Image className="h-20" desktopAsset={elem.image?.desktopAsset} />
          </LinkAnchor>
        ))}
      </ul>
    </footer>
  );
};
