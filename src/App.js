import React from 'react';
import './assets/css/main.scss'
import './App.css'
import TravelList from './components/TravelList';
import Travel from './components/Travel';
import travels from './shared/travels';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Section } from 'bloomer'

function App() {
  return (
    <>
      <Router>
        <header className="App-header">
          <p>
            Travel Manager
          </p>
        </header>
        <Section>
          <Switch>
            <Route path="/" exact component={TravelList} />
            <Route path="/travel" component={() => <Travel {...travels} />} />
          </Switch>
        </Section>
      </Router>
    </>
  );
}

export default App;
