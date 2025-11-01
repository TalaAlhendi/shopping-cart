/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
  {
    name: "Cherry",
    price: 2.99,
    quantity: 0,
    productId: 1,
    image: "/assets/images/cherry.jpg"
  },
  {
    name: "Orange",
    price: 1.99,
    quantity: 0,
    productId: 2,
    image: "assets/images/orange.jpg"

  },
  {
    name: "Strawberry",
    price: 3.49,
    quantity: 0,
    productId: 3,
    image: "/assets/images/strawberry.jpg"
  }

];

let cart = [];

function addProductToCart(addProductId)
{
  const product = products.find(item => item.productId === addProductId);
  if (product) {
    product.quantity++;
    const cartItem = cart.find(item => item.productId === addProductId);
    if (!cartItem) {
      cart.push(product);
    }
  }
}

function increaseQuantity(productId) 
{
  const product = products.find(item => item.productId === productId);
  if(product)
  {
    product.quantity++;
  }
}


function decreaseQuantity(productId)
{
  const product = products.find(item => item.productId === productId);
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

function removeProductFromCart(productId)
{
  const product = products.find(item => item.productId === productId);
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

function cartTotal()
{
  let total =0;
  for(const item of cart)
  {
    total += item.price * item.quantity;
  }

  return total;
}
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart()
{
  cart.forEach(item => item.quantity = 0);
  cart = [];
}

function pay(amount)
{
  const totalCost = cartTotal();

  if(amount >= totalCost)
  {
    emptyCart();
  }

  return amount - totalCost;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

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
   //currency
}
