# Mobile Menu System Documentation

## Overview
This document explains the mobile menu system implementation, including all classes, functions, and their behaviors. The system consists of three main components that work together to provide a comprehensive mobile navigation experience.

## Components Architecture

### 1. MobileMenu Class (`mobile-menu.js`)
The main mobile menu modal handler that manages the slide-in navigation overlay.

#### Class Structure
```javascript
class MobileMenu {
  constructor()
  #init()
  #setupInitialState()
  #bindEvents()
  #toggleMobileMenu()
  #openMobileMenu()
  #closeMobileMenu()
}
```

#### Key Properties
- **`menuButton`**: The hamburger menu button (ID: `mobile-menu-button`)
- **`mobileMenu`**: The mobile menu modal container (ID: `mobile-menu`)
- **`menuIcon`**: The hamburger icon (class: `.mobile-menu-button__icon`)
- **`closeIcon`**: The close X icon (class: `.mobile-menu-button__close`)
- **`modalCloseBtn`**: Close button inside modal (class: `.mobile-menu-close`)
- **`backdrop`**: The dark overlay behind menu (class: `.mobile-menu-backdrop`)
- **`isOpen`**: Boolean state tracking if menu is open

#### Functions Explained

##### `constructor()`
- Initializes all DOM references
- Calls `#init()` to start the setup process

##### `#init()` (Private)
- Guards against missing DOM elements
- Calls setup functions in sequence

##### `#setupInitialState()` (Private)
- Ensures menu starts hidden
- Sets proper ARIA attributes for accessibility
- Initial state: `aria-hidden="true"`, `aria-expanded="false"`

##### `#bindEvents()` (Private)
- **Menu button click**: Toggles menu open/closed
- **Modal close button**: Closes menu when clicked
- **Backdrop click**: Closes menu when clicking outside
- **Escape key**: Closes menu for accessibility
- **Window resize**: Auto-closes menu if screen becomes desktop size (≥768px)

##### `#toggleMobileMenu()` (Private)
- Checks current state and calls appropriate open/close function

##### `#openMobileMenu()` (Private)
- Sets `isOpen = true`
- Removes `hidden` class from menu
- Updates ARIA attributes: `aria-hidden="false"`, `aria-expanded="true"`
- Swaps hamburger icon for close icon
- Prevents body scrolling: `document.body.style.overflow = "hidden"`
- Focuses close button for accessibility (300ms delay for animation)

##### `#closeMobileMenu()` (Private)
- Sets `isOpen = false`
- Adds `hidden` class to menu
- Updates ARIA attributes: `aria-hidden="true"`, `aria-expanded="false"`
- Swaps close icon back to hamburger icon
- Restores body scrolling: `document.body.style.overflow = ""`
- Closes all mobile dropdowns via `MobileDropdown.closeAll()`
- Dispatches `mobile-menu:close` event for other components
- Returns focus to menu button

### 2. MobileDropdown Class (`mobile-dropdown.js`)
Handles individual dropdown menus within the mobile navigation.

#### Class Structure
```javascript
class MobileDropdown {
  constructor(element)
  #init()
  #setupAccessibility()
  #bindEvents()
  #handleTriggerClick(event)
  #handleTriggerKeydown(event)
  #handleMenuKeydown(event)
  #focusFirstLink()
  #focusLastLink()
  #focusNextLink()
  #focusPreviousLink()
  open()
  close()
  toggle()
  #closeOtherDropdowns()
  static closeAll()
}
```

#### Key Properties
- **`dropdown`**: The dropdown container element (data attribute: `[data-mobile-dropdown]`)
- **`trigger`**: The clickable dropdown trigger (class: `.mobile-dropdown__trigger`)
- **`menu`**: The dropdown menu content (class: `.mobile-dropdown__menu`)
- **`links`**: All navigation links inside dropdown (class: `.mobile-dropdown__link`)
- **`isOpen`**: Boolean state tracking if dropdown is open
- **`currentFocusIndex`**: Index of currently focused link for keyboard navigation

#### Functions Explained

##### `constructor(element)`
- Takes a dropdown element as parameter
- Initializes all DOM references within that dropdown
- Calls `#init()` to start setup

##### `#setupAccessibility()` (Private)
- Generates unique IDs for ARIA relationships
- Sets up proper ARIA attributes for screen readers
- Adds `role="menu"` and `role="menuitem"` attributes
- Sets initial `tabindex="-1"` for proper focus management

##### `#bindEvents()` (Private)
- **Click events**: Handle trigger clicks
- **Keyboard events**: Full keyboard navigation support
- **Touch events**: Improved mobile touch responsiveness

##### `#handleTriggerClick(event)` (Private)
- Prevents default and stops propagation
- Calls `toggle()` function

##### `#handleTriggerKeydown(event)` (Private)
Keyboard support for trigger:
- **Enter/Space**: Opens dropdown and focuses first link
- **ArrowDown**: Opens dropdown and focuses first link
- **ArrowUp**: Opens dropdown and focuses last link
- **Escape**: Closes dropdown

##### `#handleMenuKeydown(event)` (Private)
Keyboard navigation within dropdown:
- **ArrowDown**: Focus next link (loops to first)
- **ArrowUp**: Focus previous link (loops to last)
- **Home**: Focus first link
- **End**: Focus last link
- **Escape**: Close dropdown and return focus to trigger
- **Tab**: Natural tab behavior but closes dropdown

##### Focus Management Functions (Private)
- `#focusFirstLink()`: Focuses first menu item
- `#focusLastLink()`: Focuses last menu item
- `#focusNextLink()`: Circular focus to next item
- `#focusPreviousLink()`: Circular focus to previous item

##### `open()` (Public)
- Guards against already open state
- Closes other dropdowns via `#closeOtherDropdowns()`
- Updates ARIA states: `aria-expanded="true"`, `aria-hidden="false"`
- Adds CSS classes: `.expanded` to menu, `.dropdown-open` to container
- Rotates icon by adding `.rotated` class
- Enables focus for menu items: `tabindex="0"`
- Dispatches `mobile-dropdown:open` event

##### `close()` (Public)
- Guards against already closed state
- Updates ARIA states: `aria-expanded="false"`, `aria-hidden="true"`
- Removes CSS classes: `.expanded`, `.dropdown-open`, `.rotated`
- Disables focus for menu items: `tabindex="-1"`
- Dispatches `mobile-dropdown:close` event

##### `toggle()` (Public)
- Simple toggle between open/close states

##### `#closeOtherDropdowns()` (Private)
- Finds all other mobile dropdowns
- Closes them to ensure only one dropdown open at a time

##### `static closeAll()` (Static)
- Public utility method to close all mobile dropdowns
- Used by mobile menu when closing

### 3. MobileDropdownManager Class (`mobile-dropdown.js`)
Coordinates all mobile dropdowns and handles global events.

#### Class Structure
```javascript
class MobileDropdownManager {
  constructor()
  #init()
  #initializeDropdowns()
  #bindGlobalEvents()
  reinitialize()
}
```

#### Key Properties
- **`dropdowns`**: Map storing all dropdown instances

#### Functions Explained

##### `constructor()`
- Initializes dropdown Map
- Calls `#init()` to start setup

##### `#initializeDropdowns()` (Private)
- Finds all elements with `[data-mobile-dropdown]` attribute
- Creates `MobileDropdown` instance for each
- Stores instance in Map and as element property

##### `#bindGlobalEvents()` (Private)
- **Mobile menu close**: Closes all dropdowns when mobile menu closes
- **Orientation change**: Closes all dropdowns on device rotation
- **Window resize**: Closes dropdowns if screen becomes desktop size

##### `reinitialize()` (Public)
- Utility method to reinitialize all dropdowns
- Useful for dynamically added content

### 4. HeaderDropdown Class (`header-dropdown.js`)
Web Component extending HTMLElement for desktop header dropdowns with full accessibility support.

#### Class Structure
```javascript
class HeaderDropdown extends HTMLElement {
  constructor()
  #init()
  #bindEvents()
  #setupAccessibility()
  #handleTriggerClick(event)
  #handleDocumentClick(event)
  #handleTriggerKeydown(event)
  #handleMenuKeydown(event)
  #handleFocusOut(event)
  #openDropdown()
  #closeDropdown()
  #focusFirstMenuItem()
  #focusLastMenuItem()
  #focusNextMenuItem()
  #focusPreviousMenuItem()
  closeDropdown()
}
```

#### Key Properties
- **`dropdown`**: Container element with `[data-dropdown]` attribute
- **`trigger`**: The clickable dropdown trigger (class: `.nav-dropdown__trigger`)
- **`menu`**: The dropdown menu content (class: `.nav-dropdown__menu`)
- **`menuItems`**: All menu items with `role="menuitem"`
- **`isOpen`**: Boolean state tracking if dropdown is open
- **`currentIndex`**: Index of currently focused menu item

#### Functions Explained

##### `constructor()`
- Extends HTMLElement for Web Component functionality
- Calls `super()` to initialize parent class
- Initializes all DOM references within the component
- Calls `#init()` to start setup process

##### `#init()` (Private)
- Guards against missing essential DOM elements
- Calls setup functions in sequence: events then accessibility

##### `#bindEvents()` (Private)
- **Click events**: Trigger clicks and document clicks for outside closing
- **Keyboard events**: Full keyboard navigation on trigger and menu
- **Focus events**: Handles focus leaving the dropdown component

##### `#setupAccessibility()` (Private)
- Generates unique menu IDs for ARIA relationships
- Sets `aria-controls` on trigger pointing to menu
- Initializes ARIA states: `aria-expanded="false"`, `aria-hidden="true"`

##### `#handleTriggerClick(event)` (Private)
- Prevents default link behavior and stops propagation
- Toggles dropdown open/closed state

##### `#handleDocumentClick(event)` (Private)
- Closes dropdown when clicking outside the component
- Uses `this.contains(event.target)` to check if click is inside

##### `#handleTriggerKeydown(event)` (Private)
Keyboard support for trigger element:
- **Enter/Space**: Opens dropdown and focuses first menu item
- **ArrowDown**: Opens dropdown and focuses first menu item
- **ArrowUp**: Opens dropdown and focuses last menu item
- **Escape**: Closes dropdown

##### `#handleMenuKeydown(event)` (Private)
Full keyboard navigation within dropdown menu:
- **ArrowDown**: Focus next menu item (circular navigation)
- **ArrowUp**: Focus previous menu item (circular navigation)
- **Home**: Jump to first menu item
- **End**: Jump to last menu item
- **Escape**: Close dropdown and return focus to trigger
- **Tab**: Allow natural tab behavior but close dropdown

##### `#handleFocusOut(event)` (Private)
- Uses setTimeout to check if focus moved outside component
- Closes dropdown if focus leaves the entire component
- 10ms delay accounts for focus transition timing

##### `#openDropdown()` (Private)
- Guards against already open state
- Closes other open dropdowns to ensure only one open at a time
- Updates ARIA states: `aria-expanded="true"`, `aria-hidden="false"`
- Adds animation classes for smooth transitions:
  - Removes: `opacity-0`, `invisible`, `scale-95`
  - Adds: `opacity-100`, `visible`, `scale-100`
- Adds `.dropdown-open` class to component

##### `#closeDropdown()` (Private)
- Guards against already closed state
- Resets `currentIndex` to -1
- Updates ARIA states: `aria-expanded="false"`, `aria-hidden="true"`
- Adds hide animation classes:
  - Removes: `opacity-100`, `visible`, `scale-100`
  - Adds: `opacity-0`, `invisible`, `scale-95`
- Removes `.dropdown-open` class from component

##### Focus Management Functions (Private)
- `#focusFirstMenuItem()`: Focuses first menu item, sets currentIndex to 0
- `#focusLastMenuItem()`: Focuses last menu item, sets currentIndex to last
- `#focusNextMenuItem()`: Circular navigation to next item
- `#focusPreviousMenuItem()`: Circular navigation to previous item

##### `closeDropdown()` (Public)
- Public method that calls private `#closeDropdown()`
- Available for external components to close the dropdown

#### Web Component Features

##### Custom Element Registration
```javascript
if (!customElements.get("header-dropdown")) {
  customElements.define("header-dropdown", HeaderDropdown);
}
```

##### Dynamic Initialization
- Uses `Object.setPrototypeOf()` to upgrade existing DOM elements
- Adds `upgraded` flag to prevent double initialization
- MutationObserver watches for dynamically added dropdowns

##### Progressive Enhancement
- Works with existing HTML structure
- Gracefully enhances `.nav-dropdown` elements
- Maintains functionality if JavaScript fails to load

## CSS Class Connections

### Mobile Menu Classes
- **`.mobile-menu-button__icon`**: Hamburger menu icon
- **`.mobile-menu-button__close`**: Close X icon
- **`.mobile-menu-close`**: Close button inside modal
- **`.mobile-menu-backdrop`**: Dark overlay behind menu
- **`.hidden`**: Controls menu visibility

### Mobile Dropdown Classes
- **`.mobile-dropdown__trigger`**: Clickable dropdown trigger
- **`.mobile-dropdown__menu`**: Dropdown content container
- **`.mobile-dropdown__link`**: Individual navigation links
- **`.mobile-dropdown__icon`**: Arrow icon next to trigger
- **`.expanded`**: Added to menu when open
- **`.dropdown-open`**: Added to container when open
- **`.rotated`**: Added to icon for rotation animation

### Header Dropdown Classes
- **`.nav-dropdown`**: Main dropdown container element
- **`.nav-dropdown__trigger`**: Clickable dropdown trigger button/link
- **`.nav-dropdown__menu`**: Dropdown menu content container
- **`.dropdown-open`**: Added to component when dropdown is open
- **Animation classes**:
  - **`.opacity-0/.opacity-100`**: Controls menu opacity
  - **`.invisible/.visible`**: Controls menu visibility
  - **`.scale-95/.scale-100`**: Controls menu scaling animation

### Data Attributes
- **`[data-mobile-dropdown]`**: Identifies elements as mobile dropdowns
- **`[data-dropdown]`**: Used for header dropdowns
- **`[role="menuitem"]`**: Applied to individual menu items for accessibility

## Behavior Connections

### Event Communication
1. **Mobile Menu → Dropdowns**: When mobile menu closes, it calls `MobileDropdown.closeAll()`
2. **Dropdown → Dropdown**: Opening one dropdown closes others via `#closeOtherDropdowns()`
3. **Header Dropdowns**: Auto-close other header dropdowns when one opens
4. **Global Events**: Window resize and orientation change affect both systems
5. **Focus Events**: Header dropdowns close when focus leaves the component

### Focus Management
1. **Menu opens**: Focus moves to close button
2. **Menu closes**: Focus returns to menu button
3. **Dropdown opens**: Focus moves to first menu item
4. **Dropdown closes**: Focus returns to trigger

### Accessibility Features
- Full ARIA attribute management
- Keyboard navigation support
- Screen reader compatibility
- Focus trap implementation
- Proper semantic roles

## Initialization

All components are initialized when the DOM is ready:

```javascript
// Multiple initialization patterns ensure loading under various conditions
document.addEventListener("DOMContentLoaded", () => {
  new MobileMenu();
  new MobileDropdownManager();
  
  // Header dropdown initialization
  if (!customElements.get("header-dropdown")) {
    customElements.define("header-dropdown", HeaderDropdown);
  }
});

// Fallback for late script loading
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFunction);
} else {
  initFunction();
}

// Header dropdowns use MutationObserver for dynamic content
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === 1) {
        const dropdowns = node.querySelectorAll(".nav-dropdown");
        dropdowns.forEach((dropdown) => {
          if (!dropdown.upgraded) {
            Object.setPrototypeOf(dropdown, HeaderDropdown.prototype);
            HeaderDropdown.call(dropdown);
            dropdown.upgraded = true;
          }
        });
      }
    });
  });
});
```

## Usage Examples

### HTML Structure for Mobile Menu
```html
<button id="mobile-menu-button" aria-label="Open menu">
  <span class="mobile-menu-button__icon">☰</span>
  <span class="mobile-menu-button__close hidden">✕</span>
</button>

<div id="mobile-menu" class="hidden">
  <div class="mobile-menu-backdrop"></div>
  <nav class="mobile-menu-content">
    <button class="mobile-menu-close">Close</button>
    <!-- Navigation content -->
  </nav>
</div>
```

### HTML Structure for Mobile Dropdown
```html
<div data-mobile-dropdown class="mobile-dropdown">
  <button class="mobile-dropdown__trigger">
    Menu Item
    <span class="mobile-dropdown__icon">▼</span>
  </button>
  <div class="mobile-dropdown__menu">
    <a href="#" class="mobile-dropdown__link">Submenu Item 1</a>
    <a href="#" class="mobile-dropdown__link">Submenu Item 2</a>
  </div>
</div>
```

### HTML Structure for Header Dropdown
```html
<header-dropdown class="nav-dropdown">
  <a href="#" class="nav-dropdown__trigger" aria-haspopup="true">
    Products
  </a>
  <div class="nav-dropdown__menu opacity-0 invisible scale-95" data-dropdown>
    <a href="#" role="menuitem">Category 1</a>
    <a href="#" role="menuitem">Category 2</a>
    <a href="#" role="menuitem">Category 3</a>
  </div>
</header-dropdown>
```

This system provides a complete, accessible, and responsive navigation solution with proper keyboard support, focus management, and cross-component communication for both mobile and desktop experiences.
