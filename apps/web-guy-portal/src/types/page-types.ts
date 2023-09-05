import { HeaderProps, WorkSectionProps, FooterProps } from 'library-sb';

export interface ContentfulPage {
  title?: string;
  baseUrl?: string;
  header?: HeaderProps;
  modules?: WorkSectionProps[] | undefined;
  footer?: FooterProps;
}
