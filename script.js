// JavaScript code for the functionality

// Get the login link element by its ID
var loginLink = document.getElementById('loginLink');

// Add a click event listener to the login link
loginLink.addEventListener('click', function() {
  // Display a login prompt when the link is clicked
  var username = prompt('Enter your username:');
  var password = prompt('Enter your password:');
  
  // Create an empty array to store the cart items
var cart = [];

// Function to add an item to the cart
function addItemToCart(item) {
  cart.push(item);
}

// Example usage
var item1 = { name: "Product 1", price: 10 };
addItemToCart(item1);

console.log(cart); // Output: [{ name: "Product 1", price: 10 }]


  // Perform some validation
  if (username && password) {
    // If both usern are providey, show a success message
    alert('Login successful! Welcome, ' + username + '!');
  } else {
    // If either username or password is missing, show an error message
    alert('Invalid login. Please try again.');
  }
})
// Food menu array with items and prices



// Set initial cart item count
let itemCount = 0;
cartItems.innerText = itemCount;

// Add event listener to cart icon
cartIcon.addEventListener('click', function() {
  itemCount++;
  cartItems.innerText = itemCount;
});


// Function to display the food menu
function displayMenu() {
  var menuElement = document.getElementById("menu");

  // Iterate over the menu array and create HTML elements for each item
  for (var i = 0; i < menu.length; i++) {
    var item = menu[i];
    var itemElement = document.createElement("div");
    itemElement.innerHTML = item.name + " - $" + item.price;
    
    var addButton = document.createElement("button");
    addButton.innerHTML = "Add to Cart";
    addButton.addEventListener("click", createAddToCartHandler(item));

    itemElement.appendChild(addButton);
    menuElement.appendChild(itemElement);
  }
}

// Function to create a closure for the add to cart event handler
function createAddToCartHandler(item) {
  return function() {
    addItemToCart(item);
    displayCart();
  }
}

// Function to display the cart
function displayCart() {
  var cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";

  // Iterate over the cart array and create HTML elements for each item
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var itemElement = document.createElement("div");
    itemElement.innerHTML = item.name + " - $" + item.price;
    cartElement.appendChild(itemElement);
  }
}

// Call the displayMenu function to initialize the food menu
displayMenu();

// Function to add items to the cart
function addToCart(foodName, price) {
  // Create a new list item
  var listItem = document.createElement("li");
  listItem.innerText = foodName + " - $" + price.toFixed(2);

  // Append the list item to the cart
  var cartItems = document.getElementById("cart-items");
  cartItems.appendChild(listItem);
}

// Function to handle the checkout button
function checkout() {
  var cartItems = document.getElementById("cart-items");

  // Clear the cart
  while (cartItems.firstChild) {
    cartItems.removeChild(cartItems.firstChild);
  }

  // Display a confirmation message
  alert("Thank you for your order!");
}
// cart area//
function toggleCart() {
  var cartContent = document.getElementById("cartContent");
  cartContent.style.display = cartContent.style.display === "none" ? "block" : "none";
}

function addToCart(itemName, price) {
  var cartItemsList = document.getElementById("cartItemsList");
  var newItem = document.createElement("li");
  newItem.textContent = itemName + " - $" + price.toFixed(2);
  cartItemsList.appendChild(newItem);
  
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var itemCount = parseInt(cartItems.textContent) + 1;
  cartItems.textContent = itemCount;
}



