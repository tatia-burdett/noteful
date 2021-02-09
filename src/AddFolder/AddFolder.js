import React from 'react'
import config from '../config'
import ValidationError from '../ValidationError/ValidationError'
import './AddFolder.css'

class AddFolder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: {
        value: ''
      }
    }
  }

  // input onChange()

  updateName(name) {
    this.setState({
      name: {
        value: name
      }
    })
  }

  // Form Validation

  validateName() {
    const name = this.state.name.value.trim()
    if (name.length === 0) {
      return 'Name is required'
    } else if (name.length < 3) {
      return 'Name must be at least 3 characters long'
    }
  }

  // Form Submission, POST request

  handleSubmit(event) {
    event.preventDefault()
    const query = this.state.name.value

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${query}`
      })
  };

    fetch(`${config.API_ENDPOINT}/folders/`, requestOptions)
    .then(res => {
      if (!res.ok) {
        throw new Error('Something went wrong! Try again later.')
      }
      return res.json()
    })
    .then(data => {
      console.log('Success: ', data)
    })
    .catch(error => {
      console.log('Error: ', error)
    })
  }

  render() {
    return (
      <div className='Add_folder'>
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
          <ValidationError message={this.validateName()}/>
          <button type='submit' className='add_folder_btn'>Add Folder</button>
        </form>
      </div>
    )
  }
}

export default AddFolder