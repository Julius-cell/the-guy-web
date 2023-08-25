import { HeaderProps, ExperienceSectionProps, FooterProps } from 'library-sb';

export interface ContentfulPage {
  title?: string;
  baseUrl?: string;
  header?: HeaderProps;
  modules?: ExperienceSectionProps[] | undefined;
  footer?: FooterProps;
}
