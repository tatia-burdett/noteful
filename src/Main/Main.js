import React from 'react';
import { Route, Link } from 'react-router-dom'
import Folders from '../Folders/Folders'
import Notes from '../Notes/Notes'
import './Main.css'

class App extends React.Component {

  render() {
    return (
      <div className='main'>
        <header>
    
        </header>
        <div className='display_area'>
          <main className='notes_list'>
            <Notes />
          </main>
          <section className='folders_list'>
            <Folders />
          </section>
        </div>
      </div>
    );
  }
}

export default App;