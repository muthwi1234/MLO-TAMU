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
  