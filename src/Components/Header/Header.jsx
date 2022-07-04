import React from 'react';
import Button from '../../Common/Button/Button';
import './Header.css';
import { Logout } from '../../Constants';
import { useNavigate } from 'react-router-dom';

function Header() {
	const navigate = useNavigate();

	const check = () => {
		if (localStorage.getItem('User') !== 'Non') {
			return (
				<>
					<div style={{ float: 'right', paddingRight: '30px' }}>
						<Button text={Logout} cls={'btn btn-light'} click={logOut} />
					</div>
					<h4 style={{ float: 'right', paddingRight: '30px' }}>
						{localStorage.getItem('User')}
					</h4>
				</>
			);
		} else {
			return null;
		}
	};

	const logOut = () => {
		alert('You have been Successfully Logout');
		localStorage.setItem('UserName', 'Non');
		navigate('/');
	};

	return (
		<div className='row box1'>
			<div className='col' style={{ padding: '10px 5px' }}>
				<h2 style={{ float: 'left', paddingLeft: '30px' }}>Logo</h2>
				{check()}
			</div>
		</div>
	);
}

export default Header;
