import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../Common/Button/Button';
import { Search, AddNewCourse } from '../../../../Constants';
import Input from '../../../../Common/Input/Input';

const SearchBar = (props) => {
	const navigate = useNavigate();
	return (
		<div className='row mt-3 mb-3'>
			<div className='col-7' style={{ display: 'flex' }}>
				<Input
					placeholder={'Enter Course Name or Id'}
					onChange={props.onChange}
					name={props.name}
					id={props.id}
				/>
				<div style={{ marginLeft: '20px' }}>
					<Button text={Search} cls={'btn btn-light'} click={props.click} />
				</div>
			</div>
			<div className='col-5'>
				<div style={{ float: 'right', paddingLeft: '50px' }}>
					<Button
						text={AddNewCourse}
						cls={'btn btn-light'}
						click={() => navigate('/courses/add')}
					/>
				</div>
			</div>
		</div>
	);
};

export default React.memo(SearchBar);
