import React from 'react';
import { Link } from 'react-router-dom'
import Folders from '../Folders/Folders'
import Notes from '../Notes/Notes'
import './Main.css'

class App extends React.Component {

  render() {
    return (
      <div className='main'>
        <header>
          <Link to='/' className='header_link'><h1>Noteful</h1></Link>
        </header>

        <div className='main_display_area'>
          <main className='main_notes_list'>
            <Notes 
              notes={this.props.notes}
            />
          </main>

          {/* Need to make folder section dynamic with Route */}
          <section className='main_folders_list'> 
            <Folders 
              folders={this.props.folders}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default App;