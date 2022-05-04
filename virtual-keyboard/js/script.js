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
const LANG_RU = [1040, 1071];
const LANG_ENG = {
  65: "&#65;",
  66: "&#66;",
  67: "&#67;",
  68: "&#68;",
  69: "&#69;",
  70: "&#70;",
  71: "&#71;",
  72: "&#72;",
  73: "&#73;",
  74: "&#74;",
  75: "&#75;",
  76: "&#76;",
  77: "&#77;",
  78: "&#78;",
  79: "&#79;",
  80: "&#80;",
  81: "&#81;",
  82: "&#82;",
  83: "&#83;",
  84: "&#84;",
  85: "&#85;",
  86: "&#86;",
  87: "&#87;",
  88: "&#88;",
  89: "&#89;",
  90: "&#90;",
  226: "&#92;",
  219: "&#91;",
  221: "&#93;", 
  222: "&#39;",
  188: "&#60;",
  190: "&#62;",
  191: "&#47;",
  186: "&#59;",  
  192: {'main': '&#96;', "extra": "&#126;"},
  220: {"main":"&#92;", "extra":"&#124;"},
  49: {"main":"&#49;", "extra":"&#33;"},
  50: {"main":"&#50;", "extra":"&#64;"},
  51: {"main":"&#51;", "extra":"&#35;"},
  52: {"main":"&#52;", "extra":"&#36;"},
  53: {"main":"&#53;", "extra":"&#37;"},
  54: {"main":"&#54;", "extra":"&#94;"},
  55: {"main":"&#55;", "extra":"&#38;"},
  56: {"main":"&#56;", "extra":"&#42;"},
  57: {"main":"&#57;", "extra":"&#40;"},
  48: {"main":"&#48;", "extra":"&#41;"},
  189: {"main":"&#45;", "extra":"&#95;"},
  187: {"main":"&#61;", "extra":"&#43;"}, 
};
const DOUBLE_CONTROLS = [16,17,18];

let body = document.querySelector("body");

document.addEventListener('keydown', keyPressDown);
document.addEventListener('keyup', keyPressUp);

function printText(data) {
    let textarea = document.querySelector('.keyboard__textarea');
    console.log(textarea)
    textarea.value += data; 
}
function keyPressDown(e){
    let keyCode = e.keyCode;
    let keyCodeAdditional = '';
    keyCode = Number(keyCode);
    if(!(keyCode >= 8 && keyCode <= 220)) return;
    e.preventDefault();
    if(DOUBLE_CONTROLS.includes(keyCode)){
        keyCodeAdditional = '.'+e.code.toLowerCase();
        console.log(`.key-code-${keyCode}${keyCodeAdditional}`)
    }
    let keyPressed = body.querySelector(`.key-code-${keyCode}${keyCodeAdditional}`);
  
    if(keyPressed) {
        printText(keyPressed.innerText);
        keyPressed.classList.add('pressed');
    }
}
function keyPressUp(e){
    let keyCode = e.keyCode;
    let keyCodeAdditional = '';
    keyCode = Number(keyCode);
    if(!(keyCode >= 8 && keyCode <= 220)) return;
    if(DOUBLE_CONTROLS.includes(keyCode)){
        keyCodeAdditional = '.'+e.code.toLowerCase();
        console.log(`.key-code-${keyCode}${keyCodeAdditional}`)
    }
    let keyPressed = body.querySelector(`.key-code-${keyCode}${keyCodeAdditional}`);
    if(keyPressed)
    if(keyPressed) keyPressed.classList.remove('pressed');
}

function generateContent() {
  body.insertAdjacentHTML("afterbegin", innerBody);

  let currentLanguage = getCurrentLanguage();
  if (currentLanguage == "en") {
    
  }
  initialLanguage(LANG_ENG);
}
function getCurrentLanguage() {
  //local storage
  return "en";
}
function initialLanguage(obj) {
  let keys = document.querySelectorAll(".alphabet");  
  keys.forEach((key) => {  
    let keycode = key.classList[1];
    keycode = keycode.split('-')[2];
    let value = obj[keycode];

    if( key.classList.contains('functional')){     
       if(key.lastElementChild) key.lastElementChild.innerHTML =  value?.main || '';
       if(key.firstElementChild)key.firstElementChild.innerHTML = value?.extra || '';
    }else{
    key.innerHTML = value || 'null';  }
  });
}
generateContent();
