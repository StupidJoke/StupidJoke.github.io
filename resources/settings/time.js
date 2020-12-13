globalThis.__time_settings__ = {
	'use': true,
	'your_time_scheme':'{hour_24}!:!{minutes}',
	'clock_time_scheme': '{hour_24}!:!{minutes}',
	'history_time_scheme': '{year_4}!.!{month_number}!.!{date_month}! !{hour_24}!:!{minutes}!.!{seconds}! !{milliseconds}'
};

if (__time_settings__['use'] !== true) {
	throw new Error('!__time__(settings)');
}

function complement_time(time) {
	return complement(2, 'left', '0', time);
}

globalThis.TIME_SCHEMES = {
	'year_4': () => {return new Date().getFullYear();},
	'year_UTC_4': () => {return new Date().getUTCFullYear();},
	'year_2': () => {return parseInt((new Date().getFullYear()).toString().slice(0, 2));},
	'year_UTC_2': () => {return parseInt((new Date().getUTCFullYear()).toString().slice(0, 2));},
	'month_number': () => {return complement_time(new Date().getMonth() + 1);},
	'month_UTC_number': () => {return complement_time(new Date().getUTCMonth() + 1);},
	'month_string': () => {return __phrases__['month_' + (new Date().getMonth() + 1)];},
	'month_UTC_string': () => {return __phrases__['month_' + (new Date().getUTCMonth() + 1)];},
	'month_String': () => {return __phrases__['Month_' + (new Date().getMonth() + 1)];},
	'month_UTC_String': () => {return __phrases__['Month_' + (new Date().getUTCMonth() + 1)];},
	'date_month': () => {return complement(2, 'left', '0', new Date().getDate());},
	'date_UTC_month': () => {return complement(2, 'left', '0', new Date().getUTCDate());},
	'date_week_number': () => {return complement(2, 'left', '0', new Date().getDay());},
	'date_UTC_week_number': () => {return complement(2, 'left', '0', new Date().getUTCDay());},
	'date_week_string': () => {return __phrases__['week_day_' + new Date().getDay()];},
	'date_week_String': () => {return __phrases__['Week_day_' + new Date().getDay()];},
	'date_UTC_week_String': () => {return __phrases__['Week_day_' + new Date().getUTCDay()];},
	'date_UTC_week_string': () => {return __phrases__['week_day_' + new Date().getUTCDay()];},
	'hour_24': () => {return complement_time(new Date().getHours());},
	'hour_UTC_24': () => {return complement_time(new Date().getUTCHours());},
	'hour_12': () => {return new Date().getHours() % 12 + [' p.m.', ' a.m.'][parseInt(new Date().getHours() / 12)];},
	'hour_UTC_12': () => {return new Date().getUTCHours() % 12 + [' p.m.', ' a.m.'][parseInt(new Date().getUTCHours() / 12)];},
	'minutes': () => {return complement_time(new Date().getMinutes());},
	'minutes_UTC': () => {return complement_time(new Date().getUTCMinutes());},
	'seconds': () => {return complement_time(new Date().getUTCSeconds());},
	'seconds_UTC': () => {return complement_time(new Date().getUTCSeconds());},
	'milliseconds': () => {return new Date().getMilliseconds();},
	'milliseconds_UTC': () => {return new Date().getUTCMilliseconds();}
};