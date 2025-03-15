import { ContentRepository } from "./content.repository";
import { currentUser } from "./context/userContext";
import { octokit } from "./octokit";

export async function getRepositoryOutline() {
  const login = await currentUser();

  const content = await ContentRepository.getRepositoryContent(
    octokit,
    login,
    process.env.GITHUB_REPO!
  );

  if (!content.data) {
    return null;
  }

  if (Array.isArray(content.data)) {
    return content.data.map((dataItem) => {
      return {
        name: dataItem.name,
        type: dataItem.type,
        path: dataItem.path,
      };
    });
  }

  return [
    {
      name: content.data.name,
      type: content.data.type,
      path: content.data.path,
    },
  ];
}

export async function getFile(path: string) {
  const login = await currentUser();

  const content = await ContentRepository.getRepositoryPathContent(
    octokit,
    login,
    process.env.GITHUB_REPO!,
    path
  );

  if (!content.data) {
    return null;
  }

  if (Array.isArray(content.data)) {
    return null;
  }

  if (content.data.type !== "file") {
    return null;
  }

  return {
    name: content.data.name,
    content: atob(content.data.content),
  };
}
