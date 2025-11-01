import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import TrendingSection from '../components/TrendingSection';
import { fetchNews, fetchCategories } from '../services/api';
import { ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';

const HomePage = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [newsData, categoriesData] = await Promise.all([
          fetchNews(20),
          fetchCategories(),
        ]);
        setNews(newsData || []);
        setCategories(categoriesData || []);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-emerald-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading news...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()} className="bg-emerald-600 hover:bg-emerald-700">
            Retry
          </Button>
        </div>
      </div>
    );
  }

  const featuredNews = news[0];
  const sideNews = news.slice(1, 4);
  const moreNews = news.slice(4, 10);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Featured Story */}
        <div className="mb-12">
          {featuredNews && <NewsCard news={featuredNews} featured />}
        </div>

        {/* Trending and Side News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Trending Section - Takes 2 columns */}
          <div className="lg:col-span-2">
            <TrendingSection news={news} />
          </div>

          {/* Side Stories - Takes 1 column */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-4 border-b-2 border-emerald-600">
              LATEST UPDATES
            </h3>
            {sideNews.map((newsItem) => (
              <div key={newsItem.id} className="group">
                <Link to={`/news/${newsItem.id}`}>
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors leading-tight">
                      {newsItem.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                      {newsItem.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="text-red-600 font-semibold">By {newsItem.author || newsItem.newssource.name || 'Unknown'}</span>
                      <span>{new Date(newsItem.published_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary News Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-emerald-600">
            <h2 className="text-2xl font-bold text-gray-900">MORE TOP STORIES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreNews.map((newsItem) => (
              <NewsCard key={newsItem.id} news={newsItem} />
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-emerald-600">
            <h2 className="text-2xl font-bold text-gray-900">EXPLORE BY CATEGORY</h2>
            <Link to="/categories">
              <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(0, 8).map((category) => (
              <Link key={category.id} to={`/category/${category.name}`}>
                <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-xl">
                  <h3 className="text-white font-bold text-lg uppercase tracking-wide">
                    {category.name}
                  </h3>
                  <p className="text-emerald-100 text-sm mt-1">{category.description || 'Latest news'}</p>
                  <ChevronRight className="absolute bottom-4 right-4 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;