function convertDate(date) {
	const datearray = date.split('/');
	const newdate = `${datearray[0]}:${datearray[1]}:${datearray[2]}`;
	return newdate;
}

export default convertDate;
