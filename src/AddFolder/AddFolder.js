import React from 'react'

class AddFolder extends React.Component {

  handleSubmit(event) {
    event.preventDefault()
    const name = event.target.name.value
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
          />
          <button type='submit'>Add Folder</button>
        </form>
      </div>
    )
  }
}

export default AddFolder