export function renderProducts(products) {
  const container = document.getElementById("products-list");
  const template = document.getElementById("product-card-template");

  container.innerHTML = "";

  const fragment = document.createDocumentFragment();
  products.forEach((product) => {
    const clone = template.content.cloneNode(true);

    const titleEl = clone.querySelector("[data-field='title']");
    const priceEl = clone.querySelector("[data-field='price']");
    const imageEl = clone.querySelector("[data-field='image']");
    const descEl = clone.querySelector("[data-field='description']");

    if (titleEl) titleEl.textContent = product.title;
    if (priceEl) priceEl.textContent = `${product.price} $`;
    if (imageEl) {
      imageEl.src = product.thumbnail;
      imageEl.alt = product.title;
    }
    if (descEl) descEl.textContent = product.description;

    fragment.appendChild(clone);
  });

  container.appendChild(fragment);
}
