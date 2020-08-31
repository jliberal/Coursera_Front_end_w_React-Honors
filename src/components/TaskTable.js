import React from 'react';
import '../style/TaskTable.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: '#8895b3',
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: '#EBF0FC',
		},
	},
}))(TableRow);

function createData(id, description, status, created, duedate) {
	return { id, description, status, created, duedate };
}

const rows = [
	createData(
		'5XcjDRnZ5APElSPD9NcU',
		'Prototype task',
		'new',
		'2020-08-30T04:50:53+00:00',
		'2020-08-31T04:50:53+00:00'
	),
];

function TaskTable() {
	const classes = useStyles();
	return (
		<div className="taskTable">
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<StyledTableRow>
							<StyledTableCell>Task ID</StyledTableCell>
							<StyledTableCell align="right">Task</StyledTableCell>
							<StyledTableCell align="right">Status</StyledTableCell>
							<StyledTableCell align="right">Created On</StyledTableCell>
							<StyledTableCell align="right">Due Date</StyledTableCell>
						</StyledTableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<StyledTableRow key={row.name}>
								<StyledTableCell component="th" scope="row">
									{row.id}
								</StyledTableCell>
								<StyledTableCell align="right">
									{row.description}
								</StyledTableCell>
								<StyledTableCell align="right">{row.status}</StyledTableCell>
								<StyledTableCell align="right">{row.created}</StyledTableCell>
								<StyledTableCell align="right">{row.duedate}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default TaskTable;
