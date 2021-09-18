import Todo from './components/Todo';

function App() {
	return (
		<div className='container'>
			<div className='my--header'>
				<h1>To do list</h1>
			</div>
			<div className='cards'>
				<Todo title='First task' />
				<Todo title='Second task' />
				<Todo title='Third task' />
				<Todo title='Fourth task' />
				<Todo title='Fifth task' />
				<Todo title='Sixth task' />
			</div>
		</div>
	);
}

export default App;
