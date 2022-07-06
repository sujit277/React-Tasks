import React from 'react';
import Button from '../../../../Common/Button/Button';
import { AddAuthor } from '../../../../Constants';

function AuthorItem(props) {
	return (
		<div className='row mt-3'>
			<div className='col' style={{ paddingLeft: '50px' }}>
				<h5 style={{ float: 'left' }}>{props.name}</h5>
				<div style={{ float: 'right', paddingRight: '80px' }}>
					<Button text={AddAuthor} cls={'btn btn-light'} />
				</div>
			</div>
		</div>
	);
}

export default AuthorItem;
