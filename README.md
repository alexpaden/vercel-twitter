# X.com (Twitter) OpenGraph Testing App

A Next.js 15 application for testing and debugging OpenGraph and Twitter Card implementations.

## 🚨 Important Setup Instructions

### 1. Configure Twitter/X Handle
**You MUST replace `@vercel` with your actual Twitter/X handle** in all metadata configurations:

```tsx
twitter: {
  site: '@your_actual_handle', // REQUIRED - Replace this!
  creator: '@your_actual_handle', // Recommended
}
```

### 2. Set Environment Variables
Create a `.env.local` file:

```bash
# Your production URL (required for proper OpenGraph URLs)
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 3. Understanding X.com's 7-Day Cache
X.com caches Twitter cards for 7 days. If your images aren't showing:
- Use the `/test-image` route (fresh URL)
- Add query parameters: `?v=2` or `?test=1`
- Use the X.com Card Validator: https://cards-dev.twitter.com/validator

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel deploy
```

## 📋 Test Pages

| Page | Route | Card Type | Purpose |
|------|-------|-----------|---------|
| Home | `/` | `summary_large_image` | Main testing hub |
| Large Image | `/large-image` | `summary_large_image` | 1200x630px banner |
| Small Image | `/small-image` | `summary` | 280x280px square |
| No Image | `/no-image` | `summary` | Text-only card |
| Dynamic | `/dynamic` | Variable | URL parameter-based |
| Test Image | `/test-image` | `summary_large_image` | Fresh URL for testing |

## 🔍 Troubleshooting

### Images Not Showing on X.com

1. **Check Twitter Handle**: Ensure you're using a real Twitter/X handle
2. **Verify HTTPS**: All URLs must use HTTPS in production
3. **Clear Cache**: Use fresh URLs or wait 7 days
4. **Validate**: Use https://cards-dev.twitter.com/validator

### Common Issues

- ❌ `@yourhandle` → ✅ `@real_handle`
- ❌ HTTP URLs → ✅ HTTPS URLs
- ❌ Wrong dimensions → ✅ 1200x630 (large), 280x280 (small)
- ❌ Missing `twitter:site` → ✅ Always include it

### Debug Checklist

```bash
# 1. Verify images exist
ls -la src/app/*/opengraph-image.png

# 2. Check build output
npm run build

# 3. Test with validator
# https://cards-dev.twitter.com/validator

# 4. View page source for meta tags
# Look for: <meta name="twitter:image"
```

## 📚 Documentation

- [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) - Detailed debugging guide
- [X.com Cards Docs](https://developer.x.com/en/docs/x-for-websites/cards/overview/markup)
- [Next.js Metadata](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)

## 🛠️ Tech Stack

- Next.js 15.3.5
- React 19
- TypeScript
- Tailwind CSS
- Vercel Deployment

## 📝 License

MIT
