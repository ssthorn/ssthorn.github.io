// const btn = document.getElementById('btn');
// const link = document.querySelector('link');

// link.addEventListener('click', function onClick(e) {
//   // 👇️ change background color
  
//   document.body.style.backgroundColor = 'salmon';
//   console.log("clicker")
  // 👇️ optionally change text color
//   document.body.style.color = 'white';
  
// });

var button = document.querySelector("button");

button.addEventListener("click", function() {
    const curColour = document.body.style.backgroundColor;
    if (curColour != 'red'){
        document.body.style.backgroundColor = "blue";
    }
    // document.body.style.backgroundColor = curColour === 'red' ? 'blue' : 'red';
});