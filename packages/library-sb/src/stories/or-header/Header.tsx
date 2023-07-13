import { useEffect, useState } from 'react';

import { ArrowSmallDownIcon } from '../assets/icons/arrow-small-down';
import { Image } from '../at-image/Image';
import { Link } from '../at-link/Link';

import type { HeaderProps } from '../../../types/components-type-props';
import type { ContentfulAsset } from '../../../types/contentful-types';

export const Header = ({ hero, categories }: HeaderProps) => {
  const [heroImage, setHeroImage] = useState<ContentfulAsset | undefined>(undefined);

  useEffect(() => {
    if (hero?.heroAssets?.length) {
      setHeroImage(hero?.heroAssets[0].desktopAsset);
    }
  }, []);

  return (
    <header className="h-screen">
      {/* Categories */}
      <nav className="h-[10%] px-20 py-10">
        <ul className="flex justify-end space-x-10">
          {categories?.map((categorie, index) => (
            <Link key={index} {...categorie} />
          ))}
        </ul>
      </nav>

      <div className="relative h-[90%] grid grid-cols-4">
        <div className="col-start-2 col-span-2">
          <Image className="aspect-square rounded-full " desktopAsset={heroImage} />

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
