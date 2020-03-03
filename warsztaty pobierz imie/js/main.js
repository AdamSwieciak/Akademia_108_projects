let form = document.getElementById("formularz").childNodes;

document.getElementById("formularz").addEventListener("submit", event => {
  event.preventDefault();
  form.forEach(element => {
    if (element.nodeName === "INPUT") {
      if (element.value != "Submit") {
        if (element.value == "") {
          alert(`Uzupelnij pole ${element.name}`);
          return null;
        } else {
          console.log(element.value);
        }
      }
    }
  });
});
