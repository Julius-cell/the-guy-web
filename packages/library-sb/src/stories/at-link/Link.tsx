import type { LinkProps } from '../../types/components-type-props';

export const Link = (props: LinkProps) => {
  return (
    <a href={props.actionUrl} target={props.actionType}>
      {props.label}
    </a>
  );
};
