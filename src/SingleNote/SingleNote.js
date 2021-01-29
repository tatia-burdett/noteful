import React from 'react'
import { Link } from 'react-router-dom'


class SingleNote extends React.Component {
  render() {
    const singleNote = this.props.notes.find(note =>
      note.id === this.props.match.params.noteId)
    
    // console.log(this.props.notes.find(note => note.id === 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1'))
    return (
      <div>
        <header>
          <Link to='/' className='header_link'><h1>Noteful</h1></Link>
        </header>
        <main>
          <h2>{singleNote.name}</h2>
        </main>
        <section>

        </section>
      </div>
    )
  }
}


export default SingleNote