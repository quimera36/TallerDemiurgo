const formulario = document.getElementById("formulario-contacto");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");
const alertaFormulario = document.getElementById("alerta-formulario");

if (formulario) {
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const valorCorreo = correo.value.trim();
    const valorMensaje = mensaje.value.trim();

    alertaFormulario.textContent = "";
    alertaFormulario.className = "";

    if (valorCorreo === "" || valorMensaje === "") {
      alertaFormulario.textContent = "Por favor, completa todos los campos.";
      alertaFormulario.className = "alerta error";
      return;
    }

    if (!valorCorreo.includes("@") || !valorCorreo.includes(".")) {
      alertaFormulario.textContent = "Por favor, ingresa un correo válido.";
      alertaFormulario.className = "alerta error";
      return;
    }

    if (valorMensaje.length < 10) {
      alertaFormulario.textContent =
        "El mensaje debe tener al menos 10 caracteres.";
      alertaFormulario.className = "alerta error";
      return;
    }

    alertaFormulario.textContent = "Formulario enviado correctamente.";
    alertaFormulario.className = "alerta exito";

    formulario.reset();
  });
}
