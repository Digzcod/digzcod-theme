# Header Dropdown Menu Documentation

## Overview

This documentation covers the enhanced header dropdown menu system for the Shopify theme. The system provides a beautiful, accessible, and responsive navigation experience with smooth animations and modern design.

## Features

### 🎨 Visual Features
- **Modern Design**: Clean, minimalist appearance with subtle shadows and rounded corners
- **Smooth Animations**: CSS-powered transitions for show/hide states
- **Responsive Layout**: Adapts beautifully to mobile, tablet, and desktop screens
- **Hover Effects**: Interactive feedback on hover states
- **Focus States**: Clear visual indicators for keyboard navigation

### ♿ Accessibility Features
- **ARIA Support**: Full ARIA attributes for screen readers
- **Keyboard Navigation**: Complete keyboard support (ESC, Tab, Arrow keys)
- **Focus Management**: Automatic focus handling for better UX
- **High Contrast Support**: Optimized for high contrast mode
- **Reduced Motion**: Respects user's reduced motion preferences

### 📱 Responsive Features
- **Mobile First**: Optimized mobile experience with full-screen dropdowns
- **Touch Friendly**: Large touch targets for mobile devices
- **Breakpoint Aware**: Different behaviors for different screen sizes
- **Hover vs Click**: Hover on desktop, click on mobile

## File Structure

```
digzcod-theme/
├── assets/
│   ├── header-dropdown.js     # JavaScript functionality
│   └── header-dropdown.css    # Styling and animations
├── sections/
│   └── header.liquid          # Updated header template
└── layout/
    └── theme.liquid           # Updated to include CSS/JS
```

## Implementation Guide

### 1. Menu Structure

The dropdown menu automatically generates from Shopify's navigation menu structure:

```liquid
<!-- Main menu items are defined in Shopify Admin > Navigation -->
{% for link in linklists['main-menu'].links %}
  {% if link.links != blank %}
    <!-- This creates a dropdown -->
  {% else %}
    <!-- This creates a regular link -->
  {% endif %}
{% endfor %}
```

### 2. HTML Structure

Each dropdown follows this structure:

```html
<div class="dropdown-container" data-dropdown-container>
  <button class="dropdown-toggle" data-dropdown-toggle="dropdown-1">
    <span>Menu Item</span>
    <svg class="dropdown-arrow">...</svg>
  </button>
  
  <div class="dropdown-menu dropdown-hidden" data-dropdown="dropdown-1">
    <div class="dropdown-items">
      <a href="#" class="dropdown-item">Submenu Item</a>
      <!-- More items... -->
    </div>
  </div>
</div>
```

### 3. Data Attributes

The system uses data attributes for functionality:

- `data-dropdown-container`: Marks the container element
- `data-dropdown-toggle`: Identifies the toggle button (value should match dropdown ID)
- `data-dropdown`: Identifies the dropdown menu panel

## Customization Guide

### 🎨 Styling Customization

#### Colors
Modify these CSS custom properties in `header-dropdown.css`:

```css
:root {
  --dropdown-bg: #ffffff;
  --dropdown-border: rgba(0, 0, 0, 0.05);
  --dropdown-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --dropdown-item-hover: #f3f4f6;
  --dropdown-text: #374151;
  --dropdown-active: #3b82f6;
}
```

#### Animations
Adjust animation speed and easing:

```css
.dropdown-menu {
  transition: all 0.15s ease-in-out; /* Modify timing here */
}
```

#### Sizing
Change dropdown dimensions:

```css
.dropdown-menu {
  min-width: 15rem;  /* Minimum width */
  max-width: 20rem;  /* Maximum width */
  margin-top: 0.5rem; /* Gap from toggle */
}
```

### 🔧 Behavior Customization

#### Hover vs Click
To make all interactions click-based (no hover), modify the JavaScript:

```javascript
// Comment out or remove these lines in header-dropdown.js
dropdownContainer.addEventListener('mouseenter', () => {
  // ... hover show logic
});

dropdownContainer.addEventListener('mouseleave', () => {
  // ... hover hide logic
});
```

#### Animation Duration
Modify transition timing in both CSS and JavaScript:

```css
/* CSS */
.dropdown-visible {
  transition: all 0.2s ease-in; /* Increase duration */
}
```

```javascript
// JavaScript - update setTimeout delay
setTimeout(() => {
  const firstLink = dropdown.querySelector('a');
  if (firstLink) {
    firstLink.focus();
  }
}, 200); // Match CSS duration
```

## Browser Support

### ✅ Fully Supported
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### ⚠️ Partial Support
- Internet Explorer 11 (no CSS Grid, limited animations)

### 🔧 Polyfills Needed
For IE11 support, add these polyfills:
- CSS Grid polyfill
- Intersection Observer polyfill

## Performance Considerations

### 🚀 Optimizations Applied
- **Deferred JavaScript**: Script loads after page content
- **CSS Transitions**: Hardware-accelerated animations
- **Event Delegation**: Efficient event handling
- **Minimal DOM Queries**: Cached element references

### 📊 Performance Metrics
- **JavaScript Bundle**: ~3KB minified
- **CSS Bundle**: ~2KB minified
- **Render Blocking**: None (deferred loading)

## Troubleshooting

### Common Issues

#### 1. Dropdown Not Showing
**Symptoms**: Clicking toggle doesn't show dropdown
**Solutions**:
- Check if JavaScript file is loaded
- Verify data attributes match between toggle and dropdown
- Check browser console for errors

#### 2. Styling Issues
**Symptoms**: Dropdown appears unstyled
**Solutions**:
- Verify CSS file is loaded in theme.liquid
- Check for CSS conflicts with existing styles
- Inspect element to see if classes are applied

#### 3. Mobile Issues
**Symptoms**: Dropdown behavior is wrong on mobile
**Solutions**:
- Check viewport meta tag is present
- Verify responsive breakpoints in CSS
- Test touch event handling

### Debug Mode

Enable debug mode by adding this to the JavaScript:

```javascript
// Add to HeaderDropdown constructor
this.debug = true;

// Add debug logging
if (this.debug) {
  console.log('Dropdown action:', action, element);
}
```

## Advanced Customization

### Adding Icons to Menu Items

Modify the dropdown item structure:

```html
<a href="#" class="dropdown-item">
  <svg class="dropdown-item-icon">...</svg>
  <span>Menu Item</span>
</a>
```

Add corresponding CSS:

```css
.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dropdown-item-icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}
```

### Mega Menu Support

For large dropdown menus with multiple columns:

```html
<div class="dropdown-menu dropdown-menu-mega">
  <div class="dropdown-mega-content">
    <div class="dropdown-mega-column">
      <!-- Column 1 content -->
    </div>
    <div class="dropdown-mega-column">
      <!-- Column 2 content -->
    </div>
  </div>
</div>
```

### Adding Descriptions

For menu items with descriptions:

```html
<a href="#" class="dropdown-item dropdown-item-with-desc">
  <div>
    <div class="dropdown-item-title">Menu Item</div>
    <div class="dropdown-item-desc">Brief description</div>
  </div>
</a>
```

## Maintenance

### 🔄 Regular Updates
- Test dropdown functionality after theme updates
- Verify JavaScript compatibility with new Shopify features
- Check CSS compatibility with Tailwind updates

### 📈 Performance Monitoring
- Monitor page load times
- Check for JavaScript errors in browser console
- Test on various devices and browsers

### 🧪 Testing Checklist
- [ ] Dropdown opens/closes on click
- [ ] Hover behavior works on desktop
- [ ] Mobile touch behavior works
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Multiple dropdowns work independently
- [ ] Animations are smooth
- [ ] No console errors

## Support

For issues or questions:
1. Check this documentation first
2. Review browser console for errors
3. Test in different browsers
4. Check Shopify theme compatibility

---

**Last Updated**: August 2025  
**Version**: 1.0.0  
**Compatibility**: Shopify Online Store 2.0
