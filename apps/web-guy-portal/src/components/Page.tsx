import { Image } from 'library-sb';
import blackAndWhite from '/public/black-and-white.jpeg';

const Page = () => {
  return (
    <div>
      <Image image={blackAndWhite} altText="the-web-guy" />
      <h1>the-web-guy</h1>

      <p>Portfolio v.0.1</p>
      <p>2023</p>
    </div>
  );
};

export default Page;
