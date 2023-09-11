import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../main';
import type { ButtonProps } from '../../types/components-type-props';

export const Button = ({
  labelEng,
  labelEsp,
  isPrimary = true,
  className = 'w-full',
  fileAssets = [],
}: ButtonProps) => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  let fileAsset: string | undefined;
  if (fileAssets.length) {
    fileAsset = language === 'ENG' ? fileAssets[0]?.file?.url : fileAssets[1]?.file?.url;
  }

  const handleClick = () => {
    navigate(fileAsset || '');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
      rounded-3xl p-10 px-15 transition ${className}
      ${
        isPrimary
          ? 'bg-blue hover:bg-pink text-white hover:drop-shadow-md hover:scale-105'
          : 'hover:bg-pink hover:text-white border-2 border-pink'
      }
    `}
    >
      {language === 'ENG' ? labelEng : labelEsp}
    </button>
  );
};
