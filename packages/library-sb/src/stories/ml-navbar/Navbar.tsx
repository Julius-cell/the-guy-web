import { Image } from '../at-image/Image';
import { Link } from '../at-link/Link';

import type { LinkProps } from '../../types/components-type-props';
import type { MediaWrapperProps } from '../../types/contentful-types';

export const NavBar = (props: { categories?: LinkProps[]; languajes?: MediaWrapperProps[] }) => {
  return (
    <nav className="h-20 my-10  col-span-full grid grid-cols-4 items-center">
      <div className="h-[inherit] flex w-fit bg-white rounded-lg border-2">
        {props.languajes?.map((languaje, index) => {
          return (
            <Image
              key={index}
              desktopAsset={languaje.desktopAsset}
              className="h-full ease-in duration-200 hover:scale-125"
            />
          );
        })}
      </div>
      <ul className="h-[inherit] col-start-2">
        {props.categories?.map((categorie, index) => <Link key={index} {...categorie} />)}
      </ul>
    </nav>
  );
};
