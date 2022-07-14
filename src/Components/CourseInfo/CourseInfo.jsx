import { React, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import timeConvert from '../../Helpers/getCourseDuration';
import convertDate from '../../Helpers/formatCreationDate';
import Button from '../../Common/Button/Button';
import { findAuthors } from './util';
import { getAuthor } from '../../Store/Authors/actions';
import { getCourse } from '../../Store/Courses/actions';

const CourseInfo = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { Id } = useParams();
	const course = useSelector((state) => state.courseReducer);
	const author = useSelector((state) => state.authorReducer);
	const [courseDetails, setCourseDetails] = useState();

	const hoursvalue = timeConvert(courseDetails?.duration);
	const datevalue = convertDate(courseDetails?.creationDate);
	const authorvalue = findAuthors(courseDetails?.authors, author);

	useEffect(() => {
		dispatch(getAuthor());
		dispatch(getCourse());
		if (!localStorage.getItem('token')) {
			navigate('/');
		}
		setCourseDetails(course.filter((item) => item.id === Id)[0]);
	}, [Id, course, dispatch, navigate]);

	return (
		<>
			<div className='container-fluid' style={{ padding: '0px 0px' }}>
				<div className='row box1'>
					<div className='col' style={{ padding: '10px 5px' }}>
						<h2 style={{ float: 'left', paddingLeft: '30px' }}>Logo</h2>
					</div>
				</div>
				<div className='row box11' style={{ height: '500px' }}>
					<div style={{ display: 'inline', marginTop: '10px' }}>
						<Button
							text={'Back to Courses'}
							cls={'btn btn-light'}
							click={() => {
								navigate('/courses');
							}}
						/>
					</div>
					<h1 style={{ textAlign: 'center' }}>{courseDetails?.title}</h1>
					<div className='col-7 mx-auto'>
						<div style={{ textAlign: 'center', padding: '10px 80px' }}>
							{courseDetails?.description}
						</div>
					</div>
					<div className='col-5'>
						<h4>
							ID: <span>{Id}</span>
						</h4>
						<h4>
							Duration: <span>{hoursvalue}</span>
						</h4>
						<h4>
							Created: <span>{datevalue}</span>
						</h4>
						<h4>
							Authors:<span>{authorvalue}</span>
						</h4>
					</div>
				</div>
			</div>
		</>
	);
};

export default CourseInfo;
