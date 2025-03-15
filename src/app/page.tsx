import { getRepositoryOutline } from "../data/content.dto";

export default async function Home() {
  const content = await getRepositoryOutline();

  if (!content) {
    return <div>Nothing to show</div>;
  }

  return (
    <div>
      {content.map((item) => {
        return (
          <div key={item.path}>
            <p>
              {item.name} ({item.type})
            </p>
          </div>
        );
      })}
    </div>
  );
}
