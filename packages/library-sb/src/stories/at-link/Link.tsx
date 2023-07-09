interface LinkProps {
  title?: string;
  label?: string;
  actionType?: string;
  actionUrl?: string;
  subLinks?: LinkProps[];
}

export const Link = ({ label, actionUrl, actionType }: LinkProps) => {
  return (
    <a href={actionUrl} target={actionType}>
      {label}
    </a>
  );
};
