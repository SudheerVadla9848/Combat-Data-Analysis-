import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, TrendingDown, BarChart3, Users, Globe, Bell } from 'lucide-react';
import { DataCollection } from './components/DataCollection';
import { ReportingSystem } from './components/ReportingSystem';
import { TrendAnalysis } from './components/TrendAnalysis';
import { MetricsOverview } from './components/MetricsOverview';
import { NewsSection } from './components/NewsSection';
import { monthlyData, predictiveMetrics, interventionStats, keywordAnalysis, newsItems } from './data';

function App() {
  const [activeCases, setActiveCases] = useState(0);
  const [riskLevel, setRiskLevel] = useState('');
  const [preventionScore, setPreventionScore] = useState(0);
  const [predictedReduction, setPredictedReduction] = useState(0);

  useEffect(() => {
    // Calculate metrics from the uploaded data
    const calculateMetrics = () => {
      const latestData = monthlyData[monthlyData.length - 1];
      const firstData = monthlyData[0];
      
      // Set active cases from the latest data
      setActiveCases(latestData.incidents);
      
      // Calculate risk level based on current incidents
      const riskScore = latestData.incidents;
      if (riskScore > 200) setRiskLevel('Critical');
      else if (riskScore > 150) setRiskLevel('High');
      else if (riskScore > 100) setRiskLevel('Medium');
      else setRiskLevel('Low');
      
      // Set prevention score from the latest data
      setPreventionScore(latestData.preventionScore);
      
      // Calculate predicted reduction
      const reduction = ((firstData.incidents - latestData.incidents) / firstData.incidents) * 100;
      setPredictedReduction(Math.abs(reduction));
    };

    calculateMetrics();
  }, [monthlyData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <header className="bg-gray-900 shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-10 w-10 text-blue-400" />
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Trafficking Prevention Platform
                </h1>
                <p className="text-sm text-gray-400">Real-time monitoring and analysis</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Globe className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Users className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-red-400" />
              <h3 className="text-lg font-bold text-red-100">Active Cases</h3>
            </div>
            <p className="text-4xl font-bold text-red-100 mt-4">{activeCases}</p>
            <p className="text-sm text-red-300 mt-2">
              {((monthlyData[0].incidents - activeCases) / monthlyData[0].incidents * 100).toFixed(1)}% change from last month
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-8 w-8 text-yellow-400" />
              <h3 className="text-lg font-bold text-yellow-100">Risk Level</h3>
            </div>
            <p className="text-4xl font-bold text-yellow-100 mt-4">{riskLevel}</p>
            <p className="text-sm text-yellow-300 mt-2">Based on {activeCases} active cases</p>
          </div>

          <div className="bg-gradient-to-br from-green-900 to-green-800 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-green-400" />
              <h3 className="text-lg font-bold text-green-100">Prevention Score</h3>
            </div>
            <p className="text-4xl font-bold text-green-100 mt-4">{preventionScore}%</p>
            <p className="text-sm text-green-300 mt-2">
              {(preventionScore - monthlyData[0].preventionScore).toFixed(1)}% improvement
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105">
            <div className="flex items-center gap-3">
              <TrendingDown className="h-8 w-8 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-100">Predicted Trend</h3>
            </div>
            <p className="text-4xl font-bold text-blue-100 mt-4">-{predictedReduction.toFixed(1)}%</p>
            <p className="text-sm text-blue-300 mt-2">Expected by next quarter</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DataCollection />
          <ReportingSystem interventionStats={interventionStats} />
        </div>

        <div className="mb-8">
          <NewsSection news={newsItems} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TrendAnalysis data={monthlyData} />
          <MetricsOverview data={predictiveMetrics} />
        </div>
      </main>
    </div>
  );
}

export default App;