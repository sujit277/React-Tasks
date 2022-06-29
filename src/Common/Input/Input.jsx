import React from 'react';

function Input(props) {
	return (
		<input
			type='text'
			className='form-control box4'
			id='coursename'
			placeholder={props.placeholder}
			width={props.width}
		/>
	);
}

export default Input;
