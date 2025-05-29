import React from 'react';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsSectionProps {
  news: NewsItem[];
}

export const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
  const getIcon = (category: NewsItem['category']) => {
    switch (category) {
      case 'alert':
        return <AlertTriangle className="w-6 h-6 text-red-400" />;
      case 'success':
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case 'info':
        return <Info className="w-6 h-6 text-blue-400" />;
    }
  };

  const getCategoryStyle = (category: NewsItem['category']) => {
    switch (category) {
      case 'alert':
        return 'bg-red-900/50 border-red-700';
      case 'success':
        return 'bg-green-900/50 border-green-700';
      case 'info':
        return 'bg-blue-900/50 border-blue-700';
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-6">Latest Updates</h2>
      <div className="space-y-4">
        {news.map((item) => (
          <div
            key={item.id}
            className={`p-4 rounded-lg border ${getCategoryStyle(item.category)} transform transition-all hover:scale-102`}
          >
            <div className="flex items-start gap-4">
              {getIcon(item.category)}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-2">{item.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{item.source}</span>
                  <span className="text-gray-400">{new Date(item.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};