import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Componets/HomePage/HomePage';
import { Tabs } from './Componets/Tabs/Tabs';
import { Users } from './Componets/Users/Users';
import { User } from './User/User';
import 'bulma';

function App() {
  return (
    <div className="App container is-fluid">
      <Tabs />

      <Routes>
        <Route path='/multipage-app/multipage-app' element={<HomePage />} />
        <Route path='/users' element={<Users />} >
          <Route index element={<h2 className="subtitle">Select a user</h2>} />
          <Route path=':userId' element={<User />} />
        </Route>
        <Route path='*' element={<h2 className="subtitle">Page not found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
