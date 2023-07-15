export interface ContentfulAsset {
  title?: string;
  description?: string;
  file?: {
    url?: string;
    fileName?: string;
    contentType?: string;
  };
}

export interface MediaWrapperProps {
  title?: string;
  altText?: string;
  descriptionAsset?: string;
  desktopAsset?: ContentfulAsset;
  mobileAsset?: ContentfulAsset;
}
