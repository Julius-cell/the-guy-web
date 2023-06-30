import { Image } from 'library-sb';
import blackAndWhite from '/public/black-and-white.jpeg';
import { useEffect, useState } from 'react';
import { ContentfulPage, getPage } from '../contentful/get-page';

const Page = () => {
  const [page, setPage] = useState<ContentfulPage | undefined>(undefined);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await getPage();

      // set state when the data received
      setPage(data);
    };

    dataFetch().catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Image image={blackAndWhite} altText="the-web-guy" />
      <h1>{page?.title}</h1>

      <p>Portfolio v.0.1</p>
      <p>2023</p>
    </div>
  );
};

export default Page;
