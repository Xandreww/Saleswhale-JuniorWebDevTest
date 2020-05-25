import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Statement } from './components/views/Statement/Statement';
import { NotFound } from './components/views/NotFound/NotFound';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <CssBaseline /> {/* The rest of your application, similar to normalize.css */}
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Statement} />
          <Route path="*" component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export { App };
