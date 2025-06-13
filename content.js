function getEditableTextNodes() {
  const nodes = document.querySelectorAll('div[contenteditable="true"]');
  return Array.from(nodes).map(node => node.innerText);
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
        alert("Errores detectados:\n" + result.matches.map(m => `→ ${m.message}`).join("\n"));
      } else {
        alert("Sin errores ortográficos 🎉");
      }
    });
}

// Esperar unos segundos para que Figma cargue
setTimeout(() => {
  const texts = getEditableTextNodes();
  const fullText = texts.join(" ");
  if (fullText.length > 10) {
    checkSpelling(fullText);
  }
}, 5000);
