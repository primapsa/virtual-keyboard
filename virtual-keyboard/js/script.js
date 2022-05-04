const innerBody = `<div class="wrapper">
<div class="container">
  <div class="keyboard">
    <div class="keyboard__display">
      <textarea class="keyboard__textarea"></textarea>
    </div>
    <div class="keyboard__board">
      <!-- line1 -->
     <div class="keyboard-line ">
      <div class="key key-code-192 alphabet functional">
          <div class="key__functional"></div>
          <div class="key__numbers"></div>
        </div>
        <div class="key key-code-49 alphabet functional">
          <div class="key__functional"></div>
          <div class="key__numbers"></div>
        </div>
        <div class="key key-code-50 alphabet functional">
          <div class="key__functional"></div>
          <div class="key__numbers"></div>
        </div>
        <div class="key key-code-51 alphabet functional">
          <div class="key__functional"></div>
          <div class="key__numbers"></div>
        </div>
        <div class="key key-code-52 alphabet functional">
          <div class="key__functional"></div>
          <div class="key__numbers"></div>
        </div>
        <div class="key key-code-53 alphabet functional">
          <div class="key__functional"></div>
          <div class="key__numbers"></div>
        </div>
        <div class="key key-code-54 alphabet functional">
          <div class="key__functional"></div>
          <div class="key__numbers"></div>
        </div>
        <div class="key key-code-55 alphabet functional">
          <div class="key__functional"></div>
          <div class="key__numbers"></div>
        </div>
        <div class="key key-code-56 alphabet functional">
          <div class="key__functional"></div>
          <div class="key__numbers"></div>
        </div>
        <div class="key key-code-57 alphabet functional">
          <div class="key__functional"></div>
          <div class="key__numbers"></div>
        </div>
        <div class="key key-code-48 alphabet functional">
          <div class="key__functional"></div>
          <div class="key__numbers"></div>
        </div>
        <div class="key key-code-189 alphabet functional">
          <div class="key__functional"></div>
          <div class="key__numbers"></div>
        </div>
        <div class="key key-code-187 alphabet functional">
          <div class="key__functional"></div>
          <div class="key__numbers"></div>
        </div>
        <div class="key key-code-8 control backspace">Backspace</div>
     </div>
      <!-- line2 -->
     <div class="keyboard-line">
      <div class="key key key-code-9 control tab">Tab</div>
      <div class="key key-code-81 alphabet">&#65;</div>
      <div class="key key-code-87 alphabet">B</div>
      <div class="key key-code-69 alphabet">C</div>
      <div class="key key-code-82 alphabet">D</div>
      <div class="key key-code-84 alphabet"></div>
      <div class="key key-code-89 alphabet"></div>
      <div class="key key-code-85 alphabet"></div>
      <div class="key key-code-73 alphabet"></div>
      <div class="key key-code-79 alphabet"></div>
      <div class="key key-code-80 alphabet"></div>
      <div class="key key-code-219 alphabet"></div>
      <div class="key key-code-221 alphabet"></div>
      <div class="key key-code-220 alphabet functional backslash">
      <div class="key__functional"></div>
      <div class="key__numbers"></div>
      </div>
      <div class="key key-code-46 control del">DEL</div>
     </div>
      <!-- line3 -->
    <div class="keyboard-line">
      <div class="key key-code-20 control capslock">Caps Lock</div>
      <div class="key key-code-65 alphabet"></div>
      <div class="key key-code-83 alphabet"></div>
      <div class="key key-code-68 alphabet"></div>
      <div class="key key-code-70 alphabet"></div>
      <div class="key key-code-71 alphabet"></div>
      <div class="key key-code-72 alphabet"></div>
      <div class="key key-code-74 alphabet"></div>
      <div class="key key-code-75 alphabet"></div>
      <div class="key key-code-76 alphabet"></div>
      <div class="key key-code-186 alphabet semicolon"></div>
      <div class="key key-code-222 alphabet quote"></div>
      <div class="key key-code-13 control enter">ENTER</div>
    </div>
      <!-- line4 -->
      <div class="keyboard-line">
        <div class="key key-code-16 control shiftleft">Shift</div>
        <div class="key key-code-226 alphabet intlbackslash"></div>
        <div class="key key-code-90 alphabet"></div>
        <div class="key key-code-88 alphabet"></div>
        <div class="key key-code-67 alphabet"></div>
        <div class="key key-code-86 alphabet"></div>
        <div class="key key-code-66 alphabet"></div>
        <div class="key key-code-78 alphabet"></div>
        <div class="key key-code-77 alphabet"></div>
        <div class="key key-code-188 alphabet comma"></div>
        <div class="key key-code-190 alphabet period"></div>
        <div class="key key-code-191 alphabet slash"></div>
        <div class="key key-code-38 control arrowup">&uarr;</div>
        <div class="key key-code-16 control shiftright">Shift</div>
      </div>
      <!-- line5 -->
      <div class="keyboard-line">
        <div class="key key-code-17 control controlleft">Ctrl</div>
        <div class="key key-code-91 control metaleft">Win</div>
        <div class="key key-code-18 control altleft">Alt</div>
        <div class="key key-code-32 control space"></div>
        <div class="key key-code-18 control altright">Alt</div>
        <div class="key key-code-17 control controlright">Ctrl</div>
        <div class="key key-code-37 control arrowleft">&larr;</div>
        <div class="key key-code-40 control arrowdown">&darr;</div>
        <div class="key key-code-39 control arrowright">&rarr;</div>
      </div>
    </div>
  </div>        
  <div class="info"></div>
</div>
</div>`;
const config = [
    [
      {
        Backquote: {
          en: { lower: "`", upper: "~" },
          ru: { lower: "ё", upper: "Ё" },
        },
      },
      {
        Digit1: {
          en: { lower: "1", upper: "!" },
          ru: { lower: "1", upper: "!" },
        },
      },
      {
        Digit2: {
          en: { lower: "2", upper: "@" },
          ru: { lower: "2", upper: '"' },
        },
      },
      {
        Digit3: {
          en: { lower: "3", upper: "#" },
          ru: { lower: "3", upper: "№" },
        },
      },
      {
        Digit4: {
          en: { lower: "4", upper: "$" },
          ru: { lower: "4", upper: ";" },
        },
      },
      {
        Digit5: {
          en: { lower: "5", upper: "%" },
          ru: { lower: "5", upper: "%" },
        },
      },
      {
        Digit6: {
          en: { lower: "6", upper: "^" },
          ru: { lower: "6", upper: ":" },
        },
      },
      {
        Digit7: {
          en: { lower: "7", upper: "&" },
          ru: { lower: "7", upper: "?" },
        },
      },
      {
        Digit8: {
          en: { lower: "8", upper: "*" },
          ru: { lower: "8", upper: "*" },
        },
      },
      {
        Digit9: {
          en: { lower: "9", upper: "(" },
          ru: { lower: "9", upper: "(" },
        },
      },
      {
        Digit0: {
          en: { lower: "0", upper: ")" },
          ru: { lower: "0", upper: ")" },
        },
      },
      {
        Minus: {
          en: { lower: "-", upper: "_" },
          ru: { lower: "-", upper: "_" },
        },
      },
      {
        Equal: {
          en: { lower: "=", upper: "+" },
          ru: { lower: "=", upper: "+" },
        },
      },
      {
        Backspace: {
          en: { lower: "Backspace", upper: "Backspace" },
          ru: { lower: "Backspace", upper: "Backspace" },
        },
      },
    ],
    [
      {
        Tab: {
          en: { lower: "Tab", upper: "Tab" },
          ru: { lower: "Tab", upper: "Tab" },
        },
      },
      {
        KeyQ: {
          en: { lower: "q", upper: "Q" },
          ru: { lower: "й", upper: "Й" },
        },
      },
      {
        KeyW: {
          en: { lower: "w", upper: "W" },
          ru: { lower: "ц", upper: "Ц" },
        },
      },
      {
        KeyE: {
          en: { lower: "e", upper: "E" },
          ru: { lower: "у", upper: "У" },
        },
      },
      {
        KeyR: {
          en: { lower: "r", upper: "R" },
          ru: { lower: "к", upper: "К" },
        },
      },
      {
        KeyT: {
          en: { lower: "t", upper: "T" },
          ru: { lower: "е", upper: "Е" },
        },
      },
      {
        KeyY: {
          en: { lower: "y", upper: "Y" },
          ru: { lower: "н", upper: "Н" },
        },
      },
      {
        KeyU: {
          en: { lower: "u", upper: "U" },
          ru: { lower: "г", upper: "Г" },
        },
      },
      {
        KeyI: {
          en: { lower: "i", upper: "I" },
          ru: { lower: "ш", upper: "Ш" },
        },
      },
      {
        KeyO: {
          en: { lower: "o", upper: "O" },
          ru: { lower: "щ", upper: "Щ" },
        },
      },
      {
        KeyP: {
          en: { lower: "p", upper: "P" },
          ru: { lower: "з", upper: "З" },
        },
      },
      {
        BracketLeft: {
          en: { lower: "[", upper: "{" },
          ru: { lower: "х", upper: "Х" },
        },
      },
      {
        BracketRight: {
          en: { lower: "]", upper: "}" },
          ru: { lower: "ъ", upper: "Ъ" },
        },
      },
      {
        Backslash: {
          en: { lower: "\\", upper: "/" },
          ru: { lower: "\\", upper: "/" },
        },
      },
      {
        Delete: {
          en: { lower: "Del", upper: "Del" },
          ru: { lower: "Del", upper: "Del" },
        },
      },
    ],
    [
      {
        CapsLock: {
          en: { lower: "CapsLock", upper: "CapsLock" },
          ru: { lower: "CapsLock", upper: "CapsLock" },
        },
      },
      {
        KeyA: {
          en: { lower: "a", upper: "A" },
          ru: { lower: "ф", upper: "Ф" },
        },
      },
      {
        KeyS: {
          en: { lower: "s", upper: "S" },
          ru: { lower: "ы", upper: "Ы" },
        },
      },
      {
        KeyD: {
          en: { lower: "d", upper: "D" },
          ru: { lower: "в", upper: "В" },
        },
      },
      {
        KeyF: {
          en: { lower: "f", upper: "F" },
          ru: { lower: "а", upper: "А" },
        },
      },
      {
        KeyG: {
          en: { lower: "g", upper: "G" },
          ru: { lower: "п", upper: "П" },
        },
      },
      {
        KeyH: {
          en: { lower: "h", upper: "H" },
          ru: { lower: "р", upper: "Р" },
        },
      },
      {
        KeyJ: {
          en: { lower: "j", upper: "J" },
          ru: { lower: "о", upper: "О" },
        },
      },
      {
        KeyK: {
          en: { lower: "k", upper: "K" },
          ru: { lower: "л", upper: "Л" },
        },
      },
      {
        KeyL: {
          en: { lower: "l", upper: "L" },
          ru: { lower: "д", upper: "Д" },
        },
      },
      {
        Semicolon: {
          en: { lower: ";", upper: ":" },
          ru: { lower: "ж", upper: "Ж" },
        },
      },
      {
        Quote: {
          en: { lower: "'", upper: '"' },
          ru: { lower: "э", upper: "Э" },
        },
      },
      {
        Enter: {
          en: { lower: "Enter", upper: "Enter" },
          ru: { lower: "Enter", upper: "Enter" },
        },
      },
    ],
    [
      {
        ShiftLeft: {
          en: { lower: "Shift", upper: "Shift" },
          ru: { lower: "Shift", upper: "Shift" },
        },
      },
      {
        KeyZ: {
          en: { lower: "z", upper: "Z" },
          ru: { lower: "я", upper: "Я" },
        },
      },
      {
        KeyX: {
          en: { lower: "x", upper: "X" },
          ru: { lower: "ч", upper: "Ч" },
        },
      },
      {
        KeyC: {
          en: { lower: "c", upper: "C" },
          ru: { lower: "с", upper: "С" },
        },
      },
      {
        KeyV: {
          en: { lower: "v", upper: "V" },
          ru: { lower: "м", upper: "М" },
        },
      },
      {
        KeyB: {
          en: { lower: "b", upper: "B" },
          ru: { lower: "и", upper: "И" },
        },
      },
      {
        KeyN: {
          en: { lower: "n", upper: "N" },
          ru: { lower: "т", upper: "Т" },
        },
      },
      {
        KeyM: {
          en: { lower: "m", upper: "M" },
          ru: { lower: "ь", upper: "Ь" },
        },
      },
      {
        Comma: {
          en: { lower: ",", upper: "<" },
          ru: { lower: "б", upper: "Б" },
        },
      },
      {
        Period: {
          en: { lower: ".", upper: ">" },
          ru: { lower: "ю", upper: "Ю" },
        },
      },
      {
        Slash: {
          en: { lower: "/", upper: "?" },
          ru: { lower: ".", upper: "," },
        },
      },
      {
        ArrowUp: {
          en: { lower: "&#9650;", upper: "&#9650;" },
          ru: { lower: "&#9650;", upper: "&#9650;" },
        },
      },
      {
        ShiftRight: {
          en: { lower: "Shift", upper: "Shift" },
          ru: { lower: "Shift", upper: "Shift" },
        },
      },
    ],
    [
      {
        ControlLeft: {
          en: { lower: "ctrl", upper: "ctrl" },
          ru: { lower: "ctrl", upper: "ctrl" },
        },
      },
  
      {
        MetaLeft: {
          en: { lower: "Win", upper: "Win" },
          ru: { lower: "Win", upper: "Win" },
        },
      },
      {
        AltLeft: {
          en: { lower: "alt", upper: "alt" },
          ru: { lower: "alt", upper: "alt" },
        },
      },
      {
        Space: {
          en: { lower: " ", upper: " " },
          ru: { lower: " ", upper: " " },
        },
      },
      {
        AltRight: {
          en: { lower: "alt", upper: "alt" },
          ru: { lower: "alt", upper: "alt" },
        },
      },
      {
        ArrowLeft: {
          en: { lower: "&#9668;", upper: "&#9668;" },
          ru: { lower: "&#9668;", upper: "&#9668;" },
        },
      },
      {
        ArrowDown: {
          en: { lower: "&#9660;", upper: "&#9660;" },
          ru: { lower: "&#9660;", upper: "&#9660;" },
        },
      },
      {
        ArrowRight: {
          en: { lower: "&#9658;", upper: "&#9658;" },
          ru: { lower: "&#9658;", upper: "&#9658;" },
        },
      },
      {
        ControlRight: {
          en: { lower: "ctrl", upper: "ctrl" },
          ru: { lower: "ctrl", upper: "ctrl" },
        },
      },
    ],
  ];
//   <div class="keyboard-line">
//         <div class="key key-code-16 control shiftleft">Shift</div>
//         <div class="key key-code-226 alphabet intlbackslash"></div>
//         <div class="key key-code-90 alphabet"></div>
//         <div class="key key-code-88 alphabet"></div>
//         <div class="key key-code-67 alphabet"></div>
//         <div class="key key-code-86 alphabet"></div>
//         <div class="key key-code-66 alphabet"></div>
//         <div class="key key-code-78 alphabet"></div>
//         <div class="key key-code-77 alphabet"></div>
//         <div class="key key-code-188 alphabet comma"></div>
//         <div class="key key-code-190 alphabet period"></div>
//         <div class="key key-code-191 alphabet slash"></div>
//         <div class="key key-code-38 control arrowup">&uarr;</div>
//         <div class="key key-code-16 control shiftright">Shift</div>
//       </div>



class Keyboard{
    constructor(){
        this.current = null;
    }
    initialDom(domContent){
        if(!Array.isArray(domContent) || !domContent.length) throw new DomError('Invalin input data');
        let content = '';
        let keysLine = ''
        domContent.forEach((line) => {
            let content = '';
            line.forEach((node) => {
                let keyName = Object.keys(node)[0];
                let keyLangs = node[keyName];
                 let keyInner = '';              
             
                    for(let lang in keyLangs){
                        keyInner += `<div class="${lang} lower">${keyLangs[lang].lower}</div>
                        <div class="${lang} upper">${keyLangs[lang].upper}</div>`;     
                        
                     }
                     content += `<div class="key ${keyName} alphabet">${keyInner}</div>`;

            })
            keysLine += `<div class="keyboard-line">${content}</div>`; 
        });
        keysLine = `<div class="wrapper">
                        <div class="container">
                            <div class="keyboard">
                                 <div class="keyboard__display">
                                 <textarea class="keyboard__textarea"></textarea>
                                 </div>
                                    <div class="keyboard__board">${keysLine}</div>
                                    </div></div></div>`
        return keysLine;
    }
}
let keyboard = new Keyboard();
let domContent = keyboard.initialDom(config);
let body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', domContent);

































// const DOUBLE_CONTROLS = [16,17,18];

// let body = document.querySelector("body");
// generateContent();

// let keyboard = document.querySelector(".keyboard__board");

// document.addEventListener('keydown', keyPressDown);
// document.addEventListener('keyup', keyPressUp);
// keyboard.addEventListener('mousedown', mouseKeyDown);
// keyboard.addEventListener('mouseup', mouseKeyUp);
// function backlightKey(node){

// }

// function mouseKeyDown(e){    
//     let target = e.target.closest(".key");
//     if(!target) return;
//     target.classList.add('pressed');
//     printText(target);
// }
// function mouseKeyUp(e){    
//     let target = e.target.closest(".key");
//     if(!target) return;
//     target.classList.remove('pressed');
    
// }
// function printText(node) {
//     let textarea = document.querySelector('.keyboard__textarea');
//     let isShiftPresed = getShiftStatus();
//     let nodeValue = node.innerText;
//     if(node.classList.contains("key-code-32")){
//         nodeValue = " ";
        
//     }
//     if(node.classList.contains("tab")){
//         nodeValue = "    ";
         
//     }
//     if(node.classList.contains("alphabet") || node.classList.contains("space") || node.classList.contains("tab")){
//        textarea.value += nodeValue; 
//     }
   
// }
// function getShiftStatus(){

// } 
// function keyPressDown(e){
//     let keyCode = e.keyCode;
//     let keyCodeAdditional = '';
//     keyCode = Number(keyCode);
//     if(!(keyCode >= 8 && keyCode <= 220)) return;
//     e.preventDefault();
//     if(DOUBLE_CONTROLS.includes(keyCode)){
//         keyCodeAdditional = '.'+e.code.toLowerCase();
//         console.log(`.key-code-${keyCode}${keyCodeAdditional}`)
//     }
//     let keyPressed = body.querySelector(`.key-code-${keyCode}${keyCodeAdditional}`);
  
//     if(keyPressed) {
//         printText(keyPressed);
//         keyPressed.classList.add('pressed');
//     }
// }
// function keyPressUp(e){
//     let keyCode = e.keyCode;
//     let keyCodeAdditional = '';
//     keyCode = Number(keyCode);
//     if(!(keyCode >= 8 && keyCode <= 220)) return;
//     if(DOUBLE_CONTROLS.includes(keyCode)){
//         keyCodeAdditional = '.'+e.code.toLowerCase();
//         console.log(`.key-code-${keyCode}${keyCodeAdditional}`)
//     }
//     let keyPressed = body.querySelector(`.key-code-${keyCode}${keyCodeAdditional}`);
//     if(keyPressed)
//     if(keyPressed) keyPressed.classList.remove('pressed');
// }

// function generateContent() {
//   body.insertAdjacentHTML("afterbegin", innerBody);

//   let currentLanguage = getCurrentLanguage();
//   if (currentLanguage == "en") {
    
//   }
//   initialLanguage(LANG_ENG);
// }
// function getCurrentLanguage() {
//   //local storage
//   return "en";
// }
// function initialLanguage(obj) {
//   let keys = document.querySelectorAll(".alphabet");  
//   keys.forEach((key) => {  
//     let keycode = key.classList[1];
//     keycode = keycode.split('-')[2];
//     let value = obj[keycode];

//     if( key.classList.contains('functional')){     
//        if(key.lastElementChild) key.lastElementChild.innerHTML =  value?.main || '';
//        if(key.firstElementChild)key.firstElementChild.innerHTML = value?.extra || '';
//     }else{
//     key.innerHTML = value || 'null';  }
//   });
// }

