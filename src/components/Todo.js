function Todo({ title, id, editTodo, deleteTodo }) {
	function editHandler() {
		editTodo(id);
	}

	function deleteHandler() {
		deleteTodo(id);
	}

	return (
		<div className='card'>
			<h2>{title}</h2>
			<div className='actions'>
				<button className='btn btn--watch'>Watch</button>
				<button className='btn btn--edit' onClick={editHandler}>
					Edit
				</button>
				<button className='btn btn--delete' onClick={deleteHandler}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default Todo;
