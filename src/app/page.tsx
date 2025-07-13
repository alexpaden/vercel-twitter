import Link from "next/link";
import TwitterHandleNote from "./components/TwitterHandleNote";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'OpenGraph Testing App - Test Twitter Cards & Social Media Previews',
  description: 'Test different OpenGraph card formats for X/Twitter and other social media platforms. Validate your social media previews with our testing tool.',
  openGraph: {
    title: 'OpenGraph Testing App',
    description: 'Test different OpenGraph card formats for X/Twitter and other social media platforms',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/large-card.png',
        width: 1200,
        height: 630,
        alt: 'OpenGraph Testing App - Test your social media card previews',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourhandle', // Required: Replace with your website's Twitter handle
    title: 'OpenGraph Testing App',
    description: 'Test different OpenGraph card formats for X/Twitter and other social media platforms',
    images: ['/large-card.png'],
  },
  other: {
    'twitter:image:alt': 'OpenGraph Testing App - Test your social media card previews with different formats',
  },
};

export default function Home() {
  const testPages = [
    {
      href: "/large-image",
      title: "Large Image Card",
      description: "Tests twitter:card = 'summary_large_image' - Shows a large image banner",
      features: ["1200x630px image", "Large visual impact", "Good for screenshots, graphics"],
    },
    {
      href: "/small-image",
      title: "Small Image Card",
      description: "Tests twitter:card = 'summary' - Shows a small square image",
      features: ["Square 280x280px image (1:1 ratio)", "Compact layout", "Good for logos, avatars"],
    },
    {
      href: "/no-image",
      title: "Text Only Card",
      description: "Tests OpenGraph without images - Pure text content",
      features: ["Title and description only", "Clean, minimal look", "Fast loading"],
    },
    {
      href: "/dynamic",
      title: "Dynamic Content",
      description: "Tests dynamically generated OpenGraph content",
      features: ["URL parameter-based content", "Unique meta tags per page", "SEO-friendly"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          OpenGraph Testing App
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Test different OpenGraph card formats for X/Twitter and other social media platforms
        </p>
        <p className="text-gray-500 mb-4">
          Each page demonstrates a different OpenGraph card type. Share these URLs on X/Twitter to see how they render!
        </p>
        <div className="flex items-center justify-center space-x-4 text-sm text-green-600">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            X/Twitter Compliant
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Accessibility Focused
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            All Required Tags
          </span>
        </div>
      </div>

      <TwitterHandleNote />

      <div className="grid md:grid-cols-2 gap-6">
        {testPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {page.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {page.description}
            </p>
            <ul className="space-y-1">
              {page.features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-500 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          How to Test (X/Twitter Compliant)
        </h3>
        <ol className="space-y-2 text-blue-800">
          <li>1. Deploy this app to Vercel (HTTPS required)</li>
          <li>2. Navigate to each test page</li>
          <li>3. Copy the URL and paste it into X/Twitter</li>
          <li>4. Observe how the OpenGraph card renders</li>
          <li>5. Note: Cards are cached for 7 days after tweet publication</li>
        </ol>
        <div className="mt-4 p-3 bg-blue-100 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>✅ Compliance Features:</strong> All pages include required <code>twitter:site</code>, 
            recommended <code>twitter:creator</code> for large images, and <code>twitter:image:alt</code> for accessibility.
          </p>
        </div>
      </div>
    </div>
  );
}
