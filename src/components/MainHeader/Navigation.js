import React from 'react';

import classes from './Navigation.module.css';
import Authcontext from '../../store/auth-context';

const Navigation = (props) => {
  return (
    // consumer Added
    <Authcontext.Consumer>
      {(ctx) => {
        return (
      <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={props.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      )
      }}

    </Authcontext.Consumer>
  );
};

export default Navigation;
