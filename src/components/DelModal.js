import * as axios from 'axios';

function DelModal({ setIsDelModalOpen, id, getTodos }) {
	async function confirmDeleting() {
		try {
			const response = await axios.delete(
				`https://repetitora.net/api/JS/Tasks?widgetId=777999&taskId=${id}`
			);
			if (response.status === 200) {
				getTodos();
			} else {
				console.log("Can't delete this Todo");
			}
		} catch (error) {
			console.log(error);
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
