import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
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

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Home</a></li>
              <li><a href="/categories" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Categories</a></li>
              <li><a href="/countries" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Countries</a></li>
              <li><a href="/sources" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Sources</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="/category/business" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Business</a></li>
              <li><a href="/category/technology" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Technology</a></li>
              <li><a href="/category/sports" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Sports</a></li>
              <li><a href="/category/health" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Health</a></li>
              <li><a href="/category/entertainment" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Entertainment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>(123) 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>hello@pelita.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span>123 News Street, Media City, Country</span>
              </li>
            </ul>
            {/* Social Media */}
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Pelita News. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-emerald-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;