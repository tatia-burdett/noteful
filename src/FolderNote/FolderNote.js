import React from 'react'
import './FolderNote.css'
import NotesContext from '../NotesContext'
import PropTypes from 'prop-types'
import {findNote, findFolder} from '../helperFunction'

class FolderNote extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => {}
    },
    match: {
      params: {}
    }
  }

  static contextType = NotesContext

  render () {
    const {folders, notes} = this.context
    const {noteId} = this.props.match.params

    const note = findNote(notes, noteId) || {}
    const folder = findFolder(folders, note.folder_id)

    return (
      <div className='Folder_note'>
        <div className='Folder_back_btn'>
          <button onClick={() => this.props.history.goBack()}>
            Go Back
          </button>
        </div>
        {folder && (
          <h3>{folder.folder_name}</h3>
        )}
      </div>
    )
  }
}

FolderNote.propTypes = {
  history: PropTypes.object,
  match: PropTypes.number
}

export default FolderNote
