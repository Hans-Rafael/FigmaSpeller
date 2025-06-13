function getEditableTextNodes() {
  const nodes = document.querySelectorAll('[contenteditable="true"]');
  const textos = Array.from(nodes).map(node => node.innerText.trim()).filter(t => t.length > 0);
  console.log("Textos detectados:", textos);
  return textos.join(" ");
}

function checkSpelling(text) {
  console.log("Texto enviado a la API:", text);
  fetch("https://api.languagetool.org/v2/check", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      text: text,
      language: "es"
    })
  })
    .then(response => response.json())
    .then(result => {
      console.log("Resultado recibido:", result);
      if (result.matches.length > 0) {
        const messages = result.matches.map(m => `• ${m.message}`).join("\n");
        alert("Errores encontrados:\n\n" + messages);
      } else {
        alert("✅ Sin errores ortográficos.");
      }
    })
    .catch(err => {
      console.error("Error al verificar ortografía:", err);
      alert("❌ Error al conectar con el corrector ortográfico.");
    });
}

(function () {
  const texto = getEditableTextNodes();
  if (texto.length > 5) {
    checkSpelling(texto);
  } else {
    alert("⚠️ No se encontró texto editable o es demasiado corto.");
  }
})();
