# Story Section Documentation

## Overview

The Story section is a flexible two-column layout component designed for storytelling and brand messaging. It features an image on one side and rich text content on the other, perfect for creating engaging narratives about your brand, products, or philosophy.

## Features

### Layout Options
- **Image Position**: Left or right
- **Content Alignment**: Left, center, or right alignment for text content
- **Section Layout**: Contained (max-width) or full-width
- **Responsive Design**: Automatically stacks vertically on mobile devices

### Content Elements
- **Image**: High-quality product or lifestyle image with fallback placeholder
- **Eyebrow Text**: Small accent text above the heading
- **Heading**: Main title with configurable HTML tag (H1, H2, H3)
- **Rich Text**: Multi-paragraph content with HTML formatting support
- **Call-to-Action Button**: Primary or secondary button styles

### Customization Settings
- **Content Gap**: Adjustable spacing between image and text (20-100px)
- **Padding**: Top and bottom section padding (0-120px)
- **Colors**: Background and text color customization
- **Button Styles**: Primary (filled) or secondary (outlined) button options

## Usage

### In Theme Editor
1. Add the "Story" section to any template
2. Upload an image or use the placeholder
3. Configure the content (eyebrow, heading, text, button)
4. Adjust layout and styling options
5. Preview and publish

### Code Implementation
The section follows Shopify theme development best practices:

- **Liquid**: Clean, readable markup with proper escaping
- **CSS**: Scoped styles using CSS custom properties
- **Responsive**: Mobile-first design with breakpoints
- **Accessibility**: Semantic HTML and proper ARIA attributes
- **Performance**: Optimized image loading with proper sizing

## Content Guidelines

### Image Requirements
- **Recommended Size**: 800x600px (4:3 aspect ratio)
- **Format**: JPG or PNG
- **Subject**: Lifestyle images work best (diffusers in cozy living rooms)
- **Quality**: High resolution for crisp display on all devices

### Text Content
- **Eyebrow Text**: 2-4 words (e.g., "Our Philosophy", "Brand Story")
- **Heading**: 2-6 words, focus on benefit or emotion
- **Body Text**: 2-3 paragraphs, conversational tone
- **Button Text**: 1-3 words, action-oriented (e.g., "Explore Collection")

## Examples

### Wellness & Calm Story
```
Eyebrow: "Our Philosophy"
Heading: "Wellness & Calm"
Text: "Transform your daily routine into a mindful ritual. Our diffusers create the perfect ambiance for relaxation, meditation, and peaceful moments in your home.

Experience the therapeutic benefits of aromatherapy and discover how scent can enhance your well-being and create lasting memories."
Button: "Explore Collection"
```

### Quality & Craftsmanship
```
Eyebrow: "Our Promise"
Heading: "Quality & Craftsmanship"
Text: "Each diffuser is meticulously crafted using premium materials and innovative technology. We believe that true wellness begins with products you can trust.

Our commitment to excellence ensures that every piece not only looks beautiful but performs flawlessly for years to come."
Button: "Learn More"
```

## Technical Specifications

### CSS Variables
- `--section-padding-top`: Top padding in pixels
- `--section-padding-bottom`: Bottom padding in pixels
- `--story-gap`: Gap between image and text columns
- `--story-bg`: Background color
- `--story-text`: Text color

### Responsive Breakpoints
- **Desktop**: Two-column layout (768px and up)
- **Tablet**: Two-column layout with adjusted spacing
- **Mobile**: Single-column layout (767px and below)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS Custom Properties support required

## Best Practices

### Content Strategy
1. **Focus on Benefits**: Emphasize how products improve customers' lives
2. **Tell Stories**: Use narrative structure to create emotional connection
3. **Be Authentic**: Use genuine, relatable language
4. **Include CTAs**: Always provide a clear next step for visitors

### Visual Design
1. **High-Quality Images**: Use professional lifestyle photography
2. **Consistent Spacing**: Maintain visual rhythm throughout the page
3. **Color Harmony**: Ensure text is readable against background colors
4. **Mobile Optimization**: Test content readability on small screens

### Performance
1. **Optimize Images**: Compress images while maintaining quality
2. **Lazy Loading**: Images load efficiently using Shopify's responsive image system
3. **Minimal Dependencies**: Section uses only native CSS and HTML
4. **Fast Loading**: Scoped CSS prevents render-blocking
