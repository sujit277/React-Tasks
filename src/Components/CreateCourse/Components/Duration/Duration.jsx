import React from 'react';
import Input from '../../../../Common/Input/Input';

const Duration = (props) => {
	return (
		<>
			<span className='mb-3'>
				<h4 className='mx-auto' style={{ width: 'fit-content' }}>
					Duration
				</h4>
				<label className='d-flex' htmlFor='createAuthor'>
					Duration
				</label>
				<Input
					placeholder='Enter Duration in minutes...'
					name={'duration'}
					id={'duration'}
					onChange={props.handleCourseDetailsChange}
				/>
				<h5>
					Duration : <span className='fs-3'>{props.durationInHrs}</span>
				</h5>
			</span>
		</>
	);
};

export default React.memo(Duration);
