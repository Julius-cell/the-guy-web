import { useState } from 'react';
import { collapseSection, expandSection } from '../../utils/collapse-fn';
import { ChevronDownIcon } from '../assets/icons/chevron-down';
import { ChevronUpIcon } from '../assets/icons/chevron-up';

interface CollapsibleContainerProps {
  title?: string;
  index: number;
  children: React.ReactNode;
}

export const CollapsibleContainer: React.FC<CollapsibleContainerProps> = ({
  title = '',
  index,
  children,
}: CollapsibleContainerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const elementId = `collapsible_${index}`;

  const handleClick = () => {
    let isCollapsed;
    const section = document.querySelector(`#${elementId}`) as HTMLDivElement;

    if (section) {
      isCollapsed = section.getAttribute('data-collapsed') === 'true';
    }
    setIsOpen(!isOpen);
    if (section && isCollapsed) {
      expandSection(section);
      section.setAttribute('data-collapsed', 'false');
    } else {
      collapseSection(section);
    }
  };

  return (
    <div className="w-full">
      <div className="mt-4 grid grid-cols-[90%_auto] items-center">
        <h3>{title}</h3>
        {isOpen ? (
          <ChevronUpIcon handleClick={handleClick} className="h-20 w-20 cursor-pointer justify-self-center" />
        ) : (
          <ChevronDownIcon handleClick={handleClick} className="h-20 w-20 cursor-pointer justify-self-center" />
        )}
      </div>
      <div id={elementId} data-collapsed={true} className="transition-all overflow-hidden px-4 py-2 mt-2 h-0">
        {children}
      </div>
    </div>
  );
};
