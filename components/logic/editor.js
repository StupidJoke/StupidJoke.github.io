if (__editor_settings__['use'] !== true) {
	throw new Error('!__editor__');
}

class Editor {
	constructor () {

	}

}

globalThis.__editor__ = new Editor ();