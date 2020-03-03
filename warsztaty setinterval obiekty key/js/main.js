let view = () => {
  let www = [];
  fetch(`https://www.blockchain.com/pl/ticker`)
    .then(res => res.json())
    .then(res => {
      www = Object.keys(res).map(key => {
        let aa = {};
        aa.name = key;
        aa.buy = res[key].buy;
        return aa;
      });

      document.getElementById("all-posts").innerHTML = "";

      www.forEach(element => {
        let ob = document.createElement("div");
        ob.innerHTML = `${element.name} ${element.buy}`;
        document.getElementById("all-posts").appendChild(ob);
      });
    });
};
setInterval(view, 3000);
