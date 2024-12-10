import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserTable from "../components/userManagement/userTable";
import { UserSearch } from "../components/userManagement/userSearch";
import { fetchUsers } from "../redux/thunks/userThunks";
import { AppDispatch } from "../redux/store";

export const UserDashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <UserTable />
        </div>
        <div>
          <UserSearch />
        </div>
      </div>
    </div>
  );
};
