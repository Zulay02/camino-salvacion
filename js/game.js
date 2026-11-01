/* =========================================
   El Camino de la Salvación — lógica del juego (v1.5)
   El contenido de los niveles está en js/niveles.js
   ========================================= */

"use strict";

const CLAVE_GUARDADO = "caminoSalvacion";
const XP_POR_NIVEL = 50;
const PASOS = ["versiculo", "mision", "decision", "evaluacion", "jefe"];

const ATRIBUTOS = [
  ["fe", "Fe"],
  ["obediencia", "Obediencia"],
  ["amor", "Amor"],
  ["sabiduria", "Sabiduría"],
  ["humildad", "Humildad"],
  ["perseverancia", "Perseverancia"]
];

const RANGOS = [
  { nivel: 1, nombre: "Peregrino Novato" },
  { nivel: 2, nombre: "Discípulo" },
  { nivel: 4, nombre: "Siervo Fiel" },
  { nivel: 7, nombre: "Guerrero Espiritual" },
  { nivel: 11, nombre: "Embajador del Reino" },
  { nivel: 16, nombre: "Heredero del Reino" }
];

/* ---------- Edades ---------- */

const EDADES = {
  ninos: {
    nombre: "👧 Niños", rango: "6 a 11 años",
    descripcion: "Textos sencillos, 5 escudos de fe en las batallas, misiones cortas y menos palabras para memorizar.",
    escudos: 5, minimoMision: 3, ajusteMemoria: -1, referencias: 2
  },
  jovenes: {
    nombre: "🧑 Jóvenes", rango: "12 a 17 años",
    descripcion: "El contenido completo, más «En tu mundo»: una conexión de cada etapa con la vida diaria.",
    escudos: 3, minimoMision: 15, ajusteMemoria: 0, referencias: 5
  },
  adultos: {
    nombre: "🧓 Adultos", rango: "18 años en adelante",
    descripcion: "El contenido completo, más «Para profundizar» con términos del hebreo y el griego, y más palabras para memorizar.",
    escudos: 3, minimoMision: 15, ajusteMemoria: 1, referencias: 5
  }
};

// Modo de juego: solo o en grupo (con un líder).
function enGrupo() {
  return jugador.grupo === true;
}

function edad() {
  return EDADES[jugador.edad] ? jugador.edad : "adultos";
}

function config() {
  return EDADES[edad()];
}

// Devuelve el texto de la etapa adaptado a la edad del jugador.
function texto(n, campo) {
  if (edad() === "ninos" && n.ninos && n.ninos[campo]) return n.ninos[campo];
  if (campo === "pregunta") return n.mision.pregunta;
  return n[campo];
}

/* ---------- Estado del jugador ---------- */

function jugadorNuevo() {
  const j = {
    version: 4,
    xp: 0,
    inventario: [],
    logros: [],
    completado: {},   // ej. { "creacion-versiculo": true }
    reflexiones: {},  // respuestas escritas en las misiones
    mundoActual: NIVELES[0].id
  };
  ATRIBUTOS.forEach(([clave]) => { j[clave] = 0; });
  return j;
}

function cargar() {
  const base = jugadorNuevo();
  try {
    const texto = localStorage.getItem(CLAVE_GUARDADO);
    if (!texto) return base;
    const datos = JSON.parse(texto);
    // Se combinan los datos guardados con los valores iniciales,
    // así una partida de una versión anterior no rompe el juego.
    const j = {
      ...base,
      ...datos,
      inventario: Array.isArray(datos.inventario) ? datos.inventario : [],
      logros: Array.isArray(datos.logros) ? datos.logros : [],
      completado: datos.completado || {},
      reflexiones: datos.reflexiones || {}
    };
    ATRIBUTOS.forEach(([clave]) => {
      if (typeof j[clave] !== "number") j[clave] = 0;
    });
    j.version = 4;
    return j;
  } catch (e) {
    return base;
  }
}

function guardar() {
  try {
    localStorage.setItem(CLAVE_GUARDADO, JSON.stringify(jugador));
  } catch (e) {
    // Si el navegador no permite guardar, el juego sigue funcionando.
  }
}

let jugador = cargar();

/* ---------- Utilidades ---------- */

const $ = (id) => document.getElementById(id);

function crear(etiqueta, clase, texto) {
  const el = document.createElement(etiqueta);
  if (clase) el.className = clase;
  if (texto !== undefined) el.textContent = texto;
  return el;
}

function boton(texto, clase, alHacerClic) {
  const b = crear("button", clase, texto);
  b.type = "button";
  b.addEventListener("click", alHacerClic);
  return b;
}

function nivelJugador() {
  return Math.floor(jugador.xp / XP_POR_NIVEL) + 1;
}

function rangoActual() {
  const nivel = nivelJugador();
  let rango = RANGOS[0].nombre;
  RANGOS.forEach((r) => {
    if (nivel >= r.nivel) rango = r.nombre;
  });
  return rango;
}

function hecho(clave) {
  return jugador.completado[clave] === true;
}

// Orden de los pasos de una etapa (la última etapa tiene su propio orden).
function pasosDe(n) {
  return n.orden || PASOS;
}

function nivelCompleto(n) {
  return pasosDe(n).every((p) => hecho(n.id + "-" + p));
}

function nivelAbierto(indice) {
  return indice === 0 || nivelCompleto(NIVELES[indice - 1]);
}

function caminoCompleto() {
  return NIVELES.every(nivelCompleto);
}

function cantidadAbiertos() {
  return NIVELES.filter((n, i) => nivelAbierto(i)).length;
}

/* ---------- Avisos (reemplazan a alert) ---------- */

let avisosPendientes = [];

function avisar(mensaje) {
  avisosPendientes.push(mensaje);
  const caja = $("avisosTexto");
  caja.innerHTML = "";
  // Se muestran solo los últimos 8 avisos (el panel tiene desplazamiento) para no tapar la pantalla.
  avisosPendientes.slice(-8).forEach((m) => caja.appendChild(crear("p", "", m)));
  $("avisos").classList.remove("oculto");
}

function cerrarAvisos() {
  avisosPendientes = [];
  $("avisos").classList.add("oculto");
}

/* ---------- Recompensas ---------- */

// Cada actividad se premia una sola vez: así no se puede acumular XP sin límite.
function recompensar(clave, premio) {
  if (hecho(clave)) return;

  const nivelAntes = nivelJugador();
  const abiertosAntes = cantidadAbiertos();
  const memAntes = cantidadMemorizados();

  jugador.completado[clave] = true;

  // Habilidad Fervor: 5 XP extra en cada paso del camino
  const extra = (tieneHabilidad("fervor") && premio.xp && !clave.startsWith("memo-")) ? 5 : 0;
  const xpGanada = (premio.xp || 0) + extra;
  jugador.xp += xpGanada;

  const partes = ["+" + xpGanada + " XP" + (extra ? " (🔥 Fervor +5)" : "")];
  ATRIBUTOS.forEach(([c, nombre]) => {
    if (premio[c]) {
      jugador[c] += premio[c];
      partes.push("+" + premio[c] + " " + nombre);
    }
  });
  avisar("✨ " + partes.join(" · "));

  if (premio.item && !jugador.inventario.includes(premio.item)) {
    jugador.inventario.push(premio.item);
    avisar("🎒 Nuevo objeto: " + premio.item);
  }

  if (premio.logro) desbloquearLogro(premio.logro);

  if (premio.verso) avisar("📖 Nuevo versículo en tu libro: " + premio.verso);

  const memDespues = cantidadMemorizados();
  HABILIDADES.forEach((h) => {
    if (memAntes < h.requisito && memDespues >= h.requisito) {
      avisar("✨ Nueva habilidad: " + h.nombre + ". " + h.efecto);
      if (h.id === "maestro") desbloquearLogro("Maestro de la Palabra");
    }
  });

  if (nivelJugador() > nivelAntes) {
    avisar("⬆ ¡Subiste al nivel " + nivelJugador() + "! Rango: " + rangoActual());
  }

  const abiertosDespues = cantidadAbiertos();
  if (abiertosDespues > abiertosAntes) {
    avisar("🗺 Nueva etapa abierta: " + NIVELES[abiertosDespues - 1].nombre);
  }

  if (caminoCompleto() && !jugador.logros.includes("Camino Completo")) {
    desbloquearLogro("Camino Completo");
    avisar("🏙 ¡Llegaste a la Nueva Jerusalén! Recorriste las " + NIVELES.length + " etapas del camino.");
  }

  guardar();
  actualizarTodo();
}

function desbloquearLogro(nombre) {
  if (!jugador.logros.includes(nombre)) {
    jugador.logros.push(nombre);
    avisar("🏆 Logro desbloqueado: " + nombre);
  }
}

/* ---------- Pantallas ---------- */

// Selector de edad en la pantalla de inicio.
function dibujarSelectorJuego() {
  const cont = $("selectorJuego");
  cont.innerHTML = "";
  [
    { grupo: false, nombre: "👤 Solo", detalle: "Una persona juega a su ritmo." },
    { grupo: true, nombre: "👥 En grupo", detalle: "Con un líder: dinámicas, preguntas para conversar y batallas por equipos." }
  ].forEach((op) => {
    const b = boton("", "secundario opcion-edad", () => {
      jugador.grupo = op.grupo;
      batalla = null;
      guardar();
      dibujarSelectorJuego();
      aplicarModo();
    });
    b.setAttribute("aria-pressed", String(enGrupo() === op.grupo));
    b.appendChild(crear("strong", "", op.nombre));
    b.appendChild(crear("span", "", op.detalle));
    cont.appendChild(b);
  });
}

function dibujarSelectorEdad() {
  const cont = $("selectorEdad");
  cont.innerHTML = "";
  Object.keys(EDADES).forEach((clave) => {
    const e = EDADES[clave];
    const b = boton("", "secundario opcion-edad", () => {
      jugador.edad = clave;
      batalla = null;
      practica = null;
      guardar();
      dibujarSelectorEdad();
      aplicarModo();
    });
    b.setAttribute("aria-pressed", String(edad() === clave));
    b.appendChild(crear("strong", "", e.nombre));
    b.appendChild(crear("span", "", e.rango));
    cont.appendChild(b);
  });
  $("descripcionEdad").textContent = config().descripcion;
}

// Cada edad tiene su color y la de niños, letra más grande.
function aplicarModo() {
  document.documentElement.classList.remove("modo-ninos", "modo-jovenes", "modo-adultos");
  document.documentElement.classList.add("modo-" + edad());
  const chip = $("modoActual");
  if (chip) chip.textContent = "Modo: " + config().nombre + (enGrupo() ? " · 👥 En grupo" : "");
}

function mostrarInicio() {
  $("pantallaGuia").classList.add("oculto");
  dibujarSelectorEdad();
  dibujarSelectorJuego();
  aplicarModo();
  window.scrollTo(0, 0);
  $("pantallaJuego").classList.add("oculto");
  $("pantallaInicio").classList.remove("oculto");

  const hayProgreso = jugador.xp > 0 || Object.keys(jugador.completado).length > 0;
  $("btnIniciar").textContent = hayProgreso ? "Continuar aventura" : "Iniciar aventura";
  $("btnReiniciar").classList.toggle("oculto", !hayProgreso);
}

function mostrarJuego() {
  $("pantallaInicio").classList.add("oculto");
  $("pantallaJuego").classList.remove("oculto");
  actualizarTodo();
  window.scrollTo(0, 0);
}

// Confirmación dentro de la página: el primer toque pide confirmar,
// el segundo (dentro de 5 segundos) borra el progreso.
let confirmandoReinicio = false;
let temporizadorReinicio = null;

function reiniciar() {
  const btn = $("btnReiniciar");
  if (!confirmandoReinicio) {
    confirmandoReinicio = true;
    btn.textContent = "Toca otra vez para borrar todo";
    btn.classList.add("peligro");
    temporizadorReinicio = setTimeout(restaurarBotonReinicio, 5000);
    return;
  }
  clearTimeout(temporizadorReinicio);
  restaurarBotonReinicio();
  const edadElegida = jugador.edad;
  jugador = jugadorNuevo();
  jugador.edad = edadElegida;
  guardar();
  cerrarAvisos();
  mostrarInicio();
}

function restaurarBotonReinicio() {
  confirmandoReinicio = false;
  const btn = $("btnReiniciar");
  btn.textContent = "Reiniciar progreso";
  btn.classList.remove("peligro");
}

/* ---------- Dibujar la interfaz ---------- */

function actualizarEstado() {
  const nivel = nivelJugador();
  const xpEnNivel = jugador.xp % XP_POR_NIVEL;
  const porcentaje = Math.round((xpEnNivel / XP_POR_NIVEL) * 100);

  $("nivel").textContent = nivel;
  $("rango").textContent = rangoActual();
  $("barraXP").style.width = porcentaje + "%";
  $("barraContenedor").setAttribute("aria-valuenow", String(porcentaje));
  $("textoXP").textContent =
    xpEnNivel + " / " + XP_POR_NIVEL + " XP para el nivel " + (nivel + 1) +
    " (total: " + jugador.xp + " XP)";

  // Transformación del personaje al completar el Nuevo Nacimiento
  const nuevo = NIVELES.find((n) => n.id === "nuevo-nacimiento");
  $("transformacion").classList.toggle("oculto", !(nuevo && nivelCompleto(nuevo)));

  const cont = $("estadisticas");
  cont.innerHTML = "";
  ATRIBUTOS.forEach(([c, nombre]) => {
    const p = crear("p", "", nombre + ": ");
    p.appendChild(crear("strong", "", String(jugador[c])));
    cont.appendChild(p);
  });
}

function actualizarMapa() {
  const cont = $("mundos");
  cont.innerHTML = "";

  NIVELES.forEach((n, i) => {
    const abierto = nivelAbierto(i);
    const icono = nivelCompleto(n) ? "✅" : abierto ? "▶" : "🔒";
    const b = boton(icono + " " + (i + 1) + ". " + n.nombre, "mundo", () => {
      jugador.mundoActual = n.id;
      guardar();
      actualizarTodo();
      $("mundoActual").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    b.disabled = !abierto;
    if (!abierto) b.title = "Completa la etapa anterior para abrirla";
    if (jugador.mundoActual === n.id) b.classList.add("activo");
    cont.appendChild(b);
  });

  PROXIMOS.forEach((nombre, j) => {
    const b = crear("button", "mundo",
      "🔒 " + (NIVELES.length + j + 1) + ". " + nombre + " (próximamente)");
    b.type = "button";
    b.disabled = true;
    cont.appendChild(b);
  });
}

function bloqueVersiculo(texto, cita) {
  const bloque = crear("blockquote", "versiculo");
  bloque.appendChild(crear("p", "", "«" + texto + "»"));
  bloque.appendChild(crear("cite", "", cita + " (RVR1960)"));
  return bloque;
}

function seccionPaso(zona, numero, titulo, completado) {
  const h = crear("h3", "", (completado ? "✅ " : numero + ". ") + titulo);
  zona.appendChild(h);
}

function dibujarVersiculo(zona, n, indice, num) {
  const clave = n.id + "-versiculo";
  seccionPaso(zona, num, "Descubre el versículo clave", hecho(clave));

  if (!hecho(clave)) {
    zona.appendChild(boton("Descubrir versículo", "", () => {
      recompensar(clave, {
        xp: 10, sabiduria: 2, item: n.versiculo.premio, verso: n.versiculo.cita,
        logro: indice === 0 ? "Primer Descubrimiento" : null
      });
    }));
    return;
  }

  zona.appendChild(bloqueVersiculo(n.versiculo.texto, n.versiculo.cita));

  const ens = crear("div", "ensenanza");
  ens.appendChild(crear("p", "rotulo", "Enseñanza"));
  ens.appendChild(crear("p", "", texto(n, "ensenanza")));
  ens.appendChild(crear("p", "rotulo", "Para tu vida"));
  ens.appendChild(crear("p", "", texto(n, "aplicacion")));
  ens.appendChild(crear("p", "rotulo", "Lee también"));
  ens.appendChild(crear("p", "referencias", n.referencias.slice(0, config().referencias).join(" · ")));
  zona.appendChild(ens);
}

function dibujarMision(zona, n, num) {
  const clave = n.id + "-mision";
  seccionPaso(zona, num, n.mision.titulo, hecho(clave));
  zona.appendChild(bloqueVersiculo(n.mision.texto, n.mision.cita));

  if (hecho(clave)) {
    zona.appendChild(crear("p", "exito", "Tu reflexión:"));
    zona.appendChild(crear("p", "reflexion-guardada", jugador.reflexiones[n.id] || ""));
    return;
  }

  const etiqueta = crear("label", "etiqueta",
    (enGrupo() ? "👥 Conversen y escriban la respuesta del grupo: " : "") + texto(n, "pregunta"));
  etiqueta.htmlFor = "reflexion";
  const area = document.createElement("textarea");
  area.id = "reflexion";
  area.rows = 4;
  const ayuda = crear("p", "ayuda", edad() === "ninos"
    ? "Escribe unas palabras con lo que piensas. También puedes pedirle ayuda a un adulto."
    : "Escribe al menos una frase con tus propias palabras.");
  const b = boton("Completar misión", "", () => {
    const respuesta = area.value.trim();
    if (respuesta.length < config().minimoMision) {
      ayuda.textContent = edad() === "ninos"
        ? "✍ Escribe un poquito más."
        : "✍ Escribe un poco más (al menos una frase completa).";
      area.focus();
      return;
    }
    jugador.reflexiones[n.id] = respuesta;
    recompensar(clave, {
      xp: 20, fe: 3, obediencia: 2, amor: 2, verso: n.mision.cita,
      item: n.mision.premio, logro: n.mision.logro
    });
  });
  zona.append(etiqueta, area, ayuda, b);
}

function dibujarDecision(zona, n, num) {
  const clave = n.id + "-decision";
  const d = n.decision;
  seccionPaso(zona, num, d.tipo + ": " + d.nombre, hecho(clave));
  zona.appendChild(crear("p", "", d.situacion));

  const resultado = crear("p", "consecuencia", "");
  resultado.setAttribute("aria-live", "polite");

  if (d.retos || d.cadenas) {
    dibujarRetos(zona, n, clave, resultado);
    return;
  }

  if (hecho(clave)) {
    const buena = d.opciones.find((o) => o.correcta);
    resultado.classList.add("buena");
    resultado.textContent = buena.consecuencia;
    zona.appendChild(resultado);
    return;
  }

  const opciones = crear("div", "opciones columna");
  const botones = [];
  d.opciones.forEach((o) => {
    botones.push(opciones.appendChild(boton(o.texto, "secundario", () => {
      if (o.correcta) {
        recompensar(clave, { perseverancia: 2, ...d.premio });
      } else {
        resultado.className = "consecuencia mala";
        resultado.textContent = "⚠ " + o.consecuencia;
      }
    })));
  });
  if (tieneHabilidad("espada")) {
    zona.appendChild(botonDescartar("⚔ Espada afilada", botones, d.opciones.findIndex((o) => o.correcta)));
  }
  zona.append(opciones, resultado);
}

// Desafíos en secuencia (cadenas, puente, tribunal, combate, carrera, fruto):
// cada reto presenta una mentira o situación, y se supera eligiendo
// la respuesta bíblica correcta de la lista de opciones.
const ETIQUETAS_CADENAS = {
  pendiente: "⛓",
  hecho: "🔓",
  hechoTexto: "rota con",
  dice: " dice: ",
  pregunta: "Elige el versículo que rompe esta cadena"
};

function dibujarRetos(zona, n, clave, resultado) {
  const d = n.decision;
  const retos = d.retos || d.cadenas;
  const opcionesBase = d.opciones || d.versos;
  const et = { ...ETIQUETAS_CADENAS, ...(d.etiquetas || {}) };
  const claveReto = (i) => n.id + "-cadena-" + i;

  const lista = crear("ul", "cadenas");
  let actual = -1;
  retos.forEach((r, i) => {
    const listo = hecho(claveReto(i));
    const texto = listo
      ? et.hecho + " " + r.nombre + ": " + et.hechoTexto + " " + opcionesBase[r.correcta].cita
      : et.pendiente + " " + r.nombre;
    lista.appendChild(crear("li", "cadena" + (listo ? " rota" : ""), texto));
    if (!listo && actual < 0) actual = i;
  });
  zona.appendChild(lista);

  if (hecho(clave) || actual < 0) {
    resultado.classList.add("buena");
    resultado.textContent = d.victoria;
    zona.appendChild(resultado);
    if (!hecho(clave)) recompensar(clave, { perseverancia: 2, ...d.premio });
    return;
  }

  const r = retos[actual];
  zona.appendChild(crear("p", "progreso-retos", "Reto " + (actual + 1) + " de " + retos.length));
  const mentira = crear("p", "mentira");
  mentira.appendChild(crear("strong", "", r.nombre + et.dice));
  mentira.appendChild(document.createTextNode(r.mentira));
  zona.appendChild(mentira);
  zona.appendChild(crear("p", "rotulo", et.pregunta));

  const opciones = crear("div", "opciones columna");
  const botones = [];
  opcionesBase.forEach((v, i) => {
    const b = boton("", "secundario verso-boton", () => {
      if (i !== r.correcta) {
        resultado.className = "consecuencia mala";
        resultado.textContent = "⚠ " + d.error;
        return;
      }
      jugador.completado[claveReto(actual)] = true;
      avisar(et.hecho + " ¡Superaste: " + r.nombre + "!");
      const quedan = retos.some((x, k) => !hecho(claveReto(k)));
      if (quedan) {
        guardar();
        actualizarTodo();
      } else {
        recompensar(clave, { perseverancia: 2, ...d.premio });
      }
    });
    b.appendChild(crear("strong", "", v.cita));
    b.appendChild(crear("span", "", v.texto));
    botones.push(opciones.appendChild(b));
  });
  if (tieneHabilidad("espada")) zona.appendChild(botonDescartar("⚔ Espada afilada", botones, r.correcta));
  zona.append(opciones, resultado);
}

// Misiones secundarias: tareas de la vida real, opcionales.
function dibujarSecundarias(zona, n) {
  if (!n.secundarias) return;
  zona.appendChild(crear("h3", "", "Misiones secundarias (opcionales)"));
  zona.appendChild(crear("p", "ayuda", "Son tareas para tu vida diaria. Marca cada una cuando la hayas hecho."));
  const cont = crear("div", "secundarias");
  n.secundarias.forEach((s) => {
    const clave = n.id + "-sec-" + s.id;
    const tarjeta = crear("div", "secundaria" + (hecho(clave) ? " hecha" : ""));
    tarjeta.appendChild(crear("strong", "", s.titulo));
    tarjeta.appendChild(crear("p", "", s.texto + " (" + s.cita + ")"));
    if (hecho(clave)) {
      tarjeta.appendChild(crear("p", "exito", "✅ Hecho"));
    } else {
      tarjeta.appendChild(boton(s.boton, "secundario", () => recompensar(clave, s.premio)));
    }
    cont.appendChild(tarjeta);
  });
  zona.appendChild(cont);
}

// Evento final: la llegada a la Nueva Jerusalén.
function dibujarFinal(zona) {
  const card = crear("div", "final-card");
  card.appendChild(crear("h3", "", "🏙 Has llegado a la Nueva Jerusalén"));
  card.appendChild(crear("p", "",
    "Recorriste las " + NIVELES.length + " etapas del camino de la salvación. Nivel " +
    nivelJugador() + " · " + rangoActual() + " · " + jugador.inventario.length +
    " herramientas espirituales · " + jugador.logros.length + " logros."));
  card.appendChild(crear("p", "",
    "La salvación fue un regalo de principio a fin: Dios te creó, te buscó, te perdonó, " +
    "te justificó, te hizo nacer de nuevo, te santifica cada día y te llevará a su presencia."));
  card.appendChild(bloqueVersiculo(
    "Y el Espíritu y la Esposa dicen: Ven. Y el que oye, diga: Ven. Y el que tiene sed, venga; y el que quiera, tome del agua de la vida gratuitamente.",
    "Apocalipsis 22:17"));

  card.appendChild(crear("h3", "", "¿Quieres recibir a Cristo?"));
  card.appendChild(crear("p", "",
    "Si nunca le has entregado tu vida a Jesús, puedes hacerlo ahora mismo. No se trata de repetir " +
    "palabras, sino de creer de corazón (Romanos 10:9-10). Puedes orar así:"));
  card.appendChild(crear("p", "oracion",
    "Señor Jesús, reconozco que soy pecador y que necesito tu perdón. Creo que moriste en la cruz " +
    "por mis pecados y que resucitaste. Hoy me arrepiento, abro la puerta de mi corazón y te recibo " +
    "como mi Señor y Salvador. Gracias por el regalo de la vida eterna. Amén."));
  card.appendChild(crear("p", "",
    "Si hiciste esta oración, cuéntaselo a un cristiano de confianza y busca una iglesia donde puedas crecer en la fe."));
  zona.appendChild(card);
}

// Recuadro con lo propio de cada edad, visible desde el comienzo de la etapa.
function dibujarRecuadroEdad(zona, n) {
  const e = edad();
  const card = crear("div", "recuadro-edad");
  if (e === "ninos") {
    card.appendChild(crear("p", "recuadro-titulo", "👧 Para niños"));
    card.appendChild(crear("p", "",
      "En esta etapa los textos están escritos para ti. En la batalla final tienes 5 escudos de fe, y si algo es difícil puedes pedirle ayuda a un adulto."));
    card.appendChild(crear("p", "recuadro-destacado", "💡 " + texto(n, "aplicacion")));
  } else if (e === "jovenes" && n.jovenes) {
    card.appendChild(crear("p", "recuadro-titulo", "🧑 En tu mundo"));
    card.appendChild(crear("p", "", n.jovenes));
  } else if (e === "adultos" && n.profundizar) {
    card.appendChild(crear("p", "recuadro-titulo", "🧓 Para profundizar"));
    card.appendChild(crear("p", "", n.profundizar));
  } else {
    return;
  }
  zona.appendChild(card);
}

// Mentor bíblico de la etapa.
function dibujarMentor(zona, n) {
  if (!n.mentor) return;
  const m = n.mentor;
  const card = crear("div", "mentor");
  card.appendChild(crear("span", "mentor-icono", m.icono));
  const cuerpo = crear("div", "mentor-cuerpo");
  cuerpo.appendChild(crear("p", "rotulo", "Tu mentor en esta etapa"));
  cuerpo.appendChild(crear("strong", "mentor-nombre", m.nombre));
  cuerpo.appendChild(crear("span", "mentor-titulo", m.titulo));
  cuerpo.appendChild(crear("p", "mentor-mensaje", "«" + m.mensaje + "»"));
  cuerpo.appendChild(crear("p", "mentor-historia", "Lee su historia: " + m.historia));
  card.appendChild(cuerpo);
  zona.appendChild(card);
}

/* ---------- Jefe final (batalla) ----------
   El jefe tiene 3 de fuerza; cada respuesta correcta le quita 1.
   El jugador tiene 3 escudos de fe; cada error le quita 1.
   Si se queda sin escudos, cae, pero se levanta y vuelve a intentarlo
   (Proverbios 24:16): la perseverancia también se aprende jugando. */

// Cantidad de escudos según la edad (niños: 5; jóvenes y adultos: 3).
function escudosMaximos() {
  return config().escudos;
}
let batalla = null;

function nuevaBatalla(n) {
  return {
    id: n.id,
    fuerza: n.jefe.rondas.length,
    escudos: escudosMaximos(),
    ronda: 0,
    caido: false,
    turno: 0,          // en grupo: 0 = Equipo 1, 1 = Equipo 2
    puntos: [0, 0],
    mensaje: "",
    tipoMensaje: "",
    // El orden de las opciones cambia en cada intento.
    ordenes: n.jefe.rondas.map((r) => barajar(r.opciones.map((o, i) => i)))
  };
}

function medidor(etiqueta, actual, total, lleno, vacio, clase) {
  const p = crear("p", "medidor " + clase);
  p.appendChild(crear("strong", "", etiqueta + ": "));
  p.appendChild(crear("span", "medidor-iconos", lleno.repeat(actual) + vacio.repeat(total - actual)));
  p.appendChild(crear("span", "medidor-texto", " " + actual + " de " + total));
  return p;
}

function dibujarJefe(zona, n, num) {
  const clave = n.id + "-jefe";
  const j = n.jefe;
  seccionPaso(zona, num, "Jefe final: " + j.nombre, hecho(clave));

  const card = crear("div", "jefe");
  card.appendChild(crear("span", "jefe-icono", j.icono));
  const cuerpo = crear("div", "");
  cuerpo.appendChild(crear("strong", "jefe-nombre", j.nombre));
  cuerpo.appendChild(crear("p", "jefe-amenaza", j.amenaza));
  card.appendChild(cuerpo);
  zona.appendChild(card);

  if (hecho(clave)) {
    zona.appendChild(crear("p", "consecuencia buena", "🏆 " + j.victoria));
    return;
  }

  if (!batalla || batalla.id !== n.id) batalla = nuevaBatalla(n);
  const b = batalla;

  zona.appendChild(medidor("Fuerza del enemigo", b.fuerza, j.rondas.length, "🟥", "⬜", "enemigo"));
  zona.appendChild(medidor("Tus escudos de fe", b.escudos, escudosMaximos(), "🛡", "▫", "jugador-escudos"));

  if (enGrupo()) {
    const marcador = crear("div", "marcador");
    [0, 1].forEach((k) => {
      const eq = crear("div", "equipo" + (b.turno === k && !b.caido ? " turno" : ""));
      eq.appendChild(crear("strong", "", "Equipo " + (k + 1)));
      eq.appendChild(crear("span", "", b.puntos[k] + (b.puntos[k] === 1 ? " punto" : " puntos")));
      marcador.appendChild(eq);
    });
    zona.appendChild(marcador);
  }

  if (b.mensaje) {
    const m = crear("p", "consecuencia " + b.tipoMensaje, b.mensaje);
    m.setAttribute("aria-live", "polite");
    zona.appendChild(m);
  }

  if (b.caido) {
    zona.appendChild(crear("p", "caida",
      "Caíste en esta batalla, pero no es el final. «Porque siete veces cae el justo, y vuelve a levantarse» (Proverbios 24:16)."));
    zona.appendChild(boton("Levantarme y volver a intentar", "", () => {
      batalla = nuevaBatalla(n);
      actualizarTodo();
    }));
    return;
  }

  const r = j.rondas[b.ronda];
  zona.appendChild(crear("p", "progreso-retos", "Ronda " + (b.ronda + 1) + " de " + j.rondas.length +
    (enGrupo() ? " · Responde el Equipo " + (b.turno + 1) : "")));
  zona.appendChild(crear("p", "pregunta-jefe", r.pregunta));

  const opciones = crear("div", "opciones columna");
  const botones = [];
  b.ordenes[b.ronda].forEach((i) => {
    botones.push(opciones.appendChild(boton(r.opciones[i], "secundario", () => {
      const equipo = b.turno;
      if (enGrupo()) b.turno = 1 - b.turno;
      if (i === r.correcta) {
        b.fuerza--;
        b.ronda++;
        if (enGrupo()) b.puntos[equipo]++;
        b.mensaje = "⚔ ¡Golpe certero con la Palabra! " + j.nombre + " pierde fuerza." +
          (enGrupo() ? " Punto para el Equipo " + (equipo + 1) + "." : "");
        b.tipoMensaje = "buena";
        if (b.fuerza <= 0) {
          batalla = null;
          avisar("⚔ ¡Venciste a " + j.nombre + "!");
          if (enGrupo()) {
            const [a, c] = b.puntos;
            avisar(a === c
              ? "👥 ¡Empate! Los dos equipos lucharon juntos y vencieron."
              : "👥 El Equipo " + (a > c ? 1 : 2) + " sumó más puntos (" + Math.max(a, c) + " a " + Math.min(a, c) + "), pero la victoria es de todos.");
          }
          if (n.mentor) avisar("🤝 " + n.mentor.nombre + " se une a tu colección de mentores.");
          recompensar(clave, { xp: 25, perseverancia: 3, fe: 2, item: j.premio });
          return;
        }
      } else {
        b.escudos--;
        b.mensaje = enGrupo()
          ? "💥 " + j.nombre + " golpeó al Equipo " + (equipo + 1) + ". El grupo perdió un escudo de fe."
          : "💥 " + j.nombre + " te golpeó. Perdiste un escudo de fe.";
        b.tipoMensaje = "mala";
        if (b.escudos <= 0) b.caido = true;
      }
      actualizarTodo();
    })));
  });
  if (tieneHabilidad("espada")) {
    zona.appendChild(botonDescartar("⚔ Espada afilada", botones, b.ordenes[b.ronda].indexOf(r.correcta)));
  }
  zona.appendChild(opciones);
}

function dibujarEvaluacion(zona, n, num) {
  const clave = n.id + "-evaluacion";
  const ev = n.evaluacion;
  seccionPaso(zona, num, "Evaluación", hecho(clave));
  zona.appendChild(crear("p", "", ev.pregunta));

  const resultado = crear("p", "", "");
  resultado.setAttribute("aria-live", "polite");

  if (hecho(clave)) {
    resultado.className = "exito";
    resultado.textContent = "Respondiste: " + ev.opciones[ev.correcta] + ". " + ev.explicacion;
    zona.appendChild(resultado);
    return;
  }

  const opciones = crear("div", "opciones columna");
  const botones = [];
  ev.opciones.forEach((texto, i) => {
    botones.push(opciones.appendChild(boton(texto, "secundario", () => {
      if (i === ev.correcta) {
        recompensar(clave, { xp: 30, fe: 3 });
      } else {
        resultado.className = "consecuencia mala";
        resultado.textContent = "❌ No es correcto. Vuelve a leer la enseñanza e inténtalo otra vez.";
      }
    })));
  });
  if (tieneHabilidad("discernimiento")) zona.appendChild(botonDescartar("💡 Discernimiento", botones, ev.correcta));
  zona.append(opciones, resultado);
}

function actualizarNivelActual() {
  const zona = $("mundoActual");
  zona.innerHTML = "";

  let indice = NIVELES.findIndex((n) => n.id === jugador.mundoActual);
  if (indice < 0 || !nivelAbierto(indice)) indice = 0;
  const n = NIVELES[indice];

  zona.appendChild(crear("p", "eyebrow", "Etapa " + (indice + 1) + " de " + (NIVELES.length + PROXIMOS.length)));
  zona.appendChild(crear("h2", "", n.nombre));
  zona.appendChild(crear("p", "", texto(n, "introduccion")));
  dibujarRecuadroEdad(zona, n);
  if (enGrupo() && n.guia) {
    const ap = crear("div", "recuadro-grupo");
    ap.appendChild(crear("p", "recuadro-titulo", "👥 Para empezar en grupo"));
    ap.appendChild(crear("p", "", n.guia.apertura));
    zona.appendChild(ap);
  }

  const obj = crear("ul", "lista objetivos");
  n.objetivos.forEach((o) => obj.appendChild(crear("li", "", o)));
  zona.appendChild(crear("p", "rotulo", "Lo que aprenderás"));
  zona.appendChild(obj);

  dibujarMentor(zona, n);

  pasosDe(n).forEach((paso, k) => {
    const num = k + 1;
    if (paso === "versiculo") dibujarVersiculo(zona, n, indice, num);
    if (paso === "mision") dibujarMision(zona, n, num);
    if (paso === "decision") dibujarDecision(zona, n, num);
    if (paso === "evaluacion") dibujarEvaluacion(zona, n, num);
    if (paso === "jefe") dibujarJefe(zona, n, num);
  });
  dibujarSecundarias(zona, n);

  if (enGrupo() && n.guia) {
    const g = crear("div", "recuadro-grupo");
    g.appendChild(crear("p", "recuadro-titulo", "👥 Conversemos"));
    const ol = crear("ol", "lista");
    n.guia.preguntas.forEach((q) => ol.appendChild(crear("li", "", q)));
    g.appendChild(ol);
    g.appendChild(crear("p", "rotulo", "Actividad"));
    g.appendChild(crear("p", "", n.guia.actividad));
    g.appendChild(crear("p", "rotulo", "Oración de cierre"));
    g.appendChild(crear("p", "oracion", n.guia.oracion));
    zona.appendChild(g);
  }

  const nav = crear("div", "navegacion-etapa");

  if (nivelCompleto(n)) {
    if (indice === NIVELES.length - 1) {
      dibujarFinal(zona);
    } else {
      zona.appendChild(crear("p", "exito final",
        "🎉 ¡Completaste esta etapa! Ya puedes avanzar a «" + NIVELES[indice + 1].nombre + "»."));
      nav.appendChild(boton("Ir a la siguiente etapa →", "", () => {
        jugador.mundoActual = NIVELES[indice + 1].id;
        guardar();
        cerrarAvisos();
        actualizarTodo();
        $("mundoActual").scrollIntoView({ behavior: "smooth", block: "start" });
      }));
    }
  }

  nav.appendChild(boton("🗺 Volver al mapa", "secundario", irAlMapa));
  nav.appendChild(boton("🏠 Volver al inicio", "secundario", () => {
    cerrarAvisos();
    mostrarInicio();
  }));
  zona.appendChild(nav);
}

function irAlMapa() {
  $("mapa").scrollIntoView({ behavior: "smooth", block: "start" });
}

function actualizarLista(id, elementos, textoVacio) {
  const lista = $(id);
  lista.innerHTML = "";
  if (elementos.length === 0) {
    lista.appendChild(crear("li", "vacio", textoVacio));
    return;
  }
  elementos.forEach((e) => lista.appendChild(crear("li", "", e)));
}

function actualizarTodo() {
  aplicarModo();
  actualizarEstado();
  actualizarMapa();
  actualizarNivelActual();
  actualizarLista("inventario", jugador.inventario, "Aún no tienes herramientas espirituales.");
  actualizarLista("logros", jugador.logros.map((l) => "🏆 " + l), "Aún no tienes logros.");
  actualizarLibro();
}

/* ---------- Libro de versículos (colección) ---------- */

// Cada etapa aporta dos cartas: su versículo clave y su versículo de misión.
const LIBRO = [];
NIVELES.forEach((n, i) => {
  LIBRO.push({
    id: n.id + "-v", cita: n.versiculo.cita, texto: n.versiculo.texto,
    etapa: i + 1, nombreEtapa: n.nombre, tipo: "Versículo clave", paso: n.id + "-versiculo"
  });
  LIBRO.push({
    id: n.id + "-m", cita: n.mision.cita, texto: n.mision.texto,
    etapa: i + 1, nombreEtapa: n.nombre, tipo: "Versículo de misión", paso: n.id + "-mision"
  });
});
LIBRO.forEach((v, i) => { v.numero = String(i + 1).padStart(2, "0"); });

// Memorizar versículos desbloquea habilidades con efecto real en el juego.
const HABILIDADES = [
  {
    id: "discernimiento", nombre: "💡 Discernimiento", requisito: 3, cita: "Hebreos 5:14",
    efecto: "En las evaluaciones puedes descartar una respuesta incorrecta."
  },
  {
    id: "fervor", nombre: "🔥 Fervor", requisito: 8, cita: "Romanos 12:11",
    efecto: "Ganas 5 XP extra en cada paso del camino que completes."
  },
  {
    id: "espada", nombre: "⚔ Espada afilada", requisito: 16, cita: "Hebreos 4:12",
    efecto: "En los desafíos puedes descartar una respuesta incorrecta."
  },
  {
    id: "maestro", nombre: "👑 Maestro de la Palabra", requisito: LIBRO.length, cita: "Salmo 119:11",
    efecto: "Guardaste en tu corazón todos los versículos del camino."
  }
];

function descubierto(v) { return hecho(v.paso); }
function memorizado(v) { return hecho("memo-" + v.id); }
function cantidadMemorizados() { return LIBRO.filter(memorizado).length; }

function tieneHabilidad(id) {
  const h = HABILIDADES.find((x) => x.id === id);
  return cantidadMemorizados() >= h.requisito;
}

// Botón de habilidad: descarta (tacha) una respuesta incorrecta.
function botonDescartar(nombre, botones, indiceCorrecto) {
  const b = boton("Usar " + nombre + ": descartar una respuesta incorrecta", "habilidad", () => {
    const k = botones.findIndex((x, i) => i !== indiceCorrecto && !x.disabled);
    if (k >= 0) {
      botones[k].disabled = true;
      botones[k].classList.add("descartada");
    }
    b.remove();
  });
  return b;
}

function barajar(lista) {
  const copia = lista.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Separa la puntuación de la palabra: «tierra.» → « + tierra + .»
function separarPalabra(token) {
  const m = token.match(/^([«¿¡("]*)(.*?)([.,;:!?»)"]*)$/);
  return { antes: m[1], palabra: m[2], despues: m[3] };
}

let practica = null; // ejercicio de memorización abierto

function iniciarPractica(v) {
  const tokens = v.texto.split(/\s+/).map(separarPalabra);

  // Se ocultan las palabras más largas (las más significativas).
  const base = tokens.length > 20 ? 5 : tokens.length > 10 ? 4 : 3;
  const cuantos = Math.max(2, base + config().ajusteMemoria);
  const huecos = tokens
    .map((t, i) => ({ i, largo: t.palabra.length }))
    .filter((c) => c.largo >= 4)
    .sort((a, b) => b.largo - a.largo || a.i - b.i)
    .slice(0, cuantos)
    .map((c) => c.i)
    .sort((a, b) => a - b);

  // Dos palabras de otros versículos como distractores.
  const propias = new Set(tokens.map((t) => t.palabra.toLowerCase()));
  const otras = [];
  LIBRO.forEach((o) => {
    if (o.id === v.id) return;
    o.texto.split(/\s+/).map(separarPalabra).forEach((t) => {
      const w = t.palabra;
      if (w.length >= 6 && !propias.has(w.toLowerCase()) && !otras.includes(w)) otras.push(w);
    });
  });

  practica = {
    id: v.id,
    tokens,
    huecos,
    llenos: 0,
    usadas: [],
    banco: barajar(huecos.map((i) => tokens[i].palabra).concat(barajar(otras).slice(0, 2))),
    mensaje: ""
  };
  actualizarLibro();
  $("practica").scrollIntoView({ behavior: "smooth", block: "start" });
}

function elegirPalabra(j) {
  const esperada = practica.tokens[practica.huecos[practica.llenos]].palabra;
  if (practica.banco[j] !== esperada) {
    practica.mensaje = "⚠ Esa palabra no va en este espacio. Lee la frase otra vez e intenta con otra.";
    actualizarLibro();
    return;
  }
  practica.usadas.push(j);
  practica.llenos++;
  practica.mensaje = "";

  if (practica.llenos >= practica.huecos.length) {
    const v = LIBRO.find((x) => x.id === practica.id);
    if (!memorizado(v)) {
      avisar("⭐ ¡Memorizaste " + v.cita + "!");
      recompensar("memo-" + v.id, { xp: 10, sabiduria: 2 });
      return;
    }
  }
  actualizarLibro();
}

function cerrarPractica() {
  practica = null;
  actualizarLibro();
}

function dibujarPractica(panel) {
  const v = LIBRO.find((x) => x.id === practica.id);
  const completo = practica.llenos >= practica.huecos.length;

  panel.appendChild(crear("h3", "", "Memorizar: " + v.cita));
  panel.appendChild(crear("p", "", v.tipo + " de la etapa " + v.etapa + ": " + v.nombreEtapa));

  const verso = crear("blockquote", "versiculo practica-verso");
  const p = crear("p", "");
  p.appendChild(document.createTextNode("«"));
  practica.tokens.forEach((t, i) => {
    if (i > 0) p.appendChild(document.createTextNode(" "));
    const k = practica.huecos.indexOf(i);
    if (k < 0) {
      p.appendChild(document.createTextNode(t.antes + t.palabra + t.despues));
      return;
    }
    p.appendChild(document.createTextNode(t.antes));
    if (k < practica.llenos) {
      p.appendChild(crear("span", "hueco lleno", t.palabra));
    } else {
      const h = crear("span", "hueco" + (k === practica.llenos ? " actual" : ""), "______");
      h.setAttribute("aria-label", k === practica.llenos ? "espacio actual" : "espacio vacío");
      p.appendChild(h);
    }
    p.appendChild(document.createTextNode(t.despues));
  });
  p.appendChild(document.createTextNode("»"));
  verso.appendChild(p);
  verso.appendChild(crear("cite", "", v.cita + " (RVR1960)"));
  panel.appendChild(verso);

  if (completo) {
    panel.appendChild(crear("p", "exito",
      "⭐ ¡Versículo completo! Léelo en voz alta una vez más para guardarlo en tu corazón."));
    const acciones = crear("div", "opciones");
    acciones.append(
      boton("Practicar otra vez", "secundario", () => iniciarPractica(v)),
      boton("Cerrar", "secundario", cerrarPractica)
    );
    panel.appendChild(acciones);
    return;
  }

  panel.appendChild(crear("p", "rotulo", "Toca las palabras en orden para llenar los espacios"));
  const banco = crear("div", "banco");
  practica.banco.forEach((w, j) => {
    const b = boton(w, "secundario palabra", () => elegirPalabra(j));
    b.disabled = practica.usadas.includes(j);
    banco.appendChild(b);
  });
  panel.appendChild(banco);

  const msg = crear("p", "consecuencia" + (practica.mensaje ? " mala" : ""), practica.mensaje);
  msg.setAttribute("aria-live", "polite");
  panel.appendChild(msg);
  panel.appendChild(boton("Cerrar práctica", "secundario", cerrarPractica));
}

function actualizarLibro() {
  const cont = $("libro");
  cont.innerHTML = "";

  const desc = LIBRO.filter(descubierto).length;
  const mem = cantidadMemorizados();

  cont.appendChild(crear("h2", "", "Libro de versículos"));
  cont.appendChild(crear("p", "",
    "Cada versículo que descubres en el camino se guarda aquí. Memorízalo para ganar una estrella ⭐ y desbloquear habilidades."));
  cont.appendChild(crear("p", "resumen-libro",
    "📖 Descubiertos: " + desc + " de " + LIBRO.length + " · ⭐ Memorizados: " + mem + " de " + LIBRO.length));

  // Habilidades
  cont.appendChild(crear("p", "rotulo", "Habilidades"));
  const hab = crear("ul", "habilidades");
  HABILIDADES.forEach((h) => {
    const activa = mem >= h.requisito;
    const li = crear("li", "habilidad-item" + (activa ? " activa" : ""));
    li.appendChild(crear("strong", "", (activa ? "" : "🔒 ") + h.nombre));
    li.appendChild(crear("span", "", activa
      ? h.efecto + " (" + h.cita + ")"
      : "Se desbloquea con " + h.requisito + " versículos memorizados (llevas " + Math.min(mem, h.requisito) + ")."));
    hab.appendChild(li);
  });
  cont.appendChild(hab);

  // Cartas
  cont.appendChild(crear("p", "rotulo", "Versículos (" + desc + " de " + LIBRO.length + ")"));
  const cartas = crear("div", "cartas");
  LIBRO.forEach((v) => {
    const d = descubierto(v);
    const m = memorizado(v);
    const b = crear("button", "carta" + (m ? " memorizada" : d ? " descubierta" : " bloqueada"));
    b.type = "button";
    b.disabled = !d;
    if (practica && practica.id === v.id) b.classList.add("activo");
    b.appendChild(crear("span", "carta-num", "#" + v.numero + " · Etapa " + v.etapa));
    b.appendChild(crear("strong", "carta-cita", d ? v.cita : "???"));
    b.appendChild(crear("span", "carta-estado", m ? "⭐ Memorizado" : d ? "📖 Practicar" : "🔒 Por descubrir"));
    b.addEventListener("click", () => iniciarPractica(v));
    cartas.appendChild(b);
  });
  cont.appendChild(cartas);

  // Cartas de mentores: se ganan al vencer al jefe de cada etapa
  const mentoresGanados = NIVELES.filter((n) => hecho(n.id + "-jefe")).length;
  cont.appendChild(crear("p", "rotulo", "Mentores bíblicos (" + mentoresGanados + " de " + NIVELES.length + ")"));
  const cartasM = crear("div", "cartas");
  NIVELES.forEach((n, i) => {
    const ganado = hecho(n.id + "-jefe");
    const c = crear("div", "carta carta-mentor" + (ganado ? " memorizada" : " bloqueada"));
    c.appendChild(crear("span", "carta-num", "Etapa " + (i + 1)));
    c.appendChild(crear("strong", "carta-cita", ganado ? n.mentor.icono + " " + n.mentor.nombre : "???"));
    c.appendChild(crear("span", "carta-estado", ganado ? n.mentor.titulo : "🔒 Vence al jefe final"));
    if (ganado) c.appendChild(crear("span", "carta-num", n.mentor.historia));
    cartasM.appendChild(c);
  });
  cont.appendChild(cartasM);

  const panel = crear("div", "practica");
  panel.id = "practica";
  cont.appendChild(panel);
  if (practica) dibujarPractica(panel);
}

/* ---------- Guía para maestros ---------- */

function mostrarGuia() {
  $("pantallaInicio").classList.add("oculto");
  $("pantallaJuego").classList.add("oculto");
  $("pantallaGuia").classList.remove("oculto");
  dibujarGuia();
  window.scrollTo(0, 0);
}

function dibujarGuia() {
  const cont = $("contenidoGuia");
  cont.innerHTML = "";

  const intro = crear("section", "tarjeta");
  intro.appendChild(crear("h2", "", "Cómo usar el juego en grupo"));
  intro.appendChild(crear("p", "", GUIA_GENERAL.proposito));
  intro.appendChild(crear("p", "rotulo", "Antes de la reunión"));
  const prep = crear("ul", "lista");
  GUIA_GENERAL.preparacion.forEach((t) => prep.appendChild(crear("li", "", t)));
  intro.appendChild(prep);

  intro.appendChild(crear("p", "rotulo", "Estructura de cada reunión"));
  const est = crear("div", "estructura");
  GUIA_GENERAL.estructura.forEach((e) => {
    const fila = crear("div", "estructura-fila");
    fila.appendChild(crear("strong", "estructura-tiempo", e.tiempo));
    const d = crear("div", "");
    d.appendChild(crear("strong", "", e.parte));
    d.appendChild(crear("p", "", e.detalle));
    fila.appendChild(d);
    est.appendChild(fila);
  });
  intro.appendChild(est);

  intro.appendChild(crear("p", "rotulo", "Consejos"));
  const con = crear("ul", "lista");
  GUIA_GENERAL.consejos.forEach((t) => con.appendChild(crear("li", "", t)));
  intro.appendChild(con);
  cont.appendChild(intro);

  const etapas = crear("section", "tarjeta");
  etapas.appendChild(crear("h2", "", "Las 12 reuniones"));
  etapas.appendChild(crear("p", "", "Toque cada etapa para ver su plan de reunión."));
  NIVELES.forEach((n, i) => {
    const det = document.createElement("details");
    det.className = "guia-etapa";
    det.appendChild(crear("summary", "", (i + 1) + ". " + n.nombre + " · " + n.versiculo.cita));
    const cuerpo = crear("div", "guia-cuerpo");
    cuerpo.appendChild(crear("p", "rotulo", "Objetivos"));
    const obj = crear("ul", "lista");
    n.objetivos.forEach((o) => obj.appendChild(crear("li", "", o)));
    cuerpo.appendChild(obj);
    cuerpo.appendChild(crear("p", "rotulo", "Mentor y jefe final"));
    cuerpo.appendChild(crear("p", "", n.mentor.icono + " " + n.mentor.nombre + " (" + n.mentor.historia + ") · " +
      n.jefe.icono + " " + n.jefe.nombre));
    cuerpo.appendChild(crear("p", "rotulo", "1. Apertura (10 min)"));
    cuerpo.appendChild(crear("p", "", n.guia.apertura));
    cuerpo.appendChild(crear("p", "rotulo", "2. Jugar la etapa juntos (20-25 min)"));
    cuerpo.appendChild(crear("p", "", "Versículo clave: " + n.versiculo.cita + ". Desafío: " + n.decision.tipo + ": " + n.decision.nombre + "."));
    cuerpo.appendChild(crear("p", "rotulo", "3. Conversemos (10-15 min)"));
    const ol = crear("ol", "lista");
    n.guia.preguntas.forEach((q) => ol.appendChild(crear("li", "", q)));
    cuerpo.appendChild(ol);
    cuerpo.appendChild(crear("p", "rotulo", "4. Actividad (10 min)"));
    cuerpo.appendChild(crear("p", "", n.guia.actividad));
    cuerpo.appendChild(crear("p", "rotulo", "Oración de cierre"));
    cuerpo.appendChild(crear("p", "oracion", n.guia.oracion));
    det.appendChild(cuerpo);
    etapas.appendChild(det);
  });
  cont.appendChild(etapas);
}

/* ---------- Arranque ---------- */

$("btnIniciar").addEventListener("click", mostrarJuego);
$("btnReiniciar").addEventListener("click", reiniciar);
$("btnMenu").addEventListener("click", mostrarInicio);
$("btnCerrarAvisos").addEventListener("click", cerrarAvisos);
$("btnGuia").addEventListener("click", mostrarGuia);
$("btnSalirGuia").addEventListener("click", mostrarInicio);
$("btnSalirGuia2").addEventListener("click", mostrarInicio);
$("btnCambiarEdad").addEventListener("click", () => {
  mostrarInicio();
  $("selectorEdad").scrollIntoView({ behavior: "smooth", block: "center" });
});
$("btnArriba").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
$("btnLibro").addEventListener("click", () => {
  $("libro").scrollIntoView({ behavior: "smooth", block: "start" });
});

mostrarInicio();
