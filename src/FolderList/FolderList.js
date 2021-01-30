import React from 'react'
import { NavLink, Link } from 'react-router-dom'

class FolderList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.folders.map(folder => 
            <li key={folder.id}>
              <NavLink to={`/folder/${folder.id}`}/>
              {folder.name}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default FolderList