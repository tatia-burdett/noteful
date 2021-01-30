import React from 'react';
import { Route, Link } from 'react-router-dom'
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

  renderFolders() {
    const { data } = this.state
    return (
      <Route exact path='/' render={() => 
        <Main 
          folders={data.folders}
          notes={data.notes} />}
      />
    )
  }

  renderNotes() {
    const { data } = this.state
    return (
      <Route path='/note/:noteId' render={(props) =>
        <SingleNote
          notes={data.notes} 
          {...props} />} // WHY does this work??? 
      />
    )
  }

  render() {
    return (
      <div className='App'>
        <header>
          <Link to='/'><h1>Noteful</h1></Link>
        </header>
        <nav className='app_nav'>
          {this.renderFolders()}
        </nav>
        <main>
            {this.renderNotes()}
        </main>
      </div>
    );
  }
}

export default App;