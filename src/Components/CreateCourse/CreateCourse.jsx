import React from 'react';
import Button from '../../Common/Button/Button';
import Input from '../../Common/Input/Input';
import Header from '../Header/Header';
import AuthorItem from './Components/AuthorItem/AuthorItem';
import './CreateCourse.css';
import {
	mockedAuthorsList,
	CreateAuthor,
	CreateCourseBtn,
} from '../../Constants.js';

const CreateCourse = () => {
	const Author = (item) => {
		return <AuthorItem name={item.name} id={item.id} key={item.id} />;
	};
	return (
		<>
			<Header />
			<div className='box5'>
				<div className='row box7 mt-3'>
					<div className='col-6 mt-3 box6'>
						<div>
							<label htmlFor='title' className='htmlForm-label'>
								Title
							</label>
							<Input placeholder='Enter Title' name='title' id='title' />
						</div>
					</div>
					<div className='col-6 mt-3'>
						<div style={{ float: 'right', marginTop: '45px' }}>
							<Button text={CreateCourseBtn} cls={'btn btn-light'} />
						</div>
					</div>
					<label htmlFor='description' className='htmlForm-label'>
						Description
					</label>
					<div className='col-12 box6'>
						<div className='htmlForm-floating'>
							<textarea
								className='htmlForm-control'
								placeholder='Enter Description'
								id='description'
								style={{ height: '100px', width: '100%' }}
							/>
						</div>
					</div>
				</div>
				<div className='row box8 mt-3 mb-3'>
					<div className='col-6 mt-4' style={{ marginBottom: '150px' }}>
						<h4 style={{ textAlign: 'center' }}>Add author</h4>
						<label htmlFor='authorName' className='htmlForm-label'>
							Author Name
						</label>
						<Input
							placeholder='Enter Author Name'
							name='authorName'
							id='authorName'
							width='50%'
						/>
						<div className='mt-4' style={{ textAlign: 'center' }}>
							<Button text={CreateAuthor} cls={'btn btn-light'} />
						</div>

						<h4 style={{ textAlign: 'center', marginTop: '90px' }}>Duration</h4>
						<label htmlFor='authorName' className='htmlForm-label'>
							Duration
						</label>
						<Input
							placeholder='Enter Duration in Mins'
							name='authorName'
							id='authorName'
							width='50%'
						/>
						<h2 className='mt-4'>Duration: 00:00 hours</h2>
					</div>
					<div className='col-6 mt-3'>
						<h4 className='mb-3' style={{ textAlign: 'center' }}>
							Authors
						</h4>
						{mockedAuthorsList.map(Author)}
						<h4 className='mt-3' style={{ textAlign: 'center' }}>
							Course Authors
						</h4>
						<h6 style={{ textAlign: 'center' }}>Author List is Empty</h6>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreateCourse;
