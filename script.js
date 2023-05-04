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
p.innerHTML = 'Keyboard developed in Windows<br>For language switch use leftAlt + leftShift<br><br><br>'
+ '<a href="https://github.com/whiterabbit8/virtual-keyboard/pull/2">Link to Pull Request</a><br>Sorry for that, I was exausted and innatentive';
document.body.append(p);

let caps = false;

function switchCapsLock() {
  caps = !caps;
}

function printText(key) {
  if (key.innerHTML.length === 1) {
    if (!caps) {
      textarea.innerHTML += key.innerHTML;
    } else {
      textarea.innerHTML += key.innerHTML.toUpperCase();
    }
  } else if (key.innerHTML === 'backspace') {
    textarea.innerHTML = textarea.innerHTML.slice(0, -1);
  } else if (key.innerHTML === 'enter') {
    textarea.innerHTML += '&#13;&#10;';
  } else if (key.innerHTML === 'tab') {
    textarea.innerHTML += '    ';
  } else if (key.innerHTML === 'capslock') {
    switchCapsLock();
    document.querySelector('.caps').classList.toggle('active');
  }
}

function highlightKey(event) {
  const keyDiv = document.querySelectorAll('.key');

  for (let i = 0; i < keyDiv.length; i += 1) {
    if (event.code === KEYS[i].code) {
      if (event.type === 'keydown') {
        event.preventDefault();
        keyDiv[i].classList.add('pressed');
        printText(keyDiv[i]);
      } else if (event.type === 'keyup') {
        keyDiv[i].classList.remove('pressed');
      }
    }
  }

  const targetKey = event.target.closest('.key');

  if (event.type === 'mousedown') {
    targetKey.classList.add('pressed');
    printText(targetKey);
  } else if (event.type === 'mouseup') {
    keyDiv.forEach((item) => item.classList.remove('pressed'));
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

document.querySelector('.keyboard').addEventListener('mousedown', (event) => {
  highlightKey(event);
});

document.querySelector('.keyboard').addEventListener('mouseup', highlightKey);
