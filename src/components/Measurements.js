import Table from './Table.js';
import TableRow from './TableRow.js';
import TableCell from './TableCell.js';

function Measurements({ assessments }) {

  const neckRow = assessments.map(assessment => {
    return (<TableCell>{assessment.msNeck} cm</TableCell>);
  });
  const upperArmRow = assessments.map(assessment => {
    return (<TableCell>{assessment.msUpperArm} cm</TableCell>);
  });
  const chestRow = assessments.map(assessment => {
    return (<TableCell>{assessment.msChest} cm</TableCell>);
  });
  const upperAbsRow = assessments.map(assessment => {
    return (<TableCell>{assessment.msUpperAbs} cm</TableCell>);
  });
  const lowerAbsRow = assessments.map(assessment => {
    return (<TableCell>{assessment.msLowerAbs} cm</TableCell>);
  });
  const hipsRow = assessments.map(assessment => {
    return (<TableCell>{assessment.msHips} cm</TableCell>);
  });
  const thighRow = assessments.map(assessment => {
    return (<TableCell>{assessment.msThigh} cm</TableCell>);
  });
  const calfRow = assessments.map(assessment => {
    return (<TableCell>{assessment.msCalf} cm</TableCell>);
  });

  // neck, upper arm, chest, upper abs, lower abs, hips, thigh, calf
  return (
    <>
      <div className="text-lg underline my-4">Measurements</div>
      <Table numCols={assessments.length}>
        <TableRow title="Neck">{neckRow}</TableRow>
        <TableRow title="Upper Arm">{upperArmRow}</TableRow>
        <TableRow title="Chest">{chestRow}</TableRow>
        <TableRow title="Upper Abs">{upperAbsRow}</TableRow>
        <TableRow title="Lower Abs">{lowerAbsRow}</TableRow>
        <TableRow title="Hips">{hipsRow}</TableRow>
        <TableRow title="Thigh">{thighRow}</TableRow>
        <TableRow title="Calf" lastRow>{calfRow}</TableRow>
      </Table>
    </>
  );
}

export default Measurements;
