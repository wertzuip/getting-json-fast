const res = await fetch("./data.json");
const data = await res.json();

console.log(data);

const element = document.querySelector("#greeting");
element.innerText = data;
