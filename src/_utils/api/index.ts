import { RequestInfo } from "undici-types";

async function fetchData(url: RequestInfo) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  return fetchData(url);
}

export async function getAlbums(id: string) {
  const url = `https://jsonplaceholder.typicode.com/albums?userId=${id}`;
  return fetchData(url);
}

export async function getPosts(id: string) {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
  return fetchData(url);
}
