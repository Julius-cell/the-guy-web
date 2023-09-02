import { transformDate } from '../../utils/transform-date';
import { CollapsibleContainer } from '../ml-collapsible-container/Collapsible-container';
import type { WorkSectionProps, WorkField } from '../../types/components-type-props';

export const WorkSection = ({ title, experienceInfo }: WorkSectionProps) => {
  return (
    <div className="col-span-full">
      <h2 className="text-center">{title}</h2>
      <ul className="border-l-2 border-l-pink mt-20 relative grid gap-y-20">
        {experienceInfo?.map((work: WorkField, i: number) => (
          <li
            key={i}
            className="relative pl-1/10 before:absolute before:w-20 before:h-20 before:rounded-full before:bg-pink before:-left-11"
          >
            <div className="text-white flex bg-pink rounded-full px-10 w-fit text-sm before:absolute before:w-1/10 before:border-pink before:border-2 before:left-8 before:top-8">
              <p>{work.startDate && transformDate(work.startDate)}</p>
              <p className="px-4"> - </p>
              <p>{work.endDate ? transformDate(work.endDate) : ' Actualidad'}</p>
            </div>
            <CollapsibleContainer {...work} index={i} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkSection;
