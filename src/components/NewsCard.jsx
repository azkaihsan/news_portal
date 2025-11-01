import React from 'react';
import { Clock, User } from 'lucide-react';
import { Card } from './ui/card';

const NewsCard = ({ news, featured = false }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    
    if (diffMins < 60) {
      return `${diffMins} minutes ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hours ago`;
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  };

  if (featured) {
    return (
      <a href={`/news/${news.id}`}>
        <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
          <div className="relative h-96 overflow-hidden">
            <img 
              src={news.urltoimage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800'} 
              alt={news.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                Main Story
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-3xl font-bold mb-3 leading-tight group-hover:text-emerald-400 transition-colors">
                {news.title}
              </h2>
              <p className="text-gray-200 mb-3 line-clamp-2">{news.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {news.author || news.newssource.name || 'Unknown'}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {formatDate(news.published_at)}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </a>
    );
  }

  return (
    <a href={`/news/${news.id}`}>
      <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-200">
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img 
            src={news.urltoimage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800'} 
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors leading-tight">
            {news.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{news.description}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {news.author || news.source?.name || news.newssource.name || 'Unknown'}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {formatDate(news.published_at)}
            </span>
          </div>
        </div>
      </Card>
    </a>
  );
};

export default NewsCard;