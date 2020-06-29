import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function SideBar() {
  let match = useRouteMatch();
  return (<div>
    <ul>
      <li>
        <Link to={`${match.url}/page-1`}>Page 1</Link>
      </li>
      <li>
        <Link to={`${match.url}/page-2`}>Page 2</Link>
      </li>
      <li>
        <Link to={match.isExact ? '/' : match.url}>Back</Link>
      </li>
    </ul>
  </div>);
}

export {
  SideBar
};