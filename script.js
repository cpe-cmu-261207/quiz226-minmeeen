const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const btn_search  = document.getElementById('search')
const btn_reset = document.getElementById('reset')
const text = document.getElementById('text');
const oritext = document.getElementById('text');
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
  // let oritext;
  // oritext = JSON.parse(localStorage.getItem("todos"))
  // text.innerText = "";
  // console.log(oritext);

  let oritexts;
  if (localStorage.getItem("oritexts") === null) {
      oritexts = [];
  } else {
      oritexts = JSON.parse(localStorage.getItem("oritexts"));
  }

  oritexts.unshift(text);
  localStorage.setItem("oritexts", JSON.stringify(oritexts));

}

btn_reset.onclick = () => {
  text.innerText = oritext;
  let oritext;
  oritext = JSON.parse(localStorage.getItem("todos"));
}

// const color = (ev) => {
// 	document.querySelector('body').style.backgroundColor = ev.target.value	
// }


