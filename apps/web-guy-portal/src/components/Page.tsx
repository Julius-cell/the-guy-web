import { Card, CardProps, Header } from 'library-sb';
import React, { ReactNode, useEffect, useState } from 'react';
import { getPage } from '../contentful/get-page';
import { ContentfulPage, ModulesComponents } from '../types/page-types';

const renderModuleComponent = (modulesList: string[], args: CardProps[]): ReactNode[] => {
  const modulesComponents: ModulesComponents = {
    mlCard: Card,
  };

  return modulesList.map((module: string, index: number) => (
    <React.Fragment key={index}>{React.createElement(modulesComponents[module], { ...args[index] })}</React.Fragment>
  ));
};

const Page = () => {
  const [page, setPage] = useState<ContentfulPage | undefined>(undefined);
  const [modules, setModules] = useState<string[]>([]);
  const [moduleArgs, setModuleArgs] = useState<CardProps[]>([]);

  const mapContentTypesModules = (modulesArray: CardProps[]) => {
    for (let index = 0; index < modulesArray.length; index++) {
      const { contentTypeId, ...args } = modulesArray[index];
      setModules((prevModules: string[]) => [...prevModules, contentTypeId || '']);
      setModuleArgs((prevArgs: CardProps[]) => [...prevArgs, args]);
    }
  };

  useEffect(() => {
    const dataFetch = async () => {
      const data = await getPage();

      // set state when the data received
      setPage(data);
      if (data?.modules) {
        mapContentTypesModules(data?.modules);
      }
    };

    dataFetch().catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header categories={page?.header?.categories} hero={page?.header?.hero} />
      <main>{modules ? renderModuleComponent(modules, moduleArgs) : <></>}</main>
    </div>
  );
};

export default Page;
