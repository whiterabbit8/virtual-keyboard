const KEYS = [
  // 1st row
  {
    code: 'Backquote', en: '`', enShift: '~', ru: 'ё', ruShift: 'Ё',
  }, {
    code: 'Digit1', en: '1', enShift: '!', ru: '1', ruShift: '!',
  }, {
    code: 'Digit2', en: '2', enShift: '@', ru: '2', ruShift: '"',
  }, {
    code: 'Digit3', en: '3', enShift: '#', ru: '3', ruShift: '№',
  }, {
    code: 'Digit4', en: '4', enShift: '$', ru: '4', ruShift: ';',
  }, {
    code: 'Digit5', en: '5', enShift: '%', ru: '5', ruShift: '%',
  }, {
    code: 'Digit6', en: '6', enShift: '^', ru: '6', ruShift: ':',
  }, {
    code: 'Digit7', en: '7', enShift: '&', ru: '7', ruShift: '?',
  }, {
    code: 'Digit8', en: '8', enShift: '*', ru: '8', ruShift: '*',
  }, {
    code: 'Digit9', en: '9', enShift: '(', ru: '9', ruShift: '(',
  }, {
    code: 'Digit0', en: '0', enShift: ')', ru: '0', ruShift: ')',
  }, {
    code: 'Minus', en: '-', enShift: '_', ru: '-', ruShift: '_',
  }, {
    code: 'Equal', en: '=', enShift: '+', ru: '=', ruShift: '+',
  }, {
    code: 'Backspace', isSpecial: true, name: 'backspace', class: 'backspace',
  },

  // 2nd row
  {
    code: 'Tab', isSpecial: true, name: 'tab', class: 'tab',
  }, {
    code: 'KeyQ', en: 'q', enShift: 'Q', ru: 'й', ruShift: 'Й',
  }, {
    code: 'KeyW', en: 'w', enShift: 'W', ru: 'ц', ruShift: 'Ц',
  }, {
    code: 'KeyE', en: 'e', enShift: 'E', ru: 'у', ruShift: 'У',
  }, {
    code: 'KeyR', en: 'r', enShift: 'R', ru: 'к', ruShift: 'К',
  }, {
    code: 'KeyT', en: 't', enShift: 'T', ru: 'е', ruShift: 'Е',
  }, {
    code: 'KeyY', en: 'y', enShift: 'Y', ru: 'н', ruShift: 'Н',
  }, {
    code: 'KeyU', en: 'u', enShift: 'U', ru: 'г', ruShift: 'Г',
  }, {
    code: 'KeyI', en: 'i', enShift: 'I', ru: 'ш', ruShift: 'Ш',
  }, {
    code: 'KeyO', en: 'o', enShift: 'O', ru: 'щ', ruShift: 'Щ',
  }, {
    code: 'KeyP', en: 'p', enShift: 'P', ru: 'з', ruShift: 'З',
  }, {
    code: 'BracketLeft', en: '[', enShift: '{', ru: 'х', ruShift: 'Х',
  }, {
    code: 'BracketRight', en: ']', enShift: '}', ru: 'ъ', ruShift: 'Ъ',
  }, {
    code: 'Backslash', en: '\\', enShift: '|', ru: '\\', ruShift: '/',
  }, {
    code: 'Delete', isSpecial: true, name: 'del', class: 'del',
  },

  // 3rd row
  {
    code: 'CapsLock', isSpecial: true, name: 'capslock', class: 'caps',
  }, {
    code: 'KeyA', en: 'a', enShift: 'A', ru: 'ф', ruShift: 'Ф',
  }, {
    code: 'KeyS', en: 's', enShift: 'S', ru: 'ы', ruShift: 'Ы',
  }, {
    code: 'KeyD', en: 'd', enShift: 'D', ru: 'в', ruShift: 'В',
  }, {
    code: 'KeyF', en: 'f', enShift: 'F', ru: 'а', ruShift: 'А',
  }, {
    code: 'KeyG', en: 'g', enShift: 'G', ru: 'п', ruShift: 'П',
  }, {
    code: 'KeyH', en: 'h', enShift: 'H', ru: 'р', ruShift: 'Р',
  }, {
    code: 'KeyJ', en: 'j', enShift: 'J', ru: 'о', ruShift: 'О',
  }, {
    code: 'KeyK', en: 'k', enShift: 'K', ru: 'л', ruShift: 'Л',
  }, {
    code: 'KeyL', en: 'l', enShift: 'L', ru: 'д', ruShift: 'Д',
  }, {
    code: 'Semicolon', en: ';', enShift: ':', ru: 'ж', ruShift: 'Ж',
  }, {
    code: 'Quote', en: '\'', enShift: '"', ru: 'э', ruShift: 'Э',
  }, {
    code: 'Enter', isSpecial: true, name: 'enter', class: 'enter',
  },

  // 4th row
  {
    code: 'ShiftLeft', isSpecial: true, name: 'shift', class: 'shift shift_left',
  }, {
    code: 'KeyZ', en: 'z', enShift: 'Z', ru: 'я', ruShift: 'Я',
  }, {
    code: 'KeyX', en: 'x', enShift: 'X', ru: 'ч', ruShift: 'Ч',
  }, {
    code: 'KeyC', en: 'c', enShift: 'C', ru: 'с', ruShift: 'С',
  }, {
    code: 'KeyV', en: 'v', enShift: 'V', ru: 'м', ruShift: 'М',
  }, {
    code: 'KeyB', en: 'b', enShift: 'B', ru: 'и', ruShift: 'И',
  }, {
    code: 'KeyN', en: 'n', enShift: 'N', ru: 'т', ruShift: 'Т',
  }, {
    code: 'KeyM', en: 'm', enShift: 'M', ru: 'ь', ruShift: 'Ь',
  }, {
    code: 'Comma', en: ',', enShift: '<', ru: 'б', ruShift: 'Б',
  }, {
    code: 'Period', en: '.', enShift: '>', ru: 'ю', ruShift: 'Ю',
  }, {
    code: 'Slash', en: '/', enShift: '?', ru: '.', ruShift: ',',
  }, {
    code: 'ArrowUp', isSpecial: true, name: '↑', class: 'arrow arrow_up',
  }, {
    code: 'ShiftRight', isSpecial: true, name: 'shift', class: 'shift shift_right',
  },

  // 5th row
  {
    code: 'ControlLeft', isSpecial: true, name: 'ctrl', class: 'ctrl ctrl_left',
  }, {
    code: 'MetaLeft', isSpecial: true, name: 'win', class: 'meta',
  }, {
    code: 'AltLeft', isSpecial: true, name: 'alt', class: 'alt alt_left',
  }, {
    code: 'Space', isSpecial: true, name: ' ', class: 'space',
  }, {
    code: 'AltRight', isSpecial: true, name: 'alt', class: 'alt alt_right',
  }, {
    code: 'ArrowLeft', isSpecial: true, name: '←', class: 'arrow arrow_left',
  }, {
    code: 'ArrowDown', isSpecial: true, name: '↓', class: 'arrow arrow_down',
  }, {
    code: 'ArrowRight', isSpecial: true, name: '→', class: 'arrow arrow_right',
  }, {
    code: 'ControlRight', isSpecial: true, name: 'ctrl', class: 'ctrl ctrl_right',
  },
];

export default KEYS;