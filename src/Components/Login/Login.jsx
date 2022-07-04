import { React, useState } from 'react';
import Button from '../../Common/Button/Button';
import Input from '../../Common/Input/Input';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
	const [Data, setData] = useState({
		email: '',
		password: '',
	});
	const navigate = useNavigate();

	const handleInput = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		console.log(value);
		console.log(name);
		console.log(Data);
		setData({ ...Data, [name]: value });
	};

	const login = () => {
		console.log(Data);
		axios.post('http://localhost:4000/login', Data).then((res) => {
			console.log(res.data);
			if (res.data.successful === true) {
				alert('User Logined Successfully');
				console.log(res.data.user.name);
				localStorage.setItem('User', res.data.user.name);
				navigate('/courses');
			} else {
				window.location.reload();
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
