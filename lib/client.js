import { createClient } from "next-sanity";
// import { ImageUrlBuilder } from "next-sanity-image";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'zlbjbten',
  dataset: 'production',
  apiVersion: '2023-04-18',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);