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
import { tooltipFactory, TooltipProvider } from "@milkdown/kit/plugin/tooltip";
import { gfm } from "@milkdown/kit/preset/gfm";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import type { EditorView } from "prosemirror-view";

import { nord } from "@milkdown/theme-nord";
import "@milkdown/theme-nord/style.css";
import { usePluginViewFactory } from "@prosemirror-adapter/react";
import { tooltip, TooltipView } from "./Tooltip";

type Props = {
  content: string;
  path: string;
  sha: string;
};

export const EditContent = ({ content, path, sha }: Props) => {
  const handleSave = async () => {
    console.log("save");
  };

  return (
    <>
      <div>{content}</div>
      <button onClick={handleSave}>Save</button>
    </>
  );
};
