import React from 'react';
import { Route } from 'react-router-dom'
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
        <div className='note_list'>
          <Route path='/single-note' component={SingleNote}/>
          <Route exact path='/' render={() => 
            <Main 
              folders={data.folders}
              notes={data.notes}
            />}
          />
        </div>
      </div>
    );
  }
}

export default App;