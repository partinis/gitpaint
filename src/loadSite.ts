import fetch from "node-fetch";

export const loadSite = async (userName: string) => {
  const response = await fetch("https://github.com/" + userName);
  if (!response.ok) throw new Error(response.statusText);
  return await response.text();
};
