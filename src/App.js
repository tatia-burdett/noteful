import React from 'react';
import { Route, Link } from 'react-router-dom'
import SingleNote from './SingleNote/SingleNote'
import Main from './Main/Main'
import DATA from './dummy-store'
import Folders from './Folders/Folders'
import FoldersList from './FoldersList/FoldersList'
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
    return(
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route 
            exact
            key={path}
            path={path}
            render={routeProps => (
              <Folders 
                folders={data.folders}
                notes={data.notes}
                {...routeProps}
              />
            )} 
          />
        ))}
        <Route 
          path='/note/:noteId'
          render={routeProps => {
            const {noteId} = routeProps.match.params
            const note = findNote(data.notes, noteId) || {}
            const folder = findFolder(data.folders, note.folderId)
            return <SingleNote {...routeProps} folder={folder} 
        />
          }}
      </>
    )
  }

  renderMain() {
    const getFolderNotes = (notes=[], folderId) => {
      return (!folderId)
        ? notes
        : notes.filter(note => note.folderId === folderId)
    }

    const { data } = this.state
    return (
      <>
      {['/', '/folders/:folderId'].map(path => (
        <Route 
          exact
          key={path}
          path={path}
          render={routeProps => {
            const {folderId} = routeProps.match.params
            const folderNotes = getFolderNotes(
              data.notes,
              folderId
            )
            return (
              <FoldersList 
                {...routeProps}
                notes={folderNotes}
              />
            ) 
          }}
        />
      ))}
        <Route path='/note/:noteId' render={(props) =>
          <SingleNote
            notes={data.notes} 
            {...props} />} // WHY does this work??? 
        />
      </>
    )
  }

  // renderMain() {
  //   const { data } = this.state
  //   return (
  //     <Route exact path='/' render={() => 
  //       <Main 
  //         folders={data.folders}
  //         notes={data.notes} />}
  //     />
  //   )
  // }

  // renderNote() {
  //   const { data } = this.state
  //   return (
  //     <Route path='/note/:noteId' render={(props) =>
  //       <SingleNote
  //         notes={data.notes} 
  //         {...props} />} // WHY does this work??? 
  //     />
  //   )
  // }

  render() {
    return (
      <div className='App'>
        <header>
          <Link to='/'><h1>Noteful</h1></Link>
        </header>
        <nav className='app_nav'>

        </nav>
        <main>
          {this.renderMain}
            {/* {this.renderMain()} */}
            {/* {this.renderNote()} */}
        </main>
      </div>
    );
  }
}

export default App;