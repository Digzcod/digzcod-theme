# Tailwind CSS Dropdown Implementation

## Overview

This dropdown system is now optimized for **Tailwind CSS**, using utility classes for most styling and minimal custom CSS for animations only.

## Files Structure

```
├── sections/header.liquid          # HTML with Tailwind classes
├── assets/header-dropdown-tailwind.css  # Minimal custom CSS
├── assets/header-dropdown.js       # JavaScript functionality
└── layout/theme.liquid            # CSS includes
```

## Tailwind Classes Used

### Header Container (Overflow Fix)
```html
<div class="relative drop-shadow-lg rounded-md shadow-lg overflow-visible">
  <div class="mx-auto px-4 sm:px-6 overflow-visible">
    <div class="flex justify-center items-center py-6 md:justify-start md:space-x-10 relative overflow-visible">
      <nav class="flex items-center gap-x-2 static overflow-visible">
```

**Key Classes:**
- `overflow-visible` - Prevents dropdown clipping
- `relative` - Creates positioning context
- `static` - Prevents z-index stacking issues

### Dropdown Toggle Button
```html
<button class="dropdown-toggle flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 ease-in-out hover:bg-gray-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
```

**Tailwind Classes:**
- `flex items-center gap-2` - Layout and spacing
- `px-3 py-2 rounded-md` - Padding and border radius
- `transition-all duration-200 ease-in-out` - Smooth transitions
- `hover:bg-gray-50 hover:text-blue-600` - Hover states
- `focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2` - Accessibility focus

### Dropdown Menu
```html
<div class="dropdown-menu dropdown-hidden absolute top-full left-1/2 transform -translate-x-1/2 min-w-60 max-w-80 bg-white rounded-xl shadow-2xl border border-gray-50 overflow-hidden z-50 mt-2">
```

**Tailwind Classes:**
- `absolute top-full left-1/2 transform -translate-x-1/2` - Positioning
- `min-w-60 max-w-80` - Responsive width
- `bg-white rounded-xl` - Background and border radius
- `shadow-2xl border border-gray-50` - Shadows and borders
- `overflow-hidden z-50 mt-2` - Overflow and z-index

### Dropdown Items
```html
<a class="dropdown-item block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:pl-5 transition-all duration-150 ease-in-out">
```

**Tailwind Classes:**
- `block px-4 py-3` - Display and spacing
- `text-sm font-medium text-gray-700` - Typography
- `hover:bg-gray-50 hover:text-gray-900 hover:pl-5` - Hover effects
- `transition-all duration-150 ease-in-out` - Smooth transitions

## Custom CSS (Minimal)

Only these styles require custom CSS (not available in Tailwind):

### Animation States
```css
.dropdown-hidden {
  opacity: 0;
  transform: translateX(-50%) translateY(-0.5rem);
  visibility: hidden;
  transition: all 0.15s ease-out;
  pointer-events: none;
}

.dropdown-visible {
  opacity: 1 !important;
  transform: translateX(-50%) translateY(0) !important;
  visibility: visible !important;
  transition: all 0.15s ease-in;
  pointer-events: auto !important;
}
```

### Arrow Rotation
```css
.dropdown-toggle.dropdown-active .dropdown-arrow {
  transform: rotate(180deg);
}
```

## Customization with Tailwind

### Colors
Change dropdown colors by modifying Tailwind classes:

```html
<!-- Blue theme -->
<div class="bg-blue-50 border-blue-200">
  <a class="text-blue-700 hover:bg-blue-100">

<!-- Dark theme -->
<div class="bg-gray-800 border-gray-700">
  <a class="text-gray-300 hover:bg-gray-700">
```

### Sizing
Adjust dropdown size:

```html
<!-- Larger dropdown -->
<div class="min-w-72 max-w-96">

<!-- Smaller dropdown -->
<div class="min-w-48 max-w-64">
```

### Shadows
Change shadow intensity:

```html
<!-- Subtle shadow -->
<div class="shadow-lg">

<!-- Dramatic shadow -->
<div class="shadow-2xl">

<!-- Custom shadow -->
<div class="shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]">
```

## Responsive Design

### Mobile Overrides
Custom CSS handles mobile positioning:

```css
@media (max-width: 767px) {
  .dropdown-menu {
    position: fixed !important;
    left: 1rem !important;
    right: 1rem !important;
    transform: none !important;
  }
}
```

### Responsive Classes
Use Tailwind responsive prefixes:

```html
<!-- Desktop: centered, Mobile: full width -->
<div class="md:left-1/2 md:transform md:-translate-x-1/2 sm:left-4 sm:right-4">

<!-- Responsive padding -->
<a class="px-4 py-3 md:px-6 md:py-4">
```

## Benefits of Tailwind Approach

### ✅ Advantages
- **Smaller bundle**: Only custom animations in CSS
- **Easier customization**: Change classes directly in HTML
- **Better maintainability**: Standard Tailwind conventions
- **Responsive by default**: Tailwind's responsive system
- **Consistency**: Matches your existing Tailwind theme

### 🎯 Key Improvements
- Reduced CSS file from ~8KB to ~1KB
- All styling visible in HTML (better developer experience)
- Leverages Tailwind's design system
- Easy theme customization
- Better performance (smaller CSS bundle)

## Quick Customization Examples

### Change to Dark Theme
```html
<div class="bg-gray-800 border-gray-600 text-white">
  <a class="text-gray-300 hover:bg-gray-700 hover:text-white">
```

### Change Colors to Green
```html
<button class="hover:text-green-600 focus:ring-green-500">
<div class="border-green-100">
<a class="hover:bg-green-50 text-green-700">
```

### Make Dropdown Wider
```html
<div class="min-w-80 max-w-96">
```

This Tailwind-first approach gives you full control over styling while keeping the codebase clean and maintainable!
