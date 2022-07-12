import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Common/Button/Button';
import { Logout } from '../../Constants';

const Header = () => {
	const navigate = useNavigate();

	const logOut = () => {
		alert('You have been Successfully Logout');
		localStorage.setItem('UserName', 'Non');
		navigate('/');
	};

	return (
		<div className='row box1'>
			<div className='col' style={{ padding: '10px 5px' }}>
				<h2 style={{ float: 'left', paddingLeft: '30px' }}>Logo</h2>
				{localStorage.getItem('User') !== 'Non' && (
					<>
						<div style={{ float: 'right', paddingRight: '30px' }}>
							<Button text={Logout} cls={'btn btn-light'} click={logOut} />
						</div>
						<h4 style={{ float: 'right', paddingRight: '30px' }}>
							{localStorage.getItem('User')}
						</h4>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
