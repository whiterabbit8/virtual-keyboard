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
      }

      keyboard.append(key);
    })
  }

  showKeys() {
    const keyDiv = document.querySelectorAll('.key');

    for (let i = 0; i < keyDiv.length; i++) {
      if (this.keys[i][this.lang]) {
        keyDiv[i].innerHTML = this.keys[i][this.lang]
      }
    }
  }

  setLang() {
    console.log(this.lang);
    this.lang === 'en' ? this.lang = 'ru' : this.lang = 'en';
  }
}

export default Keyboard
