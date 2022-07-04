import React from 'react';

function Input(props) {
	return (
		<input
			type='text'
			className='form-control box4'
			style={{ borderWidth: '2px', borderColor: 'orange' }}
			id={props.id}
			name={props.name}
			placeholder={props.placeholder}
			width={props.width}
			onChange={props.onChange}
		/>
	);
}

export default Input;
