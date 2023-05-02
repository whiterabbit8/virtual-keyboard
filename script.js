import KEYS from './keys.js';
import Keyboard from './keyboard.js';

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.setAttribute('cols', '90');
textarea.setAttribute('rows', '10');
document.body.append(textarea);

const keyboard = new Keyboard(KEYS);

keyboard.createKeyboard();