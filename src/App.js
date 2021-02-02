import React from 'react';
import { Route, Link } from 'react-router-dom'
import MainNoteList from './MainNoteList/MainNoteList' // Main section, list of all notes
import FolderList from './FolderList/FolderList' // Folder section, list of all folders
import MainNote from './MainNote/MainNote' // Main section, single note selected
import FolderNote from './FolderNote/FolderNote' // Folder section when single note selected
import DATA from './dummy-store'
import NotesContext from './NotesContext'
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
    fetch('http://localhost:9090/folders')
      .then(res => res.json())
      .then(folders => {
        this.setState({ folders })
      })
  }

  fetchNotes = () => {
    fetch('http://localhost:9090/notes')
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

    const { notes, folders } = this.state

    // const contextValue = {
    //   notes: this.state.notes,
    //   folders: this.state.folders
    // }

    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => (
              <FolderList 
                folders={folders}
                notes={notes}
                {...routeProps}
              />
            )}
          />
        ))}
        <Route 
          path='/note/:noteId'
          render={routeProps => {
            const {noteId} = routeProps.match.params
            const note = findNote(notes, noteId) || {}
            const folder = findFolder(folders, note.folderId)
            return <FolderNote {...routeProps} folder={folder}/>
          }}
        />
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

    const { notes, folders } = this.state

    // const contextValue = {
    //   notes: this.state.notes,
    //   folders: this.state.folders
    // }

    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route 
            exact
            key={path}
            path={path}
            render={routeProps => {
            const {folderId} = routeProps.match.params
              const folderNotes = getFolderNotes(
                notes,
                folderId
              )
              return (
                <MainNoteList 
                  {...routeProps}
                  notes={folderNotes}
                />
              )
            }}
          />
        ))}
        <Route 
          path='/note/:noteId'
          render={routeProps => {
            const {noteId} = routeProps.match.params
            const note = findNote(notes, noteId)
            return <MainNote {...routeProps} note={note}/>
          }}
        />
      </>
    )
  }

  render() {
    return (
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
    );
  }
}

export default App;