import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUsers } from '../api';
import './User.scss';

export const User: React.FC = () => {
  const [user, setUser] = useState<User | null>(null)
  const userId = useParams();

  const loadUser = useCallback(
    async () => {
      const usersFromServer = await getUsers();
      const userFromServer = usersFromServer.find(user => (
        user.id === Number(userId.userId)
      )) || null;
  
      setUser(userFromServer)
    },
    [userId]
  )

  useEffect(
    () => {
      loadUser();
    },
    [loadUser],
  )

  return (
    user && (
      <article className="user__details">
      <h2 className="subtitle">User Details</h2>

      <p>{`Name: ${user.name}`}</p>
      <p>{`Username: ${user.username}`}</p>
      <p>{`Email: ${user.email}`}</p>
    </article>
    )
  )
}