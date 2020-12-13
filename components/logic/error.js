if (__error_settings__['use'] !== true) {
	throw new Error('!__error__');
}

class Error {
	constructor () {

	}
	exception (error) {
		try {
			__alert__.set(__phrases__[error]);
		} catch (ops) {
			console.log('!\n'.concat(ops).concat('\n!'));
			console.log(__phrases__[error]);
			console.log(ERRORS[error]);
		}
		return ERRORS[error];
	}
}

globalThis.__error__ = new Error ();