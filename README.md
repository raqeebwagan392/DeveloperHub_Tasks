# SmartCart eCommerce Website - Frontend Development Internship

## 📋 Project Overview

**Project Name:** SmartCart  
**Technology Stack:** HTML5, CSS3, Vanilla JavaScript  
**Theme:** Orange (#ff6b35) & Teal (#1abc9c)  

This is a complete 3-week frontend development project for building a modern eCommerce website from scratch.

---

## 📅 Weekly Breakdown

### **Week 1: Understanding the Design and Building the Layout**
**Objective:** Build the foundational structure with Header and Footer

#### ✅ Deliverables:
- [x] Header with SmartCart logo and branding
- [x] Functional navigation bar (Home, Shop, About, Contact)
- [x] Search bar (styled, with basic placeholder functionality)
- [x] Shopping cart icon with count badge
- [x] Footer with 4 columns (About, Quick Links, Customer Service, Contact)
- [x] Responsive design
- [x] Orange/Teal color theme applied

#### Week 1 Files:
- `index.html` - HTML structure
- `styles.css` - Complete styling

#### 🎯 Key Features:
- Sticky header with gradient background
- Logo with cart icon from Flaticon
- Navigation with hover underline effects
- Search bar with focus states
- Cart icon with badge
- Fully styled footer with multiple sections
- Mobile-responsive design

---

### **Week 2: Home Page and Product Listing Page**
**Objective:** Create Hero section, Categories, and Product Grid

#### ✅ Deliverables:
- [x] Hero section with banner and CTA button
- [x] Featured product categories (4 cards: Electronics, Fashion, Home, Sports)
- [x] Product listing page with grid layout (12 products)
- [x] Real product images from Unsplash
- [x] "Buy Now" buttons on each product card
- [x] "Load More" pagination button
- [x] Hover effects on products and categories
- [x] Functional search bar
- [x] Promotional banner section

#### Week 2 Files:
- `index.html` - Complete home page structure
- `styles.css` - Hero, categories, and product styles
- `script.js` - Product rendering and search functionality

#### 🎯 Key Features:
- Animated hero section with gradient
- Category cards with click-to-filter
- CSS Grid for product layout
- 12 products with real images:
  - **Electronics:** iPhone, Headphones, TV
  - **Fashion:** Sneakers, Jeans, Sunglasses
  - **Home:** Vacuum, Mixer, Coffee Machine
  - **Sports:** Peloton, Dumbbells, Running Watch
- Search functionality (filters products)
- Load More button (adds 4 more products)
- Smooth scroll to products
- Promotional banner with CTA

---

### **Week 3: Product Details Page and Interactivity**
**Objective:** Add Product Detail Modal, Shopping Cart, and Full Interactivity

#### ✅ Deliverables:
- [x] Product detail modal (opens on product click)
- [x] Product image, description, price display
- [x] Size selector dropdown
- [x] Quantity controls (+/- buttons)
- [x] "Add to Cart" functionality
- [x] Shopping cart modal
- [x] Cart count updates in header
- [x] Remove items from cart
- [x] Calculate total price
- [x] Customer reviews section
- [x] Related products placeholder
- [x] Full JavaScript interactivity
- [x] localStorage for cart persistence

#### Week 3 Files:
- `index.html` - Complete with modals
- `styles.css` - Modal and cart styles
- `script.js` - Full shopping cart logic

#### 🎯 Key Features:
- Click product → Opens detail modal
- Size dropdown selector
- Quantity selector (1-10)
- Add to Cart with quantity
- Shopping cart modal with all items
- Remove items from cart
- Real-time total calculation
- Cart count badge updates
- localStorage saves cart (survives refresh)
- Customer reviews display
- Close modal on X or outside click
- Prevent body scroll when modal open
- Checkout button (with confirmation)

---

## 🚀 How to Run Each Week

### Week 1 - Header & Footer Only
```bash
Open: Week1-HeaderFooter/week1-index.html
```
You'll see:
- Complete header with logo, search, nav, cart
- Placeholder content area
- Complete footer
- All styling and hover effects

### Week 2 - Home Page & Products
```bash
Open: Week2-HomeProducts/week2-index.html
```
You'll see:
- Everything from Week 1 PLUS:
- Hero section with CTA
- Category cards
- 12 products in grid
- Load More button
- Working search
- Promotional banner

### Week 3 - Full Interactivity
```bash
Open: Week3-ProductDetails/week3-index.html
```
You'll see:
- Everything from Weeks 1 & 2 PLUS:
- Click product → Detail modal
- Size and quantity selectors
- Add to Cart functionality
- Shopping cart modal
- Full cart management
- Customer reviews
- Complete eCommerce experience

---

## 📊 Product Catalog

### Week 2 - Initial 12 Products:

**Electronics (3):**
1. Apple iPhone 15 Pro - $999.00
2. Sony WH-1000XM5 Headphones - $399.99
3. Samsung 4K Smart TV 55" - $799.99

**Fashion (3):**
4. Nike Air Max 270 - $150.00
5. Levi's 501 Original Jeans - $89.99
6. Ray-Ban Aviator Sunglasses - $179.99

**Home & Living (3):**
7. Dyson V15 Vacuum Cleaner - $649.99
8. KitchenAid Stand Mixer - $429.99
9. Nespresso Coffee Machine - $199.99

**Sports (3):**
10. Peloton Exercise Bike - $1,445.00
11. Bowflex Adjustable Dumbbells - $349.00
12. Garmin Forerunner Watch - $299.99

### Load More Products (4):
13. Apple MacBook Pro 14" - $1,999.00
14. Adidas Ultraboost Shoes - $180.00
15. Instant Pot Duo 7-in-1 - $99.99
16. Manduka PRO Yoga Mat - $120.00

---

## 🎨 Design System

### Color Palette
```css
Primary Orange: #ff6b35
Orange Accent: #f7931e
Primary Teal: #1abc9c
Teal Dark: #16a085
Dark Gray: #2c3e50
Background: #f8f9fa
White: #ffffff
Red (Errors/Badge): #e74c3c
```

### Typography
```css
Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
Headings: Bold, 700 weight
Body: 16px, 1.6 line-height
```

### Spacing
```css
Container Max-Width: 1200px
Section Padding: 60px 0
Card Padding: 20px
Gap/Gutters: 30px
```

---

## 💻 Code Structure Explained

### Week 1: Foundation
**HTML:** Semantic structure with header, main, footer  
**CSS:** Flexbox for header, Grid for footer, gradients, transitions  

### Week 2: Content
**HTML:** Hero, categories, product grid sections  
**CSS:** CSS Grid for products, card hover effects, animations  
**JavaScript:** Product array, renderProducts(), search filter, load more

### Week 3: Interactivity
**HTML:** Two modals (product detail, cart)  
**CSS:** Modal overlays, form controls, cart items  
**JavaScript:** 
- Full cart management
- localStorage persistence
- Modal open/close
- Quantity controls
- Total price calculation
- Event delegation

---

## 📚 Learning Objectives Achieved

### Week 1:
✅ HTML semantic structure  
✅ CSS Flexbox for header  
✅ CSS Grid for footer  
✅ Sticky positioning  
✅ CSS gradients  
✅ Hover effects  
✅ Responsive design basics  

### Week 2:
✅ CSS Grid for product layout  
✅ DOM manipulation (createElement)  
✅ Template literals  
✅ Array methods (forEach, filter)  
✅ Event listeners  
✅ Smooth scrolling  
✅ Search functionality  

### Week 3:
✅ Modal design patterns  
✅ Shopping cart logic  
✅ localStorage API  
✅ JSON.stringify/parse  
✅ Array findIndex, reduce  
✅ Quantity controls  
✅ Total calculation  
✅ State management  

---

## 🎯 Key JavaScript Functions

### Week 2 - Product Rendering:
```javascript
renderProducts(productArray)
- Clears grid
- Loops through products
- Creates card elements
- Appends to DOM
```

### Week 3 - Shopping Cart:
```javascript
addToCart()
- Gets quantity from input
- Checks for existing item
- Updates or adds to cart
- Saves to localStorage
- Updates cart count
```

```javascript
renderCartItems()
- Displays cart in modal
- Shows each item with image
- Calculates total
- Provides remove buttons
```

---

## 📝 Submission Checklist

### Week 1:
- [ ] Header with logo, search, nav, cart icon
- [ ] Footer with all sections
- [ ] Responsive design
- [ ] Code pushed to GitHub
- [ ] SmartCart branding applied

### Week 2:
- [ ] Hero section implemented
- [ ] Category cards (4)
- [ ] Product grid (12 products)
- [ ] Real images from Unsplash
- [ ] Load More button
- [ ] Search functionality
- [ ] Code pushed to GitHub

### Week 3:
- [ ] Product detail modal
- [ ] Size dropdown
- [ ] Quantity controls
- [ ] Add to Cart works
- [ ] Shopping cart modal
- [ ] Cart management (add/remove)
- [ ] Total calculation
- [ ] Customer reviews section
- [ ] Code pushed to GitHub
- [ ] Final testing complete

---

## 🔧 Testing Checklist

### Functionality Tests:
- [ ] All navigation links highlight on click
- [ ] Search filters products correctly
- [ ] Category cards filter products
- [ ] Load More adds products
- [ ] Product click opens detail modal
- [ ] Size dropdown works
- [ ] Quantity +/- buttons work
- [ ] Add to Cart updates count
- [ ] Cart icon opens cart modal
- [ ] Remove from cart works
- [ ] Total price calculates correctly
- [ ] Cart persists on page refresh

### Browser Compatibility:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Responsive Design:
- [ ] Desktop (1200px+)
- [ ] Tablet (768px-1199px)
- [ ] Mobile (< 768px)

---

## 📂 File Structure

```
DeveloperHub_Tasks/
│
├── Week1-HeaderFooter/
│   ├── index.html
│   └── styles.css
│
├── Week2-HomeProducts/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── Week3-ProductDetails/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
└── README.md (this file)
```

---


