import { getProducts } from "./api/product.js";
import { showLoading, hideLoading, showError } from "./ui/loader/loader.js";
import { renderProducts } from "./ui/render/renderer.js";

async function init() {
  try {
    showLoading();
    const data = await getProducts();
    renderProducts(data.products);
  } catch (err) {
    showError(err.message);
  } finally {
    hideLoading();
  }
}

init();
