if (__time_settings__['use'] !== true) {
	throw new Error('!__time__');
}

class Time {
	constructor () {

	}

}

globalThis.__time__ = new Time ();