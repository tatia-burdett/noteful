import React from 'react'
import './FolderNote.css'

class FolderNote extends React.Component {
  render() {
    return ( 
      <div>
        {this.props.folder && (
          <h3>{this.props.folder.name}</h3>
        )}
      </div>
    )
  }
}

export default FolderNote