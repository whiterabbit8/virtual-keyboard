class Keyboard {
  constructor(keys) {
    this.keys = keys;
    this.lang = this.getLanguage();
  }

  createKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    document.body.append(keyboard);

    this.keys.forEach((item) => {
      const key = document.createElement('div');

      if (item.isSpecial) {
        key.className = `key ${item.class}`;
        key.innerHTML = item.name;
      } else {
        key.className = 'key';
      }

      keyboard.append(key);
    });
  }

  showKeys() {
    const keyDiv = document.querySelectorAll('.key');

    for (let i = 0; i < keyDiv.length; i += 1) {
      if (this.keys[i][this.lang]) {
        keyDiv[i].innerHTML = this.keys[i][this.lang];
      }
    }
  }

  showShiftedKeys(event) {
    const keyDiv = document.querySelectorAll('.key');

    if (event.type === 'keydown') {
      for (let i = 0; i < keyDiv.length; i += 1) {
        if (this.keys[i][`${this.lang}Shift`]) {
          keyDiv[i].innerHTML = this.keys[i][`${this.lang}Shift`];
        }
      }
    } else if (event.type === 'keyup') {
      this.showKeys();
    }
  }

  setLang() {
    this.lang = (this.lang === 'en') ? 'ru' : 'en';
    this.setLanguage(this.lang);
  }

  setLanguage(lang = this.lang) {
    localStorage.setItem('language', lang);
    return this;
  }

  getLanguage() {
    let currLang = 'en';
    if (!localStorage.getItem('language')) {
      this.setLanguage(currLang);
    } else {
      currLang = localStorage.getItem('language');
    }
    return currLang;
  }
}

export default Keyboard;
