import { useState } from 'react';
import Report from './Report.js';
import EditReport from './EditReport.js';
import User from './models/User.js';
//import logo from './logo.svg';
import './App.css';

function App() {
  const [displayReport, setDisplayReport] = useState(false);
  const [user, setUser] = useState(User.new());
  let display;

  function handleDisplayReport() {
    setDisplayReport(!displayReport);
  }

  function handleUpdateUserForAttribute(attribute) {
    return function(e) {
      const newUser = {...user};
      newUser[attribute] = e.target.value;
      setUser(newUser);
    }
  }

  if (displayReport) {
    display = (
      <Report user={user} onEditReport={handleDisplayReport}/>
    );
  } else {
    display = (
      <EditReport user={user} onDisplayReport={handleDisplayReport} onUpdateUser={handleUpdateUserForAttribute} />
    );
  }
  return display;
}

export default App;
