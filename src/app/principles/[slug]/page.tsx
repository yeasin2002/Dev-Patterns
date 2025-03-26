import { Mdx } from "@/components/mdx";
import { getPageFromParams } from "@/helper";
import { allPrinciples } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function PagePage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPageFromParams(allPrinciples, slug);

  if (!page) {
    notFound();
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      <h1>{page.title}</h1>
      {page?.body?.code && <Mdx code={page.body.code} />}
    </article>
  );
}
