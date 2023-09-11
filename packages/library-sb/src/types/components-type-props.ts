import type { ContentfulAsset, ContentfulContent, MediaWrapperProps } from './contentful-types';
import type { Document } from '@contentful/rich-text-types';

export interface ModulesComponents {
  [key: string]: React.ComponentType<RichTextProps | WorkSectionProps>;
}

export interface HeaderProps extends ContentfulContent {
  title?: string;
  subTitleEsp?: string;
  subTitleEng?: string;
  categories?: LinkAnchorProps[];
  languajes?: MediaWrapperProps[];
  rrss?: LinkAnchorProps[];
  children?: React.ReactNode;
}

export interface NavBarProps {
  categories?: LinkAnchorProps[];
  languajes?: MediaWrapperProps[];
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
  rrss?: LinkAnchorProps[];
}

export interface AboutSectionProps extends ContentfulContent {
  titleEng?: string;
  titleEsp?: string;
  image?: ImageProps;
  cvButton?: ButtonProps;
  description?: RichTextProps;
}

export interface LinkAnchorProps extends ContentfulContent {
  label?: string;
  actionType?: '_self' | '_blank';
  actionUrl: string;
  image?: ImageProps;
  children?: React.ReactNode;
}

export interface ImageProps extends MediaWrapperProps {
  className?: string;
}

export interface ButtonProps extends ContentfulContent {
  labelEsp?: string;
  labelEng?: string;
  actionUrl?: string;
  isPrimary?: boolean;
  className?: string;
  onClick?: () => void;
  fileAssets?: ContentfulAsset[];
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
