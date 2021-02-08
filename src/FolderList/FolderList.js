import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import NotesContext from '../NotesContext'
import { countNotesForFolder } from '../helperFunction'

import './FolderList.css'


class FolderList extends React.Component {
  static contextType = NotesContext

  render() {
    // const countNotesForFolder = (notes=[], folderId) =>
    //   notes.filter(note => note.folderId === folderId).length

    const { folders=[], notes=[] } = this.context
    
    return (
      <div className='Folder_list'>
        <ul>
          {folders.map(folder => 
            <li key={folder.id} className='Folder_list_item'>
              <NavLink to={`/folder/${folder.id}`}>
                {folder.name}
                <span className='Folder_note_count'>{countNotesForFolder(notes, folder.id)}</span>
                </NavLink>
            </li>
          )}
        </ul>
        <div className='Folder_list_add_link'>
            <Link to={'/add-folder'}>Add Folder +</Link>
        </div>
      </div>
    )
  }
}

export default FolderList