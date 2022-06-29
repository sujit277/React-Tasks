function timeConvert(n) {
	const num = n;
	const hours = num / 60;
	const rhours = Math.floor(hours);
	const minutes = (hours - rhours) * 60;
	const rminutes = Math.round(minutes);

	if (rhours < 10) {
		return `0${rhours}:${rminutes} hours`;
	}
	if (rminutes < 0) {
		return `${rhours}:0${rminutes} hours`;
	}
	if (rhours < 0 && rminutes < 0) {
		return `0${rhours}:0${rminutes} hours`;
	}

	return `${rhours}:${rminutes} hours`;
}

export default timeConvert;
