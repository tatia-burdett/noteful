import React from 'react'

class AddFolder extends React.Component {
  render() {
    return (
      <div>
        <form className='add-folder-form'>
          <legend>Create a Folder</legend>
          <label>Name</label>
          <input></input>
          <button>Add Folder</button>
        </form>
      </div>
    )
  }
}

export default AddFolder