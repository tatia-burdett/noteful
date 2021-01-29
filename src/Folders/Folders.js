import React from 'react'
import { Link } from 'react-router-dom'
import './Folders.css'

class Folders extends React.Component {
  render() {
    return (
      <div>
       <ul>
         {this.props.folders.map(folder => 
          <li key={folder.id}>
            {folder.name}
          </li>)}
       </ul>
      </div>
    )
  }
}

export default Folders