import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Demo from './mock/AppMock';
import TodoApp from './components/TodoApp';
import { Provider } from "react-redux";
import store from './store/store';
import Poki from './components/Poki';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <Router>
           <div>
            <h2>Home Page</h2>
            <ul>
              <li>
                <Link to="/TodoApp">Todo</Link>
              </li>
              <li>
                <Link to="/Poki">Pokemon</Link>
              </li>
              
            </ul>
            <Switch>
              <Route exact path='/TodoApp' component={TodoApp}></Route>
              <Route exact path='/Poki' component={Poki}></Route>
              
            </Switch>
          </div>
       </Router>
       </Provider>
   );
  }
}
App.defaultProps = { Content: Demo}
export default App;
