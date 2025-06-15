// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        img: 'images/Cooking oil.png',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery',
        img: 'images/Pasta.png',
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        img: 'images/Instant cupcake mixture.png',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty',
        img: 'images/All-in-1.png',
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty',
        img: 'images/Zero makeup kit.png',
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty',
        img: 'images/Lip Tints.png',
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes',
        img: 'images/Lawn Dress.png',
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes',
        img: 'images/Lawn-Chiffon Combo.png',
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes',
        img: 'images/Toddler Frock.png',
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

const total = 0;

// Exercise 1
const buy = (id) => {

    const product = products.find(item => item.id === id);
    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        const productToAdd = { ...product, quantity: 1};
        cart.push(productToAdd);
    }
    console.log(cart);
    updateCartCount();
}


// Exercise 2
const cleanCart = () => {
    cart.length = 0;
    printCart();
    console.log('Carrito vaciado:', cart);
    updateCartCount();
};


// Exercise 3
const calculateTotal = () =>  {

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    console.log('Total del carrito:', total);
    return total;
}

// Exercise 4
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

// Exercise 5

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

    cartList.innerHTML += `
      <tr>
        <td><img src="${product.img}" alt="${product.name}" class="cart-thumbnail" /></td>
        <td>${product.name}</td>
        <td>$${product.price.toFixed(2)}</td>
        <td>${product.quantity}</td>
        <td>$${subtotal.toFixed(2)}</td>
      </tr>
    `;
  });

  totalElement.textContent = total.toFixed(2);
};




// ** Nivell II **

// Exercise 7
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


const open_modal = () =>  {
    printCart();
}

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
