
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

function decreaseQuantity() {
  var input = document.getElementById("quantity");
  var currentValue = parseInt(input.value);
  if (currentValue > 0) {
    input.value = currentValue - 1;
  }
}

function increaseQuantity() {
  var input = document.getElementById("quantity");
  var currentValue = parseInt(input.value);
  input.value = currentValue + 1;
}

function updateCart() {
  const cartContentElement = document.getElementById('cartContent');
  const totalAmountElement = document.getElementById('totalAmount');

  cartContentElement.innerHTML = '';

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    const itemElement = document.createElement('div');
    itemElement.textContent = `${item.itemName} - Quantity: ${item.quantity} - Total: $${item.total.toFixed(2)}`;

    const decreaseButton = document.createElement('button');
    decreaseButton.className = 'btn btn-secondary';
    decreaseButton.textContent = '-';
    decreaseButton.onclick = () => decreaseQuantity();

    const increaseButton = document.createElement('button');
    increaseButton.className = 'btn btn-secondary';
    increaseButton.textContent = '+';
    increaseButton.onclick = () => increaseQuantity();

    const removeButton = document.createElement('button');
    removeButton.className = 'btn btn-danger';
    removeButton.textContent = 'Remove Item';
    removeButton.onclick = () => removeItem(i);

    itemElement.appendChild(decreaseButton);
    itemElement.appendChild(increaseButton);
    itemElement.appendChild(removeButton);
    cartContentElement.appendChild(itemElement);
  }

  totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
}

function saveCartItems() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  localStorage.setItem('totalAmount', totalAmount.toString());
}

updateCart();
