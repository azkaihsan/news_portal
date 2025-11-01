import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, Share2, Facebook, Twitter, Linkedin, ArrowLeft, Loader2 } from 'lucide-react';
import { fetchNewsById, fetchNewsByCategory } from '../services/api';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import NewsCard from '../components/NewsCard';

const NewsDetailPage = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNewsDetails = async () => {
      try {
        setLoading(true);
        const newsData = await fetchNewsById(id);
        setNews(newsData);
        if (newsData && newsData.category) {
          const related = await fetchNewsByCategory(newsData.category.name, 5);
          setRelatedNews(related.filter(item => item.id !== newsData.id).slice(0, 3));
        }
      } catch (err) {
        setError('Failed to fetch news details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getNewsDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-emerald-600 animate-spin" />
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'News not found'}</p>
          <Link to="/">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-6 text-gray-600 hover:text-emerald-600">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </Link>

        {/* Main Article */}
        <article>
          {/* Category Badge */}
          {news.category && (
            <div className="mb-4">
              <Link to={`/category/${news.category.name}`}>
                <span className="inline-block bg-emerald-600 text-white px-4 py-1 text-sm font-semibold uppercase tracking-wide rounded-full hover:bg-emerald-700 transition-colors">
                  {news.category.name}
                </span>
              </Link>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {news.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <User className="w-5 h-5" />
              <span className="font-semibold">{news.author || news.newssource.name || 'Unknown Author'}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>{formatDate(news.published_at)}</span>
            </div>
            {news.source && (
              <div className="text-gray-600">
                <span className="font-semibold">Source:</span> {news.source.name}
              </div>
            )}
          </div>

          {/* Featured Image */}
          {news.urltoimage && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-xl">
              <img 
                src={news.urltoimage} 
                alt={news.title}
                className="w-full h-auto max-h-[600px] object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200';
                }}
              />
            </div>
          )}

          {/* Article Content */}
          <Card className="p-8 mb-8 border border-gray-200">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6 font-semibold">
                {news.description}
              </p>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>{news.content || news.description}</p>
                {news.url && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <a 
                      href={news.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 font-semibold"
                    >
                      Read full article on {news.source?.name} →
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-900">Share this article:</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button size="sm" variant="outline" className="hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors">
                    <Facebook className="w-4 h-4 mr-2" /> Facebook
                  </Button>
                  <Button size="sm" variant="outline" className="hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors">
                    <Twitter className="w-4 h-4 mr-2" /> Twitter
                  </Button>
                  <Button size="sm" variant="outline" className="hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors">
                    <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </article>

        {/* Related News */}
        {relatedNews.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-emerald-600">
              Related News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map((relatedItem) => (
                <NewsCard key={relatedItem.id} news={relatedItem} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetailPage;