import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Button from '../../Common/Button/Button';
import Input from '../../Common/Input/Input';
import Header from '../Header/Header';
import AuthorItem from './Components/AuthorItem/AuthorItem';
import Duration from './Components/Duration/Duration';
import timeConvert from '../../Helpers/getCourseDuration';
import { CreateAuthor, CreateCourseBtn } from '../../Constants.js';
import { AddCourse } from '../../Store/Courses/actions';
import { AddAuthors } from '../../Store/Authors/actions';
import './CreateCourse.css';

const CreateCourse = () => {
	const data = useSelector((state) => state.authorReducer);
	const [durationInHrs, setDurationInHrs] = useState(0);
	const [availableAuthors, setAvailableAuthors] = useState([]);
	const [selectedAuthor, setSelectedAuthor] = useState([]);
	const [courseDetails, setCourseDetails] = useState({
		id: '',
		title: '',
		description: '',
		creationDate: '',
		duration: 0,
		authors: [],
	});
	const [authorDetail, setAuthorDetail] = useState({
		name: '',
		id: '',
	});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		setAvailableAuthors(data);
		let date = new Date();
		let authId = [];
		selectedAuthor.map((item) => authId.push(item.id));
		setCourseDetails((preval) => {
			return {
				...preval,
				creationDate: `${date.getDate()}/${
					date.getMonth() + 1
				}/${date.getFullYear()}`,
				authors: authId,
				id: uuidv4(),
			};
		});
	}, [data, dispatch, selectedAuthor]);

	const selectAuthor = (e) => {
		console.log(availableAuthors);
		console.log(data);
		let newAuthors = availableAuthors.filter((item) => item.id === e.target.id);
		setSelectedAuthor((preval) => {
			return [...preval, ...newAuthors];
		});
		console.log(selectedAuthor);
		setAvailableAuthors((preval) => {
			return preval.filter((item) => item.id !== e.target.id);
		});
	};

	const deselectAuthors = (e) => {
		let newAuthors = selectedAuthor.filter((item) => item.id === e.target.id);
		setAvailableAuthors((preval) => {
			return [...preval, ...newAuthors];
		});
		setSelectedAuthor((preval) => {
			return preval.filter((item) => item.id !== e.target.id);
		});
	};

	const createCourseFunction = () => {
		console.log(courseDetails);
		if (
			courseDetails.title === '' ||
			courseDetails.description === '' ||
			courseDetails.id === '' ||
			courseDetails.duration === '' ||
			courseDetails.authors.length === 0
		) {
			alert('Please! fil in all fields');
		} else {
			dispatch(AddCourse(courseDetails));
			console.log('Done');
			navigate('/courses');
		}
	};

	const addNewAuthor = () => {
		if (authorDetail.name !== '') {
			dispatch(AddAuthors(authorDetail));
			setAvailableAuthors(
				data.filter((item) => !selectedAuthor.includes(item))
			);
			setAuthorDetail({ name: '', id: '' });
		}
	};

	const handleCourseDetails = (e) => {
		setCourseDetails({
			...courseDetails,
			[e.target.name]: e.target.value,
		});
		if (e.target.name === 'duration') {
			setDurationInHrs(timeConvert(e.target.value));
		}
	};

	const handleAuthorDetails = (e) => {
		setAuthorDetail({ name: e.target.value, id: uuidv4() });
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
							<Input
								placeholder='Enter Title'
								name='title'
								id='title'
								onChange={handleCourseDetails}
							/>
						</div>
					</div>
					<div className='col-6 mt-3'>
						<div style={{ float: 'right', marginTop: '45px' }}>
							<Button
								text={CreateCourseBtn}
								cls={'btn btn-light'}
								click={createCourseFunction}
							/>
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
								name='description'
								style={{ height: '100px', width: '100%' }}
								onChange={handleCourseDetails}
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
							name='name'
							id='name'
							width='50%'
							onChange={handleAuthorDetails}
						/>
						<div className='mt-4' style={{ textAlign: 'center' }}>
							<Button
								text={CreateAuthor}
								cls={'btn btn-light'}
								click={addNewAuthor}
							/>
						</div>
						<Duration
							handleCourseDetailsChange={handleCourseDetails}
							courseDetails={courseDetails}
							durationInHrs={durationInHrs}
						/>
					</div>
					<div className='col-6 mt-3'>
						<h4 className='mb-3' style={{ textAlign: 'center' }}>
							Authors
						</h4>
						{data.map((item) => {
							return (
								<AuthorItem
									name={item.name}
									id={item.id}
									key={item.id}
									text={'Add Author'}
									buttonFunction={selectAuthor}
								/>
							);
						})}
						<h4 className='mt-3' style={{ textAlign: 'center' }}>
							Course Authors
						</h4>
						{selectedAuthor.length === 0 && (
							<p
								className='mx-auto text-danger'
								style={{ width: 'fit-content' }}
							>
								Author list is empty
							</p>
						)}

						{selectedAuthor.length !== 0 &&
							selectedAuthor.map((author) => {
								return (
									<AuthorItem
										key={author.id}
										id={author.id}
										name={author.name}
										text={'Delete Author'}
										buttonFunction={deselectAuthors}
									/>
								);
							})}
					</div>
				</div>
			</div>
		</>
	);
};

export default CreateCourse;
