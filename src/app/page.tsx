import { getRepositoryOutline } from "../data/content.dto";

export default async function Home() {
  const content = await getRepositoryOutline();

  if (!content) {
    return <div>Nothing to show</div>;
  }

  return <div>No file selected</div>;
}
