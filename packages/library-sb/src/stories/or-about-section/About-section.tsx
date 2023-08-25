import { Button } from '../at-button/Button';
import { Image } from '../at-image/Image';
import { RichText } from '../at-richtext/RichText';
import type { AboutSectionProps } from '../../types/components-type-props';

export const AboutSection = ({ title, description, image, cvButton }: AboutSectionProps) => {
  return (
    <div className="text-center py-20 grid md:grid-cols-2">
      <div className="grid gap-y-30 md:px-1/10">
        <h2>{title}</h2>
        <RichText ingText={description?.ingText} espText={description?.espText} />
        <div className="justify-self-center">
          <Button {...cvButton} className="w-fit" />
        </div>
      </div>
      <Image
        desktopAsset={image?.desktopAsset}
        className="mt-20 md:mt-2/10 lg:mt-0 rounded-50 justify-self-center w-7/12 md:w-2/3 lg:w-1/3"
      />
    </div>
  );
};
