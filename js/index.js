// let cartItems = [];
// let totalAmount = 0;

// function addToCart(itemName, itemPrice) {
//   const quantity = 1;
//   const total = itemPrice * quantity;

//   cartItems.push({ itemName, quantity, total });
//   totalAmount += total;

//   updateCart();
//   updateCartCount();
// }

// function removeAllItems() {
//   cartItems = [];
//   totalAmount = 0;

//   updateCart();
//   updateCartCount();
// }

// function updateCart() {
//   const cartContent = document.getElementById('cartContent');
//   cartContent.innerHTML = '';

//   cartItems.forEach((item, index) => {
//     const itemElement = document.createElement('div');
//     itemElement.classList.add('item');
//     itemElement.innerHTML = `Item: ${item.itemName}, Quantity: ${item.quantity}, Total: $${item.total.toFixed(2)}`;
//     cartContent.appendChild(itemElement);
//   });

//   const totalAmountElement = document.getElementById('totalAmount');
//   totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
// }

// function updateCartCount() {
//   const cartCountElement = document.getElementById('cartCount');
//   cartCountElement.textContent = cartItems.length;
// }

// function openCartPage() {
//   // Save cartItems and totalAmount to local storage or send them to the server
//   // Redirect to the cart.html page
//   location.href = '/html/cart.html';
// }

let cartItems = [];
let totalAmount = 0;

function addToCart(itemName, itemPrice) {
  const quantity = 1;
  const total = itemPrice * quantity;

  cartItems.push({ itemName, quantity, total });
  totalAmount += total;

  updateCart();
  updateCartCount();
}

function updateCart() {
  // Update the cart content and total amount display logic
  // ...
}

function updateCartCount() {
  const cartCountElement = document.getElementById('cartCount');
  cartCountElement.textContent = cartItems.length.toString();
}


function openCartPage() {
  // Save cartItems and totalAmount to local storage or send them to the server
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  localStorage.setItem('totalAmount', totalAmount.toString());

  // Redirect to the cart.html page
  location.href = '/html/cart.html';
}
