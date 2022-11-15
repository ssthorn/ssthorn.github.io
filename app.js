///////////////////////////custom cursor stuff//////


//////////////////////////////end custom cursor stuff//////

/////////////////////////////color stuff//
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 


// document.addEventListener("mouseover", function(){
//   document.body.style.backgroundColor = randomColor();
// });

// document.querySelector('').addEventListener('mouseover', event => {
//       event.target.style.color = randomColor();

document.getElementById('name').addEventListener('mouseover', event => {
  event.target.style.color = randomColor();
});
document.getElementById('name').addEventListener('click', event => {
  event.target.style.color = randomColor();
});

document.getElementById('square').addEventListener('mouseover', event => {
  event.target.style.background = randomColor();
});
document.getElementById('square').addEventListener('click', event => {
  event.target.style.background = randomColor();
});
document.getElementById('main').addEventListener('click', event => {
  event.target.style.background = randomColor();
});

const myName = document.getElementById('name');
const theSquare = document.getElementById('square');


function getColor(){
  let nameSquareColor = (("name color: " + myName.style.color) + ("square color: " + theSquare.style.background));
  
  console.log(nameSquareColor)
}
/////////////////////////////end color stuff//







