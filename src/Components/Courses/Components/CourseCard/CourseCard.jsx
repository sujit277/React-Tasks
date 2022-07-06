import React from 'react';
import './CourseCard.css';
import Button from '../../../../Common/Button/Button';
import { ShowCourse, mockedAuthorsList } from '../../../../Constants';
import timeConvert from '../../../../Helpers/getCourseDuration';
import convertDate from '../../../../Helpers/formatCreationDate';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({
	id,
	duration,
	creationDate,
	authors,
	title,
	description,
}) => {
	const navigate = useNavigate();

	const findAuthors = (authors, authorsList) => {
		let text = '';
		for (let i = 0; i < authors.length; i += 1) {
			for (let j = 0; j < authorsList.length; j += 1) {
				if (authors[i] === authorsList[j].id) {
					text = `${text} ${authorsList[j].name}`;
				}
			}
		}
		return text;
	};

	const hrsvalue = timeConvert(duration);
	const datevalue = convertDate(creationDate);
	const authorvalue = findAuthors(authors, mockedAuthorsList);

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

export default CourseCard;
