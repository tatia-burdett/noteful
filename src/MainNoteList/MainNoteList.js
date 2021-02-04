import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import NotesContext from '../NotesContext'
import { getFolderNotes } from '../helperFunction'
import config from '../config'
import './MainNoteList.css'

// function deleteNoteRequest(noteId, cb) {
//   fetch(config.API_ENDPOINT + `/${noteId}`, {
//     method: 'DELETE',
//   })
//   .then(res => {
//     if(!res.ok) {
//       return res.json().then(error => {
//         throw error
//       })
//     }
//     return res.json()
//   })
//   .then(data => {
//     cb(noteId)
//   })
//   .catch(error => {
//     console.log(error)
//   })
// }

class MainNoteList extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = NotesContext

  deleteNoteRequest = (noteId) => {
    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
    })
    .then(res => {
      if(!res.ok) {
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

  render() {
    const { notes=[] } = this.context
    const { folderId } = this.props.match.params

    const folderNotes = getFolderNotes(notes, folderId)

    return(
      <NotesContext.Consumer>
        {(context) => (
          <section className='Main_note_list'>
            <ul>
              {folderNotes.map(note => 
                <li key={note.id} className='Main_list_item'>
                  <Link to={`/note/${note.id}`}>
                    <h3>{note.name}</h3>
                    <Moment format='D MMM YYYY'>{note.modified}</Moment>
                  </Link>
                  <div className='Main_list_del'>
                    <button onClick={() => {
                      // console.log(context)
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