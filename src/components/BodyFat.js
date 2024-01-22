import Table from './Table.js';
import TableRow from './TableRow.js';
import TableCell from './TableCell.js';

function BodyFat({ assessments }) {
  const bicepRow = assessments.map(assessment => {
    return (<TableCell>{assessment.bfBicep} cm</TableCell>);
  });
  const tricepRow = assessments.map(assessment => {
    return (<TableCell>{assessment.bfTricep} cm</TableCell>);
  });
  const subscapRow = assessments.map(assessment => {
    return (<TableCell>{assessment.bfSubscap} cm</TableCell>);
  });
  const superRow = assessments.map(assessment => {
    return (<TableCell>{assessment.bfSuper} cm</TableCell>);
  });
  const leanMassRow = assessments.map(assessment => {
    return (<TableCell>{assessment.bfLeanMass} kg</TableCell>);
  });
  const bodyFatRow = assessments.map(assessment => {
    return (<TableCell>{assessment.bfPercentage} cm</TableCell>);
  });
  return (
    <Table numCols={assessments.length}>
      <TableRow title="Bicep">{bicepRow}</TableRow>
      <TableRow title="Tricep">{tricepRow}</TableRow>
      <TableRow title="Subscap">{subscapRow}</TableRow>
      <TableRow title="Super">{superRow}</TableRow>
      <TableRow title="Lean Mass">{leanMassRow}</TableRow>
      <TableRow title="Body Fat">{bodyFatRow}</TableRow>
    </Table>
  );
}
export default BodyFat;
