

export function createCartItemRow(product, subtotal) {
  return `
    <tr>
      <td><img src="${product.img}" alt="${product.name}" class="cart-thumbnail" /></td>
      <td>${product.name}</td>
      <td>$${product.price.toFixed(2)}</td>
      <td>
        <div class="d-flex justify-content-between align-items-center">
          <span>${product.quantity}</span>
          <button class=" add-one btn btn-outline-secondary btn-tight" data-id="${product.id}">+</button>
          <button class="remove-item btn btn-outline-secondary btn-tight" data-id="${product.id}">-</button>
        </div>
      </td>
      <td class="text-end">$${subtotal.toFixed(2)}</td>
    </tr>
  `;
}
