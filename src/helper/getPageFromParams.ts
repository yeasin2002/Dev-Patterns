import { type allDocuments } from "contentlayer/generated";

export async function getPageFromParams(
  data: typeof allDocuments,
  slug: string
) {
  const page = data.find((page) => page.slugAsParams === slug);

  if (!page) {
    null;
  }

  return page;
}
