export class Storage {
	static set(item, value, stringify = false) {

		if( stringify ) {
			value = JSON.stringify( value );
		}
		localStorage.setItem(`rtiguru.${item}`,  value);
	}
	static get(item) {
		let _storage = localStorage.getItem(`rtiguru.${item}`);
		return _storage ? JSON.parse(_storage) : _storage;
	}
	static remove(item) {
		localStorage.removeItem(`rtiguru.${item}`);
	}
}