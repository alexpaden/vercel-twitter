#!/bin/bash

# Copy images from public directory to changing-image directory
echo "Copying images for platform-specific OpenGraph testing..."

# Copy twitter-small.png to twitter-image.png
cp public/twitter-small.png src/app/changing-image/twitter-image.png
echo "✓ Copied twitter-small.png → twitter-image.png"

# Copy non-twitter-large.png to opengraph-image.png
cp public/non-twitter-large.png src/app/changing-image/opengraph-image.png
echo "✓ Copied non-twitter-large.png → opengraph-image.png"

echo "✅ Image setup complete!"
echo ""
echo "You can now test the page at:"
echo "https://vercel-twitter-alexpadens-projects.vercel.app/changing-image" 