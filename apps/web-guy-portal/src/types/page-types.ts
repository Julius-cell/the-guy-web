import { CardProps, HeaderProps, RichTextProps, ExperienceSectionProps, FooterProps } from 'library-sb';

export interface ContentfulPage {
  title?: string;
  baseUrl?: string;
  header?: HeaderProps;
  modules?: (CardProps | RichTextProps | ExperienceSectionProps)[] | undefined;
  footer?: FooterProps;
}
