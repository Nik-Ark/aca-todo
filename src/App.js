import { useState, useEffect } from 'react';
import * as axios from 'axios';
import Todo from './components/Todo';
import DelModal from './components/DelModal';
import AddModal from './components/AddModal';
import Backdrop from './components/Backdrop';
import Footer from './components/Footer';

function App() {
	const [isDelModalOpen, setIsDelModalOpen] = useState(false);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [todosState, setTodosState] = useState([]);
	const [currId, setCurrId] = useState(0);

	useEffect(() => getTodos(), []);

	// async function postTodo(title) {
	// 	try {
	// 		const promise = await axios.post(`https://repetitora.net/api/JS/Tasks`, {
	// 			widgetId: 777999,
	// 			title,
	// 		});
	// 		console.log(promise.data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	// const updateTask = (id, title) => {
	// 	const promise = axios({
	// 		method: 'put',
	// 		url: `https://repetitora.net/api/JS/Tasks`,
	// 		data: {
	// 			widgetId: 777999,
	// 			taskId: id,
	// 			title,
	// 			done,
	// 		},
	// 	});
	// 	return promise.then(response => {
	// 		return response.data;
	// 	});
	// };
	function deleteTodo(id) {
		setCurrId(id);
		setIsDelModalOpen(true);
	}

	async function getTodos() {
		try {
			const response = await axios.get(
				`https://repetitora.net/api/JS/Tasks?widgetId=777999&count=20`
			);
			let todos = response.data;
			console.log(todos);
			setTodosState(todos);
		} catch (err) {
			console.log(err);
		}
	}

	let todosCmpnts = todosState.map(todo => (
		<Todo
			title={todo.title}
			deleteTodo={deleteTodo}
			id={todo.id}
			key={todo.id}
		/>
	));

	return (
		<div className='container'>
			<div className='my--header'>
				<h1>To do list</h1>
			</div>
			<div className='cards'>
				{isDelModalOpen && (
					<DelModal
						id={currId}
						setIsDelModalOpen={setIsDelModalOpen}
						getTodos={getTodos}
					/>
				)}
				{isAddModalOpen && <AddModal setIsAddModalOpen={setIsAddModalOpen} />}
				{isAddModalOpen && <Backdrop />}
				{isDelModalOpen && <Backdrop />}
				{todosCmpnts}
			</div>
			<div className='footer'>
				<Footer setIsAddModalOpen={setIsAddModalOpen} />
			</div>
		</div>
	);
}

export default App;
