function getEditableTextNodes() {
  const nodes = document.querySelectorAll('div[contenteditable="true"]');
  return Array.from(nodes).map(node => node.innerText).join(" ");
}

function checkSpelling(text) {
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
      if (result.matches.length > 0) {
        const messages = result.matches.map(m => `• ${m.message}`).join("\n");
        alert("Errores encontrados:\n\n" + messages);
      } else {
        alert("✅ Sin errores ortográficos.");
      }
    });
}

const texto = getEditableTextNodes();
if (texto.length > 10) {
  checkSpelling(texto);
} else {
  alert("No se detectó texto editable suficiente.");
}
// Este script se ejecuta en la página actual para revisar el texto editable