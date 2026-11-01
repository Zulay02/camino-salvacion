# El Camino de la Salvación

Juego bíblico educativo en **12 etapas** que enseña, paso a paso, el plan de salvación: desde la Creación hasta la Nueva Jerusalén.

Hecho con HTML, CSS y JavaScript, sin programas adicionales. Funciona en computadores, tabletas y celulares, y se puede instalar como aplicación.

**Autora:** María Zulay Núñez Varela ([@Zulay02](https://github.com/Zulay02))

---

## Las 12 etapas

| # | Etapa | Mentor | Desafío | Jefe final |
|---|---|---|---|---|
| 1 | La Creación | Adán | Trampa: Independencia de Dios | El Orgullo |
| 2 | La Caída | Eva | Discernimiento: La voz de la serpiente | La Serpiente Antigua |
| 3 | Conciencia de Pecado | David | Enemigos: Negación, Orgullo e Hipocresía | La Hipocresía |
| 4 | El Llamado de Dios | Samuel | Discernimiento: Las tres voces | El Ruido |
| 5 | Arrepentimiento | Zaqueo | Romper cadenas | La Esclavitud |
| 6 | Fe en Cristo | Abraham | El puente de la fe | La Incredulidad |
| 7 | Justificación | El ladrón arrepentido | Tribunal celestial | El Acusador |
| 8 | Nuevo Nacimiento | Nicodemo | La pregunta de Nicodemo | El Viejo Hombre |
| 9 | Santificación | Pedro | El fruto en la vida diaria | Las Obras de la Carne |
| 10 | Guerra Espiritual | Pablo | Combate: Los cinco enemigos | La Fortaleza |
| 11 | Perseverancia | Job | Carrera espiritual | La Prueba |
| 12 | Glorificación | Juan | Evento final: Las puertas de la Nueva Jerusalén | La Muerte, el último enemigo |

Cada etapa empieza con un **mentor bíblico** que cuenta su historia, y tiene cinco pasos:

1. **Versículo clave**, con enseñanza, aplicación y referencias para leer.
2. **Misión de reflexión**: el jugador escribe con sus propias palabras.
3. **Desafío**: trampas, enemigos o jefes que se vencen con la Palabra. Cada respuesta equivocada muestra su consecuencia bíblica.
4. **Evaluación**.
5. **Jefe final**: una batalla de 3 rondas sobre lo aprendido. El jefe tiene 3 de fuerza y el jugador 3 escudos de fe. Si el jugador se queda sin escudos, cae, pero se levanta y vuelve a intentarlo (Proverbios 24:16). Al vencer, el mentor se une a su colección.

La siguiente etapa se abre al completar la anterior. El progreso se guarda solo, en el navegador.

### Para todas las edades

Al iniciar, el jugador elige quién va a jugar. Durante el juego, una etiqueta arriba muestra el modo, y el botón «Cambiar edad» permite cambiarlo sin perder el progreso. Cada edad tiene su color (azul para niños, morado para jóvenes y verde para adultos) y, al comienzo de cada etapa, un recuadro con su contenido propio.

| Modo | Contenido | Dificultad |
|---|---|---|
| 👧 Niños (6 a 11 años) | Introducción, enseñanza, aplicación y pregunta en lenguaje sencillo | 5 escudos de fe en las batallas, misiones cortas, menos palabras para memorizar |
| 🧑 Jóvenes (12 a 17 años) | Contenido completo más «En tu mundo», una conexión con la vida diaria | Normal |
| 🧓 Adultos (18 años en adelante) | Contenido completo más «Para profundizar», con términos del hebreo y el griego | Más palabras para memorizar |

### Para grupos, clases y familias

En la pantalla de inicio se elige **«👤 Solo»** o **«👥 En grupo»**. En el modo grupo, cada etapa es una reunión de 45 a 60 minutos: empieza con una dinámica de apertura, la misión se responde en grupo, la batalla final se juega por equipos (Equipo 1 y Equipo 2, con marcador) y al final aparecen las preguntas para conversar, una actividad y una oración de cierre.

El botón **«👩‍🏫 Guía para maestros y líderes»** abre la guía completa dentro del juego. También está en `docs/GUIA-PARA-MAESTROS.md`, lista para leer o imprimir.

### Libro de versículos

Los 24 versículos del camino (dos por etapa) se coleccionan como cartas en el **Libro de versículos**. Cada carta se descubre al jugar y se puede memorizar con un ejercicio de completar palabras. Los versículos memorizados desbloquean habilidades:

| Habilidad | Se desbloquea con | Efecto |
|---|---|---|
| 💡 Discernimiento | 3 versículos memorizados | En las evaluaciones se puede descartar una respuesta incorrecta |
| 🔥 Fervor | 8 versículos | 5 XP extra en cada paso del camino |
| ⚔ Espada afilada | 16 versículos | En los desafíos se puede descartar una respuesta incorrecta |
| 👑 Maestro de la Palabra | Los 24 versículos | Logro final de la colección |

**Principio del juego:** la salvación es un regalo de Dios por gracia (Efesios 2:8-9). Los puntos y rangos miden el crecimiento como discípulo, no lo que hace salvo a una persona.

---

## Cómo jugar

- **En tu computador:** abre el archivo `index.html` con doble clic.
- **En internet:** publícalo con GitHub Pages (ver abajo) y comparte el enlace.

---

## Carpetas

```
camino-salvacion/
├── index.html                 Página del juego
├── manifest.webmanifest       Datos para instalarlo como aplicación
├── sw.js                      Permite jugar sin internet (cuando está en GitHub Pages)
├── css/
│   └── estilos.css            Colores, letra grande, modo claro y oscuro
├── js/
│   ├── niveles.js             ★ Todo el contenido bíblico de las 12 etapas
│   ├── game.js                La lógica del juego
│   └── pwa.js                 Activa la instalación como aplicación
├── assets/
│   └── iconos/                Íconos de la aplicación
└── docs/
    ├── CONTENIDO-DE-LOS-NIVELES.md   Todo el contenido, para revisar
    ├── GUIA-PARA-MAESTROS.md         Plan de las 12 reuniones para grupos
    └── PROMPT-MAESTRO.txt            Prompt de diseño original del juego
```

### Para revisar o cambiar el contenido

- Para **leer** todo el contenido de las etapas, abre `docs/CONTENIDO-DE-LOS-NIVELES.md`.
- Para **cambiar** un versículo, una pregunta o una respuesta, edita `js/niveles.js`. Cada etapa es un bloque marcado con `/* ---------- NIVEL N ---------- */`.

---

## Subir el juego a GitHub

1. Entra a [github.com](https://github.com) con tu usuario.
2. Haz clic en **New** (nuevo repositorio) y ponle el nombre `camino-salvacion`. Déjalo **Public**.
3. En el repositorio vacío, haz clic en **uploading an existing file**.
4. Abre la carpeta `camino-salvacion` en tu computador, selecciona **todo su contenido** (los archivos y las carpetas) y arrástralo a la página de GitHub.
5. Escribe un mensaje, por ejemplo `Versión 1.0 del juego`, y haz clic en **Commit changes**.

Con Git instalado, también puedes hacerlo desde la terminal, dentro de la carpeta:

```bash
git init
git add .
git commit -m "Versión 1.0 del juego"
git branch -M main
git remote add origin https://github.com/Zulay02/camino-salvacion.git
git push -u origin main
```

### Publicarlo en internet con GitHub Pages

1. En el repositorio, ve a **Settings** → **Pages**.
2. En **Branch**, elige `main` y la carpeta `/ (root)`. Haz clic en **Save**.
3. Espera uno o dos minutos. El juego quedará en:
   `https://zulay02.github.io/camino-salvacion/`

Desde esa dirección, en el celular, el navegador ofrecerá **"Instalar"** o **"Agregar a la pantalla de inicio"**.

### Al publicar una versión nueva

Cambia el número en la primera línea de `sw.js` (por ejemplo, de `v1.0` a `v1.1`). Así, quienes ya instalaron el juego reciben los archivos actualizados.

---

## Texto bíblico

Las citas bíblicas son de la versión Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960; renovado © Sociedades Bíblicas Unidas, 1988. Antes de publicar el juego, conviene revisar la política de citas de las Sociedades Bíblicas para uso en obras publicadas.

---

## Derechos de autor

© 2026 María Zulay Núñez Varela. **Todos los derechos reservados.**

Puedes jugar libremente desde el sitio web del juego. Para copiar, modificar, distribuir o usar cualquier parte de esta obra, se necesita autorización previa y por escrito de la autora. Consulta el archivo [`LICENSE`](LICENSE).

