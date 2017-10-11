export const BACKSPACE = 8;
export const TAB = 9;
export const ENTER = 13;
export const CTRL = 17;
export const ALT = 18;
export const ESCAPE = 27;
export const SPACE = 32;
export const LEFT = 37;
export const UP = 38;
export const RIGHT = 39;
export const DOWN = 40;
export const DELETE = 46;

export const F10 = 121;

export const MAC_RIGHT = 93;
export const MAC_LEFT = 91;
export const MAC_FIREFOX = 224;

function isMac() {
	return window.navigator.platform.toLowerCase().indexOf( 'mac' ) !== -1;
}

export function isMetaKey( keyCode ) {
	return isMac()
		// The keyCode depends on the browser and the left/right might be different
		? [ MAC_FIREFOX, MAC_LEFT, MAC_RIGHT ].indexOf( keyCode ) !== -1
		: CTRL;
}
