import React from 'react';
import Button from '../../Common/Button/Button';
import './Header.css';
import { Logout } from '../../Constants';

function Header() {
	return (
		<div className='row box1'>
			<div className='col' style={{ padding: '10px 5px' }}>
				<h2 style={{ float: 'left', paddingLeft: '30px' }}>Logo</h2>
				<div style={{ float: 'right', paddingRight: '30px' }}>
					<Button text={Logout} />
				</div>
				<h4 style={{ float: 'right', paddingRight: '30px' }}>Sujit</h4>
			</div>
		</div>
	);
}

export default Header;
