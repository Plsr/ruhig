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

  static async updateFile({
    octokit,
    content,
    user,
    path,
    sha,
  }: {
    octokit: Octokit;
    content: string;
    user: string;
    path: string;
    sha: string;
  }) {
    const res = await octokit.rest.repos.createOrUpdateFileContents({
      owner: user,
      repo: process.env.GITHUB_REPO!,
      path,
      message: `(ruhig) Update ${path}`,
      content: content,
      sha,
      commiter: {
        name: "ruhig Bot",
        email: "ruhig@example.com",
      },
    });

    return res.status;
  }
}
