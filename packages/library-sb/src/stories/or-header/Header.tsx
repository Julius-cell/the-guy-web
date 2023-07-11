import { useEffect, useState } from 'react';

import { Image } from '../at-image/Image';
import { Link } from '../at-link/Link';

import type { ContentfulAsset, MediaWrapperProps } from '../../../types/contentful-types';
import type { LinkProps } from '../at-link/Link';

interface HeroSectionProps {
  title?: string;
  heroTitle?: string;
  description?: string;
  heroAssets?: MediaWrapperProps[];
}

interface HeaderProps {
  title?: string;
  categories?: LinkProps[];
  hero?: HeroSectionProps;
}

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
      <div className="h-[90%] flex justify-center items-center">
        <Image desktopAsset={heroImage} />
      </div>
    </header>
  );
};
