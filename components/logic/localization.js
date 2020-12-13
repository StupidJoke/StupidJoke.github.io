if (__localization_settings__['use'] !== true) {
	throw new Error('!__localization__');
}

class Localization {
	constructor () {
		globalThis.lang = window.navigator.language ||
			window.navigator.systemLanguage ||
			window.navigator.userLanguage;
		lang = lang.substr(0, 2).toLowerCase();
		//ru or en
		if (lang === __localization_settings__.russian) {
			//active ru
		} else {
			//active en
		}
	}
}

globalThis.__localization__ = new Localization ();