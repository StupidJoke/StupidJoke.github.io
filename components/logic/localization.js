if (__localization_settings__['use'] !== true) {
	throw new Error('!__localization__');
}

class Localization {
	constructor (langs) {
		this.langs = langs;
		this.lang = 'en';
		try {
			let lang = window.navigator.language ||
				window.navigator.systemLanguage ||
				window.navigator.userLanguage;
			lang = lang.substr(0, 2).toLowerCase();
			if (this.langs.indexOf(lang) != -1) {
				this.lang = lang;
			}
		} catch (error) {
			return __error__.exception('LANG_DETECT');
		}
	}
}

globalThis.__localization__ = new Localization (__localization_settings__['langs']);