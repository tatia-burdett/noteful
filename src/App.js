import React from 'react';
import { Route, Link } from 'react-router-dom'
import Folders from './Folders/Folders'
import Notes from './Notes/Notes'
import data from './dummy-store'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.setState = {
      data: data
    }
  }

  render() {
    return (
      <div className='App'>
        <header>
          <Link to='/'><h1>Noteful</h1></Link>
        </header>
        <main>
          <Notes />
        </main>
        <section>
          <Folders />
        </section>
      </div>
    );
  }
}

export default App;