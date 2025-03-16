"use client";

import Link from "next/link";
import { File } from "lucide-react";
import { usePathname } from "next/navigation";
import { githubToLocalPath } from "@/util/path";
import clsx from "clsx";

type Props = {
  path: string;
  name: string;
};

export const SidebarItem = ({ path, name }: Props) => {
  const pathname = usePathname();
  console.log(pathname);
  console.log(githubToLocalPath(path));

  const isActive = pathname === githubToLocalPath(path);

  return (
    <Link
      href={`/content/${path}`}
      className={clsx(
        "flex items-center gap-2 p-2 rounded-lg",
        isActive && "bg-gray-50"
      )}
    >
      <div className="text-gray-700">
        <File className="w-4 h-4 " />
      </div>
      <span className="text-gray-900">{name}</span>
    </Link>
  );
};
