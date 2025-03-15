import { octokit } from "../octokit";

export const currentUser = async () => {
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();

  return login;
};
