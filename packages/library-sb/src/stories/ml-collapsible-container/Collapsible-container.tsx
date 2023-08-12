import { useState } from 'react';
import { ChevronDownIcon } from '../assets/icons/chevron-down';
import { ChevronUpIcon } from '../assets/icons/chevron-up';

interface CollapsibleContainerProps {
  title?: string;
  children: React.ReactNode;
}

export const CollapsibleContainer: React.FC<CollapsibleContainerProps> = ({
  title = '',
  children,
}: CollapsibleContainerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
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
      {isOpen && <div className="overflow-hidden px-4 py-2 mt-2">{children}</div>}
    </div>
  );
};
