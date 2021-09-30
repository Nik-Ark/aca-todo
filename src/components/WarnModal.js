function WarnModal({ setIsWarnModalOpen }) {
	function gotIt() {
		setIsWarnModalOpen(false);
	}

	return (
		<div className='modal modal--warn'>
			<h2 className='line-1'>Tasks quantity exceeded!</h2>
			<h2 className='line-2'>Try to finish some first...</h2>
			<h1 className='line-3'>You can do it!</h1>
			<div className='actions'>
				<button className='btn' onClick={gotIt}>
					Yeah, I got it !
				</button>
			</div>
		</div>
	);
}

export default WarnModal;
