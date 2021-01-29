import React from 'react'
import { Route, Link } from 'react-router-dom'
import './Folders.css'

class Folders extends React.Component {
  render() {
    return (
      <div>
       <ul>
         <li>Folder 1</li>
         <li>Folder 2</li>
         <li>Folder 3</li>
       </ul>
      </div>
    )
  }
}

export default Folders