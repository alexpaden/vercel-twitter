# Platform-Specific Images Setup

## Required Manual Steps

Since the images need to be copied, please run these commands in your terminal:

```bash
# Navigate to your project root
cd /Users/shoni/Desktop/vercel-twitter

# Copy twitter-small.png to twitter-image.png
cp public/twitter-small.png src/app/changing-image/twitter-image.png

# Copy non-twitter-large.png to opengraph-image.png
cp public/non-twitter-large.png src/app/changing-image/opengraph-image.png
```

Or run the provided script:
```bash
chmod +x src/app/changing-image/copy-images.sh
./src/app/changing-image/copy-images.sh
```

## What This Does

- **Twitter**: Will display `twitter-small.png` (280×280) with text overlay
- **Other Platforms**: Will display `non-twitter-large.png` (1200×630) 

## Testing

After copying the images and deploying:

1. **Twitter/X Test**: 
   - URL: `https://vercel-twitter-alexpadens-projects.vercel.app/changing-image`
   - Validator: https://cards-dev.x.com/validator
   - Expected: Small square image with text

2. **Facebook Test**:
   - Debugger: https://developers.facebook.com/tools/debug/
   - Expected: Large banner image

3. **LinkedIn Test**:
   - Post Inspector: https://www.linkedin.com/post-inspector/
   - Expected: Large banner image 