import { useState, useEffect } from 'react';
import * as axios from 'axios';
import Todo from './components/Todo';
import AddModal from './components/AddModal';
import EditModal from './components/EditModal';
import DelModal from './components/DelModal';
import WarnModal from './components/WarnModal';
import Backdrop from './components/Backdrop';
import Footer from './components/Footer';

function App() {
	const [isDelModalOpen, setIsDelModalOpen] = useState(false);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [isWarnModalOpen, setIsWarnModalOpen] = useState(false);
	const [todosState, setTodosState] = useState([]);
	const [currId, setCurrId] = useState(0);

	useEffect(() => getTodos(), []);

	function deleteTodo(id) {
		setCurrId(id);
		setIsDelModalOpen(true);
	}

	function editTodo(id) {
		setCurrId(id);
		setIsEditModalOpen(true);
	}

	/*		CREATE CUSTOM HOOKS FOR WORKING WITH SERVER LATER			*/
	/*	ADD FIXED COMPONENT SHOWS ERROR IF ERROR RETURNED FROM SERVER	*/
	async function getTodos() {
		try {
			const response = await axios.get('https://repetitora.net/api/JS/Tasks', {
				timeout: 3000,
				params: {
					widgetId: 777999,
					count: 21,
				},
			});
			console.log('Server respond: ', response.data);
			setTodosState(response.data);
		} catch (err) {
			console.error(err);
		}
	}

	let todosCmpnts = todosState.map(todo => (
		<Todo
			title={todo.title}
			description={todo.description}
			editTodo={editTodo}
			deleteTodo={deleteTodo}
			id={todo.id}
			key={todo.id}
		/>
	));

	let todosLength = todosCmpnts.length;

	return (
		<div className='container'>
			<div className='my--header'>
				<h1>
					"To do <span>list"</span>
				</h1>
			</div>
			<div className='cards'>
				{isDelModalOpen && (
					<DelModal
						id={currId}
						todos={todosState}
						setIsDelModalOpen={setIsDelModalOpen}
						getTodos={getTodos}
					/>
				)}
				{isAddModalOpen && (
					<AddModal setIsAddModalOpen={setIsAddModalOpen} getTodos={getTodos} />
				)}
				{isEditModalOpen && (
					<EditModal
						id={currId}
						todos={todosState}
						setIsEditModalOpen={setIsEditModalOpen}
						getTodos={getTodos}
					/>
				)}
				{isWarnModalOpen && (
					<WarnModal setIsWarnModalOpen={setIsWarnModalOpen} />
				)}
				{isAddModalOpen && <Backdrop />}
				{isDelModalOpen && <Backdrop />}
				{isEditModalOpen && <Backdrop />}
				{isWarnModalOpen && <Backdrop />}
				{todosCmpnts}
			</div>
			<div className='footer'>
				<Footer
					setIsAddModalOpen={setIsAddModalOpen}
					todosLength={todosLength}
					setIsWarnModalOpen={setIsWarnModalOpen}
				/>
			</div>
		</div>
	);
}

export default App;
