import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import PostingsIndexContainer from '../containers/PostingsIndexContainer';
import PostingsShowContainer from '../containers/PostingsShowContainer';

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/postings' component={PostingsIndexContainer} />
        <Route path='/postings/:id' component={PostingsShowContainer} />
      </Router>
    </div>
  );
}

export default App;
