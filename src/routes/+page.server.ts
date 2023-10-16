import type { PageContent } from "$lib/stackbit/models";
import type { PageServerLoad } from "./$types";
import { read } from "gray-matter";

export const prerender = true

export const load: PageServerLoad = () => {
  const path = 'content/pages/index.md'
  const content = read(path).data as PageContent
  content.path = path
  return {
    content
  }
}
