import React from 'react';
import CourseCard from './Components/CourseCard/CourseCard';
import { mockedCoursesList } from '../../Constants.js';
import SearchBar from './Components/SearchBar/SearchBar';
import './Courses.css';

function Courses() {
	return (
		<div className='row box3'>
			<div className='col' style={{ padding: '5px 20px' }}>
				<SearchBar />
				{mockedCoursesList.map((item) => (
					<CourseCard
						id={item.id}
						title={item.title}
						description={item.description}
						creationDate={item.creationDate}
						duration={item.duration}
						authors={item.authors}
						key={item.id}
					/>
				))}
			</div>
		</div>
	);
}

export default Courses;
