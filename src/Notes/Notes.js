import React from 'react'
import { Link } from 'react-router-dom'
import './Notes.css'

class Notes extends React.Component {
  render() {
    return (
      <div className='notes_list'>
        <ul>
          {this.props.notes.map(note => 
            <li key={note.id}>
              <Link to={`/note/${note.id}`}>
                <h2>{note.name}</h2>
              </Link>
              {/* add modified date and remove button */}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Notes