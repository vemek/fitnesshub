import Button from './Button.js'

function warnDeletion(user) {
  return () => {
    if (!window.confirm(`Are you sure you want to remove all data for ${user.name}?`)) {
      return;
    }
  }
}

function clientsRow(id, user, onClickReport, onAddAssessment, onEditClient) {
  return (
    <>
      <div>
        <a href={"#report/" + user.name} onClick={onClickReport(user)}>{user.name}</a>
      </div>
      <div>
        <Button text="Add Assessment" onClick={onAddAssessment(user)} />
      </div>
      <div>
        <Button text="View Report" type="secondary" onClick={onClickReport(user)} />
      </div>
      <div>
        <Button text="Edit Client" onClick={onEditClient(user)} />
      </div>
      <div>
        <Button text="Delete Client" type="danger" onClick={warnDeletion(user)} />
      </div>
    </>
  );
}

function ClientList({ user, onClickReport, onAddAssessment, onEditClient }) {
  // TODO: multiple clients
  const rows = [1, 2, 3].map(id => clientsRow(id, user, onClickReport, onAddAssessment, onEditClient));
  return (
    <div>
      <div className="mb-2 text-2xl">Client List</div>
      <div className="grid grid-cols-[1fr_9rem_7rem_7rem_7rem] gap-2">
        {rows}
        <div className="col-span-4">
          <Button text="Add new client" />
        </div>
      </div>
    </div>
  );
}

export default ClientList;