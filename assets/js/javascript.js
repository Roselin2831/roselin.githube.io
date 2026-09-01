function cambiarTema() {
  const pagina = document.documentElement;
  const boton = document.getElementById("boton-tema");

  pagina.classList.toggle("dark");

  if (pagina.classList.contains("dark")) {
    boton.textContent = "☀️";
  } else {
    boton.textContent = "🌙";
  }
}

function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
    alert("Completa todos los campos obligatorios.");
    return false;
  }

  if (!email.includes("@")) {
    alert("Ingresa un correo válido.");
    return false;
  }

  if (mensaje.length < 10) {
    alert("El mensaje debe tener mínimo 10 caracteres.");
    return false;
  }

  alert("Formulario enviado correctamente.");
  return true;
}
