# OpenGraph Testing App

A Next.js application for testing different OpenGraph card formats on Twitter and other social media platforms.

## Features

- **Large Image Cards**: Test `summary_large_image` format with 1200x630 pixel images
- **Small Image Cards**: Test `summary` format with 280x150 pixel images  
- **Text-Only Cards**: Test cards without images for minimal, fast-loading previews
- **Dynamic Content**: Generate unique OpenGraph tags based on URL parameters
- **X/Twitter Compliant**: Includes all required tags (`twitter:site`, `twitter:creator`, `twitter:image:alt`)
- **Accessibility Focused**: Proper alt text and semantic markup
- **Mobile-Responsive**: Works seamlessly on all devices
- **Production Ready**: Optimized for Vercel deployment

## Quick Start

1. **Clone and Install**:
   ```bash
   git clone <your-repo-url>
   cd vercel-twitter
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Visit**: `http://localhost:3000`

## X/Twitter Compliance

This app follows the current X/Twitter Cards documentation requirements:

### ✅ Required Tags (All Cards)
- `twitter:card` - Card type (summary, summary_large_image, app, player)
- `twitter:site` - Website's Twitter handle (required for all cards)

### ✅ Recommended Tags
- `twitter:creator` - Content creator handle (recommended for large image cards)
- `twitter:image:alt` - Alt text for images (accessibility)

### ✅ Content Tags with Fallbacks
- `twitter:title` (falls back to `og:title`)
- `twitter:description` (falls back to `og:description`)  
- `twitter:image` (falls back to `og:image`)

### ✅ Compliance Features
- HTTPS URLs for all images and content
- Proper image dimensions for each card type
- Accessibility-focused alt text
- 7-day cache consideration in testing workflow

## Testing OpenGraph Cards

### Method 1: Local Testing
1. Run the development server
2. Use ngrok or similar tool to expose localhost
3. Share the public URL on Twitter to see previews

### Method 2: Deploy to Vercel
1. Connect your repository to Vercel
2. Deploy automatically
3. Share the live URLs on Twitter

## Available Test Pages

| Page | URL | Card Type | Description |
|------|-----|-----------|-------------|
| Large Image | `/large-image` | `summary_large_image` | Large banner image (1200x630) |
| Small Image | `/small-image` | `summary` | Small square image (280x150) |
| No Image | `/no-image` | `summary` | Text-only card |
| Dynamic | `/dynamic` | Variable | Dynamic content based on URL params |

## Dynamic Content Examples

Test different configurations by adding URL parameters:

```
/dynamic?theme=large&title=My%20Blog%20Post&description=An%20amazing%20article
/dynamic?theme=dark&title=Product%20Launch&description=New%20product%20features
/dynamic?title=Custom%20Title&description=Custom%20description
```

## OpenGraph Meta Tags Used (X/Twitter Compliant)

### Large Image Card
```html
<meta property="og:title" content="Large Image Card Test" />
<meta property="og:description" content="Testing large image cards..." />
<meta property="og:image" content="/og-large-image.svg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@yourhandle" />
<meta name="twitter:creator" content="@yourhandle" />
<meta name="twitter:image:alt" content="Large Image Card Test description" />
```

### Small Image Card
```html
<meta property="og:title" content="Small Image Card Test" />
<meta property="og:description" content="Testing small image cards..." />
<meta property="og:image" content="/og-small-image.svg" />
<meta property="og:image:width" content="280" />
<meta property="og:image:height" content="150" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@yourhandle" />
<meta name="twitter:image:alt" content="Small Image Card Test description" />
```

### Text-Only Card
```html
<meta property="og:title" content="No Image Card Test" />
<meta property="og:description" content="Testing text-only cards..." />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@yourhandle" />
<!-- No og:image tag -->
```

## Deployment

### Deploy to Vercel

1. **Connect Repository**:
   - Go to [Vercel Dashboard](https://vercel.com)
   - Click "New Project"
   - Import your repository

2. **Configure Build**:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Deploy**:
   - Click "Deploy"
   - Your app will be live at `https://your-project.vercel.app`

### Environment Variables

The app automatically detects Vercel deployment and uses the correct base URL for OpenGraph images.

## File Structure

```
src/
├── app/
│   ├── components/
│   │   └── Navigation.tsx    # Navigation component
│   ├── large-image/
│   │   └── page.tsx          # Large image test page
│   ├── small-image/
│   │   └── page.tsx          # Small image test page
│   ├── no-image/
│   │   └── page.tsx          # No image test page
│   ├── dynamic/
│   │   └── page.tsx          # Dynamic content test page
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
public/
├── og-large-image.svg        # Large image for testing
└── og-small-image.svg        # Small image for testing
```

## Testing Tips (X/Twitter Compliant)

1. **Use Real URLs**: Always test with deployed URLs, not localhost
2. **HTTPS Required**: All URLs must be HTTPS and accessible
3. **Include Required Tags**: Always include `twitter:site` (required for all cards)
4. **Add Creator Attribution**: Include `twitter:creator` for large image cards
5. **Accessibility**: Add `twitter:image:alt` for all images
6. **Clear Cache**: X/Twitter caches cards for 7 days after tweet publication
7. **Check robots.txt**: Ensure Twitterbot can access your content
8. **Card Validator**: Use Twitter's Card Validator after deployment (when available)
9. **Multiple Platforms**: Test on X/Twitter, Facebook, LinkedIn, Discord
10. **Mobile Testing**: Check how cards appear on mobile devices

## Common Issues (X/Twitter Specific)

### Card Not Showing
- Check if meta tags are in the `<head>` section
- Verify `twitter:site` is included (required for all cards)
- Ensure all URLs are HTTPS and publicly accessible
- Check if Twitterbot is blocked in robots.txt
- Test with Twitter's Card Validator when available

### Image Not Loading
- Ensure images are publicly accessible via HTTPS
- Check image dimensions match OpenGraph requirements
- Verify `twitter:image:alt` is included for accessibility
- Confirm proper image aspect ratio

### Wrong Card Type
- Verify `twitter:card` meta tag is correct
- Check if image dimensions match the card type
- Include `twitter:creator` for large image cards
- Ensure proper fallback to OpenGraph tags

### Caching Issues
- Cards are cached for 7 days after tweet publication
- Use different URLs for testing changes
- Revalidate with Card Validator after updates

## Resources

- [X/Twitter Cards Documentation](https://developer.x.com/en/docs/x-for-websites/cards/overview/abouts-cards)
- [X/Twitter Cards Markup Reference](https://developer.x.com/en/docs/x-for-websites/cards/overview/markup)
- [X/Twitter Cards Getting Started](https://developer.x.com/en/docs/x-for-websites/cards/guides/getting-started)
- [X/Twitter Cards Troubleshooting](https://developer.x.com/en/docs/x-for-websites/cards/guides/troubleshooting-cards)
- [OpenGraph Protocol](https://ogp.me/)
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

## License

MIT
