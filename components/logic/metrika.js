if (__metrika_settings__['use'] !== true) {
	throw new Error('!__metrika__');
}

class Metrika {
	constructor (
		  method='POST', 
		  type='application/json;charset=utf-8'
		) {
		this.method = method;
		this.type = type;
	}
	query (url, body) {
		fetch(url, {
			method: this.method,
 			headers: {
 			  'Content-Type': this.type
			},
			body: JSON.stringify(body)
		})
    	.then((response) => {
    	    console.log(response);
    	    if (response.ok) {
    	        return response.json();
    	    } else {
    	        console.error('Ошибка HTTP: ' + response.status);
    	    }
    	})
    	.then((data) => {
			console.log(data);
		});
	}
}

globalThis.__metrika__ = new Metrika (
	__metrika_settings__['method'],
	__metrika_settings__['ContentType']
);