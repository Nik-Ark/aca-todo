function Todo({ title, description, id, editTodo, deleteTodo }) {
	function editHandler() {
		editTodo(id);
	}

	function deleteHandler() {
		deleteTodo(id);
	}

	return (
		<div className='card'>
			<h2>{title}</h2>
			<h3>{description}</h3>
			<div className='actions'>
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
