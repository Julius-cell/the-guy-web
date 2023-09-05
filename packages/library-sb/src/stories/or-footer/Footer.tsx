import { Image } from '../at-image/Image';
import { Link } from '../at-link/Link';
import type { FooterProps } from '../../types/components-type-props';

export const Footer = ({ rrss = [] }: FooterProps) => {
  return (
    <footer className="grid grid-cols-4 col-span-full h-full">
      <ul className="col-start-2 col-span-2 flex gap-x-10 h-3/5 self-center justify-center">
        {rrss.map((elem, i) => (
          <Link key={i} {...elem}>
            <Image className="h-20" desktopAsset={elem.image?.desktopAsset} />
          </Link>
        ))}
      </ul>
    </footer>
  );
};
