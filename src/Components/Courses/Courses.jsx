import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CourseCard from './Components/CourseCard/CourseCard';
import SearchBar from './Components/SearchBar/SearchBar';
import Header from '../Header/Header';
import './Courses.css';

const Courses = () => {
	const course = useSelector((state) => state.courseReducer);
	const loginData = useSelector((state) => state.userDataReducer);
	const [CourseList, setCourseList] = useState([]);
	const [Data, setData] = useState({
		filterword: '',
	});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (loginData.isAuth === false) {
			navigate('/');
		}
		setCourseList(course);
	}, [course, dispatch, loginData, navigate]);

	const handleInput = (event) => {
		setData({ ...Data, [event.target.name]: event.target.value });
	};

	const filterCourse = () => {
		setCourseList(
			CourseList.filter((element) => {
				if (
					element.title.startsWith(Data.filterword) ||
					element.id.startsWith(Data.filterword)
				) {
					var result = element;
				}
				return result;
			})
		);
	};

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
						name={'filterword'}
						id={'filterword'}
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
