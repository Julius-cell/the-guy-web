import { CardProps, HeaderProps, RichTextProps } from 'library-sb';

export interface ContentfulPage {
  title?: string;
  baseUrl?: string;
  header?: HeaderProps;
  modules?: (CardProps | RichTextProps)[] | undefined;
  footer?: unknown;
}
