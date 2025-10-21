import React from 'react';
import { Link, useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import { ChevronRight, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { mockNews, mockCategories } from '../mock/mockData';

const CategoryNewsPage = () => {
  const { categoryName } = useParams();
  const category = mockCategories.find(c => c.name.toLowerCase() === categoryName.toLowerCase());
  const filteredNews = mockNews.filter(news => news.category.name.toLowerCase() === categoryName.toLowerCase());

  if (!category) {
    return <div>Category not found</div>;
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
            <span className="font-semibold text-gray-900">{filteredNews.length}</span> articles found
          </p>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </Button>
        </div>

        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredNews.map((news) => (
              <NewsCard key={news.id} news={news} />
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