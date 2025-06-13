# FigmaSpeller
FigmaSpeller es una extensión funcional para Chrome que corrige ortografía en español en Figma Web.

| Archivo         | Función                                                        |
|-----------------|----------------------------------------------------------------|
| manifest.json   | Define la extensión y sus permisos                             |
| background.js   | Inicializa la extensión al instalarla                          |
| content.js      | Detecta texto editable en Figma y lo pasa por LanguageTool     |
| popup.html      | Muestra una interfaz mínima al hacer clic en el icono          |
| styles.css      | Estiliza el popup                                              |
