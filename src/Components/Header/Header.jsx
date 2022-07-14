import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Common/Button/Button';
import { Logout } from '../../Constants';
import { delLoginData } from '../../Store/User/actions';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const loginData = useSelector((state) => state.userReducer);

	const logOut = () => {
		alert('You have been Successfully Logout');
		dispatch(delLoginData());
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		if (!localStorage.getItem('token')) {
			navigate('/');
		}
	};

	return (
		<div className='row box1'>
			<div className='col' style={{ padding: '10px 5px' }}>
				<h2 style={{ float: 'left', paddingLeft: '30px' }}>Logo</h2>
				<>
					<div style={{ float: 'right', paddingRight: '30px' }}>
						<Button text={Logout} cls={'btn btn-light'} click={logOut} />
					</div>
					<h4 style={{ float: 'right', paddingRight: '30px' }}>
						{loginData.name}
					</h4>
				</>
			</div>
		</div>
	);
};

export default Header;
