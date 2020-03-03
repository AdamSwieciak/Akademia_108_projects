fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(res => {
    const alpost = document.getElementById("all-post");
    let ulpost = document.createElement("ul");
    ulpost.setAttribute("class", "all-post-ul all-post__bg");

    res.forEach(element => {
      let newEl = document.createElement("li");
      newEl.setAttribute("class", "all-post-li all-post__bg");
      newEl.onclick = () => {
        detalUSer(element);
      };
      newEl.innerHTML = element.name;
      ulpost.appendChild(newEl);
    });
    alpost.appendChild(ulpost);
  });

let detalUSer = element => {
  let name = createElement("span", "view name", element.name);
  let city = createElement("span", "city", element.username);
  document
    .getElementById("one_post-p")
    .appendChild(name)
    .appendChild(city);
};

function createElement(tag, classNAme, val) {
  let newElement = document.createElement("tag");
  newElement.setAttribute("class", "classNAme");
  newElement.innerHTML = val;
  return newElement;
}
