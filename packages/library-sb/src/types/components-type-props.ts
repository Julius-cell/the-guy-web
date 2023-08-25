import type { ContentfulContent, MediaWrapperProps } from './contentful-types';
import type { Document } from '@contentful/rich-text-types';

export interface ModulesComponents {
  [key: string]: React.ComponentType<RichTextProps | WorkSectionProps>;
}

export interface HeaderProps extends ContentfulContent {
  title?: string;
  subTitle?: string;
  categories?: LinkProps[];
  languajes?: MediaWrapperProps[];
  rrss?: LinkProps[];
}

export interface WorkSectionProps extends ContentfulContent {
  name?: string;
  workFields?: WorkField[];
}

export interface FooterProps extends ContentfulContent {
  rrss?: LinkProps[];
}

export interface AboutSectionProps extends ContentfulContent {
  title?: string;
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
  label?: string;
  actionType?: 'self' | 'blank';
  actionUrl?: string;
  isPrimary?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface RichTextProps extends ContentfulContent {
  ingText?: Document | undefined;
  espText?: Document | undefined;
  className?: string;
}

export interface WorkField extends ContentfulContent {
  name?: string;
  workDetails?: RichTextProps;
  workDetailsMobile?: RichTextProps;
  startDate?: string;
  endDate?: string;
}

export interface IconProps {
  className: string;
  handleClick(): any;
}
