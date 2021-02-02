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
    this.fetchFolders()
    this.fetchNotes()
  }

  fetchFolders = () => {
    fetch(`${config.API_ENDPOINT}/folders`)
      .then(res => res.json())
      .then(folders => {
        this.setState({ folders })
      })
  }

  fetchNotes = () => {
    fetch(`${config.API_ENDPOINT}/notes`)
      .then(res => res.json())
      .then(notes => {
        this.setState({ notes })
      })
  }

  renderFolderRoutes() {
    const findFolder = (folders=[], folderId) =>
      folders.find(folder => folder.id === folderId)

    const findNote = (notes=[], noteId) =>
      notes.find(note => note.id === noteId)

    // const { notes, folders } = this.state

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
        <Route path='/note/:noteId' component={FolderNote} />

          {/* render={routeProps => {
            const {noteId} = routeProps.match.params
            const note = findNote(notes, noteId) || {}
            const folder = findFolder(folders, note.folderId)
            return <FolderNote {...routeProps} folder={folder}/>
          }}
        /> */}
      </>
    )
  }

  renderNoteRoutes() {
    const getFolderNotes = (notes=[], folderId) => (
      (!folderId)
        ? notes
        : notes.filter(note => note.folderId === folderId))

    const findNote = (notes=[], noteId) =>
      notes.find(note => note.id === noteId)

    // const { notes, folders } = this.state

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