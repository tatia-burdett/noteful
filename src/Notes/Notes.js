import React from 'react'
import { Link } from 'react-router-dom'
import './Notes.css'

class Notes extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.notes.map(note => 
            <li key={note.id}>
              <Link to={`/note/${note.id}`}>
                {note.name}
              </Link>
            </li>)}
        </ul>
      </div>
    )
  }
}

export default Notes