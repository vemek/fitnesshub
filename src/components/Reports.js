import Button from './Button.js'

function Reports({ user, onClickReport }) {
  return (
    <div>
      <div className="mb-2">Select a report to view:</div>
      <div className="grid grid-cols-[1fr_9rem_7rem] gap-2">
        <div>
          <a href={"#report/" + user.name} onClick={onClickReport(user)}>{user.name}</a>
        </div>
        <div>
          <Button text="Add Assessment" />
        </div>
        <div>
          <Button text="View Report" />
        </div>
        <div>
          <a href={"#report/" + user.name} onClick={onClickReport(user)}>{user.name}</a>
        </div>
        <div>
          <Button text="Add Assessment" />
        </div>
        <div>
          <Button text="View Report" />
        </div>
        <div>
          <a href={"#report/" + user.name} onClick={onClickReport(user)}>{user.name}</a>
        </div>
        <div>
          <Button text="Add Assessment" />
        </div>
        <div>
          <Button text="View Report" />
        </div>
        <div className="col-span-3">
          <Button text="Add new client" />
        </div>
      </div>
    </div>
  );
}

export default Reports;
