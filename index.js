var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 //create an Object
 let toAdd = {
   itemName: item,
   itemPrice: Math.floor(Math.random()*100)
 }
 
 //add to cart 
 cart << toAdd
 //return item has been added to your cart
 
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
