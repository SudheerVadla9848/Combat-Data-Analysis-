import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Clock, Shield, AlertOctagon } from 'lucide-react';
import { ReportData, InterventionStats } from '../types';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ReportingSystemProps {
  interventionStats: InterventionStats;
}

export const ReportingSystem: React.FC<ReportingSystemProps> = ({ interventionStats }) => {
  const [reportType, setReportType] = useState<ReportData['type']>('suspicious_activity');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('Report submitted successfully!');
      setDescription('');
      setIsSubmitting(false);
    } catch (error) {
      alert('Error submitting report. Please try again.');
      setIsSubmitting(false);
    }
  };

  const platformData = {
    labels: Object.keys(interventionStats.platformBreakdown),
    datasets: [
      {
        data: Object.values(interventionStats.platformBreakdown),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(107, 114, 128, 0.8)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(107, 114, 128, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all hover:shadow-xl border border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="w-8 h-8 text-red-400" />
        <h2 className="text-2xl font-bold text-white">Report Trafficking Activity</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Report Type
            </label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value as ReportData['type'])}
              className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-white"
            >
              <option value="suspicious_activity">Suspicious Activity</option>
              <option value="potential_victim">Potential Victim</option>
              <option value="trafficking_network">Trafficking Network</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Priority Level
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
              className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-white"
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-white"
            rows={4}
            placeholder="Provide detailed information about the incident..."
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 bg-red-600 text-white rounded-lg flex items-center gap-2 transform transition-all ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-red-700 hover:scale-105'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Submitting...
              </>
            ) : (
              <>
                <AlertTriangle className="w-5 h-5" />
                Submit Report
              </>
            )}
          </button>
        </div>
      </form>

      <div className="mt-8 border-t border-gray-700 pt-6">
        <h3 className="text-xl font-semibold text-white mb-4">Report Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-green-400 mb-2">
              <CheckCircle className="w-6 h-6" />
              <span className="font-semibold">Resolved</span>
            </div>
            <span className="text-2xl font-bold text-white">{interventionStats.resolvedCases}</span>
          </div>
          
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-yellow-400 mb-2">
              <Clock className="w-6 h-6" />
              <span className="font-semibold">Pending</span>
            </div>
            <span className="text-2xl font-bold text-white">{interventionStats.pendingInvestigations}</span>
          </div>
          
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-blue-400 mb-2">
              <Shield className="w-6 h-6" />
              <span className="font-semibold">Prevention Rate</span>
            </div>
            <span className="text-2xl font-bold text-white">{interventionStats.preventionRate}%</span>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-red-400 mb-2">
              <AlertOctagon className="w-6 h-6" />
              <span className="font-semibold">Total Reports</span>
            </div>
            <span className="text-2xl font-bold text-white">{interventionStats.totalReports}</span>
          </div>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-4">Platform Distribution</h4>
          <div className="h-64">
            <Pie data={platformData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
};