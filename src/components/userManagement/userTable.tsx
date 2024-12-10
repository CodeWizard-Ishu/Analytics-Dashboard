import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { User } from "../../types/user";
import { fetchUsers, deleteUser } from "../../redux/thunks/userThunks";
import { setCurrentPage } from "../../redux/slices/userSlices";
import { UserSearch } from "./userSearch";

const UserTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, currentPage } = useSelector(
    (state: RootState) => state.users
  );
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

  const usersPerPage = 5;
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleSearch = (query: string) => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
    dispatch(setCurrentPage(1));
  };

  const handleDeleteUser = (userId: number) => {
    dispatch(deleteUser(userId));
  };

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <UserSearch onSearch={handleSearch} />
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Region</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="p-2 border">{user.id}</td>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.status}</td>
              <td className="p-2 border">{user.region}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserTable;
