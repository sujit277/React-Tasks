import React from 'react';

function Button(props) {
	return (
		<button className={props.cls} onClick={props.click}>
			{props.text}
		</button>
	);
}

export default Button;
