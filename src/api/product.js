import { request } from "./client.js";

export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString();
  const endpoint = query ? `/products?${query}` : "/products";
  return await request(endpoint);
}
