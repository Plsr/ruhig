"use server";

import { updateFile as updateFileDto } from "@/data/content.dto";
import { revalidatePath } from "next/cache";

export async function updateFile({
  content,
  path,
  sha,
}: {
  content: string;
  path: string;
  sha: string;
}) {
  const res = await updateFileDto({
    content,
    path,
    sha,
  });

  if (res) {
    revalidatePath(`/content/${path}`);
  }

  console.log(res);
}
