globalThis.pass = null;

function element(tag, attrs, parent) {
	let elem = document.createElement(tag);
	try {
		for (let attr in attrs) {
			elem[attr] = attrs[attr];
		}
	} catch (error) {
		return __error__.exception('SYNTAX');
	}
	try {
		document.querySelector(parent).appendChild(elem);
	} catch (error) {
		return __error__.exception('SYNTAX');
	}
	return element;
}

function complement(length, side, symbol, variable) {
	if (['left', 'right'].indexOf(side) == -1) {
		return variable;
	}
	try {
		let result = String(variable);
		while (result.length < length) {
			if (side == 'left') {
				result = symbol.concat(result);
			}
			if (side == 'right') {
				result = result.concat(symbol);
			}
		}
		return result;
	} catch (error) {
		__error__.exception('SYNTAX');
		return variable;
	}
}