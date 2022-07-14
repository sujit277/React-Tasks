import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../Common/Button/Button';
import { ShowCourse, updatebtn, deletebtn } from '../../../../Constants';
import timeConvert from '../../../../Helpers/getCourseDuration';
import convertDate from '../../../../Helpers/formatCreationDate';
import { deleteCourse } from '../../../../Store/Courses/actions';
import { findAuthors } from './util';
import './CourseCard.css';

const CourseCard = ({
	id,
	duration,
	creationDate,
	authors,
	title,
	description,
}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const author = useSelector((state) => state.authorReducer);

	const hoursvalue = timeConvert(duration);
	const datevalue = convertDate(creationDate);
	const authorvalue = findAuthors(authors, author);

	return (
		<div className='row box2 mt-3 mb-3'>
			<div className='col-7' style={{ padding: '10px 25px' }}>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
			<div className='col-5 mt-3'>
				<h5>
					Authors:
					<span style={{ paddingLeft: '10px' }}>{authorvalue}</span>
				</h5>
				<h5>
					Duration:
					<span style={{ paddingLeft: '10px' }}>{hoursvalue}</span>
				</h5>
				<h5 className='mb-4'>
					Created:
					<span style={{ paddingLeft: '10px' }}>{datevalue}</span>
				</h5>
				<div style={{ paddingLeft: '100px', marginBottom: '40px' }}>
					<Button
						text={ShowCourse}
						cls={'btn btn-light mx-2'}
						click={() => {
							navigate(`/courseInfo/${id}`);
						}}
					/>
					<Button
						text={deletebtn}
						cls={'btn btn-light mx-2'}
						click={() => dispatch(deleteCourse(id))}
					/>
					<Button text={updatebtn} cls={'btn btn-light'} />
					<i className='fa-solid fa-circle-trash'></i>
				</div>
			</div>
		</div>
	);
};

export default React.memo(CourseCard);
