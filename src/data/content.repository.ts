import { Octokit } from "octokit";

export class ContentRepository {
  constructor() {
    throw new Error("Not intended for instantiation");
  }

  static async getRepositoryContent(
    octokit: Octokit,
    user: string,
    repository: string
  ) {
    const content = await octokit.rest.repos.getContent({
      owner: user,
      repo: repository,
      path: "",
    });

    return content;
  }

  static async getRepositoryPathContent(
    octokit: Octokit,
    user: string,
    repository: string,
    path: string
  ) {
    const content = await octokit.rest.repos.getContent({
      owner: user,
      repo: repository,
      path,
    });

    return content;
  }
}
