import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import { SideBar } from './SideBar';
import { PageLayout } from './PageLayout';

function MainLayout() {
  return (
    <div id='main-wrapper'>
      <SideBar />
      <Switch>
        <Route path="/view/page-1">
          <PageLayout id={1} />
        </Route>
        <Route path="/view/page-2">
          <PageLayout id={2} />
        </Route>
        <Route path="/">
          <b>TODO</b>
        </Route>
      </Switch>
    </div>
  );
}

export {
  MainLayout
};