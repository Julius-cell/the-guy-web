import { GridSection, Header } from 'library-sb';
import { useEffect, useState } from 'react';
import { getPage } from '../contentful/get-page';
import { ContentfulPage } from '../types/page-types';

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
      <main>{page?.modules ? <GridSection elements={page?.modules} /> : <></>}</main>
    </div>
  );
};

export default Page;
