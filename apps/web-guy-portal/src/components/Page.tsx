import { Card, CardProps, GridSection, GridSectionProps, Header, ModulesComponents } from 'library-sb';
import React, { ReactNode, useEffect, useState } from 'react';
import { getPage } from '../contentful/get-page';
import { ContentfulPage } from '../types/page-types';

const renderModuleComponent = (modulesList: string[], args: CardProps[]): ReactNode[] => {
  const modulesComponents: ModulesComponents = {
    mlCard: Card,
    orGridSection: GridSection,
  };

  return modulesList.map((module: string, index: number) => (
    <React.Fragment key={index}>{React.createElement(modulesComponents[module], { ...args[index] })}</React.Fragment>
  ));
};

const Page = () => {
  const [page, setPage] = useState<ContentfulPage | undefined>(undefined);
  const [modules, setModules] = useState<string[]>([]);
  const [moduleArgs, setModuleArgs] = useState<CardProps[]>([]);

  const mapContentTypesModules = (modulesArray: (CardProps | GridSectionProps)[]) => {
    for (let index = 0; index < modulesArray.length; index++) {
      const { contentTypeId, ...args } = modulesArray[index];

      setModules((prevModules: string[]) => [...prevModules, contentTypeId || '']);
      setModuleArgs((prevArgs: (CardProps | GridSectionProps)[]) => [...prevArgs, args]);
    }
  };

  useEffect(() => {
    const dataFetch = async () => {
      const data = await getPage();
      // set state when the data received
      setPage(data);
      if (data?.modules?.length) {
        mapContentTypesModules(data?.modules);
      }
    };
    dataFetch().catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header categories={page?.header?.categories} hero={page?.header?.hero} />
      <main className="flex justify-center flex-col min-h-screen space-y-1/2">
        {modules.length ? renderModuleComponent(modules, moduleArgs) : <></>}
      </main>
    </div>
  );
};

export default Page;
