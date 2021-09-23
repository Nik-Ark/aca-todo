import { useState } from 'react';
import * as axios from 'axios';

function EditModal({ id, todos, setIsEditModalOpen, getTodos }) {
	let todo = todos.find(todo => todo.id === id);

	const [title, setTitle] = useState(todo.title);
	const [description, setDescription] = useState(todo.description);
	const [isPending, setIsPending] = useState(false);

	function onTitleChange(event) {
		setTitle(event.target.value);
	}

	function onDescriptionChange(event) {
		setDescription(event.target.value);
	}

	function cancelEditing() {
		setIsEditModalOpen(false);
	}

	async function confirmEditing() {
		setIsPending(true);
		const todo = {
			widgetId: 777999,
			taskId: id,
			title,
			description,
		};
		try {
			const response = await axios.put(
				'https://repetitora.net/api/JS/Tasks',
				todo,
				{ timeout: 5000 }
			);
			setIsPending(false);
			console.log('Put request: ', response.data);
			getTodos();
		} catch (err) {
			console.error(err);
		}

		setIsEditModalOpen(false);
	}

	return (
		<div className='modal'>
			<h2>Edit your Task</h2>
			<h3>Title: </h3>
			<input type='text' required value={title} onChange={onTitleChange} />
			<h3>Description:</h3>
			<textarea
				required
				value={description}
				onChange={onDescriptionChange}
			></textarea>
			<div className='actions'>
				{!isPending && (
					<button className='btn btn--alt' onClick={cancelEditing}>
						Cancel
					</button>
				)}

				{!isPending && (
					<button className='btn' onClick={confirmEditing}>
						Edit
					</button>
				)}
				{isPending && (
					<button className='btn btn--pending' disabled>
						Editing Task now
					</button>
				)}
			</div>
		</div>
	);
}

export default EditModal;
