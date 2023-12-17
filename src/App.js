import { useState } from 'react';
import Assessment from './models/Assessment.js';
import EditAssessment from './EditAssessment.js';
import EditReport from './EditReport.js';
import Report from './Report.js';
import User from './models/User.js';

function App() {
  const [activeView, setActiveView] = useState("editReport");
  const [user, setUser] = useState(User.new());
  const [assessmentToEdit, setAssessmentToEdit] = useState();
  let display;

  function handleChangeView(view) {
    return () => {
      setActiveView(view);
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
    const newAssessment = Assessment.new();
    const newAssessments = [...user.assessments, newAssessment];
    setUser({...user, assessments: newAssessments})
    setAssessmentToEdit(newAssessment);
    setActiveView('editAssessment');
  }

  function handleEditAssessment(assessment) {
    return () => {
      setAssessmentToEdit(assessment);
      setActiveView('editAssessment');
    }
  }

  switch (activeView) {
    case "editAssessment":
      display = (
        <EditAssessment
          user={user}
          assessment={assessmentToEdit}
          onUpdateAssessment={handleUpdateAssessment}
          onDone={handleChangeView('editReport')}
        />
      );
      break;
    case "editReport":
      display = (
        <EditReport
          user={user}
          onDisplayReport={handleChangeView('report')}
          onAddAssessment={handleAddAssessment}
          onUpdateUser={handleUpdateUser}
          onEditAssessment={handleEditAssessment}
        />
      );
      break;
    default:
    case "report":
      display = (
        <Report
          user={user}
          onEditReport={handleChangeView('editReport')}
        />
      );
      break;
  }
  return (
    <div className="m-5">
      {display}
    </div>
  );
}

export default App;
