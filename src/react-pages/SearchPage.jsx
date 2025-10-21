import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { mockNews } from '../mock/mockData';
import NewsCard from '../components/NewsCard';
import { Search, ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    } else {
      setFilteredNews([]);
    }
  }, [searchParams]);

  const performSearch = (query) => {
    setLoading(true);
    const results = mockNews.filter(news =>
      news.title.toLowerCase().includes(query.toLowerCase()) ||
      news.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNews(results);
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
            <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-semibold">Search</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Search News</h1>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for news articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg border-2 border-gray-300 focus:border-emerald-600 transition-colors"
              />
              <Button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white"
                disabled={loading}
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Search'}
              </Button>
            </div>
          </form>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-12 h-12 text-emerald-600 animate-spin" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Results */}
        {!loading && searchParams.get('q') && (
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <div>
                <p className="text-gray-600">
                  Search results for <span className="font-semibold text-gray-900">"{searchParams.get('q')}"</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="font-semibold text-gray-900">{filteredNews.length}</span> articles found
                </p>
              </div>
            </div>

            {filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 text-lg mb-2">No articles found for "{searchParams.get('q')}"</p>
                <p className="text-gray-500 text-sm">Try different keywords or browse our categories</p>
                <Link to="/categories">
                  <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white">
                    Browse Categories
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Popular Searches */}
        {!searchParams.get('q') && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Popular Searches</h2>
            <div className="flex flex-wrap gap-3">
              {['Technology', 'Business', 'Sports', 'Health', 'Environment', 'Politics'].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchParams({ q: term })}
                  className="px-4 py-2 bg-white border-2 border-gray-200 hover:border-emerald-600 hover:text-emerald-600 rounded-full text-sm font-semibold transition-all duration-300"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;