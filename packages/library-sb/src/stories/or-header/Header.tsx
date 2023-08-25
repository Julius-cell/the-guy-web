import { Image } from '../at-image/Image';
import { Link } from '../at-link/Link';
import { NavBar } from '../ml-navbar/Navbar';

import type { HeaderProps } from '../../types/components-type-props';

export const Header = ({ title, subTitle, categories, languajes, rrss = [] }: HeaderProps) => {
  return (
    <header className="col-span-full grid grid-cols-4 h-screen grid-rows-[auto_1fr]">
      <NavBar categories={categories} languajes={languajes} />
      <div className="border-t border-t-black col-span-full flex flex-col justify-center text-center gap-20">
        <h1>
          <span>{'<h1>'}</span>
          {title}
          <span>{'</h1>'}</span>
        </h1>
        <h2>{subTitle}</h2>
      </div>
      <div className="col-span-full text-center pb-1/10 flex flex-col justify-end">
        <p>Get in touch with me</p>
        <ul className="col-start-2 col-span-2 flex gap-x-10 h-1/5 justify-center">
          {rrss.map((elem, i) => (
            <Link key={i} {...elem}>
              <Image className="h-20" desktopAsset={elem.image?.desktopAsset} />
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};
