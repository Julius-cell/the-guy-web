import { useContext } from 'react';
import { LanguageContext } from '../../main';
import { transformDate } from '../../utils/transform-date';
import { CollapsibleContainer } from '../ml-collapsible-container/Collapsible-container';
import type { WorkSectionProps, WorkField } from '../../types/components-type-props';

export const WorkSection = ({ titleEng, titleEsp, experienceInfo }: WorkSectionProps) => {
  const { language } = useContext(LanguageContext);

  const currentText = language === 'ENG' ? ' Present' : ' Actualidad';

  return (
    <div id="work" className="col-span-full">
      <h2 className="text-center">{language === 'ENG' ? titleEng : titleEsp}</h2>
      <ul className="border-l-2 border-l-pink mt-20 relative grid gap-y-20">
        {experienceInfo?.map((work: WorkField, i: number) => (
          <li
            key={i}
            className="relative pl-1/10 before:absolute before:w-20 before:h-20 before:rounded-full before:bg-pink before:-left-11"
          >
            <div className="text-white flex bg-pink rounded-full px-10 w-fit text-sm before:absolute before:w-1/10 before:border-pink before:border-2 before:left-8 before:top-8">
              <p>{work.startDate && transformDate(work.startDate)}</p>
              <p className="px-4"> - </p>
              <p>{work.endDate ? transformDate(work.endDate) : currentText}</p>
            </div>
            <CollapsibleContainer {...work} index={i} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkSection;
