# FigmaSpeller
FigmaSpeller es una extensión de Chrome que corrige la ortografía en español dentro de Figma Web.

## Archivos principales

| Archivo         | Función                                                        |
|-----------------|----------------------------------------------------------------|
| `manifest.json` | Define la extensión y sus permisos                             |
| `background.js` | Inicializa la extensión al instalarla                          |
| `content.js`    | Detecta texto editable en Figma y lo pasa por LanguageTool     |
| `popup.html`    | Muestra una interfaz mínima al hacer clic en el icono          |
| `styles.css`    | Estiliza el popup                                              |

## Instalación

1. Ve a `chrome://extensions/`
2. Activa el **Modo desarrollador** (esquina superior derecha).
3. Haz clic en **Cargar descomprimida** / **Load unpacked**.
4. Selecciona la carpeta del proyecto (donde está el `manifest.json`).
5. Chrome cargará la extensión y verás su ícono junto a la barra de direcciones.

## Uso en Figma

1. Ingresa a [figma.com](https://figma.com) y abre cualquier archivo con texto editable.
2. Haz clic en el ícono de la extensión (puede que debas anclarlo con el ícono de pin 📌).
3. Aparecerá una ventana con el botón **Revisar texto en Figma**.
4. Haz clic y, si hay errores, ¡te los mostrará!
