import type { LinkProps } from '../../types/components-type-props';

export const Link = ({ actionUrl, isBlank, label, children }: LinkProps) => {
  return (
    <a href={actionUrl} target={isBlank ? '_blank' : '_self'} rel="noreferrer">
      {!children ? label : children}
    </a>
  );
};
