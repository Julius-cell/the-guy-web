import { RichText } from '../at-richtext/RichText';
import type { CardProps } from '../../types/components-type-props';

export const Card = ({ descriptionText }: CardProps) => {
  return (
    <div className="p-20">
      <RichText descriptionText={descriptionText} />
    </div>
  );
};
