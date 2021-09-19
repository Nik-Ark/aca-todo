function Todo(props) {
	return (
		<div className='card'>
			<h2>{props.title}</h2>
			<div className='actions'>
				<button className='btn' onClick={props.deleteHandler}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default Todo;
