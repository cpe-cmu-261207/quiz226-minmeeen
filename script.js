const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const btn_search  = document.getElementById('search')
const btn_reset = document.getElementById('reset')
const text = document.getElementById('text');

// define more constants and variables here

btn_toggle.onclick = () => {
  const chName = document.getElementById("author");
  if (chName.innerText === "630610768") {
    chName.innerText = "630610768 Sirapat Panyathong";
  } else {
    chName.innerText = "630610768";
  }
}


btn_search.onclick = () => {
  // let num = length.value;
  // let para = document.getElementById('text');
  document.getElementById('text').innerHTML = '';




}

btn_reset.onclick = () => {
  // const newText = document.createElement("p");
  // newText.innerText = ("text");
  document.getElementById("text").reset();
}

// const color = (ev) => {
// 	document.querySelector('body').style.backgroundColor = ev.target.value	
// }
