import React from 'react'
import { Link } from 'react-router-dom'
import './MainNote.css'

class MainNote extends React.Component {
  render() {
    return (
      <section className='Main_note'>
        <h3>{this.props.note.name}</h3>
        <p>{this.props.note.content}</p>
      </section>
    )
  }
}

export default MainNote