import { Rule } from "sanity";

const article = {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      description: "A brief summary of the page content",
      validation: (Rule: Rule) => Rule.max(200),
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for accessibility.",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "imageCaption",
          title: "Image Caption",
          type: "string",
          description: "A short caption for the image.",
        },
      ],
    },
    {
      name: "url",
      title: "External URL",
      type: "url",
      description: "Link to an external source, if applicable.",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Publication Date",
      type: "date",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" }, // Standard rich text content
        {
          type: "image",
          title: "Inline Image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Describe the image for accessibility.",
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "imageCaption",
              title: "Image Caption",
              type: "string",
              description: "A short caption for the image.",
            },
          ],
        },
      ],
    },
  ],
};

export default article;
