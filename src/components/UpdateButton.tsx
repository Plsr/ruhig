"use client";

import { updateFile } from "@/app/content/[[...params]]/actions";

type Props = {
  content: string;
  path: string;
  sha: string;
};

export const UpdateButton = ({ content, path, sha }: Props) => {
  console.log(path, sha);

  const handleUpdateClick = async () => {
    const updatedContent = content + " Updated at: " + new Date().toISOString();
    const encodedContent = btoa(updatedContent);

    await updateFile({ content: encodedContent, path, sha });
  };

  return <button onClick={handleUpdateClick}>Update</button>;
};
