import Table from './Table.js';
import TableRow from './TableRow.js';
import TableCell from './TableCell.js';


function Stats({assessments}) {
  const bpRow = assessments.map(assessment => {
    return (<TableCell>{assessment.bloodPressureSystolic} / {assessment.bloodPressureDiastolic}</TableCell>);
  });
  const heartRateRow = assessments.map(assessment => {
    return (<TableCell>{assessment.heartRate} bpm</TableCell>);
  });
  const weightRow = assessments.map(assessment => {
    return (<TableCell>{assessment.weight} kg</TableCell>);
  });

  return (
    <Table numCols={assessments.length}>
      <TableRow title="Blood Pressure">{bpRow}</TableRow>
      <TableRow title="Heart Rate">{heartRateRow}</TableRow>
      <TableRow title="Weight">{weightRow}</TableRow>
    </Table>
  );
}

export default Stats;
