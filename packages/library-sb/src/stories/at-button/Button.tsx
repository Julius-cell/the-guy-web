import { useNavigate } from 'react-router-dom';
import type { ButtonProps } from '../../types/components-type-props';

export const Button = ({ labelEng, labelEsp, actionUrl, isPrimary = true, className = 'w-full' }: ButtonProps) => {
  const language = 'ENG';
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(actionUrl || '#');
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
