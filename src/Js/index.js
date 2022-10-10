export var input1 = document.getElementById("i1");
export var input2 = document.getElementById("i2");
export var button = document.getElementById("btn");
export var result = document.getElementById("result");

button.addEventListener("click", add);

export function add() {
  var r = parseInt(input1.value) + parseInt(input2.value);
  result.innerText = r;
}
