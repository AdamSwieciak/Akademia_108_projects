let mainHead = document.getElementById("main_header");
let j;
document.getElementById("adpar").addEventListener("click", () => {
  mainHead.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    let paragrad = document.createElement("p");
    paragrad.setAttribute("class", "main-paragra" + i);
    paragrad.innerText = "to jest " + i;
    mainHead.appendChild(paragrad);
    j = mainHead.children.length;
  }
});
let g = 0;
document.getElementById("delp").addEventListener("click", () => {
  j--;
  console.log(j);
  mainHead.removeChild(mainHead.children[j]);
});

document.getElementById("bgc").addEventListener("click", () => {
  document.body.style.backgroundImage = "";
  document.body.style.backgroundColor = "green";
});

document.getElementById("change").addEventListener("click", () => {
  if (mainHead.children.length != 0) {
    let a = Math.floor(Math.random() * 10);
    mainHead.children[a].innerHTML = "tooop";
  }
});

document.getElementById("adel").addEventListener("click", () => {
  document.getElementsByClassName("img")[0].innerHTML =
    '<img src="/IMG_20191213_054441.jpg"></img>';
});
