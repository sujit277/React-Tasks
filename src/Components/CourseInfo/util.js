const findAuthors = (authors, authorsList) => {
	let text = '';
	for (let i = 0; i < authors?.length; i += 1) {
		for (let j = 0; j < authorsList?.length; j += 1) {
			if (authors[i] === authorsList[j].id) {
				text = `${text} ${authorsList[j].name}`;
			}
		}
	}
	return text;
};

export { findAuthors };
