import Image, { StaticImageData } from "next/image";

export type Card = {
  image: string | StaticImageData;
  title: string;
  description: string;
};

export type GenButton = {
  title: string;
};
