import React from 'react'

class AddFolder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: {
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

  handleSubmit(event) {
    event.preventDefault()
    const { name } = this.state
    console.log(name)
  }

  render() {
    return (
      <div>
        <form className='add_folder_form' onSubmit={e => this.handleSubmit(e)}>
          <legend>Create a Folder</legend>
          <label htmlFor='name'>Name</label>
          <input 
            type='text'
            name='name'
            id='name'
            className='add_folder'
            onChange={e => this.updateName(e.target.value)}
          />
          <button type='submit'>Add Folder</button>
        </form>
      </div>
    )
  }
}

export default AddFolder