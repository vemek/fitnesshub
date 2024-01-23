import Table from './Table.js';
import TableRow from './TableRow.js';
import TableCell from './TableCell.js';

function Functional({ assessments }) {
  const coreRow = assessments.map(assessment => {
    return (<TableCell>{assessment.coreTest}</TableCell>);
  });
  const plankRow = assessments.map(assessment => {
    return (<TableCell>{assessment.plankTimeSecs} secs</TableCell>);
  });
  const lowerAbLegDropRow = assessments.map(assessment => {
    return (<TableCell>{assessment.lowerAbLegDrop}</TableCell>);
  });
  return (
    <>
      <div className="text-lg underline my-4">Functional</div>
      <Table numCols={assessments.length}>
        <TableRow title="Core Test">{coreRow}</TableRow>
        <TableRow title="Plank">{plankRow}</TableRow>
        <TableRow title="Lower Ab Leg Drop">{lowerAbLegDropRow}</TableRow>
      </Table>
    </>
  );
}
export default Functional;
