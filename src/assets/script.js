/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

const products = [
  {
    name: "Cherry",
    price: 2.99,
    quantity: 0,
    productId: 1,
    image: "images/cherry.jpg"
  },
  {
    name: "Orange",
    price: 1.99,
    quantity: 0,
    productId: 2,
    image: "images/orange.jpg"

  },
  {
    name: "Strawberry",
    price: 3.49,
    quantity: 0,
    productId: 3,
    image: "images/strawberry.jpg"
  }

];
// an empty array named cart holds the products added to the shopping cart.
let cart = [];
// variable to keep track of total paid amount
let totalPaid = 0;
// helper function to get product by id
function getProductById(productId) {
  return products.find(item => item.productId === productId);
}
// add product to cart function finds product by id and adds it to cart and increases quantity to 1
function addProductToCart(addProductId)
{
  const product = getProductById(addProductId);
  if (product) 
  {
    product.quantity++;
    const cartItem = cart.find(item => item.productId === addProductId);
    if (!cartItem) 
    {
      cart.push(product);
    }
  }
}

// increase quantity function increases quantity of product in cart by 1 each time
function increaseQuantity(productId) 
{
  const product = getProductById(productId);
  if(product)
  {
    product.quantity++;
  }
}

// decrease quantity function decreases quantity of product in cart by 1 each time 
function decreaseQuantity(productId)
{
  const product = getProductById(productId);
  if(product && product.quantity >0)
  {
    product.quantity--;
    if(product.quantity === 0)
    {
      const index = cart.findIndex(p => p.productId === productId);
        if (index !== -1) 
        {
          cart.splice(index, 1);
        }
   }
  }
  
}
// remove product from cart function removes product from cart regardless of quantity
function removeProductFromCart(productId)
{
  const product = getProductById(productId);
  if(product)
  {
    product.quantity = 0;
    const index = cart.findIndex(p => p.productId === productId);
    if (index !== -1) 
    {
      cart.splice(index, 1);
    }

  }
}

// cart total function calculates total cost of all products in cart
function cartTotal()
{
  let total =0;
  for(const item of cart)
  {
    total += item.price * item.quantity;
  }

  return total;
}
// function emptyCart empties the products from the cart
function emptyCart()
{
  cart.forEach(item => item.quantity = 0);
  cart = [];

  drawCart();
}


// pay function takes an amount and returns the change after paying for the cart total

function pay(amount)
{
  totalPaid += amount;

  const totalCost = cartTotal();
  const remainingBalance = totalPaid - totalCost;

  if(remainingBalance >= 0)
  {
    emptyCart();
    totalPaid = 0;
  }

  return remainingBalance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

// currency converter function converts product prices based on selected currency
function currency(selectedCurrency) {
    switch(selectedCurrency) {
        case 'EUR':
            products.forEach(p => p.price = +(p.price * 0.87).toFixed(2)); 
            break;
        case 'YEN':
            products.forEach(p => p.price = +(p.price * 154.01).toFixed(2)); 
            break;
        default: // USD
            products.forEach(p => {
                
                if(p.productId === 1) p.price = 2.99;
                if(p.productId === 2) p.price = 1.99;
                if(p.productId === 3) p.price = 3.49;
            });
            break;
    }
}


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

// module.exports allows the functions and variables to be used in other files
module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   currency
}
