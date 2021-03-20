import React from 'react'
import config from '../config'
import NotesContext from '../NotesContext'
import ValidationError from '../ValidationError/ValidationError'
import PropTypes from 'prop-types'
import './AddFolder.css'

class AddFolder extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: {
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

  // Form Validation

  validateName () {
    const name = this.state.name.value.trim()
    if (name.length === 0) {
      return 'Name is required'
    } else if (name.length < 3) {
      return 'Name must be at least 3 characters long'
    }
  }

  // Form Submission, POST request

  handleSubmit (event) {
    event.preventDefault()
    const query = this.state.name.value

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        folder_name: `${query}`
      })
    }

    fetch(`${config.API_ENDPOINT}/folder/`, requestOptions)
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
    return (
      <div className='Add_folder'>
        <div className='Folder_back_btn'>
          <button onClick={() => this.props.history.goBack()}>
            Go Back
          </button>
        </div>
        <form className='add_folder_form' onSubmit={e => this.handleSubmit(e)}>
          <legend>Create a Folder</legend>
          <label htmlFor='name' className='add_folder_label'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            className='add_folder'
            onChange={e => this.updateName(e.target.value)}
            required
          />
          <ValidationError message={this.validateName()} />
          <button type='submit' className='add_folder_btn'>Add Folder</button>
        </form>
      </div>
    )
  }
}

AddFolder.propTypes = {
  history: PropTypes.object
}

export default AddFolder
