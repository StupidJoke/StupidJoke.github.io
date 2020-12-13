if (__filesystem_settings__['use'] !== true) {
	throw new Error('!__filesystem__');
}

class Filesystem {
	constructor () {

	}

}

globalThis.__filesystem__ = new Filesystem ();