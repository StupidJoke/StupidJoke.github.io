if (__templates_settings__['use'] !== true) {
	throw new Error('!__templates__');
}

class Templates {
	constructor () {

	}

}

globalThis.__templates__ = new Templates ();