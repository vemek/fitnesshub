import Button from './Button.js'

function warnDeletion(user) {
  return () => {
    if (!window.confirm(`Are you sure you want to remove all data for ${user.name}?`)) {
      return;
    }
  }
}

function Reports({ user, onClickReport }) {
  return (
    <div>
      <div className="mb-2">Select a report to view:</div>
      <div className="grid grid-cols-[1fr_9rem_7rem_7rem] gap-2">
        <div>
          <a href={"#report/" + user.name} onClick={onClickReport(user)}>{user.name}</a>
        </div>
        <div>
          <Button text="Add Assessment" />
        </div>
        <div>
          <Button text="View Report" type="secondary" onClick={onClickReport(user)} />
        </div>
        <div>
          <Button text="Delete Client" type="danger" onClick={warnDeletion(user)} />
        </div>
        <div>
          <a href={"#report/" + user.name} onClick={onClickReport(user)}>{user.name}</a>
        </div>
        <div>
          <Button text="Add Assessment" />
        </div>
        <div>
          <Button text="View Report" type="secondary" onClick={onClickReport(user)} />
        </div>
        <div>
          <Button text="Delete Client" type="danger" onClick={warnDeletion(user)} />
        </div>
        <div>
          <a href={"#report/" + user.name} onClick={onClickReport(user)}>{user.name}</a>
        </div>
        <div>
          <Button text="Add Assessment" />
        </div>
        <div>
          <Button text="View Report" type="secondary" onClick={onClickReport(user)} />
        </div>
        <div>
          <Button text="Delete Client" type="danger" onClick={warnDeletion(user)} />
        </div>
        <div className="col-span-4">
          <Button text="Add new client" />
        </div>
      </div>
    </div>
  );
}

export default Reports;
