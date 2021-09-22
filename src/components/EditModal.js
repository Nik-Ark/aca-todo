import { useState } from 'react';
import * as axios from 'axios';

function EditModal({ id, todos, setIsEditModalOpen, getTodos }) {
	let todo = todos.find(todo => todo.id === id);
	const [title, setTitle] = useState(todo.title);
	const [isPending, setIsPending] = useState(false);

	function onTitleChange(event) {
		setTitle(event.target.value);
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
			<h3>Edit your Task:</h3>
			<p>Title: </p>
			<input type='text' required value={title} />
			<p>Description</p>
			<textarea required value={title} onChange={onTitleChange}></textarea>
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
