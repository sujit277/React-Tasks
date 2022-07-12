import React from 'react';
import Button from '../../../../Common/Button/Button';

const AuthorItem = (props) => {
	return (
		<div className='row mt-3'>
			<div className='col' style={{ paddingLeft: '50px' }}>
				<h5 style={{ float: 'left' }}>{props.name}</h5>
				<div style={{ float: 'right', paddingRight: '80px' }}>
					<Button
						text={props.text}
						cls={'btn btn-light'}
						click={props.buttonFunction}
						id={props.id}
					/>
				</div>
			</div>
		</div>
	);
};

export default React.memo(AuthorItem);
