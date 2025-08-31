/**
 * Header Dropdown Menu JavaScript
 *
 * This script handles the interactive dropdown menu functionality for the header navigation.
 * Features:
 * - Smooth animations with CSS transitions
 * - Click and hover interactions
 * - Keyboard accessibility (ESC key, arrow keys)
 * - Mobile-responsive behavior
 * - Auto-close when clicking outside
 * - Support for multiple dropdowns
 *
 * @version 1.0.0
 * @author Your Name
 */

class HeaderDropdown {
  constructor() {
    this.dropdowns = document.querySelectorAll("[data-dropdown-toggle]");
    this.activeDropdown = null;
    this.init();
  }

  /**
   * Initialize the dropdown functionality
   */
  init() {
    if (!this.dropdowns.length) return;

    this.bindEvents();
    this.setupAccessibility();
  }

  /**
   * Bind all event listeners
   */
  bindEvents() {
    // Toggle dropdown on click
    this.dropdowns.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleDropdown(toggle);
      });

      // Show dropdown on hover (desktop only) - NO AUTO HIDE
      const dropdownContainer = toggle.closest("[data-dropdown-container]");
      if (dropdownContainer) {
        dropdownContainer.addEventListener("mouseenter", () => {
          if (window.innerWidth >= 768) {
            this.showDropdown(toggle);
          }
        });

        // Removed mouseleave auto-hide to keep dropdown visible
      }
    });

    // Removed auto-hide behaviors:
    // - Click outside
    // - ESC key
    // - Window resize
    // Dropdown will only hide when manually toggled
  }

  /**
   * Setup accessibility attributes
   */
  setupAccessibility() {
    this.dropdowns.forEach((toggle) => {
      const dropdownId = toggle.getAttribute("data-dropdown-toggle");
      const dropdown = document.querySelector(
        `[data-dropdown="${dropdownId}"]`
      );

      if (dropdown) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-haspopup", "true");
        toggle.setAttribute("aria-controls", dropdownId);
        dropdown.setAttribute(
          "aria-labelledby",
          toggle.id || "dropdown-toggle"
        );
      }
    });
  }

  /**
   * Toggle dropdown visibility
   * @param {HTMLElement} toggle - The dropdown toggle element
   */
  toggleDropdown(toggle) {
    const dropdownId = toggle.getAttribute("data-dropdown-toggle");
    const dropdown = document.querySelector(`[data-dropdown="${dropdownId}"]`);

    if (!dropdown) return;

    if (dropdown.classList.contains("dropdown-visible")) {
      this.hideDropdown(toggle);
    } else {
      this.hideAllDropdowns();
      this.showDropdown(toggle);
    }
  }

  /**
   * Show dropdown
   * @param {HTMLElement} toggle - The dropdown toggle element
   */
  showDropdown(toggle) {
    const dropdownId = toggle.getAttribute("data-dropdown-toggle");
    const dropdown = document.querySelector(`[data-dropdown="${dropdownId}"]`);

    if (!dropdown) return;

    // Hide all other dropdowns first
    this.hideAllDropdowns();

    // Show current dropdown
    dropdown.classList.remove("dropdown-hidden");
    dropdown.classList.add("dropdown-visible");
    toggle.setAttribute("aria-expanded", "true");
    toggle.classList.add("dropdown-active");

    this.activeDropdown = { toggle, dropdown };

    // Focus management for accessibility
    setTimeout(() => {
      const firstLink = dropdown.querySelector("a");
      if (firstLink) {
        firstLink.focus();
      }
    }, 150);
  }

  /**
   * Hide dropdown
   * @param {HTMLElement} toggle - The dropdown toggle element
   */
  hideDropdown(toggle) {
    const dropdownId = toggle.getAttribute("data-dropdown-toggle");
    const dropdown = document.querySelector(`[data-dropdown="${dropdownId}"]`);

    if (!dropdown) return;

    dropdown.classList.remove("dropdown-visible");
    dropdown.classList.add("dropdown-hidden");
    toggle.setAttribute("aria-expanded", "false");
    toggle.classList.remove("dropdown-active");

    if (this.activeDropdown && this.activeDropdown.toggle === toggle) {
      this.activeDropdown = null;
    }
  }

  /**
   * Hide all dropdowns
   */
  hideAllDropdowns() {
    this.dropdowns.forEach((toggle) => {
      this.hideDropdown(toggle);
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new HeaderDropdown();
});

// Handle theme editor updates
document.addEventListener("shopify:section:load", () => {
  new HeaderDropdown();
});
