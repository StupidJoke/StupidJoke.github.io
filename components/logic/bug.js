if (__bug_settings__['use'] !== true) {
	throw new Error('!__bug__');
}

class Bug {
	constructor () {

	}

}

globalThis.__bug__ = new Bug ();