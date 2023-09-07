import { useContext } from 'react';
import { LanguageContext } from '../../main';
import { Image } from '../at-image/Image';
import { LinkAnchor } from '../at-link/Link';

import type { HeaderProps } from '../../types/components-type-props';

export const Header = ({ title, subTitleEng, subTitleEsp, rrss = [], children }: HeaderProps) => {
  const { language } = useContext(LanguageContext);

  return (
    <header className="col-span-full grid grid-cols-4 h-screen grid-rows-[auto_1fr]">
      {children}
      <div className="border-t border-t-black col-span-full flex flex-col justify-center text-center gap-20">
        <h1>
          <span>{'<h1>'}</span>
          {title}
          <span>{'</h1>'}</span>
        </h1>
        <h2>{language === 'ENG' ? subTitleEng : subTitleEsp}</h2>
      </div>
      <div className="col-span-full text-center pb-1/10 flex flex-col justify-end">
        <p>{language === 'ENG' ? 'Get in touch with me' : 'Contáctame'}</p>
        <ul className="col-start-2 col-span-2 flex gap-x-10 h-1/5 justify-center">
          {rrss.map((elem, i) => (
            <LinkAnchor key={i} {...elem}>
              <Image className="h-20" desktopAsset={elem.image?.desktopAsset} />
            </LinkAnchor>
          ))}
        </ul>
      </div>
    </header>
  );
};
