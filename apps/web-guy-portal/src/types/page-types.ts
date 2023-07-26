import { CardProps, GridSectionProps, HeaderProps } from 'library-sb';

export interface ContentfulPage {
  title?: string;
  baseUrl?: string;
  header?: HeaderProps;
  modules?: (CardProps | GridSectionProps)[] | undefined;
  footer?: unknown;
}
