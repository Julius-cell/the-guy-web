import {
  Header,
  ModulesComponents,
  WorkSection,
  Footer,
  AboutSection,
  WorkSectionProps,
  LanguageProvider,
  NavBar,
} from 'library-sb';
import React, { ReactNode, useEffect, useState } from 'react';
import { getPage } from '../contentful/get-page';
import { ContentfulPage } from '../types/page-types';

const renderModuleComponent = (modulesList: string[], args: WorkSectionProps[]): ReactNode[] => {
  const modulesComponents: ModulesComponents = {
    orAboutSection: AboutSection,
    orWorkSection: WorkSection,
  };

  return modulesList.map((module: string, index: number) => (
    <React.Fragment key={index}>{React.createElement(modulesComponents[module], { ...args[index] })}</React.Fragment>
  ));
};

const Page = () => {
  const [page, setPage] = useState<ContentfulPage | undefined>(undefined);
  const [modules, setModules] = useState<string[]>([]);
  const [moduleArgs, setModuleArgs] = useState<WorkSectionProps[]>([]);

  const mapContentTypesModules = (modulesArray: WorkSectionProps[]) => {
    for (let index = 0; index < modulesArray.length; index++) {
      const { contentTypeId, ...args } = modulesArray[index];

      setModules((prevModules: string[]) => [...prevModules, contentTypeId || '']);
      setModuleArgs((prevArgs: WorkSectionProps[]) => [...prevArgs, args]);
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
    <LanguageProvider className="grid grid-cols-4 mx-10">
      <Header {...page?.header}>
        <NavBar categories={page?.header?.categories} languajes={page?.header?.languajes} />
      </Header>
      <main className="col-span-full min-h-screen space-y-1/3 md:space-y-1/10 mx-20 my-30">
        {modules.length ? renderModuleComponent(modules, moduleArgs) : <></>}
      </main>
      <Footer rrss={page?.footer?.rrss} />
    </LanguageProvider>
  );
};

export default Page;
