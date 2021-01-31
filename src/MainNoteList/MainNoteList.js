import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import './MainNoteList.css'

class MainNoteList extends React.Component {

  render() {
    return(
      <section className='Main_note_list'>
        <ul>
          {this.props.notes.map(note => 
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