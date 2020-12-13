if (__error_settings__['use'] !== true) {
	throw new Error('!__error__');
}

class Error {
	constructor () {

	}

}

globalThis.__error__ = new Error ();