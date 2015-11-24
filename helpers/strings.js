'use strict';

module.exports = {
	capitalize(string) {
		return string.replace(/\w\S*/g, txt => {
			txt = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			return txt;
		});
	}
};
