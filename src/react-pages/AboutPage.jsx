import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        
        <p className="text-lg text-gray-700 mb-4">
          Welcome to PT Pelita Berkah Abadi News Portal — Your trusted source for breaking news, in-depth analysis, and exclusive coverage from around the world.
        </p>

        <p className="text-gray-600 mb-4">
          As part of PT Pelita Berkah Abadi, a technology-driven company committed to digital innovation, our news portal combines the power of journalism with cutting-edge technology to deliver reliable information in real time.
        </p>

        <p className="text-gray-600 mb-4">
          We are a news aggregator platform, gathering and curating the latest stories from trusted global and local media sources. Our intelligent system filters, organizes, and presents news by relevance and category — ensuring that readers receive a comprehensive and unbiased view of current events.
        </p>

        <p className="text-gray-600 mb-6">
          Beyond aggregation, our editorial team provides in-depth analysis, expert commentary, and exclusive features to help readers understand the stories shaping our world today.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Stand For</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
          <li><span className="font-semibold">Accuracy and Credibility</span> — Aggregated from verified, reputable sources.</li>
          <li><span className="font-semibold">Insight and Depth</span> — We provide analysis that goes beyond the headlines.</li>
          <li><span className="font-semibold">Technology-Driven Journalism</span> — Built using advanced data and automation tools for seamless news delivery.</li>
          <li><span className="font-semibold">Global and Local Relevance</span> — From world affairs to local issues, we connect audiences to what matters most.</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">About PT Pelita Berkah Abadi</h2>
        <p className="text-gray-600 mb-4">
          PT Pelita Berkah Abadi is an Indonesian technology solutions company dedicated to empowering businesses through digital transformation. Our core services include:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
          <li>Web & Mobile Application Development</li>
          <li>IT Consulting and System Integration</li>
          <li>Internet of Things (IoT) Solutions</li>
          <li>IT Support & Maintenance</li>
          <li>Business and Data Analytics</li>
        </ul>
        <p className="text-gray-600 mb-4">
          We leverage innovation, data, and smart design to create scalable digital ecosystems — including this news portal, where technology meets information.
        </p>
        <p className="text-gray-600">
          Learn more about us at <a href="https://pelita.tech/about" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">pelita.tech/about</a>
        </p>
        <p className="text-gray-600 mb-6">
          Visit our main site: <a href="https://pelita.tech" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">pelita.tech</a>
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
        <p className="text-gray-600 mb-4">
          In an era of information overload, we aim to simplify access to credible news.
        </p>
        <p className="text-gray-600">
          Through advanced aggregation technology and responsible journalism, PT Pelita Berkah Abadi News Portal helps you stay connected, informed, and inspired — all in one place.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;