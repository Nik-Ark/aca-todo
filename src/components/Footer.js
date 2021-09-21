import { Fragment } from 'react';

function Footer({ setIsAddModalOpen }) {
	function addTodo() {
		setIsAddModalOpen(true);
	}
	return (
		<Fragment>
			<div className='foot--btns'>
				<button className='btn' onClick={addTodo}>
					Add Task
				</button>
				<button className='btn'>Some Action</button>
			</div>
			<div className='links'>
				<a className='link' href=''>
					VK
				</a>
				<a className='link' href=''>
					GITHUB
				</a>
				<a className='link' href=''>
					PET-PROJECTS
				</a>
			</div>
		</Fragment>
	);
}

export default Footer;
