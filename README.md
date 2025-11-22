# 🎨 Handmade Haven - E-Commerce Website

A beautiful, fully responsive e-commerce website built with Next.js for selling handmade handicrafts, calendars, crochet items, bookmarks, and small gifts.

![Website Preview](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop)

## ✨ Features

### 🛍️ E-Commerce Functionality
- **Product Catalog**: Browse beautiful handmade items with detailed descriptions
- **Shopping Cart**: Add/remove items, update quantities with persistent storage
- **Product Search & Filter**: Find products by name, category, and price range
- **Product Details**: Image galleries, ratings, reviews, and related products
- **Checkout Process**: Complete order form with contact and shipping information

### 🎨 Design & User Experience
- **Responsive Design**: Perfect on mobile, tablet, and desktop devices
- **Modern UI**: Clean, premium look with soft pastel colors
- **Smooth Animations**: Hover effects and transitions for enhanced UX
- **Accessibility**: Built with semantic HTML and ARIA attributes
- **Fast Loading**: Optimized images and performance-first approach

### 🚀 Technical Features
- **Next.js 16**: Latest App Router with TypeScript support
- **Static Export**: Optimized for GitHub Pages deployment
- **Context API**: Global cart state management
- **Local Storage**: Persistent cart across browser sessions
- **SEO Optimized**: Meta tags and structured data
- **Mobile First**: Progressive enhancement approach

## 🛠️ Technology Stack

- **Framework**: Next.js 16.0.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Library**: React 19.2.0
- **Font**: Inter (Google Fonts)
- **Image Optimization**: Next.js Image component
- **Deployment**: GitHub Pages (Static Export)

## 📁 Project Structure

```
src/
├── app/
│   ├── about/              # About page with company story
│   ├── cart/               # Shopping cart page
│   ├── checkout/           # Checkout process
│   ├── products/           # Product listing and detail pages
│   ├── globals.css         # Global styles and Tailwind
│   ├── layout.tsx          # Root layout with providers
│   └── page.tsx            # Home page
├── components/
│   ├── Footer.tsx          # Site footer with links
│   ├── Header.tsx          # Navigation and cart counter
│   └── ProductCard.tsx     # Reusable product display
├── contexts/
│   └── CartContext.tsx     # Cart state management
└── data/
    └── products.ts         # Sample product data
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed on your system
- Git for version control
- A GitHub account for deployment

### 1. Clone & Install
```bash
# Clone the repository
git clone <your-repo-url>
cd websitee

# Install dependencies
npm install
```

### 2. Development
```bash
# Start development server
npm run dev

# View at http://localhost:3000
```

### 3. Build & Test
```bash
# Build for production
npm run build

# Test the build locally
npm run start
```

## 🌐 Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. **Prepare Repository**
   ```bash
   # Initialize git (if not already done)
   git init
   git add .
   git commit -m "Initial commit: Complete e-commerce website"
   ```

2. **Create GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `handicrafts-ecommerce` (or your preferred name)
   - Don't initialize with README (we have one)

3. **Push to GitHub**
   ```bash
   # Add remote origin
   git remote add origin https://github.com/YOUR_USERNAME/handicrafts-ecommerce.git
   
   # Push to main branch
   git branch -M main
   git push -u origin main
   ```

4. **Deploy to GitHub Pages**
   ```bash
   # Deploy using gh-pages
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to your repository → Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` / `/ (root)`
   - Click "Save"

Your website will be available at: `https://YOUR_USERNAME.github.io/handicrafts-ecommerce`

### Method 2: GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## ⚙️ Configuration

### Update basePath (Required for GitHub Pages)

In `next.config.ts`, update the repository name:

```typescript
const nextConfig = {
  output: 'export',
  basePath: '/your-repository-name',  // Change this
  assetPrefix: '/your-repository-name',  // Change this
  images: {
    unoptimized: true
  }
};
```

### Update package.json

Update the homepage field in `package.json`:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/your-repository-name"
}
```

## 🎨 Customization

### Product Data
Edit `src/data/products.ts` to add your own products:

```typescript
{
  id: 11,
  name: "Your Product Name",
  price: 29.99,
  image: "/images/your-product.jpg",
  category: "handicrafts",
  description: "Product description...",
  rating: 5,
  reviews: 10,
  inStock: true,
  isNew: true
}
```

### Branding
- Update business name in `src/components/Header.tsx` and `Footer.tsx`
- Change colors in `src/app/globals.css` (Tailwind custom colors)
- Replace logo/favicon in the `public` folder
- Update contact information in the About page

### Images
Replace placeholder images with your own:
- Add images to the `public/images/` folder
- Update image paths in product data and components
- Ensure images are optimized for web (WebP format recommended)

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first CSS approach
- Touch-friendly buttons and navigation
- Optimized images for different screen sizes
- Fast loading on mobile networks

## 🔧 Development Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run deploy     # Deploy to GitHub Pages
```

## 🛡️ Best Practices

### SEO
- All pages have proper meta tags
- Images include alt text
- Semantic HTML structure
- Fast loading times

### Performance
- Next.js Image optimization
- Lazy loading for images
- Code splitting by route
- Minimal bundle size

### Security
- No sensitive data in client-side code
- Input validation on forms
- Safe external links (rel="noopener")

## 📊 Analytics & Monitoring

To add Google Analytics:

1. **Install gtag**
   ```bash
   npm install gtag
   ```

2. **Add to layout.tsx**
   ```typescript
   import Script from 'next/script'
   
   // Add in head section
   <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
   <Script id="google-analytics">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'GA_MEASUREMENT_ID');
     `}
   </Script>
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support:
- 📧 Email: hello@handmadehaven.com
- 📱 Phone: (555) 123-4567
- 🐙 GitHub Issues: [Create an issue](https://github.com/YOUR_USERNAME/handicrafts-ecommerce/issues)

## 🎉 What's Included

- ✅ Complete e-commerce functionality
- ✅ Responsive design for all devices
- ✅ Shopping cart with persistence
- ✅ Product search and filtering
- ✅ Checkout process
- ✅ Beautiful UI with animations
- ✅ SEO optimization
- ✅ GitHub Pages deployment ready
- ✅ TypeScript for type safety
- ✅ Modern React patterns

## 🚧 Future Enhancements

Potential features to add:
- Payment integration (Stripe, PayPal)
- User authentication and accounts
- Order history and tracking
- Product reviews system
- Inventory management
- Admin dashboard
- Email notifications
- Multi-language support

---

**Built with ❤️ for small business success**

Ready to launch your handmade business online? This website gives you everything you need to start selling your beautiful creations to the world! 🌟
