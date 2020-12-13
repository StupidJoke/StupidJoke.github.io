globalThis.pass = null;

function element(tag, attrs, parent) {
	let elem = document.createElement(tag);
	try {
		for (let attr in attrs) {
			elem[attr] = attrs[attr];
		}
	} catch (error) {
		return __error__.exception(ERRORS['SYNTAX']);
	}
	try {
		document.querySelector(parent).appendChild(elem);
	} catch (error) {
		return __error__.exception(ERRORS['SYNTAX']);
	}
	return element;
}