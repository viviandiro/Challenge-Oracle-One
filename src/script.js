// en esta parte realizamos la encirptacion del mensaje

function encriptar() {
  var texto = document.getElementById("newfrase").value;
  texto = texto.toLowerCase().trim();
  if (texto !== "") {
    var cadenaEncritada = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    var miFrase = document.querySelector("section");
    miFrase.innerHTML = "<section id=mensaje class=mensaje>" + cadenaEncritada;
    var miBtncopiar = document.querySelector("#btncopiar");
    miBtncopiar.innerHTML =
      "  <br><button class=btn3 onclick= copyMensage()>Copiar</button>";

    console.log(cadenaEncritada);
    form.reset();
    return false;
  } else {
    alert("Escriba su mensaje");
    location.reload();
  }
}

let myButton = document.getElementById("btn1");
myButton.onclick = encriptar;

// funcion para copiar texto

function copyMensage() {
  var copyFrase = document.getElementById("mensaje");
  var inputFalso = document.createElement("input");
  inputFalso.setAttribute("value", copyFrase.innerHTML);
  document.body.appendChild(inputFalso);
  inputFalso.select();
  document.execCommand("copy");
  document.body.removeChild(inputFalso);
  alert("Mensaje Copiado!!");
}

//funcion donde se  desencripta el mensaje.
function desencriptar() {
  var texto = document.getElementById("newfrase").value;
  if (texto !== "") {
    var cadenaDesencritada = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    var miFrase = document.querySelector("section");
    miFrase.innerHTML =
      "<section id=mensaje class=mensaje>" + cadenaDesencritada;
    console.log(cadenaDesencritada);
    form.reset();
    return false;
  } else {
    alert("Escriba su mensaje");
  }
}

let btn2 = document.getElementById("btn2");
btn2.onclick = desencriptar;

// funcion donde se filtra que solo sean letras sin caracteres y numeros
function soloText(string) {
  var key = string.keyCode || string.which,
    tecla = String.fromCharCode(key).toLowerCase(),
    letras = " abcdefghijklmnñopqrstuvwxyz",
    especiales = [8, 37, 39, 46],
    tecla_especial = false;

  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    return false;
  }
}
