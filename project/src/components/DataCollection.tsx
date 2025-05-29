import React, { useState } from 'react';
import { Upload, Search, AlertCircle, FileText, TrendingDown } from 'lucide-react';
import { SocialMediaData } from '../types';

interface AnalysisResult {
  year: number;
  totalIncidents: number;
  preventionMetrics: {
    successfulInterventions: number;
    potentialVictimsSaved: number;
    networksDisrupted: number;
    awarenessReach: number;
  };
  trends: {
    month: string;
    count: number;
  }[];
}

export const DataCollection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult[]>([]);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    try {
      const results = await Promise.all(
        uploadedFiles.map(async (file) => {
          const text = await file.text();
          const data = JSON.parse(text);
          return {
            year: data.year,
            totalIncidents: data.regions.reduce((acc: number, region: any) => acc + region.incidents, 0),
            preventionMetrics: data.preventionMetrics,
            trends: data.regions[0].monthlyTrends
          };
        })
      );
      setAnalysisResults(results);
    } catch (error) {
      console.error('Error analyzing files:', error);
      alert('Error analyzing files. Please check the file format.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(files);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Data Analysis</h2>
      
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileUpload}
            accept=".json"
            multiple
          />
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <Upload className="w-12 h-12 text-indigo-600 mb-4" />
            <span className="text-lg font-medium text-gray-700 mb-2">
              {uploadedFiles.length > 0 
                ? `${uploadedFiles.length} file(s) selected` 
                : 'Drop JSON files here or click to upload'}
            </span>
            <span className="text-sm text-gray-500">
              Upload trafficking data JSON files for analysis
            </span>
          </label>
        </div>

        {uploadedFiles.length > 0 && (
          <button
            onClick={handleAnalyze}
            className={`w-full px-6 py-3 bg-indigo-600 text-white rounded-lg flex items-center justify-center gap-2 transform transition-all ${
              isAnalyzing ? 'opacity-75 cursor-not-allowed' : 'hover:bg-indigo-700 hover:scale-105'
            }`}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Analyzing Data...
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                Analyze Files
              </>
            )}
          </button>
        )}

        {analysisResults.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Analysis Results</h3>
            
            {analysisResults.map((result, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-700">Year {result.year}</h4>
                  <span className="px-4 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                    {result.totalIncidents} Incidents
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Interventions</div>
                    <div className="text-xl font-bold text-indigo-600">
                      {result.preventionMetrics.successfulInterventions}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Victims Saved</div>
                    <div className="text-xl font-bold text-green-600">
                      {result.preventionMetrics.potentialVictimsSaved}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Networks Disrupted</div>
                    <div className="text-xl font-bold text-purple-600">
                      {result.preventionMetrics.networksDisrupted}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Awareness Reach</div>
                    <div className="text-xl font-bold text-blue-600">
                      {(result.preventionMetrics.awarenessReach / 1000).toFixed(1)}k
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h5 className="text-sm font-medium text-gray-700 mb-3">Monthly Trends</h5>
                  <div className="flex items-end space-x-2">
                    {result.trends.map((trend, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div 
                          className="bg-indigo-600 rounded-t"
                          style={{ 
                            height: `${(trend.count / Math.max(...result.trends.map(t => t.count))) * 100}px`,
                            width: '20px'
                          }}
                        ></div>
                        <div className="text-xs text-gray-500 mt-1">{trend.month}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};