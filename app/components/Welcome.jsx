import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function Welcome() {
  let match = useRouteMatch();
  return (<div>
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav mr-auto'>
          <li className={`nav-item${match.path === '/' ? ' active' : ''}`}>
            <Link className='nav-link' to='/'>Home</Link>
          </li>
          <li className={`nav-item${match.path === '/view' ? ' active' : ''}`}>
            <Link className='nav-link' to='/view'>Main Pages</Link>
          </li>
          <li className={`nav-item${match.path === '/error' ? ' active' : ''}`}>
            <Link className='nav-link' to='/error'>Error Pages</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>);
}

export {
  Welcome
};