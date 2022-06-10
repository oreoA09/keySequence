const pressed = [];
const secretCode = 'bosslady';
const image = document.querySelector("img");

window.addEventListener('keyup', (e) => {
//   console.log(e.key);
  pressed.push(e.key);

  //setting the maximum number of characters
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    console.log('DING DING!');
    // cornify_add();
    image.style.display = "block";
  }

  console.log(pressed);
  
});