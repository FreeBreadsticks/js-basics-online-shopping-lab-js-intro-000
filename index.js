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
   'itemName': item,
   'itemPrice': Math.floor(Math.random()*100)
 }
 console.log(toAdd)

 cart.push(toAdd)
  console.log(cart)
  console.log(getCart())

 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  //iterate over contents of the cart
  // return strings as appropriate
  //check if cart is empty first
  if (getCart().length === 0) {
    return "Your shopping cart is empty."
  }
  else if (getCart().length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at ${getCart()[0].itemPrice}`
  }
  
  // for (let i = 0; i < getCart().length; i++) {
    
      
    
  // }
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
