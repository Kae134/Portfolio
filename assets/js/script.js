let cursor = document.querySelector(".cursor");
let cursor_background = document.querySelector(".cursor-background");

let link = document.querySelector(".about-link")
let arrow = document.querySelector(".arrow")



document.body.addEventListener("mousemove", function(e) {
  function move(ele) {
    ele.style.left = e.clientX + "px";
    ele.style.top = e.clientY + "px";
  }  

  function toggle_link_about(ele) {
    if (ele === true) {
        link.classList.add("open");
        arrow.classList.add("slidein");
    } else {
        link.classList.remove("open");
        arrow.classList.remove("slidein");
    }
  }

  move(cursor)
  move(cursor_background)

  let elementMouseIsOver = document.elementFromPoint(e.clientX, e.clientY);
  try { 
    if (elementMouseIsOver.className.includes("link")) {
      if (elementMouseIsOver.className.includes("about-link")) {
        toggle_link_about(true)
      }
      cursor.classList.add('hover-cursor')
    } else {
      cursor.classList.remove('hover-cursor')
      toggle_link_about(false)
    } } catch (e) {
      console.log()
    }
});









// Fonction pour inverser une couleur en haxadecimal
//
// function invertColor(hex) {
//     console.log(parseInt(hex[1], 16))
//     if (hex.indexOf('#') === 0) {
//         hex = hex.slice(1);
//     }
//     var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
//         g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
//         b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
//     // Concaténer et retourner le résultat
//     return '#' + r + g + b;
// }