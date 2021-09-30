import { useState, useEffect, createRef } from 'react';
import * as axios from 'axios';

function AddModal({ setIsAddModalOpen, getTodos }) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [isPending, setIsPending] = useState(false);

	const inputTitleRef = createRef();
	useEffect(() => inputTitleRef.current.focus(), []);

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
			<label for='title'>Title: </label>
			<input
				type='text'
				required
				value={title}
				onChange={onTitleChange}
				ref={inputTitleRef}
				id='title'
			/>
			<label for='description'>Description:</label>
			<textarea
				required
				value={description}
				onChange={onDescriptionChange}
				id='description'
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
