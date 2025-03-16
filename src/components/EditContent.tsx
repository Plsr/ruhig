"use client";

import { updateFile } from "@/app/content/[[...params]]/actions";
import { useRef } from "react";

type Props = {
  content: string;
  path: string;
  sha: string;
};

export const EditContent = ({ content, path, sha }: Props) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  console.log(path, sha);

  const handleUpdateClick = async () => {
    const updatedContent = textAreaRef.current?.value;
    if (!updatedContent || updatedContent === content) {
      return;
    }

    const encodedContent = btoa(updatedContent);

    await updateFile({ content: encodedContent, path, sha });
  };

  return (
    <>
      <textarea
        ref={textAreaRef}
        className="w-2xl"
        defaultValue={content}
      ></textarea>
      <br />
      <button onClick={handleUpdateClick}>Update</button>
    </>
  );
};
