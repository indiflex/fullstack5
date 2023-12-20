import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' replace>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/ttt'
            style={(obj) =>
              obj.isActive ? { textDecoration: 'underline' } : {}
            }
          >
            TTT
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/login'
            className={({ isActive }) => clsx({ bold: isActive })}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/my'>My</NavLink>
        </li>
        <li>
          <NavLink to='/items'>Items</NavLink>
        </li>
        <li>
          <NavLink to='/hello'>Hello</NavLink>
        </li>
      </ul>
    </nav>
  );
};
