import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Card } from './ui/card';

const TrendingSection = ({ news }) => {
  return (
    <Card className="p-6 border border-gray-200">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
        <TrendingUp className="w-5 h-5 text-emerald-600" />
        <h3 className="text-xl font-bold text-gray-900">TRENDING TOPIC</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news.slice(0, 5).map((item, index) => (
          <a 
            key={item.id} 
            href={`/news/${item.id}`}
            className="group"
          >
            <div className="flex gap-3 pb-4 border-b border-gray-100">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-600 text-white font-bold rounded text-lg">
                #{index + 1}
              </div>
              <div className="flex-1">
                <h4 className="text-base font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-tight mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500">{item.source?.name}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

    </Card>
  );
};

export default TrendingSection;