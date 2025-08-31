# Header Component README

## Quick Start Guide

This header component provides a modern, responsive navigation system with dropdown menus for your Shopify theme.

## What's Included

### Files Added/Modified
1. **`assets/header-dropdown.js`** - Interactive functionality
2. **`assets/header-dropdown.css`** - Styling and animations  
3. **`sections/header.liquid`** - Updated template structure
4. **`layout/theme.liquid`** - Added CSS/JS includes

### Key Features
- ✨ Smooth dropdown animations
- 📱 Mobile-responsive design
- ♿ Full accessibility support
- 🎨 Beautiful hover effects
- ⌨️ Keyboard navigation
- 🖱️ Click and hover interactions

## Setup Instructions

### 1. Navigation Menu Setup
1. Go to **Shopify Admin** → **Online Store** → **Navigation**
2. Edit your **Main menu**
3. Add menu items with sub-items to create dropdowns
4. Save your menu

### 2. Theme Integration
The following files have been automatically updated:
- Header template with new dropdown structure
- Theme layout with CSS/JS includes
- Added proper accessibility attributes

### 3. Customization Options

#### Quick Color Changes
Edit `assets/header-dropdown.css` and modify these values:

```css
/* Main dropdown colors */
.dropdown-menu {
  background: white;           /* Dropdown background */
  border: 1px solid #e5e7eb;  /* Border color */
}

.dropdown-item:hover {
  background-color: #f3f4f6;   /* Hover background */
  color: #1f2937;              /* Hover text color */
}

.dropdown-toggle.dropdown-active {
  color: #3b82f6;              /* Active state color */
}
```

#### Animation Speed
Change transition duration:

```css
.dropdown-visible {
  transition: all 0.15s ease-in; /* Make it faster: 0.1s or slower: 0.3s */
}
```

## Usage Examples

### Simple Dropdown Menu
In Shopify Admin → Navigation:
```
📁 Products
  ├── New Arrivals
  ├── Best Sellers
  └── Sale Items

📁 Collections  
  ├── Men's
  ├── Women's
  └── Kids
```

### Multi-level Support
The system supports one level of dropdown menus as per Shopify's navigation structure.

## Browser Support
- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ Internet Explorer 11 (limited animation support)

## Troubleshooting

### Dropdown Not Working?
1. **Check Console**: Open browser dev tools and look for JavaScript errors
2. **Verify Menu Structure**: Ensure your navigation menu has sub-items in Shopify Admin
3. **Clear Cache**: Try hard refresh (Ctrl+F5 or Cmd+Shift+R)

### Styling Issues?
1. **CSS Loading**: Check if `header-dropdown.css` loads in Network tab
2. **Conflicts**: Look for CSS conflicts with existing theme styles
3. **Responsive**: Test on different screen sizes

### Performance Issues?
1. **File Size**: CSS (~2KB) and JS (~3KB) files are optimized
2. **Loading**: JavaScript loads deferred for better performance
3. **Animations**: Use hardware-accelerated CSS transitions

## Advanced Configuration

### Disable Hover on Desktop
Edit `assets/header-dropdown.js` and comment out lines 47-61:

```javascript
// dropdownContainer.addEventListener('mouseenter', () => {
//   if (window.innerWidth >= 768) {
//     this.showDropdown(toggle);
//   }
// });
```

### Custom Breakpoints
Edit responsive behavior in `assets/header-dropdown.css`:

```css
/* Change 768px to your preferred mobile breakpoint */
@media (max-width: 767px) {
  /* Mobile styles */
}
```

## Testing Checklist

Before going live, test:
- [ ] Click functionality on desktop
- [ ] Hover functionality on desktop  
- [ ] Touch functionality on mobile
- [ ] Keyboard navigation (Tab, Esc, Arrow keys)
- [ ] Screen reader compatibility
- [ ] Multiple dropdowns opening/closing
- [ ] Page load performance

## Need Help?

1. **Read Full Documentation**: See `DROPDOWN_MENU_DOCS.md` for comprehensive guide
2. **Check Browser Console**: Look for JavaScript errors
3. **Test Different Devices**: Ensure cross-device compatibility
4. **Backup**: Always backup your theme before major changes

---

**Version**: 1.0.0  
**Last Updated**: August 2025  
**Tested With**: Shopify Online Store 2.0
