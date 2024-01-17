import Button from './Button.js'

function warnDeletion(user) {
  return () => {
    if (!window.confirm(`Are you sure you want to remove all data for ${user.name}?`)) {
      return;
    }
  }
}

function assessmentRow(user, assessment, onEditAssessment) {
  return (
    <>
      <div className="ml-4">
        {assessment.date}
      </div>
      <div className="flex gap-2 flex-wrap justify-end">
        <div>
          <Button text="Edit Assessment" onClick={onEditAssessment(assessment)} />
        </div>
        <div>
          <Button text="Delete Assessment" type="danger" onClick={warnDeletion(assessment)} />
        </div>
      </div>
    </>
  );
}

function clientRow(id, user, onEditClient, onClickReport, onAddAssessment, onEditAssessment) {
  const assessmentRows = user.assessments.map(assessment => assessmentRow(user, assessment, onEditAssessment));
  return (
    <div className="">
      <div className="flex items-center justify-between gap-2 p-4 bg-slate-200 rounded">
        <div className="text-xl">
          <a href={"#report/" + user.name} onClick={onClickReport(user)}>{user.name}</a>
        </div>
        <div className="flex gap-2 flex-wrap justify-end">
          <div>
            <Button text="View Report" type="secondary" onClick={onClickReport(user)} />
          </div>
          <div>
            <Button text="Add Assessment" onClick={onAddAssessment(user)} />
          </div>
          <div>
            <Button text="Edit Client" onClick={onEditClient(user)} />
          </div>
          <div>
            <Button text="Delete Client" type="danger" onClick={warnDeletion(user)} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[auto_1fr] items-center gap-2 mb-4 p-4 bg-slate-100 rounded">
        {assessmentRows}
      </div>
    </div>
  );
}

function ClientList({ user, onEditClient, onClickReport, onAddAssessment, onEditAssessment }) {
  // TODO: multiple clients
  const clientRows = [1, 2, 3].map(id => clientRow(id, user, onEditClient, onClickReport, onAddAssessment, onEditAssessment));
  return (
    <div>
      <div className="mb-2 text-2xl">Client List</div>
      {clientRows}
      <div>
        <Button text="Add new client" />
      </div>
    </div>
  );
}

export default ClientList;
