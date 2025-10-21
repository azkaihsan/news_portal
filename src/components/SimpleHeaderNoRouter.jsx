import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const SimpleHeaderNoRouter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">

      {/* Main Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Language Selector & Search */}
            <div className="hidden md:flex items-center gap-4 flex-1">
              <form onSubmit={handleSearch} className="relative max-w-xs">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border-gray-300"
                />
              </form>
            </div>

            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <div className="flex flex-col items-center">
                <img
                  src="/pelita-logo.png"
                  alt="Pelita News"
                  className="h-16 object-contain"
                />
              </div>
            </a>

            {/* Right Section */}
            <div className="flex items-center gap-4 flex-1 justify-end">
              <a href="/contact">
                <Button
                  className="hidden md:flex bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-6 transition-all duration-300"
                >
                  CONTACT US
                </Button>
              </a>
              <button
                className="md:hidden text-gray-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex items-center justify-center gap-8 py-3">
            <a href="/category/business" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors uppercase tracking-wide">BUSINESS</a>
            <a href="/category/technology" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors uppercase tracking-wide">TECHNOLOGY</a>
            <a href="/category/environment" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors uppercase tracking-wide">ENVIRONMENT</a>
            <a href="/category/sports" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors uppercase tracking-wide">SPORTS</a>
            <a href="/category/health" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors uppercase tracking-wide">HEALTH</a>
            <a href="/category/science" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors uppercase tracking-wide">SCIENCE</a>
            <a href="/category/entertainment" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors uppercase tracking-wide">ENTERTAINMENT</a>
            <a href="/category/politics" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors uppercase tracking-wide">POLITICS</a>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search news..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full"
                  />
                </div>
              </form>
              <div className="flex flex-col gap-2">
                <a href="/category/business" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 hover:text-emerald-600 transition-colors">BUSINESS</a>
                <a href="/category/technology" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 hover:text-emerald-600 transition-colors">TECHNOLOGY</a>
                <a href="/category/environment" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 hover:text-emerald-600 transition-colors">ENVIRONMENT</a>
                <a href="/category/sports" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 hover:text-emerald-600 transition-colors">SPORTS</a>
                <a href="/category/health" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 hover:text-emerald-600 transition-colors">HEALTH</a>
                <a href="/category/science" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 hover:text-emerald-600 transition-colors">SCIENCE</a>
                <a href="/category/entertainment" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 hover:text-emerald-600 transition-colors">ENTERTAINMENT</a>
                <a href="/category/politics" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 hover:text-emerald-600 transition-colors">POLITICS</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default SimpleHeaderNoRouter;
