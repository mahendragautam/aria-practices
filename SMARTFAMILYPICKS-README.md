# Smart Family Picks Hub

A modular, responsive landing page for Smart Family Picks - Your Trusted Resource Hub.

## 📁 Project Structure

```
smartfamilypicks.com/
├── index.html          # Main HTML file (loads all components)
├── styles.css          # All CSS styles
├── header.html         # Header component
├── main-content.html   # Main content/body component
├── footer.html         # Footer component
└── SMARTFAMILYPICKS-README.md  # This file
```

## 🎨 Features

- **Modular Architecture**: Separated into reusable components (header, main content, footer)
- **External CSS**: All styles in a single, organized CSS file
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Animated Background**: Beautiful gradient animation
- **Google Analytics Ready**: GA4 tracking configured
- **Click Tracking**: Tracks outbound link clicks
- **SEO Optimized**: Proper meta tags and descriptions

## 🔧 Components

### 1. **index.html**
Main entry point that:
- Loads the external CSS file
- Includes Google Analytics tracking
- Dynamically loads all HTML components using JavaScript

### 2. **header.html**
Contains:
- Logo with gradient background
- Site title "Smart Family Picks"
- Tagline

### 3. **main-content.html**
Contains:
- Welcome message
- Four resource cards:
  - Daily Essentials (Shop)
  - Fun Quizzes
  - Health & Wellness
  - Business Tools

### 4. **footer.html**
Contains:
- Social media links
- Copyright information
- Privacy Policy & Terms of Service links

### 5. **styles.css**
All styles including:
- Global styles and resets
- Header styles
- Main content and card styles
- Footer styles
- Responsive media queries
- Animations

## 🚀 Usage

### Local Development
Simply open `index.html` in a web browser.

**Note**: Due to CORS restrictions, you'll need to run a local server to load the HTML components. Use one of these methods:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server)
npx http-server

# PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

### Deployment
Upload all files to your web server. Make sure:
1. All files are in the same directory
2. Update Google Analytics ID (replace `G-XXXXXXXXXX` with your actual ID)
3. Update social media links in `footer.html`

## 🎯 Customization

### Update Links
Edit `main-content.html` to change:
- Card URLs
- Card titles and descriptions
- Card icons

### Update Styles
Edit `styles.css` to change:
- Colors
- Fonts
- Animations
- Responsive breakpoints

### Update Analytics
Replace `G-XXXXXXXXXX` in `index.html` with your Google Analytics 4 Measurement ID.

### Update Social Links
Edit `footer.html` to change social media URLs.

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: ≤ 480px

## 🎨 Color Scheme

- Primary Gradient: #667eea → #764ba2
- Secondary Gradients: Various per card
- Background: Multi-color gradient animation
- Text: #333 (dark), #666 (medium), #999 (light)

## 📦 No Dependencies

This project uses pure HTML, CSS, and vanilla JavaScript. No frameworks or libraries required!

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

© 2025 Smart Family Picks. All rights reserved.
