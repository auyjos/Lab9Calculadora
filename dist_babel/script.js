"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var error = "Error!";
var Calculator = /*#__PURE__*/function () {
  function Calculator(operandoPrevioTexto, siguienteOperandoTexto) {
    _classCallCheck(this, Calculator);
    this.previoOperandoTextElement = operandoPrevioTexto;
    this.siguienteOperandoTextElement = siguienteOperandoTexto;
    this.clear();
  }
  _createClass(Calculator, [{
    key: "clear",
    value: function clear() {
      this.siguienteOperando = "";
      this.previoOperando = "";
      this.operation = undefined;
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.siguienteOperando = this.siguienteOperando.toString().slice(0, -1);
    }
  }, {
    key: "appendNumber",
    value: function appendNumber(number) {
      if (number === "." && this.siguienteOperando.includes(".")) return;
      this.siguienteOperando = this.siguienteOperando.toString() + number.toString();
    }
  }, {
    key: "chooseOperation",
    value: function chooseOperation(operation) {
      if (this.siguienteOperando === "") return;
      if (this.previoOperando !== "") {
        this.compute();
      }
      this.operation = operation;
      this.previoOperando = this.siguienteOperando;
      this.siguienteOperando = "";
    }
  }, {
    key: "compute",
    value: function compute() {
      var computation;
      var prev = parseFloat(this.previoOperando);
      var current = parseFloat(this.siguienteOperando);
      var error = "Error!";
      if (isNaN(prev) || isNaN(current)) return;
      switch (this.operation) {
        case "+":
          computation = prev + current;
          break;
        case "-":
          computation = prev - current;
          if (computation < 0) {
            prev - current;
            return computation = error;
          }
          break;
        case "*":
          computation = prev * current;
          break;
        case "÷":
          computation = prev / current;
          break;
        default:
          return;
      }
      this.siguienteOperando = computation;
      this.operation = undefined;
      this.previoOperando = "";
    }
  }, {
    key: "getDisplayNumber",
    value: function getDisplayNumber(number) {
      var stringNumber = number.toString();
      var integerDigits = parseFloat(stringNumber.split(".")[0]);
      var decimalDigits = stringNumber.split(".")[1];
      var integerDisplay;
      if (isNaN(integerDigits)) {
        integerDisplay = "";
      } else {
        integerDisplay = integerDigits.toLocaleString("en", {
          maximumFractionDigits: 0
        });
      }
      if (decimalDigits != null) {
        return "".concat(integerDisplay, ".").concat(decimalDigits);
      }
      if (decimalDigits < 0) {
        return "Error";
      } else {
        return integerDisplay;
      }
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay() {
      this.siguienteOperandoTextElement.innerText = this.getDisplayNumber(this.siguienteOperando);
      if (this.operation != null) {
        this.previoOperandoTextElement.innerText = "".concat(this.getDisplayNumber(this.previoOperando), " ").concat(this.operation);
        if (this.operation < 0) {
          return "Error!";
        }
      } else {
        this.previoOperandoTextElement.innerText = "";
      }
    }
  }]);
  return Calculator;
}();
var numberButtons = document.querySelectorAll("[data-numero]");
var operationButtons = document.querySelectorAll("[operacion]");
var equalsButton = document.querySelector("[igual]");
var deleteButton = document.querySelector("[data-borrar]");
var allClearButton = document.querySelector("[clear-all]");
var previoOperandoTextElement = document.querySelector("[data-operando-previo ]");
var siguienteOperandoTextElement = document.querySelector("[data-siguiente-operando]");
var calculator = new Calculator(previoOperandoTextElement, siguienteOperandoTextElement);
numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
operationButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});
equalsButton.addEventListener("click", function (button) {
  calculator.compute();
  calculator.updateDisplay();
});
allClearButton.addEventListener("click", function (button) {
  calculator.clear();
  calculator.updateDisplay();
});
deleteButton.addEventListener("click", function (button) {
  calculator["delete"]();
  calculator.updateDisplay();
});