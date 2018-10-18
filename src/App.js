import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Contacts from './containers/Contacts';
import Header from './components/Header';
import { Provider } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './containers/AddContact';
import About from './components/About';
import NotFound from './components/404';
import EditContact from './containers/EditContact';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider>
        <Header branding="Contact Manager" />
        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route path='/contact/add' exact component={AddContact}></Route>
              <Route path='/about/:name' exact component={About}></Route>
              <Route path='/contact/edit/:id' exact component={EditContact}></Route>
              <Route path='/' exact component={Contacts}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </BrowserRouter>
        </div>
        </Provider>
      </div>
    );
  }
}

export default App;
