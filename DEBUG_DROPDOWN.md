# Dropdown Debug Guide

## Quick Debug Steps

### 1. Check Browser Console
1. Open your website in the browser
2. Right-click and select "Inspect" or press F12
3. Go to the "Console" tab
4. Click on a dropdown menu item
5. Look for these debug messages:
   - "Initializing dropdowns, found: X" (should be > 0)
   - "Dropdown clicked: [element]"
   - "Showing dropdown: dropdown-X [element]"
   - "Dropdown classes after show: [class list]"

### 2. Check HTML Structure
In the browser inspector, look for:
```html
<div class="dropdown-container" data-dropdown-container>
  <button data-dropdown-toggle="dropdown-1">...</button>
  <div class="dropdown-menu dropdown-hidden" data-dropdown="dropdown-1">
    <div class="dropdown-items">
      <a class="dropdown-item">Sublink</a>
    </div>
  </div>
</div>
```

### 3. Check Navigation Menu in Shopify Admin
1. Go to **Shopify Admin** → **Online Store** → **Navigation**
2. Edit your **Main menu**
3. Ensure you have menu items with **sub-items**:
   ```
   📁 Products (main item)
     ├── New Arrivals (sub-item)
     ├── Best Sellers (sub-item)
     └── Sale Items (sub-item)
   ```
4. Save the menu

### 4. Manual CSS Test
Add this temporary CSS to test if it's a visibility issue:
```css
.dropdown-menu {
  display: block !important;
  opacity: 1 !important;
  visibility: visible !important;
  position: relative !important;
  transform: none !important;
}
```

## Common Issues & Solutions

### Issue 1: No dropdown menus appear at all
**Cause**: No sub-items in navigation menu
**Solution**: Add sub-items to your navigation menu in Shopify Admin

### Issue 2: JavaScript not loading
**Cause**: JS file not included or has errors
**Check**: Look for JavaScript errors in browser console

### Issue 3: CSS not applied
**Cause**: CSS file not loading or conflicts
**Check**: Verify CSS file loads in Network tab

### Issue 4: Wrong HTML structure
**Cause**: Template errors or missing data attributes
**Check**: Inspect HTML structure in browser

## Test Commands

Open browser console and run these commands:

```javascript
// Check if dropdowns are found
document.querySelectorAll('[data-dropdown-toggle]').length

// Check if CSS is applied
document.querySelector('.dropdown-menu')

// Manually show a dropdown
document.querySelector('.dropdown-menu').style.display = 'block'
```

## Need More Help?

If the debug steps show:
- ✅ Dropdowns found > 0
- ✅ Click events firing
- ✅ CSS classes being added
- ❌ But dropdown still not visible

Then it's likely a CSS specificity or positioning issue.
