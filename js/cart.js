const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let totalAmount = parseFloat(localStorage.getItem('totalAmount')) || 0;

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

}

function updateTotal() {
  totalAmount = cartItems.reduce((total, item) => total + item.total, 0);
  const totalAmountElement = document.getElementById('totalAmount');
  totalAmountElement.textContent = `Total: R ${totalAmount.toFixed(2)}`;
}


function initTotal() {
  totalAmount = cartItems.reduce((total, item) => total + item.total, 0);
  updateTotal();
}

initTotal();



function updateCart() {
  const cartContentElement = document.getElementById('cartContent');
  cartContentElement.innerHTML = '';

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    const itemElement = document.createElement('div');
    itemElement.textContent = `${item.itemName} - Quantity: ${item.quantity} - Total: R ${item.total.toFixed(2)}`;

    const decreaseButton = document.createElement('button');
    decreaseButton.className = 'btn btn-secondary';
    decreaseButton.textContent = '-';
    decreaseButton.onclick = () => decreaseQuantity(i);

    const increaseButton = document.createElement('button');
    increaseButton.className = 'btn btn-secondary';
    increaseButton.textContent = '+';
    increaseButton.onclick = () => increaseQuantity(i);

    const removeButton = document.createElement('button');
    removeButton.className = 'btn btn-danger';
    removeButton.textContent = 'Remove Item';
    removeButton.onclick = () => removeItem(i);

    itemElement.appendChild(decreaseButton);
    itemElement.appendChild(increaseButton);
    itemElement.appendChild(removeButton);
    cartContentElement.appendChild(itemElement);
  }

  totalAmount = cartItems.reduce((total, item) => total + item.total, 0);
  updateTotal();
}


function saveCartItems() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  localStorage.setItem('totalAmount', totalAmount.toString());
}

updateCart();
