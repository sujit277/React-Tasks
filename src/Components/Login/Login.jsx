import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Button from '../../Common/Button/Button';
import Input from '../../Common/Input/Input';
import { addLoginData } from '../../Store/User/actions';

const Login = () => {
	const [Data, setData] = useState({
		email: '',
		password: '',
	});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleInput = (event) => {
		setData({ ...Data, [event.target.name]: event.target.value });
	};

	const login = () => {
		axios.post('http://localhost:4000/login', Data).then((res) => {
			console.log(res.data);
			if (res.data.successful === true) {
				alert('User Logined Successfully');
				const userdata = {
					isAuth: true,
					name: res.data.user.name,
					email: res.data.user.email,
					token: res.data.result,
				};
				dispatch(addLoginData(userdata));
				navigate('/courses');
			} else {
				navigate('/');
			}
		});
	};

	return (
		<>
			<div className='container-fluid' style={{ padding: '0px 0px' }}>
				<div className='row box1'>
					<div className='col' style={{ padding: '10px 5px' }}>
						<h2 style={{ float: 'left', paddingLeft: '30px' }}>Logo</h2>
					</div>
				</div>
				<div
					className='row box11'
					style={{ height: '600px', display: 'flex', alignItems: 'center' }}
				>
					<div className='col-4 mx-auto mt-5'>
						<h1 style={{ textAlign: 'center' }}>Login</h1>
						<div className='mb-3'>
							<label htmlFor='email' className='htmlForm-label'>
								Email
							</label>
							<Input
								placeholder={'Enter Email'}
								name={'email'}
								id={'email'}
								onChange={(event) => {
									handleInput(event);
								}}
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='password' className='htmlForm-label'>
								Password
							</label>
							<Input
								placeholder={'Enter Password'}
								name={'password'}
								id={'password'}
								onChange={(event) => {
									handleInput(event);
								}}
							/>
						</div>
						<div className='mb-3' style={{ textAlign: 'center' }}>
							<Button text='Login' cls={'btn btn-light'} click={login} />
						</div>
						<div style={{ textAlign: 'center' }}>
							if you have not an Account you can{' '}
							<Button
								text={'Regitseration'}
								cls={'btn btn-link'}
								click={() => {
									navigate('/registeration');
								}}
							></Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
