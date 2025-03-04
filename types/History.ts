import { PortableTextBlock } from "sanity";

export type History = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  image?: string;
  imageCaption?: string;  
  url?: string;
  shortDescription?: string;
  author: string;
  date: string;
  content: (PortableTextBlock | {
    _type: "image"; 
    asset: { _ref: string };
    alt?: string;
    imageCaption?: string;  
  })[];
};