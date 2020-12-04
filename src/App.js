import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {

  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <main className="app-wrapper__content">
          <Route exact path='/dialogues' render={() => <DialoguesContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route exact path='/news' render={() => <News />} />
          <Route exact path='/music' render={() => <Music />} />
          <Route exact path='/settings' render={() => <Settings />} />
          <Route exact path='/users' render={() => <UsersContainer />} />
        </main>
      </div>
  );
}

export default App;
