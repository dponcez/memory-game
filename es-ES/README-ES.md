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

Gracias por tu interés en contribuir al proyecto. Para facilitar la revisión y acelerar la incorporación de cambios, sigue estas pautas:

### 1) Flujo de trabajo
- Haz fork del repositorio y crea una rama descriptiva basada en `main`, por ejemplo:
  - `feat/crear-tablero-responsive`
  - `fix/reset-icons-error`
- Mantén tu rama actualizada con `main` antes de abrir el PR (rebase o merge según prefieras).

### 2) Mensajes de commit
- Utiliza la convención de *Conventional Commits*:
  - `feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`.
- Ejemplos:
  - `fix: arregla error 'icons no es iterable' en reset` 
  - `feat: centraliza icons en states`

### 3) Pull Requests
- Abre el PR contra la rama `main` con una descripción clara del cambio y el motivo.
- Incluye instrucciones para reproducir o verificar el cambio (pasos, comandos, capturas si aplica).
- Añade una referencia al issue si corresponde (ej. `Closes #12`).

### 4) Checklist de revisión mínima
Antes de solicitar revisión, asegúrate de que:
- El código está probado manualmente (la app carga y funciona para el caso cambiado).
- `node scripts/assert-icons.mjs` pasa en tu rama (obligatorio para cambios que toquen iconos o `cardIcons`).
- Si añades pruebas automatizadas, ejecútalas localmente.
- Actualizaste `CHANGELOG.md` en la sección `Unreleased` si el cambio es notable.

### 5) Ejecutar y probar localmente
- Instalar dependencias (si corresponde): `npm install`.
- Abrir `index.html` en el navegador para pruebas manuales.
- Ejecutar la comprobación de iconos: `node scripts/assert-icons.mjs`.

### 6) CI y calidad
- El proyecto usa GitHub Actions para ejecutar una comprobación básica (`assert-icons`). Asegúrate de que tu PR hace pasar ese check.
- Si quieres, propongo añadir linters y tests (puedo hacerlo si estás de acuerdo).

### 7) Estilo de código
- Usa JavaScript moderno (ES modules), funciones pequeñas y archivos con responsabilidad única.
- Mantén nombres descriptivos y añade comentarios cuando la intención no sea obvia.

### 8) Comunicación
- Para cambios grandes o de diseño, abre un issue primero para discutir la propuesta.

Gracias por contribuir — cualquier aporte es bienvenido y será revisado con atención.

## 📝 Changelog

Consulta `CHANGELOG.md` para ver los cambios más recientes y el historial del proyecto.
