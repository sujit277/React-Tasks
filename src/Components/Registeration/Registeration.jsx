import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../Common/Input/Input';
import Button from '../../Common/Button/Button';
import './Registeration.css';
import { register } from '../../services';

const Registeration = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const navigate = useNavigate();

	const handleInput = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const submitRegister = (formData) => {
		console.log(formData);
		register(formData)
			.then((res) => {
				if (res.status === 201) {
					alert('User Registered Successfully');
					navigate('/');
				} else {
					navigate('/registeration');
				}
			})
			.catch((error) => {
				console.log(error);
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
					style={{ height: '700px', display: 'flex', alignItems: 'center' }}
				>
					<div className='col-4 mx-auto mt-5'>
						<h1 style={{ textAlign: 'center' }}>Registeration</h1>
						<div className='mb-3'>
							<label htmlFor='name' className='htmlForm-label'>
								Title
							</label>
							<Input
								placeholder={'Enter Name'}
								name={'name'}
								id={'name'}
								onChange={(event) => {
									handleInput(event);
								}}
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='email' className='htmlForm-label'>
								Email
							</label>
							<Input
								placeholder='Enter Email'
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
							<Button
								text='Registeration'
								cls={'btn btn-light'}
								click={() => {
									submitRegister(formData);
								}}
							/>
						</div>
						<div style={{ textAlign: 'center' }}>
							if you have an Account you can{' '}
							<Button
								text={'Login'}
								cls={'btn btn-link'}
								click={() => {
									navigate('/');
								}}
							></Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Registeration;
