
import { products } from "./products.js";
import { createCartItemRow } from "./cartList.js";


const cart = [];


const buy = (id) => {

    const product = products.find(item => item.id === id);
    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        const productToAdd = { ...product, quantity: 1};
        cart.push(productToAdd);
    }
    updateCartCount();
}



const cleanCart = () => {
    cart.length = 0;
    printCart();
    updateCartCount();
};


const applyPromotionsCart = () =>  {
    cart.forEach(product => { 
      delete product.subtotalWithDiscount;
        if (product.id === 1 && product.quantity >= 3) {
            product.subtotalWithDiscount = product.price * product.quantity * 0.8;
          } else if (product.id === 3 && product.quantity >= 10) {
              product.subtotalWithDiscount = product.price * product.quantity * 0.7;
            }
      });
}


const printCart = () => {
  const cartList = document.getElementById('cart_list');
  const totalElement = document.getElementById('total_price');

  if (!cartList || !totalElement) return;

  cartList.innerHTML = '';

  applyPromotionsCart();

  let total = 0;

  cart.forEach(product => {
    const subtotal = product.subtotalWithDiscount !== undefined
      ? product.subtotalWithDiscount
      : product.price * product.quantity;

    total += subtotal;

    cartList.innerHTML += createCartItemRow(product, subtotal);
  });

  totalElement.textContent = total.toFixed(2);

    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const id = parseInt(button.getAttribute('data-id'));
        removeFromCart(id);
      });
    });

    const addButtons = document.querySelectorAll('.add-one');
    addButtons.forEach(button => {
      button.addEventListener('click', () => {
        const id = parseInt(button.getAttribute('data-id'));
        buy(id);
        printCart();
      });
    });
};


const removeFromCart = (id) => {
  const productIndex = cart.findIndex(item => item.id === id);

  if (productIndex !== -1) {
    const product = cart[productIndex];

    if (product.quantity > 1) {
      product.quantity--;
      } else {
          cart.splice(productIndex, 1); 
        }

    applyPromotionsCart(); 
    printCart();  
    updateCartCount();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = parseInt(button.getAttribute('data-product-id'));
      buy(id);
    });
  });

  const cleanButton = document.getElementById('clean-cart');
  if (cleanButton) {
    cleanButton.addEventListener('click', cleanCart);
  }

  const cartButton = document.querySelector('[data-bs-target="#cartModal"]');
  if (cartButton) {
    cartButton.addEventListener('click', printCart);
  }
});


const updateCartCount = () => {
  const countElement = document.getElementById('count_product');
  if (countElement) {
    const totalCount = cart.reduce((acc, product) => acc + product.quantity, 0);
    countElement.textContent = totalCount;
  }
};
