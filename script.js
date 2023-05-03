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
'<a href="https://github.com/whiterabbit8/virtual-keyboard/pull/2">Link to Pull Request</a><br>Sorry for that, I was exausted and innatentive';
document.body.append(p);

function highlightKey(event) {
  const keyDiv = document.querySelectorAll('.key');

  for (let i = 0; i < keyDiv.length; i++) {
    if (event.code === KEYS[i].code) {
      if (event.type === 'keydown') {
        event.preventDefault();
        keyDiv[i].classList.add('pressed');
      } else if (event.type === 'keyup') {
        keyDiv[i].classList.remove('pressed');
      }
    }
  }
}

document.addEventListener('keydown', (event) => {
  if (event.shiftKey && event.altKey) {
    keyboard.setLang();
    keyboard.showKeys();
  } else if (event.shiftKey) {
    keyboard.showShiftedKeys(event);
  }
  highlightKey(event);
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    keyboard.showShiftedKeys(event);
  }
  highlightKey(event);
});
