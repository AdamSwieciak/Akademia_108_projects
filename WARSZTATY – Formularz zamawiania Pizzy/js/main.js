const pricePizza = [19, 24, 23, 30, 35];
let jsonarr = [];

$("#pizza").change(() => {
  let a = $("#pizza").val();
  if (a === "") {
    $("#price").html("");
  } else {
    $("#price").html(pricePizza[a] + " zł");
  }
});

$("#button").click(() => {
  let alerto = false;
  $("[type='text']").each(function() {
    this.value === "" ? (alerto = true) : null;
  });
  ($("#garlix")[0].checked === false && $("#tomato")[0].checked === false) ||
  $("#agreement")[0].checked === false
    ? (alerto = true)
    : null;
  $("#pizza").val() === "" ? alert("Wybierz pizze") : null;
  alerto == true ? alert("wypełnij pola") : null;
  jsonarr = {
    name: $("input")[0].value,
    surname: $("input")[1].value,
    street: $("input")[2].value,
    nrhouse: $("input")[3].value,
    postcode: $("input")[4].value,
    city: $("input")[5].value,
    pizza: $("#pizza"),
    sauce: { tomato: $("input")[6].checked, garlix: $("input")[7].checked },
    agreement: $("input")[8].checked
  };
  console.log(jsonarr);
});
