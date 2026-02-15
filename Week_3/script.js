const products = [
    // Electronics Category
    {
        id: 1,
        name: "Apple iPhone 15 Pro",
        price: 999.00,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop",
        description: "The latest iPhone with A17 Pro chip, titanium design, and advanced camera system. Experience cutting-edge performance and stunning photography."
    },
    {
        id: 2,
        name: "Sony WH-1000XM5 Headphones",
        price: 399.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop",
        description: "Industry-leading noise cancellation with exceptional sound quality. 30-hour battery life and premium comfort for all-day listening."
    },
    {
        id: 3,
        name: "Samsung 4K Smart TV 55\"",
        price: 799.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&h=500&fit=crop",
        description: "Crystal clear 4K resolution with HDR support. Smart TV features with built-in streaming apps and voice control."
    },
    {
        id: 4,
        name: "Apple MacBook Pro 14\"",
        price: 1999.00,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
        description: "Powerful M3 Pro chip, stunning Liquid Retina XDR display, and all-day battery life. Perfect for professionals and creators."
    },

    // Fashion Category
    {
        id: 5,
        name: "Nike Air Max 270",
        price: 150.00,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
        description: "Iconic sneakers with Max Air cushioning. Stylish design meets ultimate comfort for everyday wear."
    },
    {
        id: 6,
        name: "Levi's 501 Original Jeans",
        price: 89.99,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
        description: "Classic straight-fit jeans with authentic styling. The original blue jean since 1873."
    },
    {
        id: 7,
        name: "Ray-Ban Aviator Sunglasses",
        price: 179.99,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
        description: "Iconic aviator design with UV protection. Timeless style that never goes out of fashion."
    },
    {
        id: 8,
        name: "Adidas Ultraboost Shoes",
        price: 180.00,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop",
        description: "Premium running shoes with Boost cushioning. Engineered for comfort and performance."
    },

    // Home & Living Category
    {
        id: 9,
        name: "Dyson V15 Vacuum Cleaner",
        price: 649.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&h=500&fit=crop",
        description: "Powerful cordless vacuum with laser detection. Advanced filtration and up to 60 minutes runtime."
    },
    {
        id: 10,
        name: "KitchenAid Stand Mixer",
        price: 429.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1578643463396-0997cb5328c5?w=500&h=500&fit=crop",
        description: "Professional 5-quart stand mixer with 10 speeds. Perfect for baking and cooking enthusiasts."
    },
    {
        id: 11,
        name: "Nespresso Coffee Machine",
        price: 199.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop",
        description: "Premium espresso maker with milk frother. Barista-quality coffee at home with one-touch brewing."
    },
    {
        id: 12,
        name: "Instant Pot Duo 7-in-1",
        price: 99.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&h=500&fit=crop",
        description: "Multi-functional pressure cooker, slow cooker, and more. Cook meals faster while preserving nutrients."
    },

    // Sports Category
    {
        id: 13,
        name: "Peloton Exercise Bike",
        price: 1445.00,
        category: "sports",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop",
        description: "Premium indoor cycling bike with live classes. Transform your home into a fitness studio."
    },
    {
        id: 14,
        name: "Bowflex Adjustable Dumbbells",
        price: 349.00,
        category: "sports",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=500&fit=crop",
        description: "Space-saving dumbbells that adjust from 5 to 52.5 lbs. Perfect for home gym workouts."
    },
    {
        id: 15,
        name: "Garmin Forerunner Watch",
        price: 299.99,
        category: "sports",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop",
        description: "GPS running watch with heart rate monitoring. Track your fitness goals with advanced metrics."
    },
    {
        id: 16,
        name: "Manduka PRO Yoga Mat",
        price: 120.00,
        category: "sports",
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
        description: "Premium yoga mat with superior grip and cushioning. Lifetime guaranteed for dedicated practitioners."
    }
];

// GLOBAL VARIABLES

let cart = [];
let currentProduct = null;
let displayedProducts = [...products];
let moreProductsLoaded = true; // All products loaded from start

// INITIALIZE ON PAGE LOAD

document.addEventListener('DOMContentLoaded', function() {
    console.log('SmartCart Week 3: Full functionality loaded!');
    
    // Render products
    renderProducts(displayedProducts);
    
    // Load cart from localStorage
    loadCartFromStorage();
    
    // Attach event listeners
    attachEventListeners();
});

// RENDER PRODUCTS

function renderProducts(productArray) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    
    if (productArray.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No products found.</p>';
        return;
    }
    
    productArray.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-details">
                <span class="product-category-badge">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="buy-now-btn">View Details</button>
            </div>
        `;
        
        productCard.addEventListener('click', () => openProductModal(product));
        productGrid.appendChild(productCard);
    });
}

// PRODUCT MODAL

function openProductModal(product) {
    currentProduct = product;
    
    // Reset quantity
    document.getElementById('qtyInput').value = 1;
    
    // Populate modal
    document.getElementById('modalProductTitle').textContent = product.name;
    document.getElementById('modalProductCategory').textContent = product.category.toUpperCase();
    document.getElementById('modalProductPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('mainImage').src = product.image;
    
    // Show modal
    document.getElementById('productModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// SHOPPING CART

function addToCart() {
    if (!currentProduct) return;
    
    const quantity = parseInt(document.getElementById('qtyInput').value);
    const size = document.getElementById('sizeDropdown').value;
    
    // Check if product exists in cart
    const existingIndex = cart.findIndex(item => item.id === currentProduct.id);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            ...currentProduct,
            quantity: quantity,
            size: size
        });
    }
    
    updateCartCount();
    saveCartToStorage();
    animateCartIcon();
    
    alert(`${currentProduct.name} (x${quantity}) added to cart!`);
    closeProductModal();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    saveCartToStorage();
    renderCartItems();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

function animateCartIcon() {
    const cartIcon = document.getElementById('cartIcon');
    cartIcon.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 300);
}

// CART MODAL

function openCartModal() {
    renderCartItems();
    document.getElementById('cartModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    document.getElementById('cartModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        cartEmpty.style.display = 'block';
        cartTotal.textContent = '$0.00';
        return;
    }
    
    cartEmpty.style.display = 'none';
    cartItemsContainer.innerHTML = '';
    
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">Quantity: ${item.quantity} | Size: ${item.size || 'N/A'}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})">Remove</button>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for your order!\n\nTotal: $${total.toFixed(2)}\n\nThis is a demo. No actual payment will be processed.`);
    
    cart = [];
    updateCartCount();
    saveCartToStorage();
    closeCartModal();
}

// LOCALSTORAGE

function saveCartToStorage() {
    localStorage.setItem('smartCartItems', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('smartCartItems');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartCount();
    }
}

// SEARCH & FILTER

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayedProducts = [...products];
    } else {
        displayedProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    renderProducts(displayedProducts);
}

function filterByCategory(category) {
    if (category === 'all') {
        displayedProducts = [...products];
    } else {
        displayedProducts = products.filter(product => product.category === category);
    }
    
    renderProducts(displayedProducts);
    document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
}

// EVENT LISTENERS

function attachEventListeners() {
    // Hero CTA
    document.getElementById('ctaBtn').addEventListener('click', () => {
        document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Search
    document.getElementById('searchBtn').addEventListener('click', searchProducts);
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchProducts();
    });
    
    // Load More (hide since all products loaded)
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    loadMoreBtn.textContent = 'All Products Loaded';
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.display = 'none';
    
    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            filterByCategory(this.dataset.category);
        });
    });
    
    // Promo button
    document.querySelector('.promo-btn').addEventListener('click', () => {
        document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Cart icon
    document.getElementById('cartIcon').addEventListener('click', openCartModal);
    
    // Modal close buttons
    document.getElementById('closeModal').addEventListener('click', closeProductModal);
    document.getElementById('closeCartModal').addEventListener('click', closeCartModal);
    
    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeProductModal();
            closeCartModal();
        }
    });
    
    // Add to cart button
    document.getElementById('addToCartBtn').addEventListener('click', addToCart);
    
    // Quantity controls
    document.getElementById('increaseQty').addEventListener('click', () => {
        const input = document.getElementById('qtyInput');
        const current = parseInt(input.value);
        if (current < 10) input.value = current + 1;
    });
    
    document.getElementById('decreaseQty').addEventListener('click', () => {
        const input = document.getElementById('qtyInput');
        const current = parseInt(input.value);
        if (current > 1) input.value = current - 1;
    });
    
    // Checkout button
    document.getElementById('checkoutBtn').addEventListener('click', checkout);
}
