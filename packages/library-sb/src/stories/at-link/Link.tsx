import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import type { LinkAnchorProps } from '../../types/components-type-props';

export const LinkAnchor = ({ actionUrl = '#', actionType, label, children }: LinkAnchorProps) => {
  const LinkScroll = Scroll.Link;

  if (actionType === '_self') {
    return (
      <LinkScroll to={actionUrl} smooth={true} className="cursor-pointer hover:underline">
        {!children ? label : children}
      </LinkScroll>
    );
  }

  return (
    <Link to={actionUrl} target={actionType} rel="noreferrer" className="cursor-pointer hover:underline">
      {!children ? label : children}
    </Link>
  );
};
