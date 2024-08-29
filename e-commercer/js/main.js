// // Select all elements
// const navList = document.getElementById('navlist');
// const productList = document.querySelectorAll('.product-item');
// const cartButton = document.getElementById('cart');
// const profileButton = document.getElementById('profile');
// const searchBar = document.querySelector('.search-bar');

// // Add event listeners
// navList.addEventListener('click', (e) => {
//   if (e.target.tagName === 'A') {
//     // Handle navigation clicks
//     console.log(`Navigating to ${e.target.href}`);
//   }
// });

// productList.forEach((product) => {
//   const addButton = product.querySelector('.add-to-cart-btn');
//   addButton.addEventListener('click', () => {
//     // Add product to cart
//     console.log(`Adding ${product.querySelector('.product-name').textContent} to cart`);
//   });
// });

// cartButton.addEventListener('click', () => {
//   // Handle cart button click
//   console.log('Cart button clicked');
// });

// profileButton.addEventListener('click', () => {
//   // Handle profile button click
//   console.log('Profile button clicked');
// });

// searchBar.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const searchQuery = searchBar.querySelector('input').value;
//   console.log(`Searching for ${searchQuery}`);
//   // Handle search query
// });

// // Initialize cart
// let cart = [];

// // Function to add product to cart
// function addToCart(product) {
//   cart.push(product);
//   console.log(`Added ${product.querySelector('.product-name').textContent} to cart`);
//   updateCartCount();
// }

// // Function to update cart count
// function updateCartCount() {
//   const cartCount = cart.length;
//   cartButton.textContent = `Cart (${cartCount})`;
// }

// // Initialize cart count
// updateCartCount();