
const products = [
    // Electronics Category
    {
        id: 1,
        name: "Apple iPhone 15 Pro",
        price: 999.00,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop"
    },
    {
        id: 2,
        name: "Sony WH-1000XM5 Headphones",
        price: 399.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop"
    },
    {
        id: 3,
        name: "Samsung 4K Smart TV 55\"",
        price: 799.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&h=500&fit=crop"
    },

    // Fashion Category
    {
        id: 4,
        name: "Nike Air Max 270",
        price: 150.00,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop"
    },
    {
        id: 5,
        name: "Levi's 501 Original Jeans",
        price: 89.99,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop"
    },
    {
        id: 6,
        name: "Ray-Ban Aviator Sunglasses",
        price: 179.99,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop"
    },

    // Home & Living Category
    {
        id: 7,
        name: "Dyson V15 Vacuum Cleaner",
        price: 649.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&h=500&fit=crop"
    },
    {
        id: 8,
        name: "KitchenAid Stand Mixer",
        price: 429.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1578643463396-0997cb5328c5?w=500&h=500&fit=crop"
    },
    {
        id: 9,
        name: "Nespresso Coffee Machine",
        price: 199.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop"
    },

    // Sports Category
    {
        id: 10,
        name: "Peloton Exercise Bike",
        price: 1445.00,
        category: "sports",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop"
    },
    {
        id: 11,
        name: "Bowflex Adjustable Dumbbells",
        price: 349.00,
        category: "sports",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=500&fit=crop"
    },
    {
        id: 12,
        name: "Garmin Forerunner Watch",
        price: 299.99,
        category: "sports",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop"
    }
];

// Additional products for Load More
const moreProducts = [
    {
        id: 13,
        name: "Apple MacBook Pro 14\"",
        price: 1999.00,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop"
    },
    {
        id: 14,
        name: "Adidas Ultraboost Shoes",
        price: 180.00,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop"
    },
    {
        id: 15,
        name: "Instant Pot Duo 7-in-1",
        price: 99.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&h=500&fit=crop"
    },
    {
        id: 16,
        name: "Manduka PRO Yoga Mat",
        price: 120.00,
        category: "sports",
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop"
    }
];

// GLOBAL VARIABLES

let displayedProducts = [...products];
let moreProductsLoaded = false;

// INITIALIZE ON PAGE LOAD

document.addEventListener('DOMContentLoaded', function() {
    console.log('SmartCart Week 2: Home Page & Product Listing loaded!');
    
    // Render products
    renderProducts(displayedProducts);
    
    // Attach event listeners
    attachEventListeners();
});

// RENDER PRODUCTS TO GRID

function renderProducts(productArray) {
    const productGrid = document.getElementById('productGrid');
    
    // Clear existing products
    productGrid.innerHTML = '';
    
    productArray.forEach(product => {
        // Create product card
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.productId = product.id;
        
        // Build HTML
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-details">
                <span class="product-category-badge">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="buy-now-btn" onclick="buyNow(${product.id})">Buy Now</button>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
}

// BUY NOW FUNCTION (Placeholder for Week 3)

function buyNow(productId) {
    const product = [...products, ...moreProducts].find(p => p.id === productId);
    
    if (product) {
        alert(`"${product.name}" will be added to cart in Week 3!\nPrice: $${product.price.toFixed(2)}`);
        console.log(`Product clicked: ${product.name}`);
    }
}

// LOAD MORE PRODUCTS

function loadMoreProducts() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (moreProductsLoaded) {
        alert('All products have been loaded!');
        return;
    }
    
    // Add more products to display
    displayedProducts = [...displayedProducts, ...moreProducts];
    
    // Re-render
    renderProducts(displayedProducts);
    
    // Update state
    moreProductsLoaded = true;
    
    // Update button
    loadMoreBtn.textContent = 'All Products Loaded';
    loadMoreBtn.disabled = true;
    
    // Scroll to new products
    setTimeout(() => {
        const lastProduct = document.querySelector('.product-card:last-child');
        if (lastProduct) {
            lastProduct.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
}

// SEARCH PRODUCTS

function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        // Show all products
        displayedProducts = moreProductsLoaded ? [...products, ...moreProducts] : [...products];
        renderProducts(displayedProducts);
        return;
    }
    
    // Filter products
    const allProducts = moreProductsLoaded ? [...products, ...moreProducts] : [...products];
    const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    if (filteredProducts.length > 0) {
        renderProducts(filteredProducts);
        console.log(`Found ${filteredProducts.length} products for "${searchTerm}"`);
    } else {
        document.getElementById('productGrid').innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <h3 style="font-size: 24px; color: #888; margin-bottom: 10px;">No products found</h3>
                <p style="color: #999;">Try searching for something else</p>
            </div>
        `;
    }
}

// CATEGORY FILTER

function filterByCategory(category) {
    const allProducts = moreProductsLoaded ? [...products, ...moreProducts] : [...products];
    
    if (category === 'all') {
        renderProducts(allProducts);
    } else {
        const filteredProducts = allProducts.filter(product => product.category === category);
        renderProducts(filteredProducts);
    }
    
    // Scroll to products section
    document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
}

// ATTACH EVENT LISTENERS

function attachEventListeners() {
    // Hero CTA button
    const ctaBtn = document.getElementById('ctaBtn');
    ctaBtn.addEventListener('click', function() {
        document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Search button
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', searchProducts);
    
    // Search on Enter key
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
    
    // Load More button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    loadMoreBtn.addEventListener('click', loadMoreProducts);
    
    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterByCategory(category);
        });
    });
    
    // Navigation links (from Week 1)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Cart icon (placeholder)
    const cartIcon = document.getElementById('cartIcon');
    cartIcon.addEventListener('click', function() {
        alert('Shopping cart will be implemented in Week 3!');
    });
    
    // Promo button
    const promoBtn = document.querySelector('.promo-btn');
    promoBtn.addEventListener('click', function() {
        document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
    });
}
