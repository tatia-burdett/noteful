import React from 'react';
import { Route, Link } from 'react-router-dom'
import MainNoteList from './MainNoteList/MainNoteList' // Main section, list of all notes
import FolderList from './FolderList/FolderList' // Folder section, list of all folders
import MainNote from './MainNote/MainNote' // Main section, single note selected
import FolderNote from './FolderNote/FolderNote' // Folder section when single note selected
import NotesContext from './NotesContext'
import config from './config'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      folders: []
    }
  }

  componentDidMount() {
    // this.fetchFolders().then(folders => {
    //   console.log(folders, 'ahjdha')
    // })

    // this.fetchNotes()
  
    this.fetchAllData()
  }

  fetchAllData = () => {
    Promise.all([
      this.fetchFolders(), 
      this.fetchNotes()
    ])
      .then(([folders, notes]) => {
        this.setState({
          folders, 
          notes
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  fetchFolders = () => {
    return fetch(`${config.API_ENDPOINT}/folders`)
      .then(res => res.json())
      
      // .then(folders => {
      //   this.setState({ folders })
      // })
  }

  fetchNotes = () => {
    return fetch(`${config.API_ENDPOINT}/notes`)
      .then(res => res.json())
      // .then(notes => {
      //   this.setState({ notes })
      // })
  }

  renderFolderRoutes() {
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={FolderList}
          />
        ))}
        {/* <Route path='/note/:noteId' component={FolderNote} /> */}
        <Route path={'/note/:noteId'}>
          <FolderNote />
        </Route>
      </>
    )
  }

  renderNoteRoutes() {
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route 
            exact
            key={path}
            path={path}
            component={MainNoteList}
          />
        ))}
        <Route 
          path='/note/:noteId' component={MainNote} />
      </>
    )
  }

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      fetchNotes: this.fetchAllData
    }
    return (
      <NotesContext.Provider value={value}>
        <div className='App'>
          <header>
            <Link to='/'><h1>Noteful</h1></Link>
          </header>
          <div className='App_sections'>
            <nav className='App_nav'>
              {this.renderFolderRoutes()}
            </nav>
            <main className='App_main'>
              {this.renderNoteRoutes()}
            </main>
          </div>
        </div>
      </NotesContext.Provider>
    );
  }
}

export default App;