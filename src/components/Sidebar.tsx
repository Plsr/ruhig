import { getRepositoryOutline } from "@/data/content.dto";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = async () => {
  const content = await getRepositoryOutline();

  if (!content) {
    return null;
  }

  return (
    <div className="p-4 border-r border-r-gray-100 h-full">
      {content.map((item) => {
        // HACK: No folder support for now
        if (item.type === "dir") {
          return null;
        }

        return (
          <SidebarItem key={item.path} path={item.path} name={item.name} />
        );
      })}
    </div>
  );
};
