import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockCategories } from '../mock/mockData';
import { ChevronRight, TrendingUp, Loader2 } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCategories(mockCategories);
    setLoading(false);
  }, []);

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
            <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-semibold">Categories</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">News Categories</h1>
          <p className="text-gray-600">Browse news by category</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={`/category/${category.name}`}>
              <Card className="group p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-emerald-600 cursor-pointer h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 capitalize group-hover:text-emerald-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm flex-1">{category.description || 'Latest news and updates'}</p>
                  <div className="mt-4 flex items-center text-emerald-600 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm font-semibold">View Articles</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;