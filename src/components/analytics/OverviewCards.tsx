import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchAnalytics } from '../../redux/thunks/analyticsThunks';

const OverviewCards: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { metrics, loading } = useSelector((state: RootState) => state.analytics);

  useEffect(() => {
    dispatch(fetchAnalytics());
  }, [dispatch]);

  if (loading) {
    return <div>Loading metrics...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-100 p-4 rounded shadow">
        <h3 className="text-xl font-bold">Total Users</h3>
        <p className="text-3xl">{metrics.totalUsers}</p>
      </div>
      <div className="bg-green-100 p-4 rounded shadow">
        <h3 className="text-xl font-bold">Active Users</h3>
        <p className="text-3xl">{metrics.activeUsers}</p>
      </div>
      <div className="bg-red-100 p-4 rounded shadow">
        <h3 className="text-xl font-bold">Deleted Users</h3>
        <p className="text-3xl">{metrics.deletedUsers}</p>
      </div>
    </div>
  );
};

export default OverviewCards;