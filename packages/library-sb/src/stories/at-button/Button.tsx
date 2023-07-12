import type { ButtonProps } from 'types/components-type-props';

export const Button = ({ label, isPrimary = false }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`
      w-full rounded-md py-10 transition
      ${
        isPrimary
          ? 'bg-slate-600 text-white hover:bg-white hover:border-slate-600 hover:text-black hover:border-2'
          : 'hover:bg-slate-600 hover:text-white border-2 border-slate-600'
      }
    `}
    >
      {label}
    </button>
  );
};
