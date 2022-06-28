import React from 'react';
import Button from '../../../../Common/Button/Button';

function AuthorItem(props) {
	return (
		<div className='row mt-3'>
			<div className='col' style={{ paddingLeft: '50px' }}>
				<h5 style={{ float: 'left' }}>{props.name}</h5>
				<div style={{ float: 'right', paddingRight: '80px' }}>
					<Button text='Add Author' />
				</div>
			</div>
		</div>
	);
}

export default AuthorItem;
