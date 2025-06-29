function calcularTotal() {
  const buffet = document.getElementById("buffet").value;
  const cantidad = parseInt(document.getElementById("cantidad").value) || 1;
  let total = 0;

  if (buffet === "SI") {
    const adultos = parseInt(document.getElementById("adultos").value) || 0;
    const ninos = parseInt(document.getElementById("ninos").value) || 0;
    total = adultos * 250 + ninos * 150;
  } else {
    const tamano = parseFloat(document.querySelector('input[name="tamano"]:checked')?.value || 0);
    const pan = parseFloat(document.querySelector('input[name="pan"]:checked')?.value || 0);
    const especial = parseFloat(document.getElementById("especial").value || 0);

    let ingredientes = 0;
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(chk => {
      ingredientes += parseFloat(chk.value);
    });

    total = (tamano + pan + ingredientes + especial) * cantidad;
  }

  document.getElementById("total").textContent = `$${total.toFixed(2)}`;
}

function alternarOpciones() {
  const esBuffet = document.getElementById("buffet").value === "SI";
  const elementos = document.querySelectorAll('.opcion-config');

  elementos.forEach(el => {
    el.disabled = esBuffet;
    if (esBuffet && (el.type === 'radio' || el.type === 'checkbox')) {
      el.checked = false;
    }
  });

  if (esBuffet) {
    alert("Has elegido buffet. Las opciones personalizadas han sido desactivadas.");
  } else {
    alert("Has desactivado el buffet. Ahora puedes personalizar tu pizza.");
  }
}

window.onload = alternarOpciones;
