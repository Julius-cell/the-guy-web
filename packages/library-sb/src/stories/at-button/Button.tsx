interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}

const BASE_BUTTON_CLASSES = 'w-full py-10 rounded-md bg-[#fe5d56]';

export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button type="button" className={`${BASE_BUTTON_CLASSES}`} {...props}>
      {label}
    </button>
  );
};
