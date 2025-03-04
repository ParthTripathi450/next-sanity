import { PortableTextBlock } from "sanity";

export type Article = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  image?: string;
  imageCaption?: string;  // ✅ Caption for the main image
  url?: string;
  shortDescription?: string;
  author: string;
  date: string;
  content: (PortableTextBlock | {
    _type: "image"; 
    asset: { _ref: string };
    alt?: string;
    imageCaption?: string;  // ✅ Caption for inline images
  })[];
};