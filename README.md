# Smart Family Picks - Divided WPCode Snippets

यो folder मा सबै code अलग अलग parts मा छ। तपाईं हरेक part लाई separately WPCode plugin मा add गर्न सक्नुहुन्छ।

## 📂 Files Overview

| File | Type | Purpose | WPCode Settings |
|------|------|---------|-----------------|
| **01-styles.css** | CSS | सबै styles (पूरा background gradient सहित) | CSS Snippet → Site Wide Header |
| **02-header.html** | HTML | Logo र header | HTML Snippet → Site Wide Header |
| **03-main-content.html** | HTML | Cards र main content | HTML Snippet → Manual/Shortcode |
| **04-footer.html** | HTML | Social links र footer | HTML Snippet → Site Wide Footer |
| **05-analytics.js** | JavaScript | Click tracking र Google Analytics | JS Snippet → Site Wide Footer |
| **06-shortcodes.php** | PHP (Optional) | Shortcodes for flexibility | PHP Snippet → Auto Insert Off |

---

## 🚀 Installation Steps

### Method 1: Full Page Setup (पूरा page को लागि)

यदि तपाईं पूरा page नै Smart Family Picks बनाउनु हुन्छ:

**Step 1: Add CSS**
1. WPCode → Add Snippet → CSS Snippet
2. Name: `SFP Styles`
3. Copy content from: `01-styles.css`
4. Location: **Site Wide Header**
5. Status: Active

**Step 2: Add Header**
1. WPCode → Add Snippet → HTML Snippet
2. Name: `SFP Header`
3. Copy content from: `02-header.html`
4. Location: **Site Wide Header**
5. Status: Active

**Step 3: Add Main Content**
1. WPCode → Add Snippet → HTML Snippet
2. Name: `SFP Main Content`
3. Copy content from: `03-main-content.html`
4. Location: **Site Wide Body** (or use in page content)
5. Status: Active

**Step 4: Add Footer**
1. WPCode → Add Snippet → HTML Snippet
2. Name: `SFP Footer`
3. Copy content from: `04-footer.html`
4. Location: **Site Wide Footer**
5. Status: Active

**Step 5: Add Analytics (Optional)**
1. WPCode → Add Snippet → JavaScript Snippet
2. Name: `SFP Analytics`
3. Copy content from: `05-analytics.js`
4. Location: **Site Wide Footer**
5. Status: Active

---

### Method 2: Shortcode Setup (Flexible placement)

यदि तपाईं shortcodes प्रयोग गर्नु हुन्छ:

**Step 1: Add CSS** (same as Method 1)

**Step 2: Add Shortcode PHP**
1. WPCode → Add Snippet → PHP Snippet
2. Name: `SFP Shortcodes`
3. Copy content from: `06-shortcodes.php`
4. Auto Insert: **Off** (or Site Wide Footer)
5. Status: Active

**Step 3: Use Shortcodes in Pages**

```
[sfp_header]          - Header only
[sfp_main_content]    - Cards only
[sfp_footer]          - Footer only
[sfp_full]            - Everything
```

**Step 4: Add Analytics** (same as Method 1)

---

## ⚙️ Configuration

### Update Links

`03-main-content.html` or `06-shortcodes.php` मा edit गर्नुहोस्:

```html
href="https://shop.smartfamilypicks.com"     ← यो change गर्नुहोस्
href="https://quiz.smartfamilypicks.com"     ← यो change गर्नुहोस्
href="https://health.smartfamilypicks.com"   ← यो change गर्नुहोस्
href="https://tools.smartfamilypicks.com"    ← यो change गर्नुहोस्
```

### Update Social Media

`04-footer.html` or `06-shortcodes.php` मा edit गर्नुहोस्:

```html
href="https://facebook.com/yourpage"         ← यो change गर्नुहोस्
href="https://twitter.com/yourhandle"        ← यो change गर्नुहोस्
href="https://instagram.com/yourhandle"      ← यो change गर्नुहोस्
href="mailto:contact@smartfamilypicks.com"   ← यो change गर्नुहोस्
```

### Update Colors

`01-styles.css` मा edit गर्नुहोस्:

```css
/* Main background gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 25%...);

/* Card icon gradients */
.card-shop .card-icon {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

### Update Text Content

`02-header.html` मा:
```html
<h1>Smart Family Picks</h1>              ← Change title
<p class="tagline">Your Trusted...</p>   ← Change tagline
```

`03-main-content.html` मा:
```html
<h2>Welcome to Our Community!</h2>       ← Change welcome text
<h3 class="card-title">Daily Essentials</h3>  ← Change card titles
<p class="card-description">Discover...</p>   ← Change descriptions
```

### Add Google Analytics

`05-analytics.js` मा uncomment गर्नुहोस् र ID add गर्नुहोस्:

```javascript
gtag('config', 'G-XXXXXXXXXX'); // तपाईंको GA4 ID राख्नुहोस्
```

---

## 📱 Features

✅ **Full Screen Background** - पूरा screen मा gradient background
✅ **Original Design** - तपाईंको original design जस्तै
✅ **Responsive** - Mobile, tablet, desktop सबैमा काम गर्छ
✅ **Separated Components** - हरेक part अलग छ
✅ **Easy to Update** - कुनै पनि part अलग बाट edit गर्न सजिलो
✅ **No Theme Conflicts** - Original class names प्रयोग गरेको
✅ **Shortcode Support** - Flexible placement options

---

## 🔍 Troubleshooting

### Issue: Background color देखिएन
**Solution**:
- Check if `01-styles.css` snippet is Active
- Location should be "Site Wide Header"
- Browser cache clear गर्नुहोस्

### Issue: Header/Footer देखिएन
**Solution**:
- Check respective snippet Status = Active
- Location settings check गर्नुहोस्
- Page reload गर्नुहोस्

### Issue: Cards क्लिक हुँदैन
**Solution**:
- Links check गर्नुहोस् (https:// छ कि छैन)
- Target="_blank" attribute छ कि छैन verify गर्नुहोस्

### Issue: Mobile मा ठीक देखिएन
**Solution**:
- CSS snippet active छ कि छैन check गर्नुहोस्
- Browser inspector ले media queries हेर्नुहोस्
- Cache clear गर्नुहोस्

---

## 🆚 Comparison with Combined Version

### Divided Version (यो folder):
✅ Each component separate
✅ Easy to edit individual parts
✅ Can enable/disable parts independently
✅ Original design with full-screen background
✅ No wrapper div
✅ Original class names

### Combined Version (wpcode-snippet-all-in-one.php):
✅ Single file - easy to manage
✅ Scoped styles (no conflicts)
✅ Wrapper div for WordPress compatibility
✅ Prefixed class names (sfp-*)
❌ Full screen background limited by wrapper

---

## 💡 Tips

1. **Testing**: Test in staging site पहिला
2. **Backup**: Code को backup राख्नुहोस्
3. **Mobile**: Mobile मा पनि test गर्नुहोस्
4. **Performance**: सबै snippets एकै पटक activate नगर्नुहोस् (Method बाट choose गर्नुहोस्)
5. **Updates**: Edit गर्दा code को syntax check गर्नुहोस्

---

## 📞 Need Help?

- WPCode plugin documentation हेर्नुहोस्
- Browser console errors check गर्नुहोस्
- Each file मा comments छन् - ती पढ्नुहोस्

---

**Made with ❤️ for Smart Family Picks**
