import { transformDate } from '../../utils/transform-date';
import { RichText } from '../at-richtext/RichText';
import { CollapsibleContainer } from '../ml-collapsible-container/Collapsible-container';
import type { WorkSectionProps, WorkField } from '../../types/components-type-props';

export const WorkSection = ({ name, workFields }: WorkSectionProps) => {
  return (
    <div className="col-span-full">
      <h2 className="text-center">{name}</h2>
      <ul className="border-l-2 border-l-pink mt-20 relative grid gap-y-20">
        {workFields?.map((work: WorkField, i: number) => (
          <li
            key={i}
            className="relative pl-1/10 before:absolute before:w-20 before:h-20 before:rounded-full before:bg-pink before:-left-11"
          >
            <div className="flex bg-pink rounded-full px-10 w-fit text-sm before:absolute before:w-1/10 before:border-pink before:border-2 before:left-8 before:top-8">
              <p>{work.startDate && transformDate(work.startDate)}</p>
              <p className="px-4"> - </p>
              <p>{work.endDate ? transformDate(work.endDate) : ' Actualidad'}</p>
            </div>
            <CollapsibleContainer title={work.name} index={i}>
              <RichText className="mt-10" ingText={work.workDetails?.ingText} />
            </CollapsibleContainer>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkSection;
