import keys from './keys.js';

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
document.body.append(keyboard);

let lang = 'en';

function showKeyboard(lang) {
  keys.forEach(item => {
    const key = document.createElement('div');

    if (item.isSpecial) {
      key.className = 'key ' + item.class;
      key.innerHTML = item.name;
    } else {
      key.className = 'key';
      key.innerHTML = item[lang];
    }

    keyboard.append(key);
  });
}

showKeyboard(lang);

function showShiftedKeyboard() {
  keys.forEach(item => {
    const key = document.querySelectorAll('.key');

    if (!item.isSpecial) {
      key[keys.indexOf(item)].innerHTML = item[lang + 'Shift'];
    }

  });
}
