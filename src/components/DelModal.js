import { useState } from 'react';
import * as axios from 'axios';

function DelModal({ id, todos, setIsDelModalOpen, getTodos }) {
	let todo = todos.find(todo => todo.id === id);

	const [isPending, setIsPending] = useState(false);

	async function confirmDeleting() {
		setIsPending(true);
		let params = {
			widgetId: 777999,
			taskId: id,
		};
		try {
			const response = await axios.delete(
				'https://repetitora.net/api/JS/Tasks',
				{
					timeout: 3000,
					params,
				}
			);
			setIsPending(false);
			console.log('Deletion request: ', response.data);
			getTodos();
		} catch (err) {
			console.error(err);
		}

		setIsDelModalOpen(false);
	}

	function cancelDeleting() {
		setIsDelModalOpen(false);
	}

	return (
		<div className='modal'>
			<h2>Are you sure?</h2>
			<h3>Confirm deleting: "{todo.title}"</h3>
			<div className='actions delete'>
				{!isPending && (
					<button className='btn btn--alt' onClick={cancelDeleting}>
						Cancel
					</button>
				)}
				{!isPending && (
					<button className='btn' onClick={confirmDeleting}>
						Confirm
					</button>
				)}
				{isPending && (
					<button className='btn btn--pending' disabled>
						Deleting Task now
					</button>
				)}
			</div>
		</div>
	);
}

export default DelModal;
