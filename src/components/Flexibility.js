import Table from './Table.js';
import TableRow from './TableRow.js';
import TableCell from './TableCell.js';

function Flexibility({ assessments }) {
  const hamstringRow = assessments.map(assessment => {
    return (<TableCell>{assessment.flHamstring}</TableCell>);
  });
  const chestRow = assessments.map(assessment => {
    return (<TableCell>{assessment.flChest}</TableCell>);
  });
  const otherRow = assessments.map(assessment => {
    return (<TableCell>{assessment.flOther}</TableCell>);
  });
  return (
    <>
      <div className="text-lg underline my-4">Flexibility</div>
      <Table numCols={assessments.length}>
        <TableRow title="Hamstring">{hamstringRow}</TableRow>
        <TableRow title="Chest">{chestRow}</TableRow>
        <TableRow title="Other">{otherRow}</TableRow>
      </Table>
    </>
  );
}
export default Flexibility;
