//Method for converting date from one format to another format

const convertDate = (date) => {
	if (!date) {
		return '';
	}
	const datearray = date.split('/');
	const newdate = `${datearray[0]}:${datearray[1]}:${datearray[2]}`;
	return newdate;
};

export default convertDate;
