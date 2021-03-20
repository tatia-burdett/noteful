import React from 'react'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import NotesContext from '../NotesContext'
import {getFolderNotes} from '../helperFunction'
import config from '../config'
import './MainNoteList.css'

class MainNoteList extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = NotesContext

  deleteNoteRequest = (noteId) => {
    fetch(`${config.API_ENDPOINT}/note/${noteId}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
        this.context.fetchNotes()
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    const {notes = []} = this.context
    const {folderId} = this.props.match.params

    const folderNotes = getFolderNotes(notes, folderId)

    return (
      <NotesContext.Consumer>
        {(context) => (
          <section className='Main_note_list'>
            <ul>
              {folderNotes.map(note =>
                <li key={note.id} className='Main_list_item'>
                  <Link to={`/note/${note.id}`}>
                    <h3>{note.note_name}</h3>
                    <Moment format='D MMM YYYY'>{note.modified}</Moment>
                  </Link>
                  <div className='Main_list_del'>
                    <button onClick={() => {
                      this.deleteNoteRequest(
                        note.id,
                        context.deleteNote
                      )
                    }}>
                      Delete
                    </button>
                  </div>
                </li>
              )}
            </ul>
            <div className='Main_note_add_link'>
              <Link to='/add-note'>Add Note +</Link>
            </div>
          </section>
        )}
      </NotesContext.Consumer>
    )
  }
}

MainNoteList.defaultProps = {
  notes: []
}

export default MainNoteList
