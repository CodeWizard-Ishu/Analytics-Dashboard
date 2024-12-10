import React from 'react';
import OverviewCards from '../components/analytics/overviewCards';
import Charts  from '../components/analytics/Charts';

export const AnalyticsDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
      <OverviewCards />
      <Charts />
    </div>
  );
};