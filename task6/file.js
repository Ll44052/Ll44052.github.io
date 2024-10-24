window.addEventListener("DOMContentLoaded", function () {
  const v = {"c0": 20, "c1": 15, "c2": 10};
  const sortPrice = {"sort1": 1.2, "sort2": 1.8};
  const c = {"c0": 0, "c1": 1, "c2": 2};

  let listProduct = document.getElementById("listProduct");
  let field = document.getElementById("field");
  let result = document.getElementById("result");

  let varList = document.getElementById("varList");
  let rb = document.getElementsByName("RB");
  let cbProp = document.getElementsByName("cbProp");

  let optBlock = document.getElementById("optBlock");
  let propBlock = document.getElementById("propBlock");

  function calculate() {
    let num = field.value;
    if (num !== "") {
      if (num.match(/^[0-9]+$/) !== null) {
        let sortmult = 1;
        let rbPrice = (rb[0].checked * (2000)) + (rb[1].checked * (500));
        let propprice = 0;
        let propmult = 1;
        if (c[listProduct.value] === 1) {
          sortmult = sortPrice[varList.value];
        }else {sortmult=1;}
        if (c[listProduct.value] === 2) {
          if (cbProp[0].checked === true) {
            propprice = 1000;
          } else {
            propprice = 0;
          }
          if (cbProp[1].checked === true) {
            propmult = 1.5;
          } else {
            propmult = 1;
          }
        } else {
          propprice = 0;
          propmult = 1;
        }
        let res = v[listProduct.value] * num * sortmult * propmult + rbPrice + propprice;
        result.innerText = res;
      } else {
        result.innerText = "Ошибка ввода";
      }
    } else {
      result.innerText = "";
    }
  }

  rb.forEach(function(elem){
    elem.addEventListener("change", function() {
      calculate();
    });
  });

  cbProp.forEach(function(elem){
    elem.addEventListener("change", function() {
      calculate();
    });
  });

  field.addEventListener("input", function() {
    calculate();
  });

  varList.addEventListener("change", function () {
    calculate();
  });

  listProduct.addEventListener("change", function () {
    if (c[listProduct.value] === 0) {
      calculate();
      optBlock.style = "display: none";
      propBlock.style = "display: none";
    }
    if (c[listProduct.value] === 1) {
      calculate();
      optBlock.style = "display: flex; flex-direction: column;";
      propBlock.style = "display: none";
    }
    if (c[listProduct.value] === 2) {
      calculate();
      optBlock.style = "display: none";
      propBlock.style = "display: flex; flex-direction: column; margin-left: auto; margin-right: auto;";
    }
  });

});
