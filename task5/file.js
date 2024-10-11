window.addEventListener("DOMContentLoaded", function () {
  const v = [20, 15, 10];
  let listProduct = document.getElementById("listProduct");
  let field = document.getElementById("field");
  let my_button = document.getElementById("my-button");
  let result = document.getElementById("result");
  my_button.addEventListener("click", function () {
    let num = field.value;
    if (num.match(/^[0-9]+$/) !== null) {
      let res = v[listProduct.value] * num;
      result.innerText = res;
    } else {
      result.innerText = "Ошибка ввода";
    }
  });
});
