import { CardProps, GridSectionProps, HeaderProps, RichTextProps } from 'library-sb';

export interface ContentfulPage {
  title?: string;
  baseUrl?: string;
  header?: HeaderProps;
  modules?: (CardProps | GridSectionProps)[] | undefined;
  footer?: unknown;
}
