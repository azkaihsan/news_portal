import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockNews, mockSources } from '../mock/mockData';
import NewsCard from '../components/NewsCard';
import { Newspaper, ChevronRight, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';

const SourceNewsPage = () => {
  const { sourceId } = useParams();
  const [filteredNews, setFilteredNews] = useState([]);
  const [source, setSource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const foundSource = mockSources.find(s => s.id.toString() === sourceId);
    if (foundSource) {
      setSource(foundSource);
      setFilteredNews(mockNews.filter(news => news.source.id.toString() === sourceId));
    } else {
      setError('Source not found');
    }
    setLoading(false);
  }, [sourceId]);

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
          <Link to="/sources">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Browse Sources</Button>
          </Link>
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
            <Link to="/sources" className="hover:text-emerald-600 transition-colors">Sources</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-semibold">{source?.name}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <Newspaper className="w-8 h-8 text-emerald-600" />
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900">{source?.name}</h1>
              {source?.description && (
                <p className="text-gray-600 mt-2">{source.description}</p>
              )}
            </div>
          </div>
          {source?.url && (
            <a 
              href={source.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              Visit Official Website <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* News Count */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{filteredNews.length}</span> articles found
          </p>
        </div>

        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No news available from this source.</p>
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

export default SourceNewsPage;