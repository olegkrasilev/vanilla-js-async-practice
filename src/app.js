import { request } from "./api/client.js";

async function init() {
  const data = await request("/products");
  console.log(data);
}

init();
