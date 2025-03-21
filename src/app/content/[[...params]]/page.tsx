import { EditContent } from "@/components/EditContent";
import { getFile } from "@/data/content.dto";
import { notFound } from "next/navigation";

type Params = Promise<{ params: string[] }>;
const Page = async ({ params }: { params: Params }) => {
  const path = (await params).params.join("/");
  const content = await getFile(path);

  if (!content) {
    notFound();
  }

  return (
    <div>
      <h1>{content.name}</h1>
      <EditContent content={content.content} path={path} sha={content.sha} />
    </div>
  );
};

export default Page;
