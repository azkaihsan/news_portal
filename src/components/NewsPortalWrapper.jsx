import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../react-pages/HomePage";
import NewsDetailPage from "../react-pages/NewsDetailPage";
import CategoryNewsPage from "../react-pages/CategoryNewsPage";
import CountryNewsPage from "../react-pages/CountryNewsPage";
import SourceNewsPage from "../react-pages/SourceNewsPage";
import CategoriesPage from "../react-pages/CategoriesPage";
import CountriesPage from "../react-pages/CountriesPage";
import SourcesPage from "../react-pages/SourcesPage";
import SearchPage from "../react-pages/SearchPage";
import PlaceholderPage from "../react-pages/PlaceholderPage";
import AboutPage from "../react-pages/AboutPage";
import PrivacyPolicyPage from "../react-pages/PrivacyPolicyPage";
import TermsOfServicePage from "../react-pages/TermsOfServicePage";
import CookiesPolicyPage from "../react-pages/CookiesPolicyPage";

function NewsPortalWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Show a loading state or basic content during SSR
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading News Portal...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/category/:categoryName" element={<CategoryNewsPage />} />
          <Route path="/country/:countryCode" element={<CountryNewsPage />} />
          <Route path="/source/:sourceId" element={<SourceNewsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/sources" element={<SourcesPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/cookies" element={<CookiesPolicyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default NewsPortalWrapper;
