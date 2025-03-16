"use client";

import { updateFile } from "@/app/content/[[...params]]/actions";
import {
  Editor,
  rootCtx,
  defaultValueCtx,
  editorViewCtx,
  serializerCtx,
} from "@milkdown/kit/core";
import { commonmark } from "@milkdown/kit/preset/commonmark";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { nord } from "@milkdown/theme-nord";

type Props = {
  content: string;
  path: string;
  sha: string;
};

export const EditContent = ({ content, path, sha }: Props) => {
  const handleSave = async (editorContent: string) => {
    if (editorContent === content) {
      return;
    }

    const encodedContent = btoa(editorContent);

    await updateFile({ content: encodedContent, path, sha });
  };

  return (
    <MilkdownProvider>
      <MilkdownEditor defaultValue={content} onSave={handleSave} />
    </MilkdownProvider>
  );
};

type MilkdownEditorProps = {
  defaultValue: string;
  onSave: (content: string) => void;
};

const MilkdownEditor = ({ defaultValue, onSave }: MilkdownEditorProps) => {
  const editor = useEditor((root) =>
    Editor.make()
      .config(nord)
      .config((ctx) => {
        ctx.set(rootCtx, root);
        ctx.set(defaultValueCtx, defaultValue);
      })
      .use(commonmark)
  );

  const handleUpdateClick = async () => {
    const editorContent = editor.get()?.action((ctx) => {
      const editorView = ctx.get(editorViewCtx);
      const serializer = ctx.get(serializerCtx);
      return serializer(editorView.state.doc);
    });

    if (!editorContent) {
      return;
    }

    onSave(editorContent);
  };

  return (
    <>
      <Milkdown />
      <button onClick={handleUpdateClick}>Update</button>
    </>
  );
};
