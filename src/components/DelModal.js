import * as axios from 'axios';

function DelModal({ setIsDelModalOpen, id, getTodos }) {
	async function confirmDeleting() {
		try {
			const response = await axios.delete(
				'https://repetitora.net/api/JS/Tasks',
				{
					timeout: 3000,
					params: {
						widgetId: 777999,
						taskId: id,
					},
				}
			);
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
				<button className='btn btn--alt' onClick={cancelDeleting}>
					Cancel
				</button>
				<button className='btn' onClick={confirmDeleting}>
					Confirm
				</button>
			</div>
		</div>
	);
}

export default DelModal;
