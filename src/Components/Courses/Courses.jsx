import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CourseCard from './Components/CourseCard/CourseCard';
import SearchBar from './Components/SearchBar/SearchBar';
import Header from '../Header/Header';
import { getCourse } from '../../Store/Courses/actions';
import './Courses.css';

const Courses = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const course = useSelector((state) => state.courseReducer);
	const [CourseList, setCourseList] = useState(course);
	const [searchWord, setSearchWord] = useState('');

	const handleInput = (event) => {
		setSearchWord(event.target.value);
	};

	const filterCourse = () => {
		if (searchWord.length !== 0)
			setCourseList(
				course.filter(
					(element) =>
						element.title.startsWith(searchWord) ||
						element.id.startsWith(searchWord)
				)
			);
		if (searchWord.length === 0) {
			console.log(course);
			setCourseList(course);
		}
	};

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			navigate('/');
		}
		dispatch(getCourse());
		setCourseList(course);
	}, [course, dispatch, navigate]);

	return (
		<>
			<Header />
			<div className='row box3'>
				<div className='col' style={{ padding: '5px 20px' }}>
					<SearchBar
						click={filterCourse}
						onChange={(event) => {
							handleInput(event);
						}}
						name={'searchWord'}
						id={'searchWord'}
					/>
					{CourseList.map((item) => (
						<CourseCard
							id={item.id}
							key={item.id}
							title={item.title}
							description={item.description}
							creationDate={item.creationDate}
							duration={item.duration}
							authors={item.authors}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Courses;
