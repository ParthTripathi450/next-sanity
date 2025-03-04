import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import clientConfig from './config/client-config'
import { Page } from "@/types/Page";
import imageUrlBuilder from "@sanity/image-url";
import { Newsletter } from "@/types/Newsletter";
import { Book } from "@/types/Book";
import {History} from "@/types/History";
import { Article } from "@/types/Article";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  )
}
// Create the client once and reuse it
const client = createClient(clientConfig);

export async function getPages(): Promise<Page[]> {
  return client.fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      shortDescription,
      content
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      shortDescription,
      author,
      date,
      content
    }`,
    { slug }
  );
}

export async function getNewsletters(): Promise<Newsletter[]> {
  return client.fetch(
    groq`*[_type == "newsletter"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      "imageCaption": image.imageCaption, 
      url,
      shortDescription,
      author,
      date,
      content
    }`
  );
}

export async function getNewsletter(slug: string): Promise<Newsletter> {
  return client.fetch(
    groq`*[_type == "newsletter" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      "imageCaption": image.imageCaption,
      url,
      shortDescription,
      author,
      date,
      content[]{
        ...,
        _type == "image" => {
          "imageUrl": asset->url,
          "imageCaption": imageCaption
        }
      }
    }`,
    { slug }
  );
}



export async function getBooks(): Promise<Book[]> {
  return client.fetch(
    groq`*[_type == "book"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      "imageCaption": image.imageCaption, 
      url,
      shortDescription,
      author,
      date,
      content
    }`
  );
}

export async function getBook(slug: string): Promise<Book> {
  return client.fetch(
    groq`*[_type == "book" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      "imageCaption": image.imageCaption,
      url,
      shortDescription,
      author,
      date,
      content[]{
        ...,
        _type == "image" => {
          "imageUrl": asset->url,
          "imageCaption": imageCaption
        }
      }
    }`,
    { slug }
  );
}



export async function getHistories(): Promise<History[]> {
  return client.fetch(
    groq`*[_type == "history"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      "imageCaption": image.imageCaption, 
      url,
      shortDescription,
      author,
      date,
      content
    }`
  );
}

export async function getHistory(slug: string): Promise<History> {
  return client.fetch(
    groq`*[_type == "history" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      "imageCaption": image.imageCaption,
      url,
      shortDescription,
      author,
      date,
      content[]{
        ...,
        _type == "image" => {
          "imageUrl": asset->url,
          "imageCaption": imageCaption
        }
      }
    }`,
    { slug }
  );
}


export async function getArticles(): Promise<Article[]> {
  return client.fetch(
    groq`*[_type == "article"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      "imageCaption": image.imageCaption, 
      url,
      shortDescription,
      author,
      date,
      content
    }`
  );
}

export async function getArticle(slug: string): Promise<Article> {
  return client.fetch(
    groq`*[_type == "article" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      "imageCaption": image.imageCaption,
      url,
      shortDescription,
      author,
      date,
      content[]{
        ...,
        _type == "image" => {
          "imageUrl": asset->url,
          "imageCaption": imageCaption
        }
      }
    }`,
    { slug }
  );
}




// Fix: Use the defined client here
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
