import React from 'react';
import { Link } from 'react-router-dom';
import NewsCard from './NewsCard';
import TrendingSection from './TrendingSection';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

// Mock data
const mockNews = [
  {
    id: 1,
    title: "Breaking: Major Development in Technology Sector",
    description: "A significant breakthrough has been announced in the technology sector that could change the way we interact with digital devices.",
    urltoimage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800",
    published_at: new Date().toISOString(),
    author: "John Doe",
    source: { id: 1, name: "Tech News" },
    category: { id: 1, name: "technology" },
    country: { id: 1, name: "United States", code: "US" }
  },
  {
    id: 2,
    title: "Global Climate Summit Reaches Historic Agreement",
    description: "World leaders have reached a historic agreement on climate change measures that will impact global policies for decades to come.",
    urltoimage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800",
    published_at: new Date().toISOString(),
    author: "Jane Smith",
    source: { id: 2, name: "Global News" },
    category: { id: 2, name: "environment" },
    country: { id: 2, name: "Global", code: "GL" }
  },
  {
    id: 3,
    title: "Economic Markets Show Strong Recovery Signs",
    description: "Financial markets around the world are showing strong signs of recovery following recent economic challenges.",
    urltoimage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800",
    published_at: new Date().toISOString(),
    author: "Mike Johnson",
    source: { id: 3, name: "Finance Daily" },
    category: { id: 3, name: "business" },
    country: { id: 1, name: "United States", code: "US" }
  }
];

const mockCategories = [
  { id: 1, name: "technology", description: "Latest tech news" },
  { id: 2, name: "environment", description: "Climate and environment" },
  { id: 3, name: "business", description: "Business and finance" },
  { id: 4, name: "health", description: "Health and wellness" },
  { id: 5, name: "sports", description: "Sports news" },
  { id: 6, name: "entertainment", description: "Entertainment news" },
  { id: 7, name: "politics", description: "Political news" },
  { id: 8, name: "science", description: "Science and research" }
];

const HomePageWithMockData = () => {
  const featuredNews = mockNews[0];
  const sideNews = mockNews.slice(1, 4);
  const moreNews = mockNews;

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
            <TrendingSection news={mockNews} />
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
                      <span className="text-red-600 font-semibold">By {newsItem.author}</span>
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
            {mockCategories.slice(0, 8).map((category) => (
              <Link key={category.id} to={`/category/${category.name}`}>
                <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-xl">
                  <h3 className="text-white font-bold text-lg uppercase tracking-wide">
                    {category.name}
                  </h3>
                  <p className="text-emerald-100 text-sm mt-1">{category.description}</p>
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

export default HomePageWithMockData;
