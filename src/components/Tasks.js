import React, { useState } from 'react';
import '../style/Tasks.css';
import { useStateValue } from '../datalayer/StateProvider';
import db from '../config/firebase';
import firebase from 'firebase';
import TaskTable from './TaskTable';

function Tasks({ projectId }) {
	const [{ user }, dispatch] = useStateValue();
	const [input, setInput] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		db.collection('projects').add({
			task: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			status: 'new',
			projectId: projectId,
		});
		setInput('');
	};

	return (
		<div className="tasks">
			<div className="task_add">
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="task__input"
						placeholder="Add a New Task"
					/>
					<button onClick={handleSubmit} type="submit">
						Add Task
					</button>
				</form>
			</div>
			<div className="task_list">
				<TaskTable />
			</div>
		</div>
	);
}

export default Tasks;
