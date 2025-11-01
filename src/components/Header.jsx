import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { fetchCategories } from '../services/api';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories.slice(0, 7)); // Show first 8 categories
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    loadCategories();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
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
            <Link to="/" className="flex-shrink-0">
              <div className="flex flex-col items-center">
                <img 
                  src="https://customer-assets.emergentagent.com/job_infopress/artifacts/8hab7u4x_Pelita-Logo-A2-e1755432184709.png" 
                  alt="Pelita News" 
                  className="h-16 object-contain"
                />
              </div>
            </Link>

            {/* Right Section */}
            <div className="flex items-center gap-4 flex-1 justify-end">
              <a href="https://wa.me/6285183271214">
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
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.name.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors uppercase tracking-wide"
              >
                {category.name}
              </Link>
            ))}
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
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.name.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 text-gray-700 hover:text-emerald-600 transition-colors"
                  >
                    {category.name.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;