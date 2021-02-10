import React from 'react'
import Moment from 'react-moment'
import NotesContext from '../NotesContext'
import {findNote} from '../helperFunction'
import './MainNote.css'

class MainNote extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = NotesContext

  render () {
    const {notes = []} = this.context
    const {noteId} = this.props.match.params

    const note = findNote(notes, noteId || {content: ''})

    return (
      <section className='Main_note'>
        <div>
          <h3>{note.name}</h3>
          <Moment format='D MMM YYYY'>{note.modified}</Moment>
          <p>{note.content}</p>
        </div>
      </section>
    )
  }
}

export default MainNote
