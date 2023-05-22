const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let totalAmount = parseFloat(localStorage.getItem("totalAmount")) || 0;

function removeAllItems() {
  cartItems.length = 0;
  totalAmount = 0;
  updateCart();
  saveCartItems();
}

function removeItem(index) {
  cartItems.splice(index, 1);
  updateCart();
  saveCartItems();
}

function decreaseQuantity(index) {
  const item = cartItems[index];
  if (item.quantity > 0) {
    item.quantity -= 1;
    item.total = item.itemPrice * item.quantity; // Use item.itemPrice instead of item.price
    updateCart();
    saveCartItems();
    updateTotal();
  }
}

function increaseQuantity(index) {
  const item = cartItems[index];
  item.quantity += 1;
  item.total = item.itemPrice * item.quantity; // Use item.itemPrice instead of item.price
  updateCart();
  saveCartItems();
  updateTotal();
}

function addToCart(itemName, itemPrice, imageUrl) {
  const quantity = 1;
  const total = itemPrice * quantity;

  cartItems.push({ itemName, itemPrice, quantity, total, imageUrl });
  totalAmount += total;

  updateCart();
  updateCartCount();

  const cartItemImageElement = document.createElement('img');
  cartItemImageElement.src = imageUrl;
  cartItemImageElement.alt = itemName;

  const cartItemElement = document.createElement('div');
  cartItemElement.classList.add('cart-item');
  cartItemElement.appendChild(cartItemImageElement);

  const cartContentElement = document.getElementById('cartContent');
  cartContentElement.appendChild(cartItemElement);
}


function updateTotal() {
  totalAmount = cartItems.reduce((total, item) => total + item.total, 0);
  const totalAmountElement = document.getElementById("totalAmount");
  totalAmountElement.textContent = `Total: R ${totalAmount.toFixed(2)}`;
}

function initTotal() {
  totalAmount = cartItems.reduce((total, item) => total + item.total, 0);
  updateTotal();
}

initTotal();

function updateCart() {
  const cartContentElement = document.getElementById("cartContent");
  cartContentElement.innerHTML = "";

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];

    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');

    const cartItemImageElement = document.createElement('img');
    cartItemImageElement.src = item.imageUrl;
    cartItemImageElement.alt = item.itemName;

    const cartItemDetailsElement = document.createElement('div');
    cartItemDetailsElement.classList.add('cart-item-details');
    cartItemDetailsElement.innerHTML = `
      <span class="item-name">${item.itemName}</span>
      <div class="quantity-container">
        <button class="btn btn-secondary" onclick="decreaseQuantity(${i})">-</button>
        <span class="item-quantity">${item.quantity}</span>
        <button class="btn btn-secondary" onclick="increaseQuantity(${i})">+</button>
      </div>
      <span class="item-total">Total: R ${item.total.toFixed(2)}</span>
    `;

    const removeButton = document.createElement("button");
    removeButton.className = "btn btn-danger";
    removeButton.textContent = "Remove Item";
    removeButton.onclick = () => removeItem(i);

    cartItemDetailsElement.appendChild(removeButton);
    cartItemElement.appendChild(cartItemImageElement);
    cartItemElement.appendChild(cartItemDetailsElement);
    cartContentElement.appendChild(cartItemElement);
  }

  updateTotal();
}

updateCart();


updateCart();
