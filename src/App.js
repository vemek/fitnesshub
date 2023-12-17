import { useState } from 'react';
import Report from './Report.js';
import EditReport from './EditReport.js';
import User from './models/User.js';

function App() {
  const [activeView, setActiveView] = useState("editReport");
  const [user, setUser] = useState(User.new());
  const [assessmentToEditId, setAssessmentToEditId] = useState();
  let display;

  function handleChangeView(view) {
    return () => setActiveView(view);
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
      const assessmentToEdit = user.assessments.find((assessment) => assessment.id === assessmentToEditId)

      const newAssessment = {...assessmentToEdit};
      newAssessment[attribute] = e.target.value;

      const newAssessments = [...user.assessments];
      newAssessments.

      handleUpdateUser("assessments")(assessments);
    }
  }

  switch (activeView) {
    case "addAssessment":
      display = (
        <addAssessment user={user} assessment={assessmentToEdit} onEditReport={handleChangeView('editReport')} onUpdateAssessment={handleUpdateAssessment} />
      );
      break;
    case "editReport":
      display = (
        <EditReport user={user} onDisplayReport={handleChangeView('report')} onAddAssessment={handleAddAssessment} onUpdateUser={handleUpdateUser} />
      );
      break;
    default:
    case "report":
      display = (
        <Report user={user} onEditReport={handleChangeView('editReport')}/>
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
