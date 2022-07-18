import { useCallback, useEffect, useState } from 'react';
import { NavLink, Outlet, } from 'react-router-dom';
import { getUsers } from '../../api';
import './Users.scss';
import 'bulma';

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = useCallback(
    async () => {
      const usersFromServer = await getUsers();
  
      setUsers(usersFromServer);
    },
    []
  )

  useEffect(
    () => {
      loadUsers();
    },
    [loadUsers],
  )

  return (
    <section className="users">
        <h2 className="subtitle users__title">Users</h2>

        <article className="users__list">

          {users.map(user => (
            <NavLink to={`/users/${user.id}`} key={user.id}>
              <p>{user.name}</p>
            </NavLink>
          ))}
        </article>

        <Outlet />
    </section>
  )
};
