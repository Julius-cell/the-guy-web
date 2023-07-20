import { useEffect, useState } from 'react';

import { ArrowSmallDownIcon } from '../assets/icons/arrow-small-down';
import { Image } from '../at-image/Image';
import { Link } from '../at-link/Link';

import type { HeaderProps, LinkProps } from '../../types/components-type-props';
import type { ContentfulAsset } from '../../types/contentful-types';

const NavBar = (props: { categories?: LinkProps[] }) => {
  return (
    <nav className="h-[10%] px-20 py-10 grid items-center">
      <ul className="flex justify-end space-x-10">
        {props.categories?.map((categorie, index) => <Link key={index} {...categorie} />)}
      </ul>
    </nav>
  );
};

export const Header = ({ hero, categories }: HeaderProps) => {
  const [heroImage, setHeroImage] = useState<ContentfulAsset | undefined>(undefined);

  useEffect(() => {
    if (hero?.heroAssets?.length) {
      setHeroImage(hero?.heroAssets[0].desktopAsset);
    }
  }, [hero?.heroAssets]);

  return (
    <header className="h-screen">
      {/* Categories */}
      {categories?.length ? <NavBar categories={categories} /> : <></>}

      <div className={`relative grid grid-cols-4 ${categories?.length ? 'h-[90%]' : 'h-full'}`}>
        <div
          className={`grid grid-rows-3 justify-items-center col-start-2 md:mt-[10%] col-span-2 ${
            categories?.length ? 'mt-1/3 ' : 'mt-1/2'
          }`}
        >
          <div className="aspect-square">
            <Image className=" rounded-full " desktopAsset={heroImage} />
          </div>

          <div className="text-center mt-20 space-y-20">
            <h1 className="font-roboto font-semibold text-2xl">{hero?.heroTitle}</h1>
            <p className="font-cambo">{hero?.description}</p>
            <ArrowSmallDownIcon className="absolute bottom-20 h-20 w-20 right-[calc(50%_-_10px)]" />
          </div>
        </div>
      </div>
    </header>
  );
};
