import Table from './Table.js';
import TableRow from './TableRow.js';
import TableCell from './TableCell.js';

function Posture({ assessments }) {
  const headNeckRow = assessments.map(assessment => {
    return (<TableCell>{assessment.posHeadNeck}</TableCell>);
  });
  const shouldersRow = assessments.map(assessment => {
    return (<TableCell>{assessment.posShoulders}</TableCell>);
  });
  const upperBackRow = assessments.map(assessment => {
    return (<TableCell>{assessment.posUpperBack}</TableCell>);
  });
  const lowerBackRow = assessments.map(assessment => {
    return (<TableCell>{assessment.posLowerBack}</TableCell>);
  });
  const hipsRow = assessments.map(assessment => {
    return (<TableCell>{assessment.posHips}</TableCell>);
  });
  const legsFeetRow = assessments.map(assessment => {
    return (<TableCell>{assessment.posLegsFeet}</TableCell>);
  });
  return (
    <>
      <div className="text-lg underline my-4">Posture</div>
      <Table numCols={assessments.length}>
        <TableRow title="Head / Neck">{headNeckRow}</TableRow>
        <TableRow title="Shoulders">{shouldersRow}</TableRow>
        <TableRow title="Upper Back">{upperBackRow}</TableRow>
        <TableRow title="Lower Back">{lowerBackRow}</TableRow>
        <TableRow title="Hips">{hipsRow}</TableRow>
        <TableRow title="Legs / Feet">{legsFeetRow}</TableRow>
      </Table>
    </>
  );
}
export default Posture;
