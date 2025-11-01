import React from 'react';

const CookiesPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Effective Date: November 1, 2025 | Last Updated: November 1, 2025</p>

        <p className="text-gray-700 mb-4">
          This Cookie Policy explains how PT Pelita Berkah Abadi (“we,” “our,” or “us”) uses cookies and similar technologies on the Pelita Berkah Abadi News Portal (the “Website”).
        </p>
        <p className="text-gray-700 mb-6">
          By continuing to browse or use our Website, you agree to the use of cookies as described in this policy.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">1. What Are Cookies?</h2>
        <p className="text-gray-600 mb-4">
          Cookies are small text files placed on your device (computer, tablet, or smartphone) when you visit a website. They help the website function properly, improve user experience, and provide analytical insights to enhance performance.
        </p>
        <p className="text-gray-600 mb-3">Cookies can be:</p>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
          <li><span className="font-semibold">Session cookies:</span> Temporary cookies that are deleted when you close your browser.</li>
          <li><span className="font-semibold">Persistent cookies:</span> Remain on your device for a set period or until manually deleted.</li>
          <li><span className="font-semibold">First-party cookies:</span> Set by our website.</li>
          <li><span className="font-semibold">Third-party cookies:</span> Set by other websites or services (e.g., analytics or advertising providers).</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">2. How We Use Cookies</h2>
        <p className="text-gray-600 mb-4">
          We use cookies to improve your experience on our website, including:
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Essential Cookies</h3>
        <p className="text-gray-600 mb-4">
          To ensure our website functions properly — such as navigation, security, and page access. Without these cookies, certain features may not work.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Performance and Analytics Cookies</h3>
        <p className="text-gray-600 mb-4">
          To understand how visitors use our website (e.g., most visited pages, time spent on site). This helps us optimize our content and improve usability.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Functional Cookies</h3>
        <p className="text-gray-600 mb-4">
          To remember your preferences, such as language settings or display options.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Advertising and Marketing Cookies</h3>
        <p className="text-gray-600 mb-6">
          To deliver relevant news recommendations and advertisements based on your browsing interests. These may be managed by trusted third-party advertising networks.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Third-Party Cookies</h2>
        <p className="text-gray-600 mb-3">
          Our website may include links or embedded content (e.g., videos, news widgets, or ads) from third-party providers such as:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
          <li>Google Analytics</li>
          <li>Google Ads</li>
          <li>Facebook Pixel</li>
          <li>Other verified news and media partners</li>
        </ul>
        <p className="text-gray-600 mb-6">
          These third parties may also set cookies to track user behavior across their services. We encourage you to review their privacy and cookie policies for more details.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Managing Your Cookie Preferences</h2>
        <p className="text-gray-600 mb-3">
          You have the right to accept or reject cookies at any time. You can:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
          <li>Adjust your browser settings to block or delete cookies.</li>
          <li>Use the cookie banner or settings panel (if available) to manage consent.</li>
        </ul>
        <p className="text-gray-600 font-semibold mb-6">
          Please note: Disabling certain cookies may affect the functionality and performance of our website.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Data Collected Through Cookies</h2>
        <p className="text-gray-600 mb-3">
          Cookies may collect the following non-personal information:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
          <li>Browser type and version</li>
          <li>Device type and operating system</li>
          <li>Pages visited and time spent on site</li>
          <li>Referring website or source</li>
        </ul>
        <p className="text-gray-600 mb-6">
          This data is used for analytics and service improvement. Personal data is only processed in accordance with our Privacy Policy.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Updates to This Policy</h2>
        <p className="text-gray-600 mb-6">
          We may update this Cookie Policy from time to time to reflect changes in law, technology, or our business practices. Any updates will be posted on this page with the revised “Last Updated” date. We recommend reviewing this policy periodically to stay informed about how we use cookies.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions or concerns about our use of cookies, please contact:
        </p>
        <p className="text-gray-600">
          📧 <a href="mailto:corporate@pelita.tech" className="text-emerald-600 hover:underline">corporate@pelita.tech</a>
        </p>
      </div>
    </div>
  );
};

export default CookiesPolicyPage;