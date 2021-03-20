import React from 'react'
import config from '../config'
import NotesContext from '../NotesContext'
import PropTypes from 'prop-types'
import ValidationError from '../ValidationError/ValidationError'
import './AddNote.css'

class AddNote extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: {
        value: ''
      },
      content: {
        value: ''
      },
      folder: {
        value: ''
      }
    }
  }

  static contextType = NotesContext

  // input onChange()

  updateName (name) {
    this.setState({
      name: {
        value: name
      }
    })
  }

  updateContent (content) {
    this.setState({
      content: {
        value: content
      }
    })
  }

  updateFolder (folder) {
    this.setState({
      folder: {
        value: folder
      }
    })
  }

  // Form Validation

  validateName () {
    const name = this.state.name.value.trim()
    if (name.length === 0) {
      return 'Name is required'
    } else if (name.length < 3) {
      return 'Name must be at least 3 characters long'
    }
  }

  validateContent () {
    const content = this.state.content.value.trim()
    if (content.length === 0) {
      return 'Content is required'
    }
  }

  validateFolder () {
    const folder = this.state.folder.value.trim()
    if (folder === 'none') {
      return 'Folder is required'
    }
  }

  // Form Submission, POST request

  handleSubmit (event) {
    event.preventDefault()
    const name = this.state.name.value
    const content = this.state.content.value
    const folder = this.state.folder.value

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        note_name: `${name}`,
        content: `${content}`,
        folder_id: `${folder}`
      })
    }

    fetch(`${config.API_ENDPOINT}/note/`, requestOptions)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong! Try again later.')
        }
        return res.json()
      })
      .then(() => {
        this.props.history.goBack()
        this.context.fetchNotes()
      })
      .catch(error => {
        console.log('Error: ', error)
      })
  }

  render () {
    const options = this.context.folders.map((folder, i) => {
      return <option value={folder.id} key={i}>{folder.folder_name}</option>
    })

    return (
      <div className='Add_note'>
        <div className='Folder_back_btn'>
          <button onClick={() => this.props.history.goBack()}>
            Go Back
          </button>
        </div>
        <form className='add_note_form' onSubmit={e => this.handleSubmit(e)}>
          <legend>Create a Note</legend>
          <label htmlFor='name' className='add_note_label'>Name:</label>
          <input
            type='text'
            name='name'
            id='name'
            className='add_note'
            onChange={e => this.updateName(e.target.value)}
            required
          />
          <ValidationError message={this.validateName()}/>
          <label htmlFor='content' className='add_note_label'>Content:</label>
          <textarea
            type='text'
            name='content'
            id='content'
            className='add_note'
            onChange={e => this.updateContent(e.target.value)}
            required
          />
          <ValidationError message={this.validateContent()}/>
          <label htmlFor='folder' className='add_note_label'>Select a Folder</label>
          <select
            id='folder'
            name='folder'
            onChange={e => this.updateFolder(e.target.value)}
            required
          >
            <option value='none'>Select one...</option>
            {options}
          </select>
          <ValidationError message={this.validateFolder()}/>
          <button type='submit' className='add_note_btn'>Add Note</button>
        </form>
      </div>
    )
  }
}

AddNote.propTypes = {
  history: PropTypes.object
}

AddNote.defaultProps = {
  folders: []
}

export default AddNote
