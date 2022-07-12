import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateCourse from './Components/CreateCourse/CreateCourse';
import Registeration from './Components/Registeration/Registeration';
import Login from './Components/Login/Login';
import CourseInfo from './Components/CourseInfo/CourseInfo';
import Courses from './Components/Courses/Courses';

function App() {
	return (
		<>
			{localStorage.setItem('User', 'Non')}
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/courses/add' element={<CreateCourse />} />
					<Route path='/registeration' element={<Registeration />}></Route>
					<Route path='/courses' element={<Courses />}></Route>
					<Route path='/courseInfo/:Id' element={<CourseInfo />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
