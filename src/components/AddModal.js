import { useState } from 'react';
import * as axios from 'axios';

function AddModal({ setIsAddModalOpen, getTodos }) {
	const [title, setTitle] = useState('');
	const [isPending, setIsPending] = useState(false);
	function onTitleChange(event) {
		setTitle(event.target.value);
	}

	function cancelAddition() {
		setIsAddModalOpen(false);
	}

	async function confirmAddition() {
		setIsPending(true);
		const todo = {
			widgetId: 777999,
			title,
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
			<h3>Create your new Task:</h3>
			<textarea required value={title} onChange={onTitleChange}></textarea>
			<div className='actions'>
				{!isPending && (
					<button className='btn btn--alt' onClick={cancelAddition}>
						Cancel
					</button>
				)}

				{!isPending && <button className='btn'>Description</button>}

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
