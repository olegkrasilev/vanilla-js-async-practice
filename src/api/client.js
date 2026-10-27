import { BASE_URL } from "../constant/constant.js";

/**
 * @param {string} endpoint
 * @param {RequestInit} [options={}]
 * @returns {Promise<any>}
 * @throws {Error}
 */
export async function request(endpoint, options = {}) {
  const url = new URL(endpoint, BASE_URL);
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return data;
}
