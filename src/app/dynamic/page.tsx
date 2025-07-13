import { Metadata } from 'next';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const theme = params.theme || 'default';
  const title = params.title || 'Dynamic Content Test';
  const description = params.description || 'Testing dynamic OpenGraph content generation';
  
  // Generate dynamic image based on theme
  const imageUrl = theme === 'dark' ? '/og-large-image.svg' : '/og-small-image.svg';
  const cardType = theme === 'large' ? 'summary_large_image' : 'summary';
  
  return {
    title: `${title} - Dynamic OpenGraph`,
    description: description.toString(),
    openGraph: {
      title: title.toString(),
      description: description.toString(),
      type: 'website',
      url: `/dynamic?theme=${theme}&title=${title}&description=${description}`,
      images: [
        {
          url: imageUrl,
          width: theme === 'large' ? 1200 : 280,
          height: theme === 'large' ? 630 : 150,
          alt: `Dynamic content image - ${theme} theme`,
        },
      ],
    },
    twitter: {
      card: cardType as 'summary' | 'summary_large_image',
      site: '@yourhandle', // Required: Website's Twitter handle
      creator: cardType === 'summary_large_image' ? '@yourhandle' : undefined, // Recommended for large image cards
      title: title.toString(),
      description: description.toString(),
      images: [imageUrl],
    },
    other: {
      'twitter:image:alt': `Dynamic content image - ${theme} theme with ${cardType} card format`,
    },
  };
}

export default async function DynamicPage({ searchParams }: Props) {
  const params = await searchParams;
  const theme = params.theme || 'default';
  const title = params.title || 'Dynamic Content Test';
  const description = params.description || 'Testing dynamic OpenGraph content generation';
  
  const presets = [
    {
      name: 'Blog Post',
      params: {
        theme: 'large',
        title: 'How to Master OpenGraph Tags',
        description: 'A comprehensive guide to optimizing social media previews with OpenGraph meta tags.',
      },
    },
    {
      name: 'Product Page',
      params: {
        theme: 'dark',
        title: 'Amazing Product Launch',
        description: 'Discover our latest product with incredible features and benefits.',
      },
    },
    {
      name: 'News Article',
      params: {
        theme: 'default',
        title: 'Breaking News Update',
        description: 'Stay informed with the latest developments in technology and innovation.',
      },
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Dynamic Content Test
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Current Configuration
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Active Theme:</h3>
              <code className="text-sm text-indigo-600">{theme}</code>
              
              <h3 className="font-medium text-gray-700 mb-2 mt-4">Title:</h3>
              <code className="text-sm text-indigo-600">{title}</code>
              
              <h3 className="font-medium text-gray-700 mb-2 mt-4">Description:</h3>
              <code className="text-sm text-indigo-600 text-wrap">{description}</code>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              How It Works
            </h2>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <ol className="text-sm text-indigo-800 space-y-2">
                <li>1. URL parameters modify meta tags</li>
                <li>2. Each parameter generates unique content</li>
                <li>3. Image and card type change dynamically</li>
                <li>4. Perfect for CMS integration</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Try Different Presets
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {presets.map((preset) => {
              const url = `/dynamic?${Object.entries(preset.params)
                .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
                .join('&')}`;
              
              return (
                <a
                  key={preset.name}
                  href={url}
                  className="block p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg hover:from-indigo-100 hover:to-purple-100 transition-all border border-indigo-200"
                >
                  <h3 className="font-medium text-indigo-900 mb-2">{preset.name}</h3>
                  <p className="text-sm text-indigo-700 mb-2">{preset.params.title}</p>
                  <div className="text-xs text-indigo-600">
                    Theme: {preset.params.theme}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Custom URL Builder
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-4">
              Build your own URL with custom parameters:
            </p>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Theme
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md" defaultValue={theme}>
                  <option value="default">Default</option>
                  <option value="dark">Dark</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  defaultValue={title}
                  placeholder="Enter custom title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  defaultValue={description}
                  placeholder="Enter custom description"
                  rows={3}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Note: This is a demo UI. In production, you'd implement form handling to generate URLs.
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="font-medium text-blue-800 mb-2">💡 Implementation Tips (X/Twitter Compliant):</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Use Next.js generateMetadata for dynamic meta tags</li>
            <li>• Always include <code>twitter:site</code> (required for all cards)</li>
            <li>• Add <code>twitter:creator</code> for large image cards</li>
            <li>• Include <code>twitter:image:alt</code> for accessibility</li>
            <li>• Ensure all URLs are HTTPS and accessible</li>
            <li>• Validate URL parameters for security</li>
            <li>• Implement fallback values for missing parameters</li>
            <li>• Test with Twitter Card Validator after deployment</li>
            <li>• Remember cards are cached for 7 days</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 