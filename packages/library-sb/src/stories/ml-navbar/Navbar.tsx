import { useContext } from 'react';
import { LanguageContext } from '../../utils/LanguageContext';
import { Image } from '../at-image/Image';
import { Link } from '../at-link/Link';

import type { LinkProps } from '../../types/components-type-props';
import type { MediaWrapperProps } from '../../types/contentful-types';

interface NavBarProps {
  categories?: LinkProps[];
  languajes?: MediaWrapperProps[];
}

export const NavBar = ({ categories, languajes }: NavBarProps) => {
  const { setLanguage } = useContext(LanguageContext);

  const handleClick = (index: number) => {
    if (!index) {
      setLanguage('ESP');
      return;
    }
    setLanguage('ENG');
  };

  return (
    <nav className="py-10 col-span-full grid grid-cols-4 items-center">
      <div>
        <p>Julio Cid</p>
      </div>
      <ul className="hidden md:block col-start-2 col-span-2 space-x-20 justify-self-center">
        {categories?.map((categorie, index) => <Link key={index} {...categorie} />)}
      </ul>
      <div className="col-start-4 flex w-fit bg-white rounded-lg border-2 justify-self-end">
        {languajes?.map((languaje, index) => {
          return (
            <div aria-hidden="true" key={index} onClick={() => handleClick(index)} onKeyDown={() => handleClick(index)}>
              <Image
                desktopAsset={languaje.desktopAsset}
                className="h-20 ease-in duration-200 hover:scale-125"
                altText={languaje.altText}
                descriptionAsset={languaje.descriptionAsset}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
};
