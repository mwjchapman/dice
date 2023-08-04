
function roll(sides) {
  console.log("sides =" + sides);
  let result = Math.floor(Math.random() * (sides)) + 1;
  document.getElementById("demo10").innerText = result;
  
}

