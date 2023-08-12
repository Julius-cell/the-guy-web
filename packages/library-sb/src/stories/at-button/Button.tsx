import type { ButtonProps } from '../../types/components-type-props';

export const Button = ({ label, isPrimary = true }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`
      w-full rounded-md p-10 transition
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
