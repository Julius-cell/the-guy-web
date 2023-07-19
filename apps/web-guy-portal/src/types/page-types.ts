import { CardProps, HeaderProps } from 'library-sb';

export interface ContentfulPage {
  title?: string;
  baseUrl?: string;
  header?: HeaderProps;
  modules?: CardProps[] | undefined;
  footer?: unknown;
}

export interface ModulesComponents {
  [key: string]: React.ComponentType<any>;
}
