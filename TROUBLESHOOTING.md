# OpenGraph & X.com (Twitter) Card Troubleshooting Guide

## Common Issues and Solutions

### 1. Images Not Showing on X.com (Twitter)

#### Issue: X.com 7-Day Cache
X.com caches Twitter cards for 7 days after the first time they're accessed. If your images were broken initially, they'll remain cached as broken.

**Solutions:**
- Use the X.com Card Validator: https://cards-dev.twitter.com/validator
- Add query parameters to create a "new" URL: `?v=2` or `?test=1`
- Test with the `/test-image` route which uses a fresh URL
- Wait 7 days for the cache to expire (not ideal!)

#### Issue: Missing Required Twitter Tags
As of 2025, X.com requires the `twitter:site` tag for ALL card types.

**Solution:**
```tsx
twitter: {
  card: 'summary_large_image',
  site: '@your_actual_handle', // REQUIRED - Must be a real X/Twitter handle
  creator: '@your_actual_handle', // Recommended for content
}
```

### 2. Images Not Loading in Next.js

#### Issue: Incorrect metadataBase
The `metadataBase` must be properly configured for absolute URLs.

**Solution:**
```tsx
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
  ),
}
```

#### Issue: Next.js 15 App Router Image Convention
Files must be named exactly `opengraph-image.png` or `twitter-image.png`.

**Solution:**
- Place images in the same directory as your `page.tsx`
- Use exact filenames (case-sensitive)
- Images should be: 1200x630px for large cards, 280x280px for summary cards

### 3. Environment Variables

Create a `.env.local` file:
```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

### 4. Testing Checklist

1. **Verify Images Exist:**
   ```bash
   ls -la src/app/*/opengraph-image.png
   ls -la src/app/*/twitter-image.png
   ```

2. **Check Build Output:**
   ```bash
   npm run build
   ```
   Look for image routes in the build output.

3. **Test Metadata:**
   - View page source and search for `<meta property="og:image"`
   - Check for `<meta name="twitter:image"`

4. **Validate with Tools:**
   - X.com Validator: https://cards-dev.twitter.com/validator
   - Facebook Debugger: https://developers.facebook.com/tools/debug/
   - LinkedIn Inspector: https://www.linkedin.com/post-inspector/

### 5. Debug Mode

Add this to your page to see the actual metadata being generated:

```tsx
export default function Page() {
  if (process.env.NODE_ENV === 'development') {
    console.log('Metadata:', metadata);
  }
  // ... rest of your component
}
```

### 6. Common Mistakes

1. **Using placeholder Twitter handles:** `@yourhandle` won't work - use a real handle
2. **Wrong image dimensions:** Large cards need 1200x630, summary needs 280x280
3. **Missing HTTPS:** All URLs must use HTTPS in production
4. **Incorrect file paths:** Images must be in the correct location
5. **Not waiting for cache:** X.com caches for 7 days

### 7. Quick Fix Script

Run this to test with fresh URLs:
```bash
# Test your deployment with cache-busting parameters
curl -I "https://your-site.vercel.app/test-image?v=$(date +%s)"
```

### 8. Next Steps if Nothing Works

1. Check robots.txt - ensure Twitterbot isn't blocked
2. Verify HTTPS certificate is valid
3. Check server logs for 404s on image requests
4. Use a fresh subdomain or path that's never been cached
5. Contact X.com developer support if the validator shows errors

## Need More Help?

- Next.js Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image
- X.com Docs: https://developer.x.com/en/docs/x-for-websites/cards/overview/markup
- File an issue: Include your metadata code and validator results 