# Memory Game

Un pequeño juego de memoria implementado con JavaScript, HTML y CSS.

## ✅ Estado y características principales

- Tablero generado dinámicamente con iconos (pares de cartas).
- Mecanismo de giro de cartas y detección de parejas.
- Contador de tiempo, puntuación y movimientos.
- Modal de victoria que muestra `score`, `movements` y `time` cuando se completan todas las parejas.
- Botón **reset game** que reconstruye la tabla y reinicia el temporizador y puntuación.
- Código modular con lógica separada en `modules/` y utilidades en `utils/`.

## 🔧 Cambios y mejoras recientes

He aplicado varias mejoras para hacer la aplicación más robusta y mantenible:

- Centralización de los iconos
  - Ahora `states.icons` (en `variables/globals.js`) contiene la lista de iconos usada por la app, evitando múltiples llamadas a `cardIcons()` y proporcionando una única fuente de verdad.

- Protección en la generación de la tabla
  - `modules/createTable.js` ahora usa `states.icons` por defecto y tiene una aserción clara:
    ```js
    if (!Array.isArray(icons)) throw new Error('createTable: states.icons no está inicializado como array');
    ```
    Esto detecta errores de inicialización de forma temprana.

- Corrección del bug del reset
  - Se solucionó el error "icons no es iterable" al pulsar **reset game** asegurando que `createTable` reciba los iconos correctamente.

- Limpieza y mantenimiento
  - Eliminado el archivo vacío `modules/resetGame.js`.
  - Eliminados imports redundantes en `modules/createTable.js`.

- Comprobación en CI
  - Añadido `scripts/assert-icons.mjs`: script que verifica que `cardIcons()` devuelve un array no vacío.
  - Añadido workflow de GitHub Actions `.github/workflows/ci.yml` para ejecutar la comprobación en cada `push`/`pull_request`.

## 📁 Archivos relevantes

- `modules/createTable.js` — crea y renderiza las cartas; ahora exige `states.icons` y lanza un error descriptivo si falta.
- `modules/gameController.js` — controla la lógica del juego, reset y temporizador.
- `variables/globals.js` — ahora exporta `states.icons` inicializada con `cardIcons()`.
- `modules/cardIcons.js` — genera el array de iconos.
- `scripts/assert-icons.mjs` — script de comprobación para CI.
- `.github/workflows/ci.yml` — workflow que ejecuta la comprobación en CI.

## ▶️ Cómo probar localmente

- Abrir `index.html` en el navegador y jugar normalmente.
- Verificar el script de comprobación:
  ```bash
  node scripts/assert-icons.mjs
  ```
- Hacer `git push` para disparar la comprobación automática en GitHub Actions.

## 💡 Notas finales

- Centralizar `icons` en `states` mejora la mantenibilidad y reduce la probabilidad de errores por llamadas duplicadas.
- Si lo deseas, puedo añadir tests con JSDOM o un pequeño test runner para verificar que `states` y otros módulos se inicializan correctamente en un entorno de CI.

---

## 🤝 Contributing

Gracias por tu interés en contribuir. Algunas pautas rápidas:

- Haz forks y pull requests para cambios propuestos.
- Mantén los commits pequeños y descriptivos (ej. `fix: arregla bug reset` o `feat: centraliza icons en states`).
- Actualiza `CHANGELOG.md` en `Unreleased` con cambios importantes antes de crear una release.
- Asegúrate de que el script de comprobación de iconos (`node scripts/assert-icons.mjs`) pasa en tu rama antes de abrir un PR.

## 📝 Changelog

Consulta `CHANGELOG.md` para ver los cambios más recientes y el historial del proyecto.

Si deseas, puedo formatear las entradas del changelog con el historial real de commits si me das acceso al repositorio o si ejecutas `git log --pretty=format:%h|%ad|%s --date=short` y pegas la salida aquí; con eso generaré automáticamente un changelog con commits y fechas.