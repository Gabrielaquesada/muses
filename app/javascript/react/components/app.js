import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import PostingsIndexContainer from '../containers/PostingsIndexContainer';

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/postings' component={PostingsIndexContainer} />
      </Router>
    </div>
  );
}

export default App;
