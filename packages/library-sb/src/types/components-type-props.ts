import type { ContentfulContent, MediaWrapperProps } from './contentful-types';

export interface HeaderProps extends ContentfulContent {
  categories?: LinkProps[];
  hero?: HeroSectionProps;
}

export interface HeroSectionProps extends ContentfulContent {
  heroTitle?: string;
  description?: string;
  heroAssets?: MediaWrapperProps[];
}

export interface LinkProps extends ContentfulContent {
  label?: string;
  actionType?: string;
  actionUrl?: string;
  subLinks?: LinkProps[];
}

export interface CardProps extends ContentfulContent {
  cardTitle?: string;
  description?: string;
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

interface Person extends ContentfulContent {
  name?: string;
  address?: string;
  age?: number;
  experience?: string;
  phone?: string;
  links?: LinkProps[];
}
