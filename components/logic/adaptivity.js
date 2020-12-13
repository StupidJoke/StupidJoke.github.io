if (__adaptivity_settings__['use'] !== true) {
	throw new Error('!__adaptivity__');
}

class Adaptivity {
	constructor () {
		try {
			let ua = navigator.userAgent.toLocaleLowerCase();
			this.device = 'desktop';
			['iphone', 'ipad', 'android'].forEach((os) => {
				if (ua.indexOf(os) != -1) {
					this.device = 'mobile';
				}
			});
		} catch (error) {
			this.device = 'desktop';
			__error__.exception(ERRORS['ADAPTIVITY_DEVICE']);
		}
		this.siteWidth = document.documentElement.clientWidth;
		this.siteHeight = document.documentElement.clientHeight;
		this.deviceWidth = screen.width;
		this.deviceHeight = screen.height;
	}

}

globalThis.__adaptivity__ = new Adaptivity ();