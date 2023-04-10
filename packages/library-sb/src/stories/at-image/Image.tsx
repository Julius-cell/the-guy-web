import React from 'react';

export default interface ImageProps {
  image: string;
  altText: string;
}

export const Image = ({ image, altText }: ImageProps) => {
  return (
    <div className="flex justify-center">
      <img className="rounded-full" src={image} alt={altText} />
    </div>
  );
};
