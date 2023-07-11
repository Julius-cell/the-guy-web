export interface LinkProps {
  title?: string;
  label?: string;
  actionType?: string;
  actionUrl?: string;
  subLinks?: LinkProps[];
}

export const Link = (props: LinkProps) => {
  return (
    <a href={props.actionUrl} target={props.actionType}>
      {props.label}
    </a>
  );
};
