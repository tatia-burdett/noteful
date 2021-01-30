import React from 'react'

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