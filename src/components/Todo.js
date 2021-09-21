function Todo({ title, id, deleteTodo }) {
	function deleteHandler() {
		deleteTodo(id);
	}

	return (
		<div className='card'>
			<h2>{title}</h2>
			<div className='actions'>
				<button className='btn btn--edit'>Edit</button>
				<button className='btn' onClick={deleteHandler}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default Todo;
