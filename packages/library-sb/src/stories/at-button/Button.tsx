import type { ButtonProps } from '../../types/components-type-props';

export const Button = ({ label, isPrimary = true, className = 'w-full' }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`
      rounded-3xl p-10 px-15 transition ${className}
      ${
        isPrimary
          ? 'bg-blue hover:bg-pink text-white hover:drop-shadow-md hover:scale-105'
          : 'hover:bg-pink hover:text-white border-2 border-pink'
      }
    `}
    >
      {label}
    </button>
  );
};
