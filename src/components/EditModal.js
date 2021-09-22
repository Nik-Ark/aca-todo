import { useState } from 'react';
import * as axios from 'axios';

function EditModal({ id, todos, setIsEditModalOpen, getTodos }) {
	let todo = todos.find(todo => todo.id === id);
	const [title, setTitle] = useState(todo.title);

	function onTitleChange(event) {
		setTitle(event.target.value);
	}

	function cancelEditing() {
		setIsEditModalOpen(false);
	}

	async function confirmEditing() {
		try {
			const todo = {
				widgetId: 777999,
				taskId: id,
				title,
			};
			const response = await axios.put(
				'https://repetitora.net/api/JS/Tasks',
				todo,
				{ timeout: 5000 }
			);
			console.log('Put request: ', response.data);
			getTodos();
		} catch (err) {
			console.error(err);
		}

		setIsEditModalOpen(false);
	}

	return (
		<div className='modal'>
			<h3>Edit your Task:</h3>
			<textarea required value={title} onChange={onTitleChange}></textarea>
			<div className='actions'>
				<button className='btn btn--alt' onClick={cancelEditing}>
					Cancel
				</button>
				<button className='btn' onClick={confirmEditing}>
					Edit
				</button>
			</div>
		</div>
	);
}

export default EditModal;
