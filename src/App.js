import React from 'react';
import { Route, Link } from 'react-router-dom'
import MainNoteList from './MainNoteList/MainNoteList' // Main section, list of all notes
import FolderList from './FolderList/FolderList' // Folder section, list of all folders
import MainNote from './MainNote/MainNote' // Main section, single note selected
import FolderNote from './FolderNote/FolderNote' // Folder section when single note selected
import DATA from './dummy-store'
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
    this.setState(DATA)
  }

  renderFolderRoutes() {
    const findFolder = (folders=[], folderId) =>
      folders.find(folder => folder.id === folderId)

    const findNote = (notes=[], noteId) =>
      notes.find(note => note.id === noteId)

    const { notes, folders } = this.state
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            render={props => (
              <FolderList 
                folders={folders}
                notes={notes}
                {...props}
              />
            )}
          />
        ))}
        <Route 
          path='/note/:noteId'
          render={props => {
            const {noteId} = props.match.params
            const note = findNote(notes, noteId) || {}
            const folder = findFolder(folders, note.folderId)
            return <FolderNote {...props} folder={folder}/>
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
    return (
      <>
        {['/', 'folder/:folderId'].map(path => (
          <Route 
            key={path}
            path={path}
            render={props => {
              const {folderId} = props.match.params
              const folderNotes = getFolderNotes(
                notes,
                folderId
              )
              return (
                <MainNoteList 
                  {...props}
                  notes={folderNotes}
                />
              )
            }}
          />
        ))}
        <Route 
          path='/note/:noteId'
          render={props => {
            const {noteId} = props.match.params
            const note = findNote(notes, noteId)
            return <MainNote {...props} note={note}/>
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
        <nav className='App_nav'>
          {this.renderFolderRoutes()}
        </nav>
        <main className='App_main'>
          {this.renderNoteRoutes()}
        </main>
      </div>
    );
  }
}

export default App;