import { PortableTextBlock } from "sanity";

export type Page = {
  _id: string;
  _createdAt: Date;  // Sanity stores dates as strings (ISO 8601 format)
  title: string;
  slug: string;
  image: string;       // Assumes resolved URL from query
  url: string;
  shortDescription: string;  // Added to match schema
  content: PortableTextBlock[];
};