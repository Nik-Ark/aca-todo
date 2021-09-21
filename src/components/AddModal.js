function AddModal({ setIsAddModalOpen }) {
	function cancelAddition() {
		setIsAddModalOpen(false);
	}

	return (
		<div className='modal'>
			<h3>Create your new Task</h3>
			<div className='actions'>
				<button className='btn btn--alt' onClick={cancelAddition}>
					Cancel
				</button>
				<button className='btn'>Confirm</button>
			</div>
		</div>
	);
}

export default AddModal;
