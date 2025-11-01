import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import { ChevronRight, Filter, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { fetchNewsByCategory, fetchCategories } from '../services/api';

const CategoryNewsPage = () => {
  const { categoryName } = useParams();
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategoryNews = async () => {
      try {
        setError(null);
        setLoading(true);
        
        const categories = await fetchCategories();
        const currentCategory = categories.find(c => c.name.toLowerCase() === categoryName.toLowerCase());
        
        if (currentCategory) {
          setCategory(currentCategory);
          const newsData = await fetchNewsByCategory(currentCategory.id);
          setNews(newsData);
        } else {
          setError('Category not found.');
        }
      } catch (err) {
        setError('Failed to fetch news. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadCategoryNews();
  }, [categoryName]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-emerald-600 animate-spin" />
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
  
  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Category not found.</p>
          <Link to="/categories">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Back to Categories
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/categories" className="hover:text-gray-900">Categories</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-semibold capitalize">{category.name}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 capitalize">{category.name} News</h1>
          {category && (
            <p className="text-gray-600">{category.description || 'Latest news and updates'}</p>
          )}
        </div>

        {/* News Count and Filter */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{news.length}</span> articles found
          </p>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </Button>
        </div>

        {/* News Grid */}
        {news.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No news available in this category.</p>
            <Link to="/">
              <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white">
                Back to Home
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryNewsPage;