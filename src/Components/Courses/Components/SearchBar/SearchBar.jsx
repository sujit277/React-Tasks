import React from 'react';
import Button from '../../../../Common/Button/Button';
import './SearchBar.css';
import { Search, AddNewCourse } from '../../../../Constants';

import Input from '../../../../Common/Input/Input';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
	const navigate = useNavigate();
	return (
		<div className='row mt-3 mb-3'>
			<div className='col-7' style={{ display: 'flex' }}>
				<Input placeholder='Enter Course Name or Id' />
				<div style={{ marginLeft: '20px' }}>
					<Button text={Search} />
				</div>
			</div>
			<div className='col-5'>
				<div style={{ float: 'right', paddingLeft: '50px' }}>
					<Button text={AddNewCourse} click={() => navigate('/createCourse')} />
				</div>
			</div>
		</div>
	);
}

export default SearchBar;
