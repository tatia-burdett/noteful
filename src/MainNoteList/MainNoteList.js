import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import NotesContext from '../NotesContext'
import { getFolderNotes } from '../helperFunction'
import './MainNoteList.css'

class MainNoteList extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = NotesContext

  render() {
    const { notes=[] } = this.context
    const { folderId } = this.props.match.params

    const folderNotes = getFolderNotes(notes, folderId)

    return(
      <section className='Main_note_list'>
        <ul>
          {folderNotes.map(note => 
            <li key={note.id} className='Main_list_item'>
              <Link to={`/note/${note.id}`}>
                <h3>{note.name}</h3>
                <Moment format='D MMM YYYY'>{note.modified}</Moment>
              </Link>
            </li>
          )}
        </ul>
      </section>
    )
  }
}

MainNoteList.defaultProps = {
  notes: []
}

export default MainNoteList