import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
  return (<div>
    <ul>
      <li>
        <Link to='/view/page-1'>Page 1</Link>
      </li>
      <li>
        <Link to='/view/page-2'>Page 2</Link>
      </li>
      <li>
        <Link to='/'>Home</Link>
      </li>
    </ul>
  </div>);
}

export {
  SideBar
};