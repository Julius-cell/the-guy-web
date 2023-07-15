import type { MediaWrapperProps } from './contentful-types';

export interface HeaderProps {
  title?: string;
  categories?: LinkProps[];
  hero?: HeroSectionProps;
}

export interface HeroSectionProps {
  title?: string;
  heroTitle?: string;
  description?: string;
  heroAssets?: MediaWrapperProps[];
}

export interface LinkProps {
  title?: string;
  label?: string;
  actionType?: string;
  actionUrl?: string;
  subLinks?: LinkProps[];
}

export interface CardProps {
  title?: string;
  cardTitle?: string;
  description?: string;
  link?: string;
  image?: MediaWrapperProps;
  personDetails?: Person;
}

export interface LinkProps {
  title?: string;
  label?: string;
  actionType?: string;
  actionUrl?: string;
  subLinks?: LinkProps[];
}

export interface ImageProps extends MediaWrapperProps {
  className?: string;
}

export interface ButtonProps {
  title?: string;
  label?: string;
  actionType?: 'self' | 'blank';
  actionUrl?: string;
  isPrimary?: boolean;
  onClick?: () => void;
}

interface Person {
  title?: string;
  name?: string;
  address?: string;
  age?: number;
  experience?: string;
  phone?: string;
  links?: LinkProps[];
}
