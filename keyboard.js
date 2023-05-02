//import keys from './keys.js';

class Keyboard {
  constructor(keys) {
    this.keys = keys;
    this.lang = 'en';
  }

  createKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    document.body.append(keyboard);

    this.keys.forEach(item => {
      const key = document.createElement('div');

      if (item.isSpecial) {
        key.className = 'key ' + item.class;
        key.innerHTML = item.name;
      } else {
        key.className = 'key';
        key.innerHTML = item[this.lang];
      }

      keyboard.append(key);
    })
  }
}

export default Keyboard
