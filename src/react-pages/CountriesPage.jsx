import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockCountries } from '../mock/mockData';
import { ChevronRight, MapPin, Globe, Loader2 } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

const CountriesPage = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCountries(mockCountries);
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
            <span className="text-gray-900 font-semibold">Countries</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <Globe className="w-10 h-10 text-emerald-600" />
            <h1 className="text-4xl font-bold text-gray-900">Countries</h1>
          </div>
          <p className="text-gray-600">Browse news from different countries around the world</p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country) => (
            <Link key={country.id} to={`/country/${country.code.toLowerCase()}`}>
              <Card className="group p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-emerald-600 cursor-pointer h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {country.name}
                  </h3>
                  <p className="text-gray-600 text-sm flex-1">Country Code: {country.code}</p>
                  <div className="mt-4 flex items-center text-emerald-600 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm font-semibold">View News</span>
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

export default CountriesPage;