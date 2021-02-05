import React from 'react'

class AddFolder extends React.Component {
  render() {
    return (
      <div>
        <form className='add-folder-form'>
          <button className='add-folder-btn' type='submit'>Add Folder +</button>
        </form>
      </div>
    )
  }
}

export default AddFolder