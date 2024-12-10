import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  PieChart, 
  Pie, 
  Cell,
  BarChart, 
  Bar 
} from 'recharts';

const Charts: React.FC = () => {
  const { registrationTrend, userRegionData, metrics, loading } = useSelector(
    (state: RootState) => state.analytics
  );

  const activeVsInactiveData = [
    { name: 'Active', value: metrics.activeUsers },
    { name: 'Inactive', value: metrics.totalUsers - metrics.activeUsers }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  if (loading) {
    return <div>Loading charts...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* User Registration Trend */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-bold mb-4">User Registration Trend</h3>
        <LineChart width={350} height={250} data={registrationTrend}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="users" stroke="#8884d8" />
        </LineChart>
      </div>

      {/* Active vs Inactive Users */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-bold mb-4">Active vs Inactive Users</h3>
        <PieChart width={350} height={250}>
          <Pie
            data={activeVsInactiveData}
            cx={175}
            cy={125}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {activeVsInactiveData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Users by Region */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-bold mb-4">Users by Region</h3>
        <BarChart width={350} height={250} data={userRegionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="userCount" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Charts;