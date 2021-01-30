import React from 'react'


class SingleNote extends React.Component {
  render() {
    const singleNote = this.props.notes.find(note =>
      note.id === this.props.match.params.noteId)
    
    return (
      <div>
        <main>
          <h2>{singleNote.name}</h2>
          <p>{singleNote.content}</p>
        </main>
        <section>
          {/* add side bar and back button */}
        </section>
      </div>
    )
  }
}


export default SingleNote