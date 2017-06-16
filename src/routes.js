import React           from 'react';
import { Route }       from 'react-router';
import { IndexRoute }  from 'react-router';

import App             from './components/App';
import HomePage        from './components/HomePage';
import AboutPage       from './components/AboutPage';
import NotFoundPage    from './components/NotFoundPage';
import RandomDataPage  from './components/randomdata/RandomDataPage';

export default (
  <Route path="/"       component={App}>
    <IndexRoute         component={HomePage}/>
    <Route path="data"  component={RandomDataPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*"     component={NotFoundPage}/>
  </Route>
);
