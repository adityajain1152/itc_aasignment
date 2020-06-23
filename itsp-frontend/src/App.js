import React from 'react';
import './App.css';
import NavBar from './components/Navbar'
import Team from './components/Teams'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Tdetail1 from './components/Tdetail1';
import Tdetail2 from './components/Tdetail2';
import Tdetail3 from './components/Tdetail3';
import Tdetail4 from './components/Tdetail4';


function App() {
  return (
    <Router>
     <div>



    <Switch>
      <Route path='/' component={Team} exact />
      <Route path='/Tdetail1' component={Tdetail1} />
      <Route path='/Tdetail2' component={Tdetail2} />
      <Route path='/Tdetail3' component={Tdetail3} />
      <Route path='/Tdetail4' component={Tdetail4} />
    </Switch>
     </div>
     </Router>
  );
}

export default App;
