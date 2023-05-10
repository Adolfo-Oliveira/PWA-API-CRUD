const API_BASE_URL = 'http://localhost:3001/api/users';

export const createUser = async (user) => {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const getUsers = async () => {
  const response = await fetch(API_BASE_URL);
  return response.json();
};

export const deleteUser = async
