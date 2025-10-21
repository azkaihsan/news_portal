import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const SimpleHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-emerald-600">Today:</span> {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              <span className="font-semibold">Weather:</span> 22°C, Sunny
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_infopress/artifacts/8hab7u4x_Pelita-Logo-A2-e1755432184709.png" 
              alt="Pelita News" 
              className="h-12 object-contain"
            />
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block border-t border-gray-200">
          <div className="flex items-center space-x-8 py-3">
            <a href="/" className="text-emerald-600 font-semibold border-b-2 border-emerald-600 pb-1">
              Home
            </a>
            <a href="/categories" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Categories
            </a>
            <a href="/countries" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Countries
            </a>
            <a href="/sources" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Sources
            </a>
            <a href="/search" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Search
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-emerald-600 font-semibold">Home</a>
              <a href="/categories" className="text-gray-700">Categories</a>
              <a href="/countries" className="text-gray-700">Countries</a>
              <a href="/sources" className="text-gray-700">Sources</a>
              <a href="/search" className="text-gray-700">Search</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default SimpleHeader;
