import { Fragment } from 'react';

function Footer({ setIsAddModalOpen, todosLength, setIsWarnModalOpen }) {
	function addTodo() {
		if (todosLength >= 9) {
			setIsWarnModalOpen(true);
			return;
		}
		setIsAddModalOpen(true);
	}

	return (
		<Fragment>
			<div className='foot--btns'>
				<button className='btn foot--btn' onClick={addTodo}>
					Add Task
				</button>
				<button className='btn foot--btn'>Some Action</button>
			</div>
			<div className='links'>
				<a
					className='link'
					href='https://vk.com/parenizmetro'
					rel='noreferrer'
					target='_blank'
				>
					VK
				</a>
				<a
					className='link'
					href='https://github.com/Nik-Ark'
					rel='noreferrer'
					target='_blank'
				>
					GITHUB
				</a>
				<a
					className='link'
					href='https://github.com/Nik-Ark/Rday'
					rel='noreferrer'
					target='_blank'
				>
					PET-PROJECTS
				</a>
			</div>
		</Fragment>
	);
}

export default Footer;
