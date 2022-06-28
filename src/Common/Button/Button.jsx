import React from 'react';

function Button(props) {
	return (
		<button
			style={{ borderColor: 'pink', borderWidth: '2px' }}
			className='btn btn-light'
			onClick={props.click}
		>
			{props.text}
		</button>
	);
}

export default Button;
