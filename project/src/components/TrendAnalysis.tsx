import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrafficingData } from '../types';
import { DashboardCard } from './DashboardCard';

interface TrendAnalysisProps {
  data: TrafficingData[];
}

export const TrendAnalysis: React.FC<TrendAnalysisProps> = ({ data }) => {
  return (
    <DashboardCard title="Monthly Trends">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line 
              yAxisId="left"
              type="monotone"
              dataKey="incidents"
              stroke="#EF4444"
              name="Incidents"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="preventionScore"
              stroke="#10B981"
              name="Prevention Score"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </DashboardCard>
  );
};