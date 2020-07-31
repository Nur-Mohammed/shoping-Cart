// converting text and value to Number

function textToNum(id) {
  const string = document.getElementById(id).innerText;
  var toNumber = parseFloat(string);
  return toNumber;
}
function valueToNum(id) {
  const string = document.getElementById(id).value;
  var toNumber = parseFloat(string);
  return toNumber;
}

// Increasing quantity and price for individual item
function productAdd(isProductIncrease, quantity, quantityPrice) {
  var productQuantityNum = valueToNum(quantity);
  let updatedProductQuantity = productQuantityNum;
  if (isProductIncrease == true) {
    updatedProductQuantity = productQuantityNum + 1;
  }
  if (isProductIncrease == false && productQuantityNum > 0) {
    updatedProductQuantity = productQuantityNum - 1;
  }
  document.getElementById(quantity).value = updatedProductQuantity;
  if (quantity == "quantity1") {
    var updatedProductPrice = updatedProductQuantity * 1219;
  }
  if (quantity == "quantity2") {
    updatedProductPrice = updatedProductQuantity * 59;
  }

  document.getElementById(quantityPrice).innerText = updatedProductPrice;
  toCalculateTotal();
}

// Calculating total section
function toCalculateTotal() {
  let subTotal = valueToNum("quantity1") * 1219 + valueToNum("quantity2") * 59;
  document.getElementById("subTotal").innerText = subTotal;
  let tax = textToNum("subTotal") * 0.1;
  var roundTax = Math.round(tax);
  document.getElementById("tax").innerText = roundTax;
  let grandTotal = subTotal + roundTax;
  document.getElementById("total").innerText = grandTotal;
}

// remove everything
document.getElementById("remove2").addEventListener("click", function () {
  remove("quantity2", "quantityAmount2");
});
document.getElementById("remove1").addEventListener("click", function () {
  remove("quantity1", "quantityAmount");
});
function remove(id1, id2) {
  var quantity = 0;
  document.getElementById(id1).value = quantity;
  document.getElementById(id2).innerText = quantity;
  toCalculateTotal();
}



var hide = document.getElementById("hide").addEventListener("click", function(){
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.display = "block";
  var totalAmount = document.getElementById("total").innerText;
  document.getElementById("payableAmount").innerText = totalAmount;
})
