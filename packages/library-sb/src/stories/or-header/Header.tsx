import { useEffect, useState } from 'react';

import { Button } from '../at-button/Button';
import { Image } from '../at-image/Image';
import { Link } from '../at-link/Link';

import type { HeaderProps, LinkProps } from '../../types/components-type-props';
import type { ContentfulAsset, MediaWrapperProps } from '../../types/contentful-types';

const NavBar = (props: { categories?: LinkProps[]; languajes?: MediaWrapperProps[] }) => {
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

export const Header = ({ hero, categories, languajes = [] }: HeaderProps) => {
  const [heroImage, setHeroImage] = useState<ContentfulAsset | undefined>(undefined);

  useEffect(() => {
    if (hero?.heroAssets?.length) {
      setHeroImage(hero?.heroAssets[0].desktopAsset);
    }
  }, [hero?.heroAssets]);

  return (
    <header className="px-20 w-full">
      <div className="relative">
        <NavBar categories={categories} languajes={languajes} />

        <div className="grid auto-rows-max bg-header-shape-bg bg-no-repeat bg-10">
          <Image className="rounded-50 m-auto h-3/4" desktopAsset={heroImage} />

          <div className="w-max grid grid-cols-2 h-fit">
            <div>
              <h2>{hero?.heroTitle}</h2>
              <p>{hero?.description}</p>
            </div>
            <div className="w-max self-center justify-self-end">
              <Button label="Download CV" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
