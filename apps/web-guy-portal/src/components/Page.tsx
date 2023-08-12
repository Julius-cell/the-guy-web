import {
  Card,
  CardProps,
  RichText,
  Header,
  ModulesComponents,
  RichTextProps,
  ExperienceSectionProps,
  ExperienceSection,
} from 'library-sb';
import React, { ReactNode, useEffect, useState } from 'react';
import { getPage } from '../contentful/get-page';
import { ContentfulPage } from '../types/page-types';

const renderModuleComponent = (modulesList: string[], args: CardProps[]): ReactNode[] => {
  const modulesComponents: ModulesComponents = {
    mlCard: Card,
    richText: RichText,
    mlExperienceSection: ExperienceSection,
  };

  return modulesList.map((module: string, index: number) => (
    <React.Fragment key={index}>{React.createElement(modulesComponents[module], { ...args[index] })}</React.Fragment>
  ));
};

const Page = () => {
  const [page, setPage] = useState<ContentfulPage | undefined>(undefined);
  const [modules, setModules] = useState<string[]>([]);
  const [moduleArgs, setModuleArgs] = useState<(CardProps | RichTextProps | ExperienceSectionProps)[]>([]);

  const mapContentTypesModules = (modulesArray: (CardProps | RichTextProps | ExperienceSectionProps)[]) => {
    for (let index = 0; index < modulesArray.length; index++) {
      const { contentTypeId, ...args } = modulesArray[index];

      setModules((prevModules: string[]) => [...prevModules, contentTypeId || '']);
      setModuleArgs((prevArgs: (CardProps | RichTextProps | ExperienceSectionProps)[]) => [...prevArgs, args]);
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
    <div className="grid grid-cols-4 mx-10">
      <Header categories={page?.header?.categories} hero={page?.header?.hero} languajes={page?.header?.languajes} />
      <main className="col-span-full min-h-screen space-y-1/3 mx-20">
        {modules.length ? renderModuleComponent(modules, moduleArgs) : <></>}
      </main>
    </div>
  );
};

export default Page;
