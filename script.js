let cartCount = 0;

const products = {
    laptops: [
        { id: 1, name: "Dell XPS 13", price: 999.99, image:"/dell.png"},
        { id: 2, name: "MacBook Pro", price: 1299.99, image: "https://via.placeholder.com/200" },
    ],
    smartphones: [
        { id: 1, name: "iPhone 14", price: 799.99, image: "https://via.placeholder.com/200" },
        { id: 2, name: "Samsung Galaxy S23", price: 899.99, image: "https://via.placeholder.com/200" },
    ],
    accessories: [
        { id: 1, name: "Wireless Mouse", price: 29.99, image: "https://via.placeholder.com/200" },
        { id: 2, name: "Bluetooth Headphones", price: 59.99, image: "https://via.placeholder.com/200" },
    ],
};

function loadProducts(category) {
    const productListDiv = document.getElementById('product-list');
    productListDiv.innerHTML = "";  // Clear previous products

    const categoryProducts = products[category];
    categoryProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productListDiv.appendChild(productDiv);
    });
}

function addToCart(productId) {
    cartCount++;
    document.getElementById('cart-count').textContent = `Cart: ${cartCount}`;
}

// Default to show laptops
loadProducts('laptops');
