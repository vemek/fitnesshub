import { useState } from 'react';
import Assessment from './models/Assessment.js';
import EditAssessment from './components/EditAssessment.js';
import ClientList from './components/ClientList.js';
import Nav from './components/Nav.js';
import Report from './components/Report.js';
import EditClient from './components/EditClient.js';
import Route from './Route.js';
import User from './models/User.js';

function App() {
  const [activeRoute, setActiveRoute] = useState(Route.Reports);
  const [user, setUser] = useState(User.new());
  const [assessmentToEdit, setAssessmentToEdit] = useState();
  let display;

  function handleChangeRoute(view) {
    return () => {
      setActiveRoute(view);
    };
  }

  function handleUpdateUser(attribute) {
    return (e) => {
      const newUser = {...user};
      newUser[attribute] = e.target.value;
      setUser(newUser);
    }
  }

  function handleUpdateAssessment(attribute) {
    return (e) => {
      const newAssessment = {...assessmentToEdit};
      newAssessment[attribute] = e.target.value;

      let newAssessments = [...user.assessments];
      const indexToOverride = newAssessments.map((a) => a.id).indexOf(assessmentToEdit.id);
      newAssessments[indexToOverride] = newAssessment;

      setUser({...user, assessments: newAssessments})
      setAssessmentToEdit(newAssessment);
    }
  }

  function handleAddAssessment() {
    return (_user) => {
      // TODO: set active user
      const newAssessment = Assessment.new();
      const newAssessments = [...user.assessments, newAssessment];
      setUser({...user, assessments: newAssessments})
      setAssessmentToEdit(newAssessment);
      setActiveRoute(Route.EditAssessment);
    }
  }

  function handleEditAssessment(assessment) {
    return () => {
      setAssessmentToEdit(assessment);
      setActiveRoute(Route.EditAssessment);
    }
  }

  function handleShowReport(user) {
    return () => {
      // TODO: set active user
      setActiveRoute(Route.Report);
    }
  }

  function handleEditClient(user) {
    return () => {
      // TODO: set active user
      setActiveRoute(Route.EditClient);
    }
  }

  switch (activeRoute) {
    default:
    case Route.ClientList:
      display = (
        <ClientList
          user={user}
          onClickReport={handleShowReport}
          onAddAssessment={handleAddAssessment}
          onEditClient={handleEditClient}
        />
      );
      break;
    case Route.EditAssessment:
      display = (
        <EditAssessment
          user={user}
          assessment={assessmentToEdit}
          onUpdateAssessment={handleUpdateAssessment}
          onDone={handleChangeRoute(Route.ClientList)}
        />
      );
      break;
    case Route.Report:
      display = (
        <Report
          user={user}
        />
      );
      break;
    case Route.EditClient:
      display = (
        <EditClient
          user={user}
          onUpdateUser={handleUpdateUser}
          onDone={handleChangeRoute(Route.ClientList)}
        />
      );
      break;
  }
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-1 h-screen">
      <Nav
        route={activeRoute}
        changeRoute={handleChangeRoute}
      />
      <main className="my-4">
        {display}
      </main>
    </div>
  );
}

export default App;
