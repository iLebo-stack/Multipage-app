import { NavLink } from 'react-router-dom';
import 'bulma';

export const Tabs = () => (
  <nav className="nav tabs">
    <ul>
      <li>
        <NavLink
          to="/multipage-app"
          style={({ isActive }) => (
              isActive ? { borderBottom: '1px solid #f00' } : {}
            )}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/users"
          style={({ isActive }) => (
            isActive ? { borderBottom: '1px solid #f00' } : {}
          )}
        >
        Users
      </NavLink></li>
    </ul>
  </nav>
);
