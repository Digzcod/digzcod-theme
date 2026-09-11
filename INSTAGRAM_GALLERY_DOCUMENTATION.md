# Instagram Lifestyle Gallery Documentation

## Overview
The Instagram Lifestyle Gallery section displays a curated collection of lifestyle photos in an elegant, responsive grid layout. Perfect for showcasing your brand's lifestyle, user-generated content, or creating a visual connection with your community.

## Features
- **Multiple Layout Options**: Square grid, masonry grid, or featured layout
- **Responsive Design**: Adapts beautifully across all devices (3-6 columns desktop, 2-3 mobile)
- **Interactive Elements**: Hover effects, lightbox viewing, and Instagram-style animations
- **Customizable Styling**: Aspect ratios, spacing, colors, and alignment options
- **Instagram Integration**: Direct links to Instagram posts or profile
- **Performance Optimized**: Lazy loading, responsive images, and efficient CSS
- **Accessibility**: Full keyboard navigation and screen reader support

## Layout Options

### Square Grid
- Classic Instagram-style uniform grid
- All images maintain consistent aspect ratio
- Clean, organized presentation

### Masonry Grid
- Pinterest-style staggered layout
- Dynamic heights based on image content
- More organic, flowing design

### Featured Layout
- Highlights one main image prominently
- Remaining images displayed as smaller thumbnails
- Great for showcasing hero content

## Section Settings

### Content
- **Heading**: Main section title (e.g., "Follow Our Lifestyle")
- **Instagram Handle**: Display your Instagram username
- **Subheading**: Descriptive text below the heading
- **Show Instagram Icon**: Toggle Instagram icon in heading

### Layout Controls
- **Gallery Layout**: Choose between square, masonry, or featured
- **Columns (Desktop)**: 3-6 columns for larger screens
- **Columns (Mobile)**: 2-3 columns for mobile devices
- **Image Aspect Ratio**: Square, portrait, landscape, or wide
- **Content Alignment**: Left, center, or right alignment

### Interactive Features
- **Enable Hover Effects**: Show overlay with Instagram icon and caption on hover
- **Enable Lightbox**: Click to view images in full-size popup
- **Hover Overlay Opacity**: Control transparency of hover overlay (0-80%)

### Call to Action
- **Button Text**: Text for Instagram follow button
- **Instagram URL**: Link to your Instagram profile

### Spacing & Design
- **Top/Bottom Padding**: 0-10rem spacing control
- **Content Width**: 60-160rem container width
- **Image Spacing**: 0.5-3rem gap between images
- **Color Scheme**: Background and accent color options

## Block Settings (Per Image)

Each lifestyle image block includes:
- **Image**: Upload lifestyle photo
- **Alt Text**: Accessibility description
- **Link URL**: Optional custom link when clicked
- **Caption**: Text displayed on hover overlay

## Template Integration

### Adding to Homepage
The section is pre-configured in `templates/index.json` after the blog preview section with 6 sample image blocks.

### Adding to Other Templates
```json
{
  "sections": {
    "instagram_gallery": {
      "type": "instagram-gallery",
      "blocks": [
        {
          "type": "lifestyle_image",
          "settings": {
            "alt_text": "Lifestyle moment",
            "caption": "Living our best life"
          }
        }
      ],
      "settings": {
        "heading": "Follow Our Lifestyle",
        "gallery_layout": "square",
        "columns_desktop": 4
      }
    }
  }
}
```

## Best Practices

### Image Guidelines
- **Aspect Ratio**: Use consistent ratios for cleaner appearance
- **Quality**: High-resolution images (800px+ width recommended)
- **Content**: Lifestyle, behind-the-scenes, user-generated content
- **Brand Consistency**: Maintain consistent filters/styling

### Content Strategy
- **Mix Content Types**: Product shots, lifestyle moments, behind-the-scenes
- **User-Generated Content**: Repost customer photos (with permission)
- **Seasonal Updates**: Refresh images regularly to stay current
- **Story Telling**: Use captions to add context and personality

### Performance Tips
- **Image Optimization**: Compress images before uploading
- **Alt Text**: Always provide descriptive alt text
- **Loading**: Section uses lazy loading for better performance
- **Responsive**: Images adapt to different screen sizes automatically

## Customization Examples

### Wellness Brand Gallery
```json
{
  "heading": "Wellness Moments",
  "instagram_handle": "wellnessbrand",
  "gallery_layout": "square",
  "columns_desktop": 4,
  "image_aspect_ratio": "square",
  "enable_hover_effects": true,
  "overlay_opacity": 30
}
```

### Fashion Lookbook
```json
{
  "heading": "Style Inspiration",
  "gallery_layout": "masonry",
  "columns_desktop": 3,
  "image_aspect_ratio": "portrait",
  "enable_lightbox": true,
  "color_scheme": "2"
}
```

### Featured Product Showcase
```json
{
  "heading": "Product in Action",
  "gallery_layout": "featured",
  "columns_desktop": 4,
  "enable_hover_effects": true,
  "button_text": "Shop Now",
  "button_url": "/collections/all"
}
```

## Technical Features

### CSS Architecture
- **Scoped Styling**: Uses section-specific CSS classes
- **CSS Variables**: Consistent theming with custom properties
- **Responsive Grid**: CSS Grid with fallbacks
- **Smooth Animations**: Performance-optimized transitions

### JavaScript Functionality
- **Lightbox**: Vanilla JavaScript lightbox implementation
- **Keyboard Navigation**: Full accessibility support
- **Event Handling**: Efficient event delegation
- **Mobile Optimized**: Touch-friendly interactions

### Performance Optimization
- **Lazy Loading**: Images load as they enter viewport
- **Responsive Images**: Multiple image sizes served based on screen
- **Efficient CSS**: Minimal, optimized stylesheets
- **Fast JavaScript**: Lightweight, modern ES6+ code

## Accessibility Features
- **Semantic HTML**: Proper landmark and heading structure
- **ARIA Labels**: Screen reader friendly navigation
- **Keyboard Support**: Full keyboard navigation
- **Focus Management**: Proper focus indicators
- **Alt Text**: Required for all images

## Troubleshooting

### Images Not Displaying
1. Check that images are uploaded in block settings
2. Verify image file formats are supported (JPG, PNG, WebP)
3. Ensure images aren't too large (compress if needed)

### Layout Issues
1. Verify container width settings
2. Check image aspect ratio consistency
3. Test spacing values across different screen sizes

### Performance Issues
1. Optimize image file sizes
2. Limit number of images displayed
3. Use appropriate image aspect ratios

### Accessibility Issues
1. Ensure all images have alt text
2. Test keyboard navigation
3. Verify color contrast ratios

## Integration Tips

### With Instagram API
While this section doesn't directly connect to Instagram's API, you can:
- Manually curate your best Instagram content
- Link individual images back to Instagram posts
- Use consistent hashtags and branding

### With Other Sections
- Place after testimonials to build social proof
- Use before footer to encourage social following
- Combine with blog preview for content marketing

### SEO Considerations
- Use descriptive alt text for images
- Include relevant keywords in captions
- Link to high-quality, relevant content
- Maintain fast loading speeds
