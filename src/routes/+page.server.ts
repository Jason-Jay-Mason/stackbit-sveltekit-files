import type { PageContent } from "$lib/stackbit/models";
import type { PageServerLoad } from "./$types";
import matter from 'gray-matter'

export const prerender = true

export const load: PageServerLoad = () => {
  const path = 'content/pages/index.md'
  const content = matter.read(path).data as PageContent
  content.path = path
  return {
    content
  }
}
