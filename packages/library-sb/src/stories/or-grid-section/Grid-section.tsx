import React, { useEffect, useState } from 'react';
import { RichText } from '../at-richtext/RichText';
import { Card } from '../ml-card/Card';
import type { CardProps, GridSectionProps, ModulesComponents, RichTextProps } from '../../types/components-type-props';
import type { ReactNode } from 'react';

const renderModuleComponent = (modulesList: string[], args: (CardProps | RichTextProps)[]): ReactNode[] => {
  const modulesComponents: ModulesComponents = {
    mlCard: Card,
    richText: RichText,
  };

  return modulesList.map((module: string, index: number) => (
    <React.Fragment key={index}>{React.createElement(modulesComponents[module], { ...args[index] })}</React.Fragment>
  ));
};

export const GridSection = ({ elements = [] }: GridSectionProps) => {
  const [modules, setModules] = useState<string[]>([]);
  const [moduleArgs, setModuleArgs] = useState<(CardProps | RichTextProps)[]>([]);

  const mapContentTypesModules = (modulesArray: (CardProps | RichTextProps)[]) => {
    for (let index = 0; index < modulesArray.length; index++) {
      const { contentTypeId, ...args } = modulesArray[index];
      setModules((prevModules: string[]) => [...prevModules, contentTypeId || '']);
      setModuleArgs((prevArgs: (CardProps | RichTextProps)[]) => [...prevArgs, args]);
    }
  };

  useEffect(() => {
    mapContentTypesModules(elements);
  }, []);

  const gridClassnameVariants = {
    one: 'grid grid-cols-1',
    two: 'grid grid-cols-1 md:grid-cols-2 gap-20',
  };
  const gridClassname = Object.values(gridClassnameVariants)[elements.length - 1];

  return (
    <div className={`mx-20 items-center ${gridClassname}`}>
      {modules.length ? renderModuleComponent(modules, moduleArgs) : <></>}
    </div>
  );
};
