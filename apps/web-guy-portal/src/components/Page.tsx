import { Header } from 'library-sb';
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
      <Header categories={page?.header?.categories} hero={page?.header?.hero} />
    </div>
  );
};

export default Page;
