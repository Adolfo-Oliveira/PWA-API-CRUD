import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const usersData = await getUsers();
    setUsers(usersData);
  };

  const handleDeleteUser = async (userId) => {
    await deleteUser(userId);
    fetchUsers();
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
          <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
