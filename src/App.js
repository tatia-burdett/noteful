import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Folders from './Folders/Folders'
import Notes from './Notes/Notes'
import SingleNote from './SingleNote/SingleNote'
import Main from './Main/Main'
import DATA from './dummy-store'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: DATA
    }
  }

  render() {
    const {data} = this.state
    return (
      <div className='App'>
        <header>
          <Link to='/'><h1>Noteful</h1></Link>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/single-note' component={SingleNote}/>
          </Switch>
        </main>
        <section>
          <Route path='folders' component={Folders}/>
        </section>
      </div>
    );
  }
}

export default App;