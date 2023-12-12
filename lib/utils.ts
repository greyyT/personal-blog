import { Doc } from 'contentlayer/generated';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBlogs(docs: Doc[]) {
  return docs.slice().filter((doc) => doc.docType === 'blog');
}
