if (__time_settings__['use'] !== true) {
	throw new Error('!__time__');
}

class Time {
	constructor(your_time_scheme, clock_time_scheme, history_time_scheme) {
		this.your_time_scheme = your_time_scheme;
		this.clock_time_scheme = clock_time_scheme;
		this.history_time_scheme = history_time_scheme;
		this.stopwatch = new Date().getTime();
	}
	time_scheme(scheme) {
		try {
			scheme = scheme.split('!');
		} catch (error) {
			return __error__.exception(ERRORS['TIME_SCHEME']);
		}
		let result = '';
		for (let i = 0; i < scheme.length; i++) {
			if (scheme[i][0] == '{' && scheme[i][scheme[i].length - 1] == '}') {
				let piece = scheme[i].slice(1, scheme[i].length - 1);
				result += TIME_SCHEMES[piece]();
			}
			else {
				result += scheme[i];
			}
		}
		return result;
	}
	your_time() {
		return this.time_scheme(this.your_time_scheme);
	}
	clock_time() {
		return this.time_scheme(this.clock_time_scheme);
	}
	history_time() {
		return this.time_scheme(this.history_time_scheme);
	}
	start() {
		this.stopwatch = new Date().getTime();
	}
	finish() {
		return new Date().getTime() - this.stopwatch;
	}
}

globalThis.__time__ = new Time(
	__time_settings__['your_time_scheme'],
	__time_settings__['clock_time_scheme'],
	__time_settings__['history_time_scheme']
);