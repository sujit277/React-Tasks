import React from 'react';

const Button = (props) => {
	return (
		<button className={props.cls} onClick={props.click} id={props.id}>
			{props.text}
		</button>
	);
};

export default React.memo(Button);
