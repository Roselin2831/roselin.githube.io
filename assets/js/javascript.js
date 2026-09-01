document.addEventListener("DOMContentLoaded", function () {
  const temaGuardado = localStorage.getItem("tema");

  if (temaGuardado === "oscuro") {
    document.documentElement.classList.add("dark");
  }

  actualizarBotonTema();
});

function cambiarTema() {
  const pagina = document.documentElement;

  pagina.classList.toggle("dark");

  const modoOscuro = pagina.classList.contains("dark");

  if (modoOscuro) {
    localStorage.setItem("tema", "oscuro");
  } else {
    localStorage.setItem("tema", "claro");
  }

  actualizarBotonTema();
}

function actualizarBotonTema() {
  const pagina = document.documentElement;
  const boton = document.getElementById("boton-tema");

  if (!boton) {
    return;
  }

  if (pagina.classList.contains("dark")) {
    boton.textContent = "☀️";
    boton.setAttribute("aria-label", "Activar modo claro");
  } else {
    boton.textContent = "🌙";
    boton.setAttribute("aria-label", "Activar modo oscuro");
  }
}

function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();

  const apellido = document.getElementById("apellido").value.trim();

  const email = document.getElementById("email").value.trim();

  const asunto = document.getElementById("asunto").value;

  const mensaje = document.getElementById("mensaje").value.trim();

  const aceptarDatos = document.getElementById("aceptar-datos").checked;

  if (
    nombre === "" ||
    apellido === "" ||
    email === "" ||
    asunto === "" ||
    mensaje === ""
  ) {
    alert("Completa todos los campos obligatorios.");
    return false;
  }

  if (nombre.length < 2 || apellido.length < 2) {
    alert("El nombre y el apellido deben tener al menos 2 caracteres.");

    return false;
  }

  if (!validarCorreo(email)) {
    alert("Ingresa un correo electrónico válido.");
    return false;
  }

  if (mensaje.length < 10) {
    alert("El mensaje debe tener como mínimo 10 caracteres.");

    return false;
  }

  if (!aceptarDatos) {
    alert("Debes aceptar el tratamiento de tus datos personales.");

    return false;
  }

  alert("Formulario enviado correctamente.");

  return true;
}

function validarCorreo(email) {
  const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return formatoCorreo.test(email);
}
