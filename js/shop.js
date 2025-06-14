// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
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
}
    document.addEventListener(`DOMContentLoaded`, () => {
    const addToCartButtons = document.querySelectorAll(`.add-to-cart`);
        addToCartButtons.forEach(button => {
            button.addEventListener(`click`, () => {
                const id = parseInt(button.getAttribute(`data-product-id`));
                buy(id);
            });
        });
    });

// Exercise 2
const cleanCart = () => {
    cart.length = 0;
    printCart();
    console.log('Carrito vaciado:', cart);
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
});


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
  const cartList = document.querySelector('.list');
  const totalElement = document.querySelector('.bill');

  // Limpiar contenido anterior
  cartList.innerHTML = '';

  // Asegurar que se aplican las promociones
  applyPromotionsCart();

  // Imprimir cada producto del carrito
  cart.forEach(product => {
    const subtotal = product.subtotalWithDiscount !== undefined ? product.subtotalWithDiscount : product.price * product.quantity;

    cartList.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="fw-bold">${product.name}</span>
        <span>$${product.price.toFixed(2)} x ${product.quantity}</span>
        <span class="fw-semibold">$${subtotal.toFixed(2)}</span>
      </li>
    `;
  });

  // Calcular total global
  let total = 0;
  cart.forEach(product => {
    const subtotal = product.subtotalWithDiscount !== undefined ? product.subtotalWithDiscount : product.price * product.quantity;
    total += subtotal;
  });

  // Mostrar total
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
};



// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {

}

const open_modal = () =>  {
    printCart();
}