if (__includer_settings__['use'] !== true) {
	throw new Error('!__includer__');
}

class Includer {
	constructor (async='false', defer='false') {
		this.defer = defer;
		this.async = async;
	}
	script (src, onload=() => {}) {
		return element('script', {
			'src': src,
			'defer': this.defer,
			'async': this.async,
			'onload': onload
		}, 'head');
	}
	list (path, type, script_onload, list_onload, list) {
		try {
			let now = 0;
			let from = list.length;
			for (let i = 0; i < from; i++) {
				this.script(path + list[i] + type, () => {
					now++;
					script_onload();
					if (now >= from) {
						list_onload();
					}
				});
			}
		} catch (error) {
			return __error__.exception(ERRORS['includer_list']);
		}
	}
}

globalThis.__includer__ = new Includer (
	__includer_settings__['defer'],
	__includer_settings__['async']
);