import React from 'react'
import './FolderNote.css'

class FolderNote extends React.Component {
  render() {
    return ( 
      <div className='Folder_note'>
        <div className='Folder_back_btn'>
          <button onClick={() => this.props.history.goBack()}>
            Go Back
          </button>
        </div>
        {this.props.folder && (
          <h3>{this.props.folder.name}</h3>
        )}
      </div>
    )
  }
}

export default FolderNote