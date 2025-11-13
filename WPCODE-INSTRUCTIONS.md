# Smart Family Picks - WPCode WordPress Plugin Instructions

This guide will help you add the Smart Family Picks Hub to your WordPress site using the WPCode plugin.

## 📋 Prerequisites

- WordPress website
- WPCode plugin installed and activated
- Admin access to your WordPress dashboard

## 🚀 Quick Start Guide

### Method 1: Using WPCode Shortcode (Recommended)

**Step 1: Install WPCode Plugin**
1. Go to WordPress Admin → Plugins → Add New
2. Search for "WPCode"
3. Install and activate the plugin

**Step 2: Add the Code Snippet**
1. Go to WordPress Admin → Code Snippets → Add Snippet
2. Click on "Add Your Custom Code (New Snippet)"
3. Give it a name: "Smart Family Picks Hub"
4. Select Code Type: **PHP Snippet**
5. Copy the entire content from `wpcode-snippet-all-in-one.php`
6. Paste it into the code editor

**Step 3: Configure the Snippet**
1. Under "Insertion":
   - Select **Shortcode**
   - The shortcode will be: `[smartfamilypicks]`
2. Location: Leave as default
3. Status: Set to **Active**
4. Click **Save Snippet**

**Step 4: Use the Shortcode**
1. Create a new page or edit an existing one
2. Add the shortcode: `[smartfamilypicks]`
3. Publish/Update the page
4. View your page to see the Smart Family Picks Hub!

---

## 🎨 Customization Options

### Update Your Links

Open the snippet in WPCode and find these lines to update your URLs:

```html
<!-- Shop Link -->
<a href="https://shop.smartfamilypicks.com" ...>

<!-- Quiz Link -->
<a href="https://quiz.smartfamilypicks.com" ...>

<!-- Health Link -->
<a href="https://health.smartfamilypicks.com" ...>

<!-- Tools Link -->
<a href="https://tools.smartfamilypicks.com" ...>
```

Replace with your actual URLs.

### Update Social Media Links

Find this section in the footer:

```html
<div class="sfp-social-links">
    <a href="https://facebook.com/yourpage" ...>📘</a>
    <a href="https://twitter.com/yourhandle" ...>🐦</a>
    <a href="https://instagram.com/yourhandle" ...>📷</a>
    <a href="mailto:contact@smartfamilypicks.com" ...>✉️</a>
</div>
```

Replace with your actual social media profiles.

### Change Colors

Find the CSS section and modify these gradient colors:

```css
/* Main background gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%);

/* Logo container gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Individual card gradients */
.sfp-card-shop .sfp-card-icon {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

### Change Text Content

Update these sections:

```html
<!-- Header -->
<h1>Smart Family Picks</h1>
<p class="sfp-tagline">Your Trusted Resource Hub</p>

<!-- Welcome message -->
<h2>Welcome to Our Community!</h2>
<p>Explore our curated collection of resources</p>

<!-- Card titles and descriptions -->
<h3 class="sfp-card-title">Daily Essentials</h3>
<p class="sfp-card-description">Discover curated products...</p>
```

---

## 📊 Add Google Analytics (Optional)

To track clicks and visitors:

1. Get your Google Analytics 4 Measurement ID (looks like `G-XXXXXXXXXX`)
2. Find this section in the JavaScript:

```javascript
// Uncomment and add your GA4 Measurement ID
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');
*/
```

3. Remove the `/*` and `*/` comments
4. Replace `G-XXXXXXXXXX` with your actual Measurement ID
5. Add this to your theme's header (or use a GA plugin):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

---

## 📱 Responsive Design

The hub is fully responsive and works on:
- Desktop (> 768px)
- Tablet (481px - 768px)
- Mobile (≤ 480px)

No additional configuration needed!

---

## 🎯 Usage Scenarios

### Scenario 1: Full Page Hub
Create a new page called "Resources" or "Hub" and add only the shortcode:
```
[smartfamilypicks]
```

### Scenario 2: Custom Page Template
1. Create a page template in your theme
2. Use this in the template:
```php
<?php echo do_shortcode('[smartfamilypicks]'); ?>
```

### Scenario 3: Widget Area (Advanced)
Add to any widget area using a Custom HTML widget:
```
[smartfamilypicks]
```

---

## 🔧 Troubleshooting

### Issue: Shortcode displays as text
**Solution**: Make sure:
- WPCode plugin is activated
- The snippet status is set to "Active"
- You selected "PHP Snippet" as the code type

### Issue: Styling looks broken
**Solution**:
- Check if your theme has aggressive CSS that might override styles
- Try adding `!important` to critical styles
- Use the browser inspector to check for CSS conflicts

### Issue: Links don't work
**Solution**:
- Verify URLs are correct (include `https://`)
- Check that `target="_blank"` is present for external links

### Issue: Hub doesn't fit the page width
**Solution**: Add this CSS to the snippet:
```css
.sfp-hub-wrapper {
    margin: 0 !important;
    width: 100vw !important;
    margin-left: calc(-50vw + 50%) !important;
}
```

---

## ✅ Best Practices

1. **Test on staging first** - Always test new code on a staging site
2. **Backup before changes** - Use a backup plugin before making modifications
3. **Mobile testing** - Check how it looks on mobile devices
4. **Performance** - The snippet is lightweight and won't slow down your site
5. **Updates** - Keep WPCode plugin updated for security

---

## 🎨 Advanced Customization

### Remove the Footer
Find and delete this section:
```html
<!-- Footer -->
<footer class="sfp-footer">
    ...
</footer>
```

### Change Animation Speed
Modify the animation duration:
```css
@keyframes sfpGradientShift {
    /* Change 15s to your preferred speed */
}
```

### Add More Cards
Copy a card block and modify:
```html
<a href="YOUR_URL"
   class="sfp-link-card sfp-card-custom"
   target="_blank"
   rel="noopener">
    <div class="sfp-card-icon">🎯</div>
    <div class="sfp-card-content">
        <h3 class="sfp-card-title">Your Title</h3>
        <p class="sfp-card-description">Your description</p>
    </div>
    <span class="sfp-card-arrow">→</span>
</a>
```

Add corresponding CSS:
```css
.sfp-hub-wrapper .sfp-card-custom .sfp-card-icon {
    background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
}
```

---

## 📞 Support

If you need help:
1. Check the troubleshooting section above
2. Review WPCode plugin documentation
3. Test with WordPress default theme to rule out theme conflicts
4. Check browser console for JavaScript errors

---

## 📄 License

© 2025 Smart Family Picks. All rights reserved.

---

## 🔄 Version History

**Version 1.0** (2025)
- Initial release
- Shortcode support
- Fully responsive design
- Google Analytics integration
- Animation effects
