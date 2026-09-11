# Blog Preview Section Documentation

## Overview
The Blog Preview section displays a curated selection of blog articles in an elegant, responsive card layout. Perfect for showcasing wellness tips, company news, or educational content on your homepage or other templates.

## Features
- **Responsive Design**: Adapts beautifully to all screen sizes
- **Customizable Layout**: 2-4 articles per row with flexible spacing
- **Rich Content Display**: Article images, excerpts, metadata, and tags
- **Merchant Controls**: Extensive customization options in the theme editor
- **Performance Optimized**: Lazy loading images and efficient CSS
- **Accessibility**: Full keyboard navigation and screen reader support

## Section Settings

### Content Settings
- **Blog**: Select which blog to pull articles from
- **Heading**: Main section title (e.g., "Wellness Tips")
- **Subheading**: Optional descriptive text below the heading
- **Articles to show**: Display 2-4 articles (default: 2)

### Article Display Options
- **Show excerpt**: Display article summary text
- **Show date**: Display publication date
- **Show author**: Display article author
- **Show read time**: Calculate and show estimated reading time
- **Show tags**: Display article tags as clickable pills
- **Read more text**: Customize the "Read More" button text

### Call to Action
- **Button text**: Text for the "View All Posts" button
- **Button link**: URL for the button (defaults to the selected blog)

### Layout Options
- **Content alignment**: Left, center, or right alignment
- **Image aspect ratio**: Wide (16:9), Standard (4:3), Square (1:1), or Portrait (3:4)
- **Mobile layout**: Stack vertically or horizontal scroll on mobile

### Spacing Controls
- **Top/Bottom padding**: 0-10rem in 0.5rem increments
- **Content width**: 60-160rem container width
- **Card spacing**: 1-5rem gap between cards

### Color Schemes
- **Background 1**: Default theme background
- **Background 2**: Secondary background color
- **Accent 1**: Primary accent color scheme

## Template Usage

### Adding to Homepage
The section is pre-configured in `templates/index.json` after the customer testimonials section.

### Adding to Other Templates
Add the blog preview section to any template:

```json
{
  "sections": {
    "blog_preview": {
      "type": "blog-preview",
      "settings": {
        "blog": "news",
        "heading": "Latest Updates",
        "articles_to_show": 2
      }
    }
  },
  "order": ["blog_preview"]
}
```

## Customization Examples

### Wellness Blog Preview
```json
{
  "blog": "wellness",
  "heading": "Wellness Tips",
  "subheading": "<p>Expert insights for a healthier lifestyle</p>",
  "articles_to_show": 2,
  "show_tags": true,
  "image_aspect_ratio": "16/9",
  "color_scheme": "1"
}
```

### News Updates Grid
```json
{
  "blog": "news",
  "heading": "Company News",
  "articles_to_show": 3,
  "show_author": true,
  "show_date": true,
  "mobile_layout": "scroll",
  "color_scheme": "2"
}
```

## Technical Details

### CSS Variables
The section uses a comprehensive set of CSS custom properties for consistent theming:
- Color schemes follow theme standards
- Typography scales responsively
- Spacing uses rem units for accessibility
- Hover effects and transitions are performance-optimized

### Performance Considerations
- Images use responsive loading with multiple sizes
- CSS is scoped to prevent conflicts
- Minimal JavaScript footprint
- Optimized for Core Web Vitals

### Accessibility Features
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels and landmarks
- Keyboard navigation support
- Screen reader friendly
- High contrast support

## Troubleshooting

### No Articles Showing
1. Ensure a blog is selected in section settings
2. Verify the selected blog has published articles
3. Check if blog handle exists and is accessible

### Styling Issues
1. Verify CSS variables are loaded in `snippets/css-variables.liquid`
2. Check for conflicting styles in theme CSS
3. Ensure color scheme settings are properly configured

### Performance Issues
1. Optimize blog article images
2. Limit number of articles displayed
3. Consider lazy loading for below-fold sections

## Best Practices

### Content Strategy
- Keep article titles concise and compelling
- Use high-quality, consistent featured images
- Write engaging excerpts that encourage clicks
- Tag articles for better organization

### Design Guidelines
- Maintain consistent image aspect ratios
- Use appropriate spacing for content density
- Consider color contrast for accessibility
- Test on multiple devices and screen sizes

### SEO Optimization
- Use descriptive headings and subheadings
- Ensure proper image alt text
- Implement structured data where applicable
- Maintain fast loading speeds
