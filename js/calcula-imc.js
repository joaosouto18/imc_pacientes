var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".paciente");

for (var i = 0; i < paciente.length; i++) {

  var pacientes = paciente[i];


  var peso = pacientes.querySelector(".info-peso");
  var altura = pacientes.querySelector(".info-altura");
  var tdImc = pacientes.querySelector(".info-imc");



  var pesoEhValido = validaPeso(peso.textContent);
  var alturaEhValida = validaAltura(altura.textContent);

  tdImc.textContent = calculaImc(peso.textContent, altura.textContent);

  if (!pesoEhValido) {
      pesoEhValido = false;
      tdImc.textContent = "Peso inválido!";
      pacientes.classList.add("paciente-invalido");
  }

  if (!alturaEhValida) {
      alturaEhValida = false;
      tdImc.textContent = "Altura inválida!";
      pacientes.classList.add("paciente-invalido");
  }



}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso){

    if (peso > 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}
