import { React, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockedCoursesList } from '../../Constants';
import { mockedAuthorsList } from '../../Constants';
import timeConvert from '../../Helpers/getCourseDuration';
import convertDate from '../../Helpers/formatCreationDate';
import Button from '../../Common/Button/Button';

const CourseInfo = () => {
	const { Id } = useParams();
	const [data, setData] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		function findCoursebyId() {
			for (let i = 0; i < mockedCoursesList.length; i += 1) {
				if (mockedCoursesList[i].id === Id) {
					setData(mockedCoursesList[i]);
				}
			}
		}
		findCoursebyId();
	}, [Id, data]);

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

	const hrsvalue = timeConvert(data?.duration);
	const datevalue = convertDate(data?.creationDate);
	const authorvalue = findAuthors(data?.authors, mockedAuthorsList);

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
								navigate('/');
							}}
						/>
					</div>
					<h1 style={{ textAlign: 'center' }}>{data?.title}</h1>
					<div className='col-7 mx-auto'>
						<div style={{ textAlign: 'center', padding: '10px 80px' }}>
							{data?.description}
						</div>
					</div>
					<div className='col-5'>
						<h4>
							ID: <span>{Id}</span>
						</h4>
						<h4>
							Duration: <span>{hrsvalue}</span>
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
