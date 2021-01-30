import React from 'react'
import { Link } from 'react-router-dom'

class MainNoteList extends React.Component {
  render() {
    return(
      <section>
        <ul>
          {this.props.notes.map(note => 
            <li key={note.id}>
              <Link to={`/note/${note.id}`}>
                {note.name}
              </Link>
            </li>
          )}
        </ul>
      </section>
    )
  }
}

export default MainNoteList