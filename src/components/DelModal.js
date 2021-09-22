import { useState } from 'react';
import * as axios from 'axios';

function DelModal({ setIsDelModalOpen, id, getTodos }) {
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
			<h3>Are you sure?</h3>
			<div className='actions'>
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
