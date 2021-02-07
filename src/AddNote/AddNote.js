import React from 'react'
import config from '../config'

class AddNote extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        name: {
          value: ''
        },
        content: {
          value: ''
      }
    }
  }

  updateName(name) {
    this.setState({
      name: {
        value: name
      }
    })
  }

  updateContent(content) {
    this.setState({
      content: {
        value: content
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault() 
    const name = this.state.name.value
    const content = this.state.content.value
    const query = `${name} ${content}`

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${query}`
      })
    };

    fetch(`${config.API_ENDPOINT}/notes/`, requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log('Success: ', data)
      })
      .catch(error => {
        console.log('Error: ', error)
      })
  }

  render() {
    return (
      <div>
        <form className='add_note_form' onSubmit={e => this.handleSubmit(e)}>
          <legend>Create a Folder</legend>
          <label htmlFor='name'>Name</label>
          <input 
            type='text'
            name='name'
            id='name'
            className='add_note'
            onChange={e => this.updateName(e.target.value)}
          />
          <label htmlFor='content'>Content</label>
          <textarea 
            type='text'
            name='content'
            id='content'
            className='add_note'
            onChange={e => this.updateContent(e.target.value)}
          />
          <button type='submit'>Add Note</button>
        </form>
      </div>
    )
  }
 }

 export default AddNote