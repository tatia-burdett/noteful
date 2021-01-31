import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './FolderList.css'

class FolderList extends React.Component {
  render() {
    const countNotesForFolder = (notes=[], folderId) =>
      notes.filter(note => note.folderId === folderId).length
    
    return (
      <div className='Folder_list'>
        <ul>
          {this.props.folders.map(folder => 
            <li key={folder.id} className='Folder_list_item'>
              <NavLink to={`/folder/${folder.id}`}>
                {folder.name}
                </NavLink>
              <div>{countNotesForFolder(this.props.notes, folder.id)}</div>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default FolderList