import KEYS from './keys.js';
import Keyboard from './keyboard.js';

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.setAttribute('cols', '65');
textarea.setAttribute('rows', '10');
document.body.append(textarea);

const keyboard = new Keyboard(KEYS);

keyboard.createKeyboard();
keyboard.showKeys();

const p = document.createElement('p');
p.className = 'p';
p.innerHTML = 'Keyboard developed in Windows<br>For language switch use leftAlt + leftShift<br><br><br>' +
'<a href="https://github.com/whiterabbit8/virtual-keyboard/pull/1">Link to Pull Request</a><br>Sorry for that, I was exausted and innatentive';
document.body.append(p);


document.addEventListener('keydown', (event) => {
  if (event.shiftKey && event.altKey) {
    keyboard.setLang();
    keyboard.showKeys();
  }
})
