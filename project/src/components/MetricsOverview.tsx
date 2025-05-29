import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PredictiveMetrics } from '../types';
import { DashboardCard } from './DashboardCard';

interface MetricsOverviewProps {
  data: PredictiveMetrics[];
}

export const MetricsOverview: React.FC<MetricsOverviewProps> = ({ data }) => {
  return (
    <DashboardCard title="Predictive Analysis">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="current" fill="#4F46E5" name="Current" />
            <Bar dataKey="predicted" fill="#10B981" name="Predicted" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Predicted metrics show potential reduction based on current prevention measures and interventions.</p>
      </div>
    </DashboardCard>
  );
};