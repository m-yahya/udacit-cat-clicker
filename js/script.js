const kittens = ['kitten1', 'kitten2', 'kitten3', 'kitten4', 'kitten5'];

let main = document.querySelector('.main');
let name = document.querySelector('.cat-name');
for (kitten of kittens) {
  // create a div to hold kitten names
  let elem = document.createElement('div');
  elem.textContent = kitten;
  // add click event
  elem.addEventListener('click', (function() {
    return function() {
      // create an image element
      let catImg = document.createElement("img");
      // add kittens according to name
      main.removeChild(main.firstChild);
      if (elem.innerHTML === kittens[0]) {
        catImg.setAttribute("src", "images/kitten1.jpg");
        main.appendChild(catImg);
        name.textContent = kittens[0];
      }else if (elem.innerHTML === kittens[1]) {
        catImg.setAttribute("src", "images/kitten2.jpg");
        main.appendChild(catImg);
        name.textContent = kittens[1];
      }else if (elem.innerHTML === kittens[2]) {
        catImg.setAttribute("src", "images/kitten3.jpg");
        main.appendChild(catImg);
        name.textContent = kittens[2];
      }else if (elem.innerHTML === kittens[3]) {
        catImg.setAttribute("src", "images/kitten4.jpg");
        main.appendChild(catImg);
        name.textContent = kittens[3];
      }else {
        catImg.setAttribute("src", "images/kitten5.jpg");
        main.appendChild(catImg);
        name.textContent = kittens[4];
      }

    }
  })(kitten));
  document.body.insertBefore(elem, main);
}
