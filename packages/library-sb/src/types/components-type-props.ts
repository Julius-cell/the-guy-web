import type { ContentfulContent, MediaWrapperProps } from './contentful-types';
import type { Document } from '@contentful/rich-text-types';

export interface ModulesComponents {
  [key: string]: React.ComponentType<CardProps | GridSectionProps | RichTextProps>;
}

export interface HeaderProps extends ContentfulContent {
  categories?: LinkProps[];
  hero?: HeroSectionProps;
  languajes?: MediaWrapperProps[];
}

export interface HeroSectionProps extends ContentfulContent {
  heroTitle?: string;
  description?: string;
  heroAssets?: MediaWrapperProps[];
}

export interface GridSectionProps extends ContentfulContent {
  elements?: (CardProps | RichTextProps)[];
}

export interface CardProps extends ContentfulContent {
  cardTitle?: string;
  descriptionText?: Document;
  link?: string;
  image?: MediaWrapperProps;
  personDetails?: Person;
}

export interface LinkProps extends ContentfulContent {
  label?: string;
  actionType?: string;
  actionUrl?: string;
  subLinks?: LinkProps[];
}

export interface ImageProps extends MediaWrapperProps {
  className?: string;
}

export interface ButtonProps extends ContentfulContent {
  label?: string;
  actionType?: 'self' | 'blank';
  actionUrl?: string;
  isPrimary?: boolean;
  onClick?: () => void;
}

export interface RichTextProps extends ContentfulContent {
  descriptionText?: Document | undefined;
  className?: string;
}

interface Person extends ContentfulContent {
  name?: string;
  address?: string;
  age?: number;
  experience?: string;
  phone?: string;
  links?: LinkProps[];
}
