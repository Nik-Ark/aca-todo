function Modal({ confirmDeleting, cancelDeleting }) {
	return (
		<div className='modal'>
			<p>Are you sure?</p>
			<button className='btn btn--alt' onClick={cancelDeleting}>
				Cancel
			</button>
			<button className='btn' onClick={confirmDeleting}>
				Confirm
			</button>
		</div>
	);
}

export default Modal;
