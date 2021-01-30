import React from 'react'
import { NavLink, Link } from 'react-router-dom'

class FolderList extends React.Component {
  render() {
    const countNotesForFolder = (notes=[], folderId) =>
      notes.filter(note => note.folderId === folderId).length
    
    return (
      <div>
        <ul>
          {this.props.folders.map(folder => 
            <li key={folder.id}>
              <NavLink to={`/folder/${folder.id}`}>
          <span>{countNotesForFolder(this.props.notes, folder.id)}</span>
              {folder.name}
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default FolderList