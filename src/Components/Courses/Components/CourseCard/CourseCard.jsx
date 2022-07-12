import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Button from '../../../../Common/Button/Button';
import { ShowCourse } from '../../../../Constants';
import timeConvert from '../../../../Helpers/getCourseDuration';
import convertDate from '../../../../Helpers/formatCreationDate';
import { getAuthors } from '../../../../Store/Authors/actions';
import './CourseCard.css';

const CourseCard = ({
	id,
	duration,
	creationDate,
	authors,
	title,
	description,
}) => {
	const data = useSelector((state) => state.findAllAuthors);
	const [listAuthor, setListAuthor] = useState();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAuthors());
		setListAuthor(data);
	}, [data, dispatch]);

	const findAuthors = (authors, authorsList) => {
		let text = '';
		for (let i = 0; i < authors?.length; i += 1) {
			for (let j = 0; j < authorsList?.length; j += 1) {
				if (authors[i] === authorsList[j].id) {
					text = `${text} ${authorsList[j].name}`;
				}
			}
		}
		return text;
	};

	const hrsvalue = timeConvert(duration);
	const datevalue = convertDate(creationDate);
	const authorvalue = findAuthors(authors, listAuthor);

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
					<span style={{ paddingLeft: '10px' }}>{hrsvalue}</span>
				</h5>
				<h5 className='mb-4'>
					Created:
					<span style={{ paddingLeft: '10px' }}>{datevalue}</span>
				</h5>
				<div style={{ paddingLeft: '100px', marginBottom: '40px' }}>
					<Button
						text={ShowCourse}
						cls={'btn btn-light'}
						click={() => {
							navigate(`/courseInfo/${id}`);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default React.memo(CourseCard);
