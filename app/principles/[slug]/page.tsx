import { Mdx } from "@/components/mdx";
import { allPrinciples } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPageFromParams(slug: string) {
  // const slug = params?.slug?.join("/");
  const page = allPrinciples.find((page) => page.slugAsParams === slug);

  if (!page) {
    null;
  }

  return page;
}

export default async function PagePage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPageFromParams(slug);
  console.log("Page", page);

  // if (!page) {
  //   notFound();
  // }

  return (
    <article className="py-6 prose dark:prose-invert">Params : {slug} </article>
  );
}

// {page?.body?.code && <Mdx code={page.body.code} />}
