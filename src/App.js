import { useState } from 'react';
import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	function deleteHandler() {
		// передать setIsModalOpen в пропсах в компоненты и там реализовать ф-ии
		setIsModalOpen(true);
	}

	function closeModal() {
		setIsModalOpen(false);
	}

	function confirmDeleting() {
		setIsModalOpen(false);
	}

	function cancelDeleting() {
		setIsModalOpen(false);
	}

	return (
		<div className='container'>
			<div className='my--header'>
				<h1>To do list</h1>
			</div>
			<div className='cards'>
				{isModalOpen && (
					<Modal
						confirmDeleting={confirmDeleting}
						cancelDeleting={cancelDeleting}
					/>
				)}
				{isModalOpen && <Backdrop closeModal={closeModal} />}
				<Todo title='First task' deleteHandler={deleteHandler} />
				<Todo title='Second task' deleteHandler={deleteHandler} />
				<Todo title='Third task' deleteHandler={deleteHandler} />
				<Todo title='Fourth task' deleteHandler={deleteHandler} />
				<Todo title='Fifth task' deleteHandler={deleteHandler} />
				<Todo title='Sixth task' deleteHandler={deleteHandler} />
			</div>
		</div>
	);
}

export default App;
