"use client";

import { updateFile } from "@/app/content/[[...params]]/actions";
import { Editor } from "./Editor";
import { useState } from "react";

type Props = {
  content: string;
  path: string;
  sha: string;
};

export const EditContent = ({ content, path, sha }: Props) => {
  const [updatedContent, setUpdatedContent] = useState<string | null>(null);
  const handleSave = async () => {
    if (!updatedContent) return;
    console.log(updatedContent);
    const encodedContent = btoa(updatedContent);
    console.log(encodedContent);
    await updateFile({
      path,
      content: encodedContent,
      sha,
    });
  };

  return (
    <>
      <div className="prose">
        <Editor
          markdown={content}
          onChange={(markdown) => setUpdatedContent(markdown)}
        />
      </div>
      <button
        className="bg-gray-900 text-white px-4 py-2 rounded-md"
        onClick={handleSave}
      >
        Save
      </button>
    </>
  );
};
