import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateCourse from './Components/CreateCourse/CreateCourse';
import Home from './Components/Home/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/createCourse' element={<CreateCourse />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
