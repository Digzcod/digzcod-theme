# Header Width Fix Documentation

## Problem
The header content was always centered and couldn't achieve 100% viewport width (100vw) even when explicitly set.

## Root Causes
1. **Grid System Constraint**: The `critical.css` file sets up a grid system where all section children are constrained to the central column (`grid-column: 2`)
2. **Header Container Limitation**: The `.header-container` had `max-width: 1400px` and `margin: 0 auto` which centered and constrained the content

## Solution Implemented

### 1. Updated Header CSS
- Removed `max-width` and centering from `.header-container` by default
- Added a `.constrained` modifier class for when centering is desired
- Added utility classes for breaking out of grid constraints

### 2. Added Full-Width Support
- Added `full-width` class to header element when setting is enabled
- The `full-width` class makes elements span the entire viewport (`grid-column: 1 / -1`)

### 3. Theme Editor Controls
- Added "Full width header" setting in the header section
- Organized settings into "Content" and "Layout" groups
- Default is set to `true` for full-width behavior

### 4. Conditional Classes
```liquid
<!-- Header element with conditional full-width class -->
<header class="site-header{% if section.settings.full_width_header %} full-width{% endif %}">

<!-- Container with conditional constrained class -->
<div class="header-container{% unless section.settings.full_width_header %} constrained{% endunless %}">
```

## CSS Changes Made

### Before:
```css
.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  /* ... */
}
```

### After:
```css
.header-container {
  width: 100%;
  padding: 0 20px;
  /* ... */
}

.header-container.constrained {
  max-width: 1400px;
  margin: 0 auto;
}
```

## New Utility Classes

### For Full-Width Elements:
```css
.break-out-of-grid {
  grid-column: 1 / -1;
  width: 100vw;
  margin-left: calc(50% - 50vw);
}
```

## Usage

### For Merchants:
1. Go to theme editor
2. Navigate to Header section
3. Toggle "Full width header" setting under Layout group
4. Save changes

### For Developers:
- Use `full-width` class on section elements to span full viewport
- Use `break-out-of-grid` class for elements that need to escape grid constraints
- Use `constrained` class on containers when you want centered, max-width layouts

## Benefits
1. **Flexibility**: Merchants can choose between full-width and constrained layouts
2. **Consistency**: Works with existing Shopify grid system
3. **Performance**: No JavaScript required - pure CSS solution
4. **Accessibility**: Maintains proper semantic structure

## Files Modified
- `sections/header.liquid` - Main header section with CSS and settings
- `snippets/full-width-utils.liquid` - Utility snippet for other sections (created)
- `header-width-test.html` - Test file to preview changes (created)

## Testing
The test file shows both constrained and full-width versions side by side to demonstrate the difference in behavior.

## Compatibility
- Works with existing Shopify grid system
- Backward compatible with existing themes
- Mobile responsive design maintained