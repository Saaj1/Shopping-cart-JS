let cartItems = [];
  let totalAmount = 0;

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
    document.getElementById('cartContent').appendChild(cartItemImageElement);
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
