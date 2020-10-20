import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfilePage from './components/ProfilePage/ProfilePage';
import { SideBar } from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <aside className='App__side'>
        <SideBar />
      </aside>
      <main className='App__main'>
        <Switch>
          <Route path='/profile/:subpage?' component={ProfilePage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
