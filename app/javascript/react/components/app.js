import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import PostingsIndexContainer from '../containers/PostingsIndexContainer';
import PostingsShowContainer from '../containers/PostingsShowContainer';
import ChatContainer from '../containers/ChatContainer'


export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/postings' component={PostingsIndexContainer} />
        <Route path='/postings/:id' component={PostingsShowContainer} />
        <Route path="/messages" component={ChatContainer}/>
      </Router>
    </div>
  );
}

export default App;
