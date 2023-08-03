import { Image } from '../at-image/Image';
import { Link } from '../at-link/Link';

import type { LinkProps, MediaWrapperProps } from 'src/main';

export const NavBar = (props: { categories?: LinkProps[]; languajes?: MediaWrapperProps[] }) => {
  return (
    <nav className="h-[5%] flex w-full absolute justify-between">
      <div className="h-full flex bg-white rounded-lg border-2">
        {props.languajes?.map((languaje, index) => {
          // const handleClick = (event: any) => {
          //   //Add changing languajes function
          // };
          return (
            <div key={index}>
              {/* <div onClick={(event) => handleClick(event)}> */}
              <Image desktopAsset={languaje.desktopAsset} className="h-full ease-in duration-200 hover:scale-125" />
            </div>
          );
        })}
      </div>
      <ul className="flex justify-end space-x-10">
        {props.categories?.map((categorie, index) => <Link key={index} {...categorie} />)}
      </ul>
    </nav>
  );
};
