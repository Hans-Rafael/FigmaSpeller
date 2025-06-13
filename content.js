function getVisibleTextFromFigma() {
  const allNodes = document.querySelectorAll("span, div, p");
  const textos = Array.from(allNodes)
    .map(n => n.innerText?.trim())
    .filter(t => t && t.length > 5 && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(t));
  
  console.log("Textos visibles encontrados:", textos);
  return textos.join(" ");
}

function checkSpelling(text) {
  console.log("Enviando texto:", text);
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
      console.error("Error:", err);
      alert("❌ Error al verificar ortografía.");
    });
}

(function () {
  const texto = getVisibleTextFromFigma();
  if (texto.length > 5) {
    checkSpelling(texto);
  } else {
    alert("⚠️ No se encontró texto visible o es muy corto.");
  }
})();
