import React from 'react'
import Moment from 'react-moment'
import './MainNote.css'

class MainNote extends React.Component {
  render() {
    return (
      <section className='Main_note'>
        <h3>{this.props.note.name}</h3>
        <Moment format='D MMM YYYY'>{this.props.note.modified}</Moment>
        <p>{this.props.note.content}</p>
      </section>
    )
  }
}

export default MainNote