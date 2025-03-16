import Link from "next/link";

export const Header = () => {
  return (
    <div className="p-4 border-b border-b-gray-200">
      <h1 className="font-bold text-gray-700">
        <Link href="/">🍃 Ruhig</Link>
      </h1>
    </div>
  );
};
