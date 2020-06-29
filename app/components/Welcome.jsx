import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (<div>
    <ul>
      <li>
        <Link to='/view'>Main Pages</Link>
      </li>
      <li>
        <Link to='/error'>Error Pages</Link>
      </li>
      <li>
        <Link to='/'>Home</Link>
      </li>
    </ul>
  </div>);
}

export {
  Welcome
};