import React from 'react'
import config from '../config'
import NotesContext from '../NotesContext'

class AddNote extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        name: {
          value: ''
        },
        content: {
          value: ''
        },
        folder: {
          value: ''
        }  
      }
    }

  static contextType = NotesContext

  updateName(name) {
    this.setState({
      name: {
        value: name
      }
    })
  }

  updateContent(content) {
    this.setState({
      content: {
        value: content
      }
    })
  }

  updateFolder(folder) {
    this.setState({
      folder: {
        value: folder
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault() 
    const name = this.state.name.value
    const content = this.state.content.value
    const folder = this.state.folder.value
    // const query = `${name} ${content} ${folder}`

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${name}`,
        content: `${content}`,
        folderId: `${folder}`
      })
    };

    fetch(`${config.API_ENDPOINT}/notes/`, requestOptions)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong! Try again later.')
        }
        return res.json()
      })
      .then(data => {
        console.log('Success: ', data)
      })
      .catch(error => {
        console.log('Error: ', error)
      })
  }

  render() {
    const options = this.context.folders.map((folder, i) => {
      return <option value={folder.id} key={i}>{folder.name}</option>
    })

    return (
      <div>
        <form className='add_note_form' onSubmit={e => this.handleSubmit(e)}>
          <legend>Create a Folder</legend>
          <label htmlFor='name'>Name</label>
          <input 
            type='text'
            name='name'
            id='name'
            className='add_note'
            onChange={e => this.updateName(e.target.value)}
          />
          <label htmlFor='content'>Content</label>
          <textarea 
            type='text'
            name='content'
            id='content'
            className='add_note'
            onChange={e => this.updateContent(e.target.value)}
          />
          <label htmlFor='folder'>Select a Folder</label>
          <select 
            id='folder' 
            name='folder'
            onChange={e => this.updateFolder(e.target.value)}
          >
            <option value='none'>Select one...</option>
            {options}
          </select>
          <button type='submit'>Add Note</button>
        </form>
      </div>
    )
  }
 }

 AddNote.defaultProps = {
  folders: []
}

 export default AddNote