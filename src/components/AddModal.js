import { useState } from 'react';
import * as axios from 'axios';

function AddModal({ setIsAddModalOpen, getTodos }) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [isPending, setIsPending] = useState(false);

	function onTitleChange(event) {
		setTitle(event.target.value);
	}

	function onDescriptionChange(event) {
		setDescription(event.target.value);
	}

	function cancelAddition() {
		setIsAddModalOpen(false);
	}

	async function confirmAddition() {
		setIsPending(true);
		const todo = {
			widgetId: 777999,
			title,
			description,
		};
		try {
			const response = await axios.post(
				'https://repetitora.net/api/JS/Tasks',
				todo,
				{ timeout: 3000 }
			);
			setIsPending(false);
			console.log('Post request: ', response.data);
			getTodos();
		} catch (err) {
			console.error(err);
		}
		setIsAddModalOpen(false);
	}

	return (
		<div className='modal'>
			<h2>Create your new Task</h2>
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
					<button className='btn btn--alt' onClick={cancelAddition}>
						Cancel
					</button>
				)}

				{!isPending && (
					<button className='btn' onClick={confirmAddition}>
						Create
					</button>
				)}
				{isPending && (
					<button className='btn btn--pending' disabled>
						Creating Task now
					</button>
				)}
			</div>
		</div>
	);
}

export default AddModal;
