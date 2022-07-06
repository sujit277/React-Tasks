import { React, useState } from 'react';
import CourseCard from './Components/CourseCard/CourseCard';
import { mockedCoursesList } from '../../Constants.js';
import SearchBar from './Components/SearchBar/SearchBar';
import './Courses.css';

const Courses = () => {
	const [Data, setData] = useState({
		filterword: '',
	});
	const [CourseList, setCourseList] = useState(mockedCoursesList);

	const handleInput = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		console.log(value);
		console.log(name);
		console.log(Data);
		setData({ ...Data, [name]: value });
	};

	const filterCourse = () => {
		setCourseList(
			CourseList.filter((element) => {
				if (
					Data.filterword === element.title ||
					Data.filterword === element.id
				) {
					var result = element;
				}
				return result;
			})
		);
	};
	return (
		<div className='row box3'>
			<div className='col' style={{ padding: '5px 20px' }}>
				<SearchBar
					click={filterCourse}
					onChange={(event) => {
						handleInput(event);
					}}
					name={'filterword'}
					id={'filterword'}
				/>
				{CourseList.map((item) => (
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
};

export default Courses;
