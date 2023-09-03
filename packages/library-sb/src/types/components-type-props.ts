import type { ContentfulContent, MediaWrapperProps } from './contentful-types';
import type { Document } from '@contentful/rich-text-types';

export interface ModulesComponents {
  [key: string]: React.ComponentType<RichTextProps | WorkSectionProps>;
}

export interface HeaderProps extends ContentfulContent {
  title?: string;
  subTitleEsp?: string;
  subTitleEng?: string;
  categories?: LinkProps[];
  languajes?: MediaWrapperProps[];
  rrss?: LinkProps[];
  children?: React.ReactNode;
}

export interface WorkSectionProps extends ContentfulContent {
  titleEsp?: string;
  titleEng?: string;
  experienceInfo?: WorkField[];
}

export interface CollapsibleContainerProps extends WorkField {
  index: number;
}

export interface FooterProps extends ContentfulContent {
  rrss?: LinkProps[];
}

export interface AboutSectionProps extends ContentfulContent {
  titleEng?: string;
  titleEsp?: string;
  image?: ImageProps;
  cvButton?: ButtonProps;
  description?: RichTextProps;
}

export interface LinkProps extends ContentfulContent {
  label?: string;
  isBlank?: boolean;
  actionUrl?: string;
  image?: ImageProps;
  children?: React.ReactNode;
}

export interface ImageProps extends MediaWrapperProps {
  className?: string;
}

export interface ButtonProps extends ContentfulContent {
  labelEsp: string;
  labelEng: string;
  actionType?: 'self' | 'blank';
  actionUrl?: string;
  isPrimary?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface RichTextProps extends ContentfulContent {
  espText?: Document | undefined;
  ingText?: Document | undefined;
  className?: string;
}

export interface WorkField extends ContentfulContent {
  workTitle?: string;
  startDate?: string;
  endDate?: string;
  detailsMobile?: RichTextProps;
  detailsDesktop?: RichTextProps;
}

export interface IconProps {
  className: string;
  handleClick(): any;
}
