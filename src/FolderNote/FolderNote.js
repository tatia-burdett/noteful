import React from 'react'
import './FolderNote.css'
import NotesContext from '../NotesContext'
import { findNote, findFolder } from '../helperFunction'

class FolderNote extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = NotesContext

  render() {
    const { folders, notes} = this.context
    const { noteId } = this.props.match.params

    const note = findNote(notes, noteId) || {}
    const folder = findFolder(folders, note.folderId)

    console.log(folders)

    return ( 
      <div className='Folder_note'>
        <div className='Folder_back_btn'>
          <button onClick={() => this.props.history.goBack()}>
            Go Back
          </button>
        </div>
        {folder && (
          <h3>{folder.name}</h3>
        )}
      </div>
    )
  }
}

export default FolderNote