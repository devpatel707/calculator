function appendValue(value) {
    document.getElementById("result").value += value;
  }
  
  function calculate() {
    var expression = document.getElementById("result").value;
    var result = eval(expression);
    document.getElementById("result").value = result;
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }