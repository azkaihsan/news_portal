import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../services/api';
import { toCamelCase } from '../lib/utils';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories.slice(0, 5)); // Show first 5 categories
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    loadCategories();
  }, []);

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <img 
              src="/pelita-logo.png"
              alt="Pelita News" 
              className="h-16 object-contain mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted source for breaking news, in-depth analysis, and exclusive coverage from around the world.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Home</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Categories</Link></li>
              <li><Link to="/countries" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Countries</Link></li>
              <li><Link to="/sources" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Sources</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">About Us</Link></li>
              <li><a href="https://wa.me/6285183271214" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
                <li key='3'>
                  <Link
                    to='/category/general'
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    General
                  </Link>
                </li>
                <li key='9'>
                  <Link
                    to='/category/Politics'
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    Politics
                  </Link>
                </li>
                <li key='15'>
                  <Link
                    to='/category/Opinion'
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    Opinion
                  </Link>
                </li>
                <li key='19'>
                  <Link
                    to='/country/19'
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    National News
                  </Link>
                </li>
                <li key='16'>
                  <Link
                    to='/category/World'
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    World News
                  </Link>
                </li>
                <li key='67'>
                  <Link
                    to='/category/BRICS'
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    BRICS
                  </Link>
                </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+6285183271214</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>corporate@pelita.tech</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span>Jl. Sumber Hegar IV No. 12-7 Bandung, 40222</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Pelita News. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-emerald-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;