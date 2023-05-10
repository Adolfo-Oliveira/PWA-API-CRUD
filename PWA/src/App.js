import React from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  return (
    <div>
      <h1>PWA CRUD Example</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;
