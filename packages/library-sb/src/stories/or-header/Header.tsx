import { useEffect, useState } from 'react';

import { Image } from '../at-image/Image';
import { Link } from '../at-link/Link';

import type { HeaderProps, LinkProps } from '../../types/components-type-props';
import type { ContentfulAsset } from '../../types/contentful-types';

const NavBar = (props: { categories?: LinkProps[] }) => {
  return (
    <nav className="h-[5%] grid grid-cols-2 w-full items-center absolute">
      <div className="flex">
        <p>ENG</p>
        <p>ESP</p>
      </div>
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
    <header className="px-20 w-full">
      <div className="relative">
        <NavBar categories={categories} />

        <div className="grid auto-rows-max bg-header-shape-bg bg-no-repeat bg-10">
          <Image className="rounded-50 m-auto h-3/4" desktopAsset={heroImage} />

          <div className="w-max grid grid-cols-2 h-fit">
            <div>
              <h2>{hero?.heroTitle}</h2>
              <p>{hero?.description}</p>
            </div>
            <div className="m-auto">CTA</div>
          </div>
        </div>
      </div>
    </header>
  );
};
