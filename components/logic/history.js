if (__history_settings__['use'] !== true) {
	throw new Error('!__history__');
}

class History {
	constructor () {

	}

}

globalThis.__history__ = new History ();