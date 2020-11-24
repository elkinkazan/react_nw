import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import DialoguesContainer from './components/Dialogues/DialoguesContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

const App = (props) => {

  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <main className="app-wrapper__content">
          <Route exact path='/dialogues' render={() => <DialoguesContainer dialoguesPage={props.state.dialoguesPage} dispatch={props.dispatch}/>} />
          <Route exact path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
          <Route exact path='/news' render={() => <News />} />
          <Route exact path='/music' render={() => <Music />} />
          <Route exact path='/settings' render={() => <Settings />} />
        </main>
      </div>
  );
}

export default App;
