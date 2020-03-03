$("#tabela-select").change(function() {
  $("#all-posts").html("");
  let tabelNbp = $(this).val();
  console.log(tabelNbp);

  fetch(`http://api.nbp.pl/api/exchangerates/tables/${tabelNbp}`)
    .then(res => res.json())
    .then(res => {
      const notowania = res[0].rates;
      let tabela = res[0].rates;

      tabela.forEach(element => {
        let currency;
        if (element.mid === undefined) {
          currency = element.bid;
        } else {
          currency = element.mid;
        }
        createElement(element.currency, element.code, currency);
      });
    });
});

let createElement = (a, b, c) => {
  let element = document.createElement("li");
  element.innerHTML = ` ${a} ${b} ${c}`;
  $("#all-posts").append(element);
};
