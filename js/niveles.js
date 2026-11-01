/* =========================================
   El Camino de la Salvación — contenido de los niveles (v1.2)
   Basado en el PROMPT-MAESTRO.txt (12 niveles).
   Textos bíblicos: Reina-Valera 1960.

   Para agregar un nivel nuevo, copia un bloque { ... } de NIVELES,
   cambia su contenido y quita su nombre de PROXIMOS.
   ========================================= */

"use strict";

const NIVELES = [
  /* ---------- NIVEL 1 ---------- */
  {
    id: "creacion",
    nombre: "La Creación",
    introduccion: "Antes de todo, estaba Dios. Él creó los cielos, la tierra y al ser humano con un propósito.",
    objetivos: ["Comprender el diseño original de Dios.", "Descubrir el propósito humano."],
    versiculo: {
      texto: "En el principio creó Dios los cielos y la tierra.",
      cita: "Génesis 1:1",
      premio: "📖 Pergamino de Génesis 1:1"
    },
    ensenanza: "Dios es el Creador soberano de todo lo que existe. El ser humano no es producto del azar: fue creado a imagen de Dios para relacionarse con Él, cuidar la creación y vivir en dependencia de su Palabra.",
    aplicacion: "Tu valor no depende de lo que haces ni de lo que otros dicen de ti, sino de Aquel que te creó con amor y propósito.",
    referencias: ["Génesis 1:26-28", "Génesis 2:7", "Génesis 2:15-17", "Salmo 139:14", "Colosenses 1:16"],
    mision: {
      titulo: "Misión: Hecho a su imagen",
      texto: "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó.",
      cita: "Génesis 1:27",
      pregunta: "¿Qué significa para ti haber sido creado a imagen de Dios?",
      premio: "🔑 Llave del Propósito",
      logro: "Explorador de la Creación"
    },
    decision: {
      tipo: "Trampa",
      nombre: "Independencia de Dios",
      situacion: "Mientras exploras el jardín, una voz te susurra: «No necesitas a Dios. Tú puedes decidir por tu cuenta qué es bueno y qué es malo».",
      opciones: [
        {
          texto: "Tiene razón: yo decido lo que está bien para mí.",
          correcta: false,
          consecuencia: "Caíste en la trampa del orgullo. Querer decidir el bien y el mal sin Dios fue la raíz de la caída (Génesis 3:5). La independencia de Dios lleva a la separación de Él."
        },
        {
          texto: "Dios me creó, y Él sabe lo que es bueno para mí.",
          correcta: true,
          consecuencia: "¡Bien! Reconociste a tu Creador. La verdadera sabiduría es confiar en el Señor y no apoyarse en la propia prudencia (Proverbios 3:5-6)."
        }
      ],
      premio: { xp: 15, humildad: 3 }
    },
    evaluacion: {
      pregunta: "¿Para qué creó Dios al ser humano a su imagen?",
      opciones: [
        "Para que viviera sin necesitar a nadie",
        "Para relacionarse con Él y cuidar su creación",
        "Por casualidad, sin un propósito"
      ],
      correcta: 1,
      explicacion: "Génesis 1:26-28 y 2:15 muestran que Dios creó al ser humano para tener comunión con Él y administrar su creación."
    }
  },

  /* ---------- NIVEL 2 ---------- */
  {
    id: "caida",
    nombre: "La Caída",
    introduccion: "En el huerto apareció la serpiente con una pregunta que sembró la duda. Aprende a reconocer sus mentiras.",
    objetivos: ["Comprender el origen del pecado.", "Identificar los engaños espirituales."],
    versiculo: {
      texto: "Entonces la serpiente dijo a la mujer: No moriréis; sino que sabe Dios que el día que comáis de él, serán abiertos vuestros ojos, y seréis como Dios, sabiendo el bien y el mal.",
      cita: "Génesis 3:4-5",
      premio: "📖 Pergamino de Génesis 3"
    },
    ensenanza: "El pecado entró al mundo cuando el ser humano dudó de la palabra de Dios y desobedeció. Trajo vergüenza, temor, separación y muerte. Pero en medio del juicio, Dios prometió un Redentor que aplastaría la cabeza de la serpiente.",
    aplicacion: "Toda tentación empieza poniendo en duda lo que Dios dijo. Conocer bien su Palabra es tu defensa contra el engaño.",
    referencias: ["Génesis 2:16-17", "Génesis 3:15", "Romanos 5:12", "2 Corintios 11:3", "Juan 8:44"],
    mision: {
      titulo: "Misión: El pecado entró al mundo",
      texto: "Por tanto, como el pecado entró en el mundo por un hombre, y por el pecado la muerte, así la muerte pasó a todos los hombres, por cuanto todos pecaron.",
      cita: "Romanos 5:12",
      pregunta: "¿Por qué crees que nadie puede salvarse por sus propias fuerzas?",
      premio: "🔍 Lupa del Discernimiento",
      logro: "Testigo de la Caída"
    },
    decision: {
      tipo: "Discernimiento",
      nombre: "La voz de la serpiente",
      situacion: "La serpiente te habla. De estas tres frases, solo una es mentira. Descúbrela comparándola con lo que Dios dijo.",
      opciones: [
        {
          texto: "«Dios os dio todos los árboles del huerto para comer, menos uno».",
          correcta: false,
          consecuencia: "Esa frase es verdad: Dios les permitió comer de todo árbol del huerto, excepto del árbol del conocimiento del bien y del mal (Génesis 2:16-17). Sigue buscando la mentira."
        },
        {
          texto: "«No moriréis».",
          correcta: true,
          consecuencia: "¡Venciste a la serpiente! Esa es la mentira: contradice directamente lo que Dios dijo en Génesis 2:17. Jesús llamó al diablo «padre de mentira» (Juan 8:44)."
        },
        {
          texto: "«Hay un árbol del conocimiento del bien y del mal».",
          correcta: false,
          consecuencia: "Esa frase es verdad: el árbol existía (Génesis 2:9). La serpiente mezcla verdades con mentiras para engañar. Sigue buscando."
        }
      ],
      premio: { xp: 15, sabiduria: 3 }
    },
    evaluacion: {
      pregunta: "Cuando Dios le preguntó a Adán qué había hecho, ¿cómo respondió?",
      opciones: [
        "Confesó su pecado y pidió perdón",
        "Culpó a la mujer que Dios le había dado",
        "Dijo que no había comido del árbol"
      ],
      correcta: 1,
      explicacion: "Adán se autojustificó culpando a la mujer, y ella culpó a la serpiente (Génesis 3:12-13). La autojustificación es una de las trampas de este nivel."
    }
  },

  /* ---------- NIVEL 3 ---------- */
  {
    id: "conviccion",
    nombre: "Conciencia de Pecado",
    introduccion: "Frente al espejo de la Palabra, cada persona ve su verdadera condición. No para quedarse en la culpa, sino para buscar a Dios.",
    objetivos: ["Reconocer la condición humana delante de Dios."],
    versiculo: {
      texto: "por cuanto todos pecaron, y están destituidos de la gloria de Dios,",
      cita: "Romanos 3:23",
      premio: "📖 Pergamino de Romanos 3:23"
    },
    ensenanza: "No hay justo, ni aun uno: todos hemos pecado y necesitamos la salvación. La Palabra de Dios funciona como un espejo que nos muestra lo que somos, y el Espíritu Santo nos convence de pecado. Su propósito no es condenarnos, sino llevarnos a Cristo.",
    aplicacion: "Reconocer tu pecado con honestidad no es derrota: es el primer paso para recibir el perdón y la vida que Dios ofrece.",
    referencias: ["Romanos 3:10-12", "Santiago 1:23-25", "Juan 16:8", "1 Juan 1:8-9", "Salmo 51:3-4"],
    mision: {
      titulo: "Misión: El espejo espiritual",
      texto: "Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro.",
      cita: "Romanos 6:23",
      pregunta: "Este versículo empieza con una mala noticia y termina con una buena noticia. ¿Qué significa eso para ti?",
      premio: "🪞 Espejo de la Palabra",
      logro: "Corazón Sincero"
    },
    decision: {
      tipo: "Enemigos",
      nombre: "Negación, Orgullo e Hipocresía",
      situacion: "Te miras en el espejo de la Palabra y ves tu reflejo con claridad. ¿Qué respondes?",
      opciones: [
        {
          texto: "«Yo no tengo pecado; soy una buena persona».",
          correcta: false,
          consecuencia: "Te venció la Negación. «Si decimos que no tenemos pecado, nos engañamos a nosotros mismos, y la verdad no está en nosotros» (1 Juan 1:8)."
        },
        {
          texto: "«Por lo menos no soy tan malo como otros».",
          correcta: false,
          consecuencia: "Te venció el Orgullo. Compararse con otros fue el error del fariseo en la parábola de Jesús; el que se humilló fue el que volvió a casa justificado (Lucas 18:9-14)."
        },
        {
          texto: "«Reconozco que he pecado y necesito a Dios».",
          correcta: true,
          consecuencia: "¡Venciste a los tres enemigos! «Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados» (1 Juan 1:9)."
        }
      ],
      premio: { xp: 15, humildad: 3 }
    },
    evaluacion: {
      pregunta: "Según Romanos 6:23, ¿qué es la dádiva (el regalo) de Dios?",
      opciones: [
        "Un premio para los que se portan bien",
        "La vida eterna en Cristo Jesús",
        "Una segunda oportunidad para ganarse el cielo"
      ],
      correcta: 1,
      explicacion: "La vida eterna es un regalo, no un pago. El pecado paga con muerte, pero Dios regala vida en Cristo (Romanos 6:23; Efesios 2:8-9)."
    }
  },

  /* ---------- NIVEL 4 ---------- */
  {
    id: "llamado",
    nombre: "El Llamado de Dios",
    introduccion: "Dios no espera que tú des el primer paso: Él te busca y toca a la puerta de tu corazón. Aprende a reconocer su voz.",
    objetivos: ["Reconocer la voz de Dios.", "Entender que la salvación empieza por iniciativa de Dios."],
    versiculo: {
      texto: "He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él, y cenaré con él, y él conmigo.",
      cita: "Apocalipsis 3:20",
      premio: "📖 Pergamino de Apocalipsis 3:20"
    },
    ensenanza: "La salvación comienza con Dios. El Padre atrae a las personas hacia Cristo, y Cristo llama con amor a la puerta de cada corazón. Dios toma la iniciativa, y el ser humano es llamado a responder: oír su voz y abrir la puerta.",
    aplicacion: "Cuando sientas que Dios te habla por su Palabra, por un mensaje o por su Espíritu, no lo dejes para después. Hoy es el día para responder.",
    referencias: ["Juan 10:27", "Mateo 11:28", "Isaías 55:6", "Romanos 5:8", "2 Corintios 6:2"],
    mision: {
      titulo: "Misión: El Padre te atrae",
      texto: "Ninguno puede venir a mí, si el Padre que me envió no le trajere; y yo le resucitaré en el día postrero.",
      cita: "Juan 6:44",
      pregunta: "¿De qué maneras has sentido que Dios toca a la puerta de tu corazón?",
      premio: "👂 Oído Atento",
      logro: "Llamado por su Nombre"
    },
    decision: {
      tipo: "Discernimiento",
      nombre: "Las tres voces",
      situacion: "Tres voces te hablan al mismo tiempo. Solo una es la voz del Buen Pastor. ¿Cuál sigues?",
      opciones: [
        {
          texto: "«Primero arregla tu vida, y después podrás venir a Dios».",
          correcta: false,
          consecuencia: "Esa es la voz del Legalismo. Dios no espera que te arregles primero: «siendo aún pecadores, Cristo murió por nosotros» (Romanos 5:8)."
        },
        {
          texto: "«Ven a mí tal como estás, y yo te haré descansar».",
          correcta: true,
          consecuencia: "¡Esa es la voz del Buen Pastor! «Venid a mí todos los que estáis trabajados y cargados» (Mateo 11:28). Sus ovejas oyen su voz y le siguen (Juan 10:27)."
        },
        {
          texto: "«No hay prisa; mañana tendrás tiempo para Dios».",
          correcta: false,
          consecuencia: "Esa es la voz de la Postergación. La Biblia dice: «He aquí ahora el día de salvación» (2 Corintios 6:2). Busca al Señor mientras puede ser hallado (Isaías 55:6)."
        }
      ],
      premio: { xp: 15, fe: 3 }
    },
    evaluacion: {
      pregunta: "Según Apocalipsis 3:20, ¿qué hace Jesús?",
      opciones: [
        "Derriba la puerta para entrar",
        "Espera a que nosotros lo busquemos primero",
        "Está a la puerta y llama"
      ],
      correcta: 2,
      explicacion: "Jesús toma la iniciativa: está a la puerta y llama. Él no fuerza la entrada; quien oye su voz y abre, recibe su comunión (Apocalipsis 3:20)."
    }
  }
];

// Los tres versículos que se usan para romper las cadenas del nivel 5.
const VERSOS_CADENAS = [
  {
    cita: "Proverbios 28:13",
    texto: "El que encubre sus pecados no prosperará; mas el que los confiesa y se aparta alcanzará misericordia."
  },
  {
    cita: "Isaías 1:18",
    texto: "Si vuestros pecados fueren como la grana, como la nieve serán emblanquecidos."
  },
  {
    cita: "2 Corintios 7:10",
    texto: "Porque la tristeza que es según Dios produce arrepentimiento para salvación, de que no hay que arrepentirse; pero la tristeza del mundo produce muerte."
  }
];

/* ---------- NIVEL 5 ---------- */
NIVELES.push({
  id: "arrepentimiento",
  nombre: "Arrepentimiento",
  introduccion: "Un hijo se fue lejos de casa y lo perdió todo. Un día volvió en sí y decidió regresar. Descubre qué es el verdadero arrepentimiento.",
  objetivos: ["Comprender el verdadero arrepentimiento.", "Abandonar los caminos equivocados y volver al Padre."],
  versiculo: {
    texto: "Así que, arrepentíos y convertíos, para que sean borrados vuestros pecados; para que vengan de la presencia del Señor tiempos de refrigerio,",
    cita: "Hechos 3:19",
    premio: "📖 Pergamino de Hechos 3:19"
  },
  ensenanza: "Arrepentirse (en griego, metanoia) es un cambio de mente que produce un cambio de dirección: reconocer el pecado, apartarse de él y volverse a Dios. No es castigarse a uno mismo ni ganarse el perdón con esfuerzo. Es volver al Padre, que sale corriendo a recibirnos.",
  aplicacion: "No necesitas tener todo resuelto para volver a Dios. Como el hijo pródigo, basta con levantarte e ir al Padre.",
  referencias: ["Lucas 15:11-32", "Isaías 55:7", "Mateo 3:8", "Proverbios 28:13", "2 Corintios 7:10"],
  mision: {
    titulo: "Misión: El Padre corre a tu encuentro",
    texto: "Y levantándose, vino a su padre. Y cuando aún estaba lejos, lo vio su padre, y fue movido a misericordia, y corrió, y se echó sobre su cuello, y le besó.",
    cita: "Lucas 15:20",
    pregunta: "¿Qué te enseña la reacción del padre sobre la manera en que Dios recibe a quien se arrepiente?",
    premio: "💍 Anillo del Padre",
    logro: "De Regreso a Casa"
  },
  decision: {
    tipo: "Desafío",
    nombre: "Romper cadenas",
    situacion: "Tres cadenas impiden que el hijo vuelva a casa. Cada una le repite una mentira. Rómpelas eligiendo el versículo que responde a cada mentira.",
    cadenas: [
      {
        nombre: "Cadena de la Excusa",
        mentira: "No es mi culpa: fueron las circunstancias y los demás los que me trajeron hasta aquí.",
        correcta: 0
      },
      {
        nombre: "Cadena de la Vergüenza",
        mentira: "Lo que hice es demasiado grave. Dios nunca me va a recibir.",
        correcta: 1
      },
      {
        nombre: "Cadena del Remordimiento",
        mentira: "Me siento muy mal por lo que hice, pero voy a seguir viviendo igual.",
        correcta: 2
      }
    ],
    versos: VERSOS_CADENAS,
    error: "Ese versículo es verdad, pero no responde a esta mentira. Lee otra vez lo que dice la cadena.",
    victoria: "¡Rompiste las tres cadenas! El hijo confesó su pecado sin excusas, creyó en la misericordia del Padre y cambió de dirección. Eso es el verdadero arrepentimiento (Lucas 15:18-24).",
    premio: { xp: 15, humildad: 3 }
  },
  evaluacion: {
    pregunta: "¿Qué significa la palabra griega metanoia, que se traduce «arrepentimiento»?",
    opciones: [
      "Castigarse a uno mismo por lo que hizo",
      "Un cambio de mente que lleva a un cambio de dirección",
      "Sentir mucha tristeza, aunque no cambie nada"
    ],
    correcta: 1,
    explicacion: "Metanoia es cambiar de mente y de rumbo. Por eso Juan el Bautista pedía «frutos dignos de arrepentimiento» (Mateo 3:8)."
  }
});

/* ---------- NIVEL 6 ---------- */
NIVELES.push({
  id: "fe",
  nombre: "Fe en Cristo",
  introduccion: "Entre tú y la vida eterna hay un abismo que nadie puede cruzar con sus fuerzas. Pero Dios tendió un puente: Jesucristo. Aprende a caminar sobre sus promesas.",
  objetivos: ["Confiar completamente en Cristo.", "Entender que la salvación es por gracia, por medio de la fe."],
  versiculo: {
    texto: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",
    cita: "Juan 3:16",
    premio: "📖 Pergamino de Juan 3:16"
  },
  ensenanza: "La fe que salva es confiar completamente en Cristo y en su obra en la cruz, y no en nuestras propias obras. Es poner todo el peso de nuestra vida sobre Él. Esa fe nace al oír la Palabra de Dios, y por medio de ella recibimos el regalo de la salvación.",
  aplicacion: "La fe no es un salto a ciegas: es pisar firme sobre las promesas de Aquel que nunca ha fallado.",
  referencias: ["Romanos 10:9-10", "Romanos 10:17", "Hebreos 11:6", "Juan 1:12", "Hechos 16:31"],
  mision: {
    titulo: "Misión: Salvos por gracia",
    texto: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.",
    cita: "Efesios 2:8-9",
    pregunta: "¿Por qué es importante que la salvación sea un regalo y no un premio por nuestras obras?",
    premio: "⚓ Ancla de la Esperanza",
    logro: "Caminante de la Fe"
  },
  decision: {
    tipo: "Desafío",
    nombre: "El puente de la fe",
    situacion: "Para cruzar el puente debes pasar sobre tres abismos. Desde cada uno te susurran una duda. Avanza eligiendo la promesa bíblica que te sostiene.",
    etiquetas: {
      pendiente: "🕳",
      hecho: "🌉",
      hechoTexto: "cruzado con",
      dice: " susurra: ",
      pregunta: "Elige la promesa que te sostiene sobre este abismo"
    },
    retos: [
      { nombre: "Abismo de la Duda", mentira: "¿Y si Dios no cumple lo que promete?", correcta: 0 },
      { nombre: "Abismo de las Obras", mentira: "Para cruzar tienes que ganarte el camino con tus buenas obras.", correcta: 1 },
      { nombre: "Abismo del Temor", mentira: "¿Y si te caes? ¿Y si Dios te suelta a mitad del camino?", correcta: 2 }
    ],
    opciones: [
      { cita: "Números 23:19", texto: "Dios no es hombre, para que mienta, ni hijo de hombre para que se arrepienta. Él dijo, ¿y no hará? Habló, ¿y no lo ejecutará?" },
      { cita: "Tito 3:5", texto: "Nos salvó, no por obras de justicia que nosotros hubiéramos hecho, sino por su misericordia." },
      { cita: "Juan 10:28", texto: "Y yo les doy vida eterna; y no perecerán jamás, ni nadie las arrebatará de mi mano." }
    ],
    error: "Esa promesa es verdad, pero no responde a esta duda. Lee otra vez lo que te susurra el abismo.",
    victoria: "¡Cruzaste el puente! La fe no se apoya en lo que sientes, sino en lo que Dios prometió. Cristo es el puente (Juan 14:6).",
    premio: { xp: 15, fe: 3 }
  },
  evaluacion: {
    pregunta: "Según Efesios 2:8-9, ¿cómo somos salvos?",
    opciones: [
      "Por nuestras buenas obras",
      "Por gracia, por medio de la fe",
      "Por cumplir con los ritos de la iglesia"
    ],
    correcta: 1,
    explicacion: "La salvación es un don de Dios que recibimos por la fe, no por obras, para que nadie se gloríe (Efesios 2:8-9)."
  }
});

/* ---------- NIVEL 7 ---------- */
NIVELES.push({
  id: "justificacion",
  nombre: "Justificación",
  introduccion: "Te encuentras en el tribunal del cielo. El acusador presenta cargos contra ti, pero tienes un Abogado que nunca ha perdido un caso.",
  objetivos: ["Comprender la justicia imputada de Cristo.", "Saber responder a las acusaciones con la Palabra."],
  versiculo: {
    texto: "Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo;",
    cita: "Romanos 5:1",
    premio: "📖 Pergamino de Romanos 5:1"
  },
  ensenanza: "Justificar es un término de tribunal: Dios, el Juez justo, declara justo al pecador que cree en Cristo. No lo declara justo porque sea inocente, sino porque Cristo pagó toda su deuda en la cruz, y la justicia de Cristo le es imputada, es decir, acreditada a su cuenta. El resultado es paz con Dios y ninguna condenación.",
  aplicacion: "Cuando el acusador te recuerde tu pasado, recuérdale la sentencia del Juez: en Cristo, el caso está cerrado.",
  referencias: ["Romanos 3:24-26", "Romanos 4:5", "Romanos 8:33-34", "Colosenses 2:13-14", "Apocalipsis 12:10"],
  mision: {
    titulo: "Misión: El gran intercambio",
    texto: "Al que no conoció pecado, por nosotros lo hizo pecado, para que nosotros fuésemos hechos justicia de Dios en él.",
    cita: "2 Corintios 5:21",
    pregunta: "Jesús tomó tu pecado y te dio su justicia. ¿Qué significa para ti que Dios te declare justo en Cristo?",
    premio: "📜 Acta de Perdón",
    logro: "Declarado Justo"
  },
  decision: {
    tipo: "Tribunal celestial",
    nombre: "Las acusaciones",
    situacion: "El acusador presenta tres cargos ante el Juez. Tu Abogado, Jesucristo, responde con la Palabra. Elige el versículo que Él presenta para cada cargo.",
    etiquetas: {
      pendiente: "⚖",
      hecho: "✔",
      hechoTexto: "respondida con",
      dice: ": ",
      pregunta: "Elige el versículo que tu Abogado presenta ante el Juez"
    },
    retos: [
      { nombre: "Acusación de condenación", mentira: "Esta persona quebrantó la ley de Dios. Merece ser condenada.", correcta: 0 },
      { nombre: "Acusación de la deuda", mentira: "Su deuda es demasiado grande. Nadie puede pagarla.", correcta: 1 },
      { nombre: "Acusación de abandono", mentira: "¿Quién va a defender a esta persona? No tiene a nadie.", correcta: 2 }
    ],
    opciones: [
      { cita: "Romanos 8:1", texto: "Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús." },
      { cita: "Colosenses 2:14", texto: "Anulando el acta de los decretos que había contra nosotros, que nos era contraria, quitándola de en medio y clavándola en la cruz." },
      { cita: "1 Juan 2:1", texto: "Si alguno hubiere pecado, abogado tenemos para con el Padre, a Jesucristo el justo." }
    ],
    error: "Ese versículo es verdad, pero no responde a este cargo. Escucha otra vez lo que dice el acusador.",
    victoria: "Sentencia del Juez: ¡JUSTIFICADO! «¿Quién acusará a los escogidos de Dios? Dios es el que justifica» (Romanos 8:33).",
    premio: { xp: 15, fe: 3 }
  },
  evaluacion: {
    pregunta: "¿Qué significa ser justificado?",
    opciones: [
      "Volverse perfecto y no pecar nunca más",
      "Dar excusas para defender los propios errores",
      "Ser declarado justo por Dios gracias a la obra de Cristo"
    ],
    correcta: 2,
    explicacion: "La justificación es una declaración de Dios: por la fe en Cristo, el pecador es declarado justo porque la justicia de Cristo le es acreditada (Romanos 4:5; 2 Corintios 5:21)."
  }
});

/* ---------- NIVEL 8 ---------- */
NIVELES.push({
  id: "nuevo-nacimiento",
  nombre: "Nuevo Nacimiento",
  introduccion: "Una noche, un maestro religioso llamado Nicodemo visitó a Jesús. Escuchó algo que no esperaba: necesitaba nacer de nuevo. Aquí tu personaje será transformado.",
  objetivos: ["Entender la regeneración.", "Descubrir tu nueva identidad en Cristo."],
  versiculo: {
    texto: "Respondió Jesús y le dijo: De cierto, de cierto te digo, que el que no naciere de nuevo, no puede ver el reino de Dios.",
    cita: "Juan 3:3",
    premio: "📖 Pergamino de Juan 3:3"
  },
  ensenanza: "El nuevo nacimiento, o regeneración, es la obra del Espíritu Santo que da vida espiritual nueva a quien cree en Cristo. No es una mejora por fuera ni un esfuerzo religioso: es nacer del Espíritu. Dios quita el corazón de piedra, da un corazón nuevo y nos hace sus hijos.",
  aplicacion: "No eres solo una versión mejorada de la persona que eras antes: en Cristo eres una nueva criatura.",
  referencias: ["Juan 3:5-8", "Ezequiel 36:26", "Tito 3:5", "Juan 1:12-13", "1 Pedro 1:23"],
  mision: {
    titulo: "Misión: Nueva criatura",
    texto: "De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas.",
    cita: "2 Corintios 5:17",
    pregunta: "¿Qué «cosas viejas» quisieras que Dios hiciera nuevas en tu vida?",
    premio: "🕊 Corazón Nuevo",
    logro: "Nueva Criatura"
  },
  decision: {
    tipo: "Transformación",
    nombre: "La pregunta de Nicodemo",
    situacion: "Nicodemo no entiende y te pregunta: «¿Cómo puede un hombre nacer siendo viejo?» ¿Qué le respondes?",
    opciones: [
      {
        texto: "«Tienes que esforzarte mucho por cambiar tus malos hábitos».",
        correcta: false,
        consecuencia: "Eso es reformarse, no nacer de nuevo. La vida nueva no es obra humana sino del Espíritu Santo (Juan 3:6; Tito 3:5)."
      },
      {
        texto: "«Es cumplir con todos los ritos religiosos».",
        correcta: false,
        consecuencia: "Nicodemo era muy religioso, y aun así necesitaba nacer de nuevo. La religión no puede dar vida (Juan 3:1-3)."
      },
      {
        texto: "«Es nacer del Espíritu: Dios da una vida nueva a quien cree en Jesús».",
        correcta: true,
        consecuencia: "¡Exacto! «Lo que es nacido de la carne, carne es; y lo que es nacido del Espíritu, espíritu es» (Juan 3:6). Tu peregrino ha sido transformado en una nueva criatura."
      }
    ],
    premio: { xp: 15, fe: 2, amor: 2 }
  },
  evaluacion: {
    pregunta: "¿Quién produce el nuevo nacimiento?",
    opciones: [
      "El Espíritu Santo",
      "La persona, con su fuerza de voluntad",
      "El pastor de la iglesia"
    ],
    correcta: 0,
    explicacion: "Jesús enseñó que es necesario nacer del agua y del Espíritu, y comparó la obra del Espíritu con el viento (Juan 3:5-8)."
  }
});

/* ---------- NIVEL 9 ---------- */
NIVELES.push({
  id: "santificacion",
  nombre: "Santificación",
  introduccion: "Ya eres hijo de Dios, y ahora empieza el crecimiento. El Espíritu Santo va formando en ti el carácter de Cristo, día tras día.",
  objetivos: ["Crecer espiritualmente.", "Reconocer el fruto del Espíritu en la vida diaria."],
  versiculo: {
    texto: "Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza; contra tales cosas no hay ley.",
    cita: "Gálatas 5:22-23",
    premio: "📖 Pergamino de Gálatas 5:22-23"
  },
  ensenanza: "La santificación es el proceso por el cual el Espíritu Santo nos va haciendo semejantes a Cristo. La justificación ocurre en un momento; la santificación dura toda la vida. El fruto del Espíritu no se fabrica con esfuerzo: se cultiva permaneciendo unidos a Cristo, como la rama a la vid.",
  aplicacion: "Crecer es caminar cada día con Dios: orar, leer su Palabra, servir a otros y compartir tu fe.",
  referencias: ["Juan 15:4-5", "Romanos 12:1-2", "2 Corintios 3:18", "1 Tesalonicenses 4:3", "Filipenses 2:12-13"],
  mision: {
    titulo: "Misión: La buena obra continúa",
    texto: "estando persuadido de esto, que el que comenzó en vosotros la buena obra, la perfeccionará hasta el día de Jesucristo;",
    cita: "Filipenses 1:6",
    pregunta: "¿En qué área de tu vida necesitas que el Espíritu Santo siga obrando?",
    premio: "🍇 Fruto del Espíritu",
    logro: "Discípulo en Crecimiento"
  },
  decision: {
    tipo: "Desafío",
    nombre: "El fruto en la vida diaria",
    situacion: "La santificación se ve en las situaciones de cada día. Para cada situación, elige el fruto del Espíritu que más se necesita.",
    etiquetas: {
      pendiente: "🌱",
      hecho: "🍇",
      hechoTexto: "vivida con",
      dice: ": ",
      pregunta: "¿Qué fruto del Espíritu necesitas aquí?"
    },
    retos: [
      { nombre: "La espera", mentira: "Llevas mucho tiempo orando por algo y la respuesta no llega.", correcta: 0 },
      { nombre: "La tentación a solas", mentira: "Tienes la oportunidad de hacer algo indebido y nadie se enteraría.", correcta: 1 },
      { nombre: "La persona difícil", mentira: "Alguien que te ha tratado mal necesita tu ayuda.", correcta: 2 }
    ],
    opciones: [
      { cita: "Paciencia", texto: "Esperar en Dios con fe, sin desesperarse (Santiago 1:4)." },
      { cita: "Templanza (dominio propio)", texto: "Decir no a lo que deshonra a Dios (Tito 2:11-12)." },
      { cita: "Amor", texto: "Amar y servir aun a quien no lo merece (Lucas 6:27-28)." }
    ],
    error: "Ese fruto es bueno, pero no es el que más necesitas en esta situación. Piensa otra vez.",
    victoria: "¡Muy bien! El fruto del Espíritu se nota en las decisiones de cada día. Sigue unido a la vid (Juan 15:5).",
    premio: { xp: 15, obediencia: 3 }
  },
  secundarias: [
    {
      id: "oracion",
      titulo: "🙏 Oración",
      texto: "Dedica unos minutos a hablar con Dios: dale gracias, preséntale tus necesidades y escucha.",
      cita: "Filipenses 4:6",
      boton: "Ya oré hoy",
      premio: { xp: 5, fe: 2 }
    },
    {
      id: "estudio",
      titulo: "📖 Estudio bíblico",
      texto: "Lee hoy Juan 15 y anota una enseñanza que te haya hablado.",
      cita: "Salmo 119:105",
      boton: "Ya lo leí",
      premio: { xp: 5, sabiduria: 2 }
    },
    {
      id: "servicio",
      titulo: "🤝 Servicio",
      texto: "Haz hoy algo concreto por alguien, sin esperar nada a cambio.",
      cita: "Gálatas 5:13",
      boton: "Ya serví",
      premio: { xp: 5, amor: 2 }
    },
    {
      id: "evangelismo",
      titulo: "📣 Evangelismo",
      texto: "Cuéntale a alguien lo que Dios ha hecho en tu vida, o envíale un versículo de esperanza.",
      cita: "Mateo 28:19-20",
      boton: "Ya lo compartí",
      premio: { xp: 5, amor: 1, perseverancia: 1 }
    }
  ],
  evaluacion: {
    pregunta: "¿Cuál es la diferencia entre justificación y santificación?",
    opciones: [
      "Son exactamente lo mismo",
      "La justificación ocurre en un momento; la santificación es un crecimiento de toda la vida",
      "La santificación es lo que nos hace salvos"
    ],
    correcta: 1,
    explicacion: "Dios nos declara justos en un momento (Romanos 5:1) y luego nos va transformando de gloria en gloria a la imagen de Cristo (2 Corintios 3:18)."
  }
});

/* ---------- NIVEL 10 ---------- */
NIVELES.push({
  id: "guerra",
  nombre: "Guerra Espiritual",
  introduccion: "El enemigo no quiere que avances. Pero no peleas solo ni desarmado: Dios te ha dado su armadura, y la victoria ya fue ganada en la cruz.",
  objetivos: ["Aprender a usar la armadura de Dios.", "Reconocer los ataques del enemigo y resistirlos con la Palabra."],
  versiculo: {
    texto: "Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza. Vestíos de toda la armadura de Dios, para que podáis estar firmes contra las asechanzas del diablo.",
    cita: "Efesios 6:10-11",
    premio: "📖 Pergamino de Efesios 6"
  },
  ensenanza: "Nuestra lucha no es contra carne y sangre, sino contra fuerzas espirituales de maldad. Cristo ya venció en la cruz y despojó a los principados y potestades. Nosotros estamos firmes en su victoria, vestidos con su armadura: la verdad, la justicia, el evangelio de la paz, la fe, la salvación, la Palabra de Dios y la oración en todo tiempo.",
  aplicacion: "No enfrentes los ataques con tus propias fuerzas. Cada pieza de la armadura es una provisión de Cristo para ti.",
  referencias: ["Efesios 6:12-18", "Colosenses 2:15", "Santiago 4:7", "1 Pedro 5:8-9", "1 Juan 4:4"],
  mision: {
    titulo: "Misión: Armas poderosas en Dios",
    texto: "porque las armas de nuestra milicia no son carnales, sino poderosas en Dios para la destrucción de fortalezas,",
    cita: "2 Corintios 10:4",
    pregunta: "¿Qué pieza de la armadura de Dios necesitas usar más en tu vida diaria, y por qué?",
    premio: "🛡 Armadura de Dios",
    logro: "Soldado de Cristo"
  },
  decision: {
    tipo: "Combate",
    nombre: "Los cinco enemigos",
    situacion: "Cinco enemigos te atacan uno tras otro. Para cada ataque, elige la pieza de la armadura de Dios que mejor lo resiste.",
    etiquetas: {
      pendiente: "🌑",
      hecho: "☀",
      hechoTexto: "vencido con",
      dice: " ataca: ",
      pregunta: "Elige la pieza de la armadura para esta batalla"
    },
    retos: [
      { nombre: "La Mentira", mentira: "«Dios no te ama. Tu pasado te define».", correcta: 0 },
      { nombre: "El Temor", mentira: "Lanza dardos de fuego: «Todo te va a salir mal».", correcta: 2 },
      { nombre: "La Tentación", mentira: "«Hazlo. Nadie lo sabrá».", correcta: 3 },
      { nombre: "El Desánimo", mentira: "«Ya no puedes más. Ríndete».", correcta: 4 },
      { nombre: "La Amargura", mentira: "«Nunca perdones lo que te hicieron».", correcta: 1 }
    ],
    opciones: [
      { cita: "Cinturón de la verdad", texto: "Conoceréis la verdad, y la verdad os hará libres (Juan 8:32; Efesios 6:14)." },
      { cita: "Calzado del evangelio de la paz", texto: "Perdonándoos unos a otros, como Dios también os perdonó a vosotros en Cristo (Efesios 4:32; 6:15)." },
      { cita: "Escudo de la fe", texto: "Con que podéis apagar todos los dardos de fuego del maligno (Efesios 6:16)." },
      { cita: "Espada del Espíritu", texto: "La palabra de Dios. Jesús venció la tentación diciendo: «Escrito está» (Mateo 4:4; Efesios 6:17)." },
      { cita: "Oración en todo tiempo", texto: "Los que esperan a Jehová tendrán nuevas fuerzas (Isaías 40:31; Efesios 6:18)." }
    ],
    error: "Esa pieza es poderosa, pero no es la mejor defensa contra este ataque. Fíjate en qué está usando el enemigo.",
    victoria: "¡Venciste a los cinco enemigos! «Someteos, pues, a Dios; resistid al diablo, y huirá de vosotros» (Santiago 4:7).",
    premio: { xp: 15, perseverancia: 2, fe: 2 }
  },
  evaluacion: {
    pregunta: "Según Efesios 6:17, ¿qué es la espada del Espíritu?",
    opciones: [
      "Nuestra fuerza de voluntad",
      "La palabra de Dios",
      "Un objeto bendecido"
    ],
    correcta: 1,
    explicacion: "«Y tomad el yelmo de la salvación, y la espada del Espíritu, que es la palabra de Dios» (Efesios 6:17)."
  }
});

/* ---------- NIVEL 11 ---------- */
NIVELES.push({
  id: "perseverancia",
  nombre: "Perseverancia",
  introduccion: "La vida cristiana no es una carrera de velocidad, sino de resistencia. Muchos han corrido antes que tú y te animan a llegar a la meta.",
  objetivos: ["Mantenerse firme en la fe hasta el final.", "Soltar los pesos que impiden avanzar."],
  versiculo: {
    texto: "Por tanto, nosotros también, teniendo en derredor nuestro tan grande nube de testigos, despojémonos de todo peso y del pecado que nos asedia, y corramos con paciencia la carrera que tenemos por delante, puestos los ojos en Jesús, el autor y consumador de la fe,",
    cita: "Hebreos 12:1-2",
    premio: "📖 Pergamino de Hebreos 12"
  },
  ensenanza: "Perseverar es mantenerse firme en la fe hasta el final. No lo logramos con nuestras fuerzas: Dios es quien nos guarda y termina la obra que comenzó. En la carrera habrá cansancio, obstáculos y disciplina, pero Dios usa todo eso para nuestro bien y nos da nuevas fuerzas.",
  aplicacion: "Cuando quieras rendirte, no mires el camino que falta: mira a Jesús, que corre contigo y te espera en la meta.",
  referencias: ["Hebreos 12:5-11", "1 Corintios 9:24-27", "Mateo 24:13", "Santiago 1:12", "Judas 24"],
  mision: {
    titulo: "Misión: No te canses",
    texto: "No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos.",
    cita: "Gálatas 6:9",
    pregunta: "¿Qué «peso» necesitas soltar para correr mejor la carrera de la fe?",
    premio: "🏃 Ojos Puestos en Jesús",
    logro: "Corredor Fiel"
  },
  decision: {
    tipo: "Carrera espiritual",
    nombre: "Los obstáculos del camino",
    situacion: "En la carrera aparecen tres obstáculos que intentan detenerte. Supéralos con el versículo que te ayuda a seguir corriendo.",
    etiquetas: {
      pendiente: "🚧",
      hecho: "🏁",
      hechoTexto: "superado con",
      dice: " te dice: ",
      pregunta: "Elige el versículo que te ayuda a seguir corriendo"
    },
    retos: [
      { nombre: "El Peso del Pasado", mentira: "«No puedes avanzar por todo lo que hiciste antes».", correcta: 0 },
      { nombre: "El Cansancio", mentira: "«Estás agotado. Ya no vale la pena seguir».", correcta: 1 },
      { nombre: "La Tibieza", mentira: "«No hace falta tanto. Con lo mínimo basta».", correcta: 2 }
    ],
    opciones: [
      { cita: "Filipenses 3:13-14", texto: "Olvidando ciertamente lo que queda atrás, y extendiéndome a lo que está delante, prosigo a la meta." },
      { cita: "Isaías 40:31", texto: "Los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán." },
      { cita: "Romanos 12:11", texto: "En lo que requiere diligencia, no perezosos; fervientes en espíritu, sirviendo al Señor." }
    ],
    error: "Ese versículo es verdad, pero no responde a este obstáculo. Lee otra vez lo que te dice.",
    victoria: "¡Superaste los obstáculos! Corres con los ojos puestos en Jesús, que es poderoso para guardarte sin caída (Judas 24).",
    premio: { xp: 15, perseverancia: 3 }
  },
  evaluacion: {
    pregunta: "Según Hebreos 12:2, ¿dónde debemos poner los ojos para no desmayar en la carrera?",
    opciones: [
      "En nuestros propios logros",
      "En lo que hacen los demás",
      "En Jesús, el autor y consumador de la fe"
    ],
    correcta: 2,
    explicacion: "Jesús comenzó nuestra fe y la llevará a su plenitud. Mirarlo a Él nos da fuerza para seguir (Hebreos 12:2-3)."
  }
});

/* ---------- NIVEL 12 ---------- */
NIVELES.push({
  id: "glorificacion",
  nombre: "Glorificación",
  introduccion: "La historia empezó en un huerto y termina en una ciudad. Ante ti se abren las puertas de la Nueva Jerusalén, donde Dios vive con su pueblo para siempre.",
  objetivos: ["Alcanzar la meta final.", "Comprender la esperanza eterna del creyente."],
  versiculo: {
    texto: "Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor; porque las primeras cosas pasaron.",
    cita: "Apocalipsis 21:4",
    premio: "📖 Pergamino de Apocalipsis 21:4"
  },
  ensenanza: "La glorificación es la etapa final de la salvación. Dios completará su obra en nosotros: nos dará un cuerpo resucitado y glorioso, libre de pecado, enfermedad y muerte, para vivir para siempre en su presencia. Lo que se perdió en el Edén queda restaurado: el árbol de la vida vuelve a aparecer y veremos el rostro de Dios.",
  aplicacion: "Vive hoy con la esperanza del mañana. Las pruebas de ahora son pasajeras; lo mejor está por venir.",
  referencias: ["Romanos 8:29-30", "1 Corintios 15:51-54", "Filipenses 3:20-21", "1 Juan 3:2", "Apocalipsis 22:1-5"],
  mision: {
    titulo: "Misión: Verán su rostro",
    texto: "Y no habrá más maldición; y el trono de Dios y del Cordero estará en ella, y sus siervos le servirán, y verán su rostro, y su nombre estará en sus frentes.",
    cita: "Apocalipsis 22:3-4",
    pregunta: "¿Qué es lo que más anhelas de la eternidad con Dios?",
    premio: "👑 Corona de Vida",
    logro: "Heredero de la Promesa"
  },
  decision: {
    tipo: "Evento final",
    nombre: "Las puertas de la Nueva Jerusalén",
    situacion: "Llegas ante las puertas de la ciudad santa. Un ángel te pregunta: «¿Por qué razón puedes entrar?»",
    opciones: [
      {
        texto: "«Porque hice más cosas buenas que malas».",
        correcta: false,
        consecuencia: "Nadie entra por sus méritos: la salvación es por gracia, no por obras (Efesios 2:8-9). Piensa otra vez."
      },
      {
        texto: "«Porque recorrí los doce niveles del camino».",
        correcta: false,
        consecuencia: "El camino te enseñó mucho, pero no es lo que te da la entrada. Jesús dijo: «Yo soy el camino» (Juan 14:6). Piensa otra vez."
      },
      {
        texto: "«Porque Jesús, el Cordero, me lavó con su sangre, y mi nombre está escrito en su libro».",
        correcta: true,
        consecuencia: "¡Bienvenido a casa! Solo entran los que están inscritos en el libro de la vida del Cordero (Apocalipsis 21:27). La salvación fue un regalo de principio a fin."
      }
    ],
    premio: { xp: 15, fe: 3, amor: 3 }
  },
  evaluacion: {
    pregunta: "¿Qué árbol del Edén vuelve a aparecer en la Nueva Jerusalén?",
    opciones: [
      "El árbol del conocimiento del bien y del mal",
      "El árbol de la vida",
      "Una higuera"
    ],
    correcta: 1,
    explicacion: "El árbol de la vida estaba en el Edén (Génesis 2:9) y vuelve a aparecer junto al río de agua de vida (Apocalipsis 22:2): Dios restaura lo que se perdió."
  }
});

// Todos los niveles del prompt maestro ya están construidos.
const PROXIMOS = [];

/* =========================================
   MENTORES Y JEFES FINALES (v1.2)
   Cada etapa tiene un mentor bíblico que acompaña al peregrino
   y un jefe final simbólico que se vence con 3 respuestas correctas.
   ========================================= */

const MENTORES_Y_JEFES = {
  creacion: {
    mentor: {
      nombre: "Adán", icono: "🏞", titulo: "El primer hombre",
      mensaje: "Dios me formó del polvo de la tierra y sopló en mí aliento de vida. Me puso en el huerto para cultivarlo y cuidarlo, y caminaba conmigo. Aprende lo que yo olvidé: fuiste creado para depender de Él.",
      historia: "Génesis 2:7-17"
    },
    jefe: {
      nombre: "El Orgullo", icono: "🦚",
      amenaza: "«¿Para qué necesitas a Dios? Eres suficiente por ti mismo».",
      rondas: [
        { pregunta: "Según Génesis 1:1, ¿quién creó los cielos y la tierra?", opciones: ["Dios", "El ser humano", "La casualidad"], correcta: 0 },
        { pregunta: "Según Génesis 1:27, ¿a imagen de quién fue creado el ser humano?", opciones: ["De los ángeles", "De Dios", "De los animales"], correcta: 1 },
        { pregunta: "Según Génesis 2:15, ¿para qué puso Dios al hombre en el huerto?", opciones: ["Para que se fuera de allí", "Para que construyera una ciudad", "Para que lo labrara y lo guardara"], correcta: 2 }
      ],
      victoria: "El Orgullo cae derrotado. «Dios resiste a los soberbios, y da gracia a los humildes» (Santiago 4:6).",
      premio: "🌿 Raíz de Humildad"
    }
  },
  caida: {
    mentor: {
      nombre: "Eva", icono: "🌱", titulo: "La madre de todos los vivientes",
      mensaje: "La serpiente me hizo dudar con una pregunta, y escuché su voz en lugar de la de Dios. Pero aun en ese día triste, Dios prometió que de mi descendencia vendría Aquel que aplastaría la cabeza de la serpiente.",
      historia: "Génesis 3:1-20"
    },
    jefe: {
      nombre: "La Serpiente Antigua", icono: "🐍",
      amenaza: "«¿Conque Dios os ha dicho...? Nadie puede confiar en su palabra».",
      rondas: [
        { pregunta: "¿Qué le advirtió Dios a Adán sobre el árbol del conocimiento del bien y del mal?", opciones: ["Que podía comer de él cuando quisiera", "Que no comiera de él, porque moriría", "Que ese árbol no existía"], correcta: 1 },
        { pregunta: "¿Cuál fue la mentira principal de la serpiente?", opciones: ["«No moriréis»", "«Cuidad el huerto»", "«Dios os ama»"], correcta: 0 },
        { pregunta: "¿Qué promesa hizo Dios en Génesis 3:15?", opciones: ["Que la serpiente ganaría para siempre", "Que el ser humano volvería solo al Edén", "Que la simiente de la mujer heriría a la serpiente en la cabeza"], correcta: 2 }
      ],
      victoria: "La Serpiente es vencida por la Palabra. El Hijo de Dios vino para deshacer las obras del diablo (1 Juan 3:8).",
      premio: "🔦 Antorcha de la Verdad"
    }
  },
  conviccion: {
    mentor: {
      nombre: "David", icono: "🎶", titulo: "El rey que se arrepintió",
      mensaje: "Yo era rey, y aun así pequé gravemente y quise esconderlo. Cuando el profeta Natán me confrontó, dejé de excusarme y le dije: «Pequé contra Jehová». De ese dolor nació mi oración del Salmo 51. Mirarte en el espejo duele, pero sana.",
      historia: "2 Samuel 12:1-13; Salmo 51"
    },
    jefe: {
      nombre: "La Hipocresía", icono: "🎭",
      amenaza: "«Aparenta por fuera. Nadie tiene que saber cómo eres por dentro».",
      rondas: [
        { pregunta: "Según Romanos 3:23, ¿quiénes han pecado?", opciones: ["Solo las personas malas", "Todos", "Nadie"], correcta: 1 },
        { pregunta: "Según Romanos 6:23, ¿cuál es la paga del pecado?", opciones: ["Una multa", "Nada importante", "La muerte"], correcta: 2 },
        { pregunta: "Según 1 Juan 1:9, ¿qué hace Dios si confesamos nuestros pecados?", opciones: ["Nos perdona y nos limpia de toda maldad", "Nos castiga más", "Nos ignora"], correcta: 0 }
      ],
      victoria: "La Hipocresía pierde su máscara. «He aquí, tú amas la verdad en lo íntimo» (Salmo 51:6).",
      premio: "🕯 Lámpara de Sinceridad"
    }
  },
  llamado: {
    mentor: {
      nombre: "Samuel", icono: "🕯", titulo: "El niño que escuchó",
      mensaje: "Era apenas un niño cuando escuché que me llamaban de noche. Tres veces pensé que era el sacerdote Elí. Él me enseñó a responder: «Habla, porque tu siervo oye». Dios también te llama por tu nombre.",
      historia: "1 Samuel 3:1-10"
    },
    jefe: {
      nombre: "El Ruido", icono: "📢",
      amenaza: "«Hay demasiadas voces. Nunca vas a escuchar la de Dios».",
      rondas: [
        { pregunta: "Según Apocalipsis 3:20, ¿qué hace Jesús?", opciones: ["Fuerza la puerta", "Está a la puerta y llama", "Se aleja"], correcta: 1 },
        { pregunta: "Según Juan 6:44, ¿quién atrae a las personas hacia Cristo?", opciones: ["El Padre", "Su propia fuerza", "Los milagros"], correcta: 0 },
        { pregunta: "Según Juan 10:27, ¿qué hacen las ovejas de Jesús?", opciones: ["Se esconden", "Siguen a cualquiera", "Oyen su voz y le siguen"], correcta: 2 }
      ],
      victoria: "El Ruido se apaga, y la voz del Buen Pastor se oye clara. «Habla, porque tu siervo oye» (1 Samuel 3:10).",
      premio: "🔔 Campanilla de Atención"
    }
  },
  arrepentimiento: {
    mentor: {
      nombre: "Zaqueo", icono: "🌳", titulo: "El cobrador que cambió de rumbo",
      mensaje: "Yo era jefe de los cobradores de impuestos, rico y despreciado. Subí a un árbol para ver pasar a Jesús, y Él se detuvo y me llamó por mi nombre. Ese día mi vida dio la vuelta: devolví lo que había robado, y Jesús dijo que la salvación había llegado a mi casa.",
      historia: "Lucas 19:1-10"
    },
    jefe: {
      nombre: "La Esclavitud", icono: "⛓",
      amenaza: "«Nunca vas a salir de lo que te ata».",
      rondas: [
        { pregunta: "Según Hechos 3:19, ¿qué sucede cuando nos arrepentimos y nos convertimos?", opciones: ["Nada cambia", "Nuestros pecados son borrados", "Tenemos que pagar después"], correcta: 1 },
        { pregunta: "En la parábola del hijo pródigo, ¿qué hizo el padre cuando vio llegar a su hijo?", opciones: ["Corrió, lo abrazó y lo besó", "Lo esperó enojado", "Cerró la puerta"], correcta: 0 },
        { pregunta: "Según 2 Corintios 7:10, ¿qué produce la tristeza que es según Dios?", opciones: ["Desesperación", "Más culpa", "Arrepentimiento para salvación"], correcta: 2 }
      ],
      victoria: "¡Las cadenas caen! «Así que, si el Hijo os libertare, seréis verdaderamente libres» (Juan 8:36).",
      premio: "🗝 Llave de Libertad"
    }
  },
  fe: {
    mentor: {
      nombre: "Abraham", icono: "⭐", titulo: "El padre de la fe",
      mensaje: "Dios me pidió salir de mi tierra sin saber a dónde iba. Me prometió una descendencia tan grande como las estrellas cuando yo era anciano y no tenía hijos. Le creí a Dios, y me fue contado por justicia. La fe es confiar en Aquel que promete.",
      historia: "Génesis 12:1-4; 15:5-6; Hebreos 11:8-12"
    },
    jefe: {
      nombre: "La Incredulidad", icono: "🌫",
      amenaza: "«No creas en lo que no puedes ver».",
      rondas: [
        { pregunta: "Según Juan 3:16, ¿qué recibe todo aquel que cree en el Hijo?", opciones: ["Riquezas", "Vida eterna", "Fama"], correcta: 1 },
        { pregunta: "Según Romanos 10:17, ¿cómo viene la fe?", opciones: ["Por ver milagros", "Por el esfuerzo propio", "Por el oír la palabra de Dios"], correcta: 2 },
        { pregunta: "Según Hebreos 11:6, sin fe es imposible...", opciones: ["agradar a Dios", "trabajar", "ser feliz"], correcta: 0 }
      ],
      victoria: "La Incredulidad se desvanece. Como Abraham: «Y creyó a Jehová, y le fue contado por justicia» (Génesis 15:6).",
      premio: "🛡 Escudo de la Fe"
    }
  },
  justificacion: {
    mentor: {
      nombre: "El ladrón arrepentido", icono: "✝", titulo: "El que fue perdonado en la cruz",
      mensaje: "Fui crucificado junto a Jesús por mis delitos. No tenía buenas obras que presentar ni tiempo para hacerlas. Solo le pedí: «Acuérdate de mí cuando vengas en tu reino». Y Él me respondió: «Hoy estarás conmigo en el paraíso». Así de completa es la justificación.",
      historia: "Lucas 23:39-43"
    },
    jefe: {
      nombre: "El Acusador", icono: "🗯",
      amenaza: "«Recuerda todo lo que hiciste. Nunca serás declarado justo».",
      rondas: [
        { pregunta: "Según Romanos 5:1, ¿qué tenemos al ser justificados por la fe?", opciones: ["Paz para con Dios", "Más deudas", "Miedo al juicio"], correcta: 0 },
        { pregunta: "Según 2 Corintios 5:21, ¿qué recibimos en Cristo?", opciones: ["Su castigo", "Nada", "La justicia de Dios"], correcta: 2 },
        { pregunta: "Según Romanos 8:1, ¿cuánta condenación hay para los que están en Cristo Jesús?", opciones: ["Un poco", "Ninguna", "Depende del día"], correcta: 1 }
      ],
      victoria: "El Acusador es expulsado del tribunal: «ha sido lanzado fuera el acusador de nuestros hermanos» (Apocalipsis 12:10).",
      premio: "🧥 Manto de Justicia"
    }
  },
  "nuevo-nacimiento": {
    mentor: {
      nombre: "Nicodemo", icono: "🌙", titulo: "El maestro que vino de noche",
      mensaje: "Yo era maestro de Israel y vine a Jesús de noche, lleno de preguntas. Él me dijo que tenía que nacer de nuevo, y no lo entendí. Pero esa semilla creció: después de la cruz, ayudé a sepultar su cuerpo con honra. Lo que el Espíritu empieza, lo termina.",
      historia: "Juan 3:1-15; 7:50-51; 19:38-40"
    },
    jefe: {
      nombre: "El Viejo Hombre", icono: "🥀",
      amenaza: "«Tú siempre serás el mismo. La gente no cambia».",
      rondas: [
        { pregunta: "Según Juan 3:3, ¿qué necesita una persona para ver el reino de Dios?", opciones: ["Ser muy religiosa", "Nacer de nuevo", "Tener muchos estudios"], correcta: 1 },
        { pregunta: "Según 2 Corintios 5:17, si alguno está en Cristo, es...", opciones: ["nueva criatura", "la misma persona", "un poco mejor que antes"], correcta: 0 },
        { pregunta: "¿Qué promete Dios en Ezequiel 36:26?", opciones: ["Más fuerza de voluntad", "Una vida sin problemas", "Un corazón nuevo y un espíritu nuevo"], correcta: 2 }
      ],
      victoria: "El viejo hombre queda atrás. Te despojaste de él y te vestiste del nuevo, creado según Dios (Efesios 4:22-24).",
      premio: "🦋 Alas de Vida Nueva"
    }
  },
  santificacion: {
    mentor: {
      nombre: "Pedro", icono: "🐟", titulo: "El pescador transformado",
      mensaje: "Prometí que nunca negaría a Jesús, y lo negué tres veces. Pero Él me restauró junto al mar y me confió sus ovejas. Crecer no fue rápido ni fácil, pero Él nunca me soltó. Por eso escribí: «creced en la gracia y el conocimiento de nuestro Señor».",
      historia: "Lucas 22:31-34; Juan 21:15-19; 2 Pedro 3:18"
    },
    jefe: {
      nombre: "Las Obras de la Carne", icono: "🍂",
      amenaza: "«Haz lo que te pida el cuerpo. No hace falta crecer».",
      rondas: [
        { pregunta: "¿Cuál es el primer fruto del Espíritu que menciona Gálatas 5:22?", opciones: ["El amor", "La fama", "La fuerza"], correcta: 0 },
        { pregunta: "Según Juan 15:5, ¿qué pasa si estamos separados de Cristo?", opciones: ["Crecemos más rápido", "Nada podemos hacer", "Somos más libres"], correcta: 1 },
        { pregunta: "Según Filipenses 1:6, ¿quién perfeccionará la buena obra en nosotros?", opciones: ["Nosotros solos", "Nadie", "El que la comenzó: Dios"], correcta: 2 }
      ],
      victoria: "Las obras de la carne pierden su fuerza. «Andad en el Espíritu, y no satisfagáis los deseos de la carne» (Gálatas 5:16).",
      premio: "🌳 Raíz Profunda"
    }
  },
  guerra: {
    mentor: {
      nombre: "Pablo", icono: "⛓", titulo: "El soldado encadenado",
      mensaje: "Escribí sobre la armadura de Dios estando preso, viendo cada día a los soldados romanos. Aprendí que la batalla no es contra personas, sino espiritual, y que se pelea firme, con la Palabra y en oración. Al final de mi vida pude decir: «He peleado la buena batalla».",
      historia: "Efesios 6:10-20; Hechos 28:16; 2 Timoteo 4:7"
    },
    jefe: {
      nombre: "La Fortaleza", icono: "🏰",
      amenaza: "«Estos muros nunca caerán».",
      rondas: [
        { pregunta: "Según Efesios 6:12, ¿contra quién es nuestra lucha?", opciones: ["Contra otras personas", "Contra fuerzas espirituales de maldad", "Contra el gobierno"], correcta: 1 },
        { pregunta: "¿Qué pieza de la armadura apaga los dardos de fuego del maligno?", opciones: ["El escudo de la fe", "El calzado", "El cinturón"], correcta: 0 },
        { pregunta: "Según Santiago 4:7, ¿qué pasa cuando resistimos al diablo?", opciones: ["Se hace más fuerte", "No pasa nada", "Huye de nosotros"], correcta: 2 }
      ],
      victoria: "La fortaleza cae. «Mayor es el que está en vosotros, que el que está en el mundo» (1 Juan 4:4).",
      premio: "🗡 Espada del Espíritu"
    }
  },
  perseverancia: {
    mentor: {
      nombre: "Job", icono: "🌄", titulo: "El que no soltó su fe",
      mensaje: "Perdí casi todo en poco tiempo: mis bienes, mis hijos y mi salud. No entendía por qué, y se lo dije a Dios con sinceridad. Pero no lo solté, y pude decir: «Yo sé que mi Redentor vive». Perseverar no es no llorar: es seguir aferrado a Dios.",
      historia: "Job 1:20-22; 19:25-27; Santiago 5:11"
    },
    jefe: {
      nombre: "La Prueba", icono: "🌪",
      amenaza: "«Esto es demasiado. Abandona la carrera».",
      rondas: [
        { pregunta: "Según Hebreos 12:2, ¿quién es el autor y consumador de la fe?", opciones: ["Moisés", "Nosotros mismos", "Jesús"], correcta: 2 },
        { pregunta: "Según Gálatas 6:9, ¿cuándo segaremos?", opciones: ["A su tiempo, si no desmayamos", "Nunca", "De inmediato"], correcta: 0 },
        { pregunta: "Según Isaías 40:31, ¿qué reciben los que esperan a Jehová?", opciones: ["Más cansancio", "Nuevas fuerzas", "Riquezas"], correcta: 1 }
      ],
      victoria: "La prueba pasó, y sigues en pie. «Bienaventurado el varón que soporta la tentación; porque cuando haya resistido la prueba, recibirá la corona de vida» (Santiago 1:12).",
      premio: "🏅 Medalla de Constancia"
    }
  },
  glorificacion: {
    mentor: {
      nombre: "Juan", icono: "🏝", titulo: "El que vio la ciudad santa",
      mensaje: "Estaba desterrado en la isla de Patmos, ya anciano, cuando el Señor me mostró el final de la historia. Vi un cielo nuevo y una tierra nueva, y la ciudad santa descendiendo del cielo. Lo escribí todo para que no pierdas la esperanza: Él viene pronto.",
      historia: "Apocalipsis 1:9; 21:1-4; 22:20"
    },
    jefe: {
      nombre: "La Muerte, el último enemigo", icono: "⌛",
      amenaza: "«Yo soy el final de toda historia».",
      rondas: [
        { pregunta: "Según Apocalipsis 21:4, ¿qué ya no habrá en la Nueva Jerusalén?", opciones: ["Alegría", "Ni muerte, ni llanto, ni dolor", "Luz"], correcta: 1 },
        { pregunta: "Según 1 Corintios 15:26, ¿cuál es el postrer enemigo que será destruido?", opciones: ["La muerte", "El hambre", "La pobreza"], correcta: 0 },
        { pregunta: "Según Juan 11:25, ¿qué dijo Jesús de sí mismo?", opciones: ["«Yo soy un profeta más»", "«Yo soy un buen maestro»", "«Yo soy la resurrección y la vida»"], correcta: 2 }
      ],
      victoria: "«Sorbida es la muerte en victoria. ¿Dónde está, oh muerte, tu aguijón?» (1 Corintios 15:54-55). Cristo la venció, y en Él tú también.",
      premio: "🌅 Amanecer Eterno"
    },
    // En la última etapa, el jefe se enfrenta antes de llegar a las puertas.
    orden: ["versiculo", "mision", "evaluacion", "jefe", "decision"]
  }
};

NIVELES.forEach((n) => Object.assign(n, MENTORES_Y_JEFES[n.id]));

/* =========================================
   ADAPTACIÓN POR EDADES (v1.3)
   ninos:      textos sencillos que reemplazan a los de adultos.
   jovenes:    «En tu mundo», una conexión con la vida diaria.
   profundizar: «Para profundizar», para adultos (términos originales).
   ========================================= */

const POR_EDADES = {
  creacion: {
    ninos: {
      introduccion: "Dios hizo el cielo, la tierra, los animales… ¡y también te hizo a ti!",
      ensenanza: "Dios es el Creador de todo. Nos hizo parecidos a Él para que seamos sus amigos y cuidemos lo que creó.",
      aplicacion: "Eres muy valioso porque Dios te hizo con amor.",
      pregunta: "¿Qué es lo que más te gusta de todo lo que Dios creó?"
    },
    jovenes: "En las redes todos buscan «me gusta» para sentirse valiosos. Tu valor no depende de cuántos te siguen: Dios te creó a su imagen y con un propósito.",
    profundizar: "En el Antiguo Testamento, el verbo hebreo bará («crear»), que abre Génesis 1:1, siempre tiene a Dios como sujeto: solo Dios crea de esa manera. «Imagen» (tsélem) y «semejanza» (demut) indican que el ser humano refleja a Dios y lo representa en la creación."
  },
  caida: {
    ninos: {
      introduccion: "En el huerto, una serpiente engañó a Adán y Eva.",
      ensenanza: "Adán y Eva le creyeron a la serpiente en vez de creerle a Dios, y desobedecieron. Así entró el pecado al mundo. Pero Dios prometió enviar a alguien para salvarnos: ¡Jesús!",
      aplicacion: "Cuando alguien te diga algo distinto de lo que dice Dios, créele a Dios.",
      pregunta: "¿Por qué es importante obedecer a Dios?"
    },
    jovenes: "La tentación hoy también llega con preguntas: «¿Y qué tiene de malo? Todos lo hacen». Antes de decidir, compara siempre con lo que Dios dijo.",
    profundizar: "Génesis 3:15 es llamado el protoevangelio, el primer anuncio del evangelio: la «simiente» de la mujer que herirá a la serpiente en la cabeza apunta a Cristo, nacido de mujer, que vino a deshacer las obras del diablo (Gálatas 4:4; 1 Juan 3:8)."
  },
  conviccion: {
    ninos: {
      introduccion: "La Biblia es como un espejo: nos muestra cómo estamos por dentro.",
      ensenanza: "Todos hemos hecho cosas malas; eso se llama pecado. Dios no nos muestra nuestro pecado para regañarnos, sino para perdonarnos.",
      aplicacion: "Cuando hagas algo malo, cuéntaselo a Dios. Él te perdona.",
      pregunta: "¿Qué le quieres decir a Dios cuando haces algo malo?"
    },
    jovenes: "Es fácil mostrar en redes una vida perfecta y esconder lo que pasa por dentro. Ante Dios no necesitas filtros: Él ya te conoce y aun así te ama.",
    profundizar: "La palabra griega para pecado, hamartía, transmite la idea de «errar el blanco». En Romanos 3:23, «destituidos» traduce hysteréo: quedarse corto, estar falto. Nadie alcanza por sí mismo la gloria de Dios."
  },
  llamado: {
    ninos: {
      introduccion: "Jesús toca a la puerta de tu corazón y te llama por tu nombre.",
      ensenanza: "Dios siempre da el primer paso: Él nos busca porque nos ama. Nosotros le respondemos abriéndole la puerta del corazón.",
      aplicacion: "Puedes hablar con Dios en cualquier momento. ¡Él te escucha!",
      pregunta: "¿Cómo puedes escuchar la voz de Dios?"
    },
    jovenes: "Entre la música, los videos y las notificaciones, apartar unos minutos de silencio para escuchar a Dios es un acto de valentía.",
    profundizar: "En Juan 6:44, «trajere» traduce el griego helkýo, que significa atraer o arrastrar. Es el mismo verbo de Juan 12:32: «a todos atraeré a mí mismo». La salvación comienza por iniciativa divina."
  },
  arrepentimiento: {
    ninos: {
      introduccion: "Un hijo se fue lejos de su papá, pero un día decidió volver a casa.",
      ensenanza: "Arrepentirse es darte cuenta de que hiciste mal, decírselo a Dios y cambiar de camino. Dios es como el papá de la historia: ¡corre a abrazarnos!",
      aplicacion: "Si te equivocas, no te escondas: vuelve a Dios.",
      pregunta: "¿Cómo crees que se sintió el hijo cuando su papá lo abrazó?"
    },
    jovenes: "Arrepentirse no es solo pedir perdón cuando te descubren: es cambiar de dirección, aunque nadie te esté mirando.",
    profundizar: "El Antiguo Testamento usa el hebreo shub, «volverse» o «dar la vuelta». El Nuevo Testamento usa metánoia, «cambio de mente». Juntos describen el arrepentimiento bíblico: un cambio de mente que produce un cambio de dirección."
  },
  fe: {
    ninos: {
      introduccion: "Para llegar a Dios hay que cruzar un puente: ¡ese puente es Jesús!",
      ensenanza: "Dios nos ama tanto que envió a Jesús. Si confiamos en Él, nos regala la vida eterna. No la ganamos portándonos bien: es un regalo.",
      aplicacion: "Confiar en Jesús es como subirte a un puente fuerte: Él no te deja caer.",
      pregunta: "¿Qué significa para ti confiar en Jesús?"
    },
    jovenes: "Tus amigos pueden dudar de la fe, y tú también tendrás preguntas. Tener fe no es no tener preguntas: es confiar en Cristo mientras buscas las respuestas.",
    profundizar: "La palabra griega pístis significa fe, confianza y fidelidad. En Juan 3:16, «cree en él» traduce pisteúo eis: una confianza que se deposita en la persona de Cristo, no solo un acuerdo intelectual con datos sobre Él."
  },
  justificacion: {
    ninos: {
      introduccion: "En el tribunal del cielo, Jesús es tu abogado.",
      ensenanza: "Por nuestros pecados merecíamos castigo, pero Jesús pagó por nosotros en la cruz. Ahora Dios nos ve limpios, como si nunca hubiéramos pecado.",
      aplicacion: "Cuando te sientas culpable por algo que Dios ya perdonó, recuerda: ¡Jesús pagó todo!",
      pregunta: "¿Cómo te sientes al saber que Jesús pagó por ti?"
    },
    jovenes: "Cuando sientas que no das la talla, o que tus errores te definen, recuerda que Dios ya dio su veredicto sobre ti en Cristo.",
    profundizar: "El verbo griego dikaióo («justificar») pertenece al lenguaje del tribunal: significa declarar justo, no hacer justo. En Romanos 4:3-8, «contar» traduce logízomai, un término contable: la justicia de Cristo es acreditada a la cuenta del creyente."
  },
  "nuevo-nacimiento": {
    ninos: {
      introduccion: "Jesús le dijo a Nicodemo que necesitaba nacer de nuevo.",
      ensenanza: "Nacer de nuevo es cuando el Espíritu Santo entra en nuestro corazón y nos hace nuevos por dentro, como una oruga que se convierte en mariposa.",
      aplicacion: "Con Jesús eres una persona nueva.",
      pregunta: "¿Qué cosa nueva quieres que Dios haga en tu corazón?"
    },
    jovenes: "No tienes que fingir ser alguien que no eres para encajar: en Cristo tienes una identidad nueva y verdadera.",
    profundizar: "En Juan 3:3, «de nuevo» traduce el griego ánothen, que puede significar «otra vez» y también «de arriba». Nicodemo entendió «otra vez», pero Jesús hablaba de un nacimiento que viene de arriba, obra del Espíritu."
  },
  santificacion: {
    ninos: {
      introduccion: "Ahora que eres hijo de Dios, ¡vas a crecer como un árbol que da fruto!",
      ensenanza: "El Espíritu Santo nos ayuda a parecernos cada día más a Jesús: más amorosos, pacientes y alegres. Ese es el fruto del Espíritu.",
      aplicacion: "Orar, leer la Biblia y ayudar a otros te hace crecer.",
      pregunta: "¿A quién puedes ayudar esta semana?"
    },
    jovenes: "Crecer en la fe también se nota en cómo usas tu celular, cómo hablas de los demás y cómo tratas a tu familia.",
    profundizar: "La santificación tiene dos aspectos: uno ya cumplido, porque fuimos apartados para Dios (1 Corintios 6:11), y otro progresivo (1 Tesalonicenses 4:3). En 2 Corintios 3:18, «transformados» traduce metamorfóo, de donde viene «metamorfosis»."
  },
  guerra: {
    ninos: {
      introduccion: "Dios te da una armadura especial para estar firme contra el mal.",
      ensenanza: "El diablo quiere que tengamos miedo y que creamos mentiras, pero Jesús ya ganó la batalla. Con la armadura de Dios (la verdad, la fe, la Palabra y la oración) estamos firmes.",
      aplicacion: "Cuando tengas miedo, ora y recuerda un versículo.",
      pregunta: "¿Qué parte de la armadura de Dios te gusta más, y por qué?"
    },
    jovenes: "Las batallas de tu generación, como la ansiedad, la comparación, las adicciones digitales y la presión del grupo, son reales. Pero Cristo ya venció y te dio su armadura.",
    profundizar: "«Toda la armadura» traduce el griego panoplía, el equipo completo del soldado. En Efesios 6:11-14 se repite varias veces la idea de «estar firmes»: el creyente no conquista terreno nuevo, sino que se mantiene firme en la victoria que Cristo ya ganó (Colosenses 2:15)."
  },
  perseverancia: {
    ninos: {
      introduccion: "La vida con Jesús es como una carrera: ¡no te rindas!",
      ensenanza: "A veces las cosas se ponen difíciles y nos cansamos. Pero si miramos a Jesús, Él nos da nuevas fuerzas para seguir.",
      aplicacion: "Cuando algo sea difícil, pídele fuerzas a Dios y no te rindas.",
      pregunta: "¿Qué haces cuando algo es muy difícil?"
    },
    jovenes: "Muchos abandonan la fe cuando llegan las pruebas o los cambios de etapa. Rodéate de personas que te animen a seguir corriendo.",
    profundizar: "En Hebreos 12:1, «paciencia» traduce hypomoné: permanecer firme bajo una carga. «Carrera» traduce agón, una competencia que exige esfuerzo, de donde viene la palabra «agonía»."
  },
  glorificacion: {
    ninos: {
      introduccion: "¡Llegamos al final del camino: la ciudad de Dios!",
      ensenanza: "Un día viviremos con Dios para siempre en un lugar hermoso, donde no habrá tristeza, ni dolor, ni muerte. Allí veremos a Jesús cara a cara.",
      aplicacion: "¡Lo mejor está por venir! Vive feliz con esa esperanza.",
      pregunta: "¿Qué es lo que más te emociona de vivir con Dios para siempre?"
    },
    jovenes: "Lo que hoy parece todo, como las notas, la popularidad o la apariencia, pasa. Vive para lo que dura para siempre.",
    profundizar: "En Romanos 8:30, Pablo escribe «glorificó» en tiempo pasado, aunque la glorificación es futura. La obra de Dios es tan segura que el apóstol la presenta como ya cumplida: los que Él justificó, también los glorificará."
  }
};

NIVELES.forEach((n) => Object.assign(n, POR_EDADES[n.id]));

/* =========================================
   GUÍA PARA MAESTROS Y MODO GRUPO (v1.5)
   ========================================= */

const GUIA_GENERAL = {
  proposito: "El Camino de la Salvación puede usarse en grupos bíblicos, escuelas dominicales, células y reuniones de familia. Cada etapa es una reunión de 45 a 60 minutos.",
  preparacion: [
    "Juegue la etapa usted primero, para conocer el contenido y las respuestas.",
    "Use un televisor, un proyector o un celular que todos puedan ver. También pueden jugar en parejas, cada pareja con su celular.",
    "En la pantalla de inicio elija «👥 En grupo» y la edad del grupo (Niños, Jóvenes o Adultos).",
    "Tenga a mano Biblias, papel y lápices para las actividades."
  ],
  estructura: [
    { tiempo: "10 min", parte: "Apertura", detalle: "Una dinámica para despertar el interés y presentar el tema." },
    { tiempo: "20-25 min", parte: "Jugar la etapa juntos", detalle: "Lean en voz alta al mentor y el versículo. La misión se responde en grupo. En la batalla final, dos equipos se turnan para responder." },
    { tiempo: "10-15 min", parte: "Conversemos", detalle: "Las tres preguntas para conversar. Escuche más de lo que habla." },
    { tiempo: "10 min", parte: "Actividad y oración", detalle: "Una actividad práctica y una oración de cierre." }
  ],
  consejos: [
    "La salvación es por gracia: los puntos del juego miden el crecimiento, no lo que hace salvo a alguien. Recuérdelo al grupo.",
    "No obligue a nadie a compartir asuntos personales. Las confesiones son entre cada persona y Dios.",
    "Con niños, use el modo Niños, lea en voz alta y permita respuestas cortas o dibujos.",
    "Si alguien muestra interés en recibir a Cristo, dedique tiempo a conversar con esa persona después de la reunión."
  ]
};

const GUIA = {
  creacion: {
    apertura: "Pida a cada persona que nombre algo creado por Dios que le asombre. Luego pregunte: ¿y qué tal tú? También eres creación de Dios.",
    preguntas: [
      "¿Qué nos dice Génesis 1:27 sobre el valor de cada persona?",
      "¿Cómo cambia nuestra manera de tratar a los demás saber que también fueron creados a imagen de Dios?",
      "¿En qué áreas de la vida tendemos a vivir como si no necesitáramos a Dios?"
    ],
    actividad: "Cada uno completa en una tarjeta la frase «Dios me creó para…» y la comparte en parejas.",
    oracion: "Señor, gracias por crearnos a tu imagen y con un propósito. Ayúdanos a vivir cada día dependiendo de ti. Amén."
  },
  caida: {
    apertura: "Juego «Verdad o mentira»: el líder dice tres frases sobre sí mismo y el grupo adivina cuál es falsa. Explique que la serpiente también mezcló verdades con mentiras.",
    preguntas: [
      "¿Por qué la pregunta «¿Conque Dios os ha dicho…?» fue tan peligrosa?",
      "¿Qué mentiras sobre Dios o sobre nosotros mismos se escuchan hoy?",
      "¿Qué esperanza nos da la promesa de Génesis 3:15?"
    ],
    actividad: "En grupos pequeños, escriban una mentira común de hoy y busquen en la Biblia un versículo que la responda.",
    oracion: "Padre, danos discernimiento para reconocer las mentiras y amor por tu Palabra para creerle a ti. Gracias por enviar a Jesús. Amén."
  },
  conviccion: {
    apertura: "Muestre un espejo y pregunte para qué sirve. El espejo muestra la suciedad, pero no limpia; la Palabra nos muestra el pecado y Cristo nos limpia.",
    preguntas: [
      "¿Por qué nos cuesta tanto reconocer nuestro propio pecado?",
      "¿Qué diferencia hay entre una culpa que aplasta y la convicción del Espíritu Santo, que lleva a Cristo?",
      "¿Qué aprendemos de la reacción de David cuando el profeta Natán lo confrontó?"
    ],
    actividad: "Momento personal y en silencio: cada uno escribe en un papel algo que quiera confesar a Dios, sin mostrarlo a nadie, y luego lo rompe como señal de 1 Juan 1:9.",
    oracion: "Señor, examina nuestro corazón. Reconocemos que hemos pecado y te pedimos perdón. Gracias porque eres fiel y justo para perdonarnos. Amén."
  },
  llamado: {
    apertura: "Con los ojos cerrados, el grupo intenta reconocer quién habla cuando distintas personas dicen una frase. Conecte con Juan 10:27: las ovejas conocen la voz de su pastor.",
    preguntas: [
      "¿De qué maneras nos habla Dios hoy?",
      "¿Qué «ruidos» nos impiden escuchar su voz?",
      "¿Qué aprendemos de la respuesta del niño Samuel: «Habla, porque tu siervo oye»?"
    ],
    actividad: "Cinco minutos de silencio leyendo Apocalipsis 3:20. Luego, quien quiera comparte lo que sintió.",
    oracion: "Señor Jesús, gracias por tocar a la puerta de nuestro corazón. Queremos oír tu voz y abrirte. Habla, porque tus siervos oyen. Amén."
  },
  arrepentimiento: {
    apertura: "Pida a un voluntario que camine en una dirección y luego dé media vuelta. Explique que eso significa la palabra hebrea shub: volverse.",
    preguntas: [
      "¿Qué diferencia hay entre sentir remordimiento y arrepentirse de verdad?",
      "¿Qué nos enseña sobre Dios el padre de la parábola del hijo pródigo?",
      "¿Qué cambió en la vida de Zaqueo después de encontrarse con Jesús?"
    ],
    actividad: "Dramaticen la parábola del hijo pródigo (Lucas 15:11-24) en tres escenas: la partida, el chiquero y el regreso a casa.",
    oracion: "Padre, gracias porque corres a recibirnos cuando volvemos a ti. Hoy cambiamos de dirección y volvemos a tu casa. Amén."
  },
  fe: {
    apertura: "Pregunte: ¿en qué confían cada día sin pensarlo? (la silla, un puente, un bus). La fe en Cristo es apoyar todo el peso de la vida en Él.",
    preguntas: [
      "¿Qué diferencia hay entre creer que Dios existe y confiar en Cristo?",
      "¿Por qué no podemos ganar la salvación con nuestras obras?",
      "¿Qué promesa bíblica te sostiene en este tiempo?"
    ],
    actividad: "Construyan un «puente de la fe» en una pared o en el piso: cada participante escribe una promesa bíblica en una tarjeta y la agrega al puente.",
    oracion: "Señor, gracias por tu amor tan grande. No confiamos en nuestras obras, sino en Cristo. Aumenta nuestra fe. Amén."
  },
  justificacion: {
    apertura: "Lea un caso imaginario de alguien culpable y pregunte qué sentencia merece. Luego explique: en Cristo, el Juez declara justo al culpable porque otro pagó la deuda.",
    preguntas: [
      "¿Qué significa que la justicia de Cristo nos es acreditada?",
      "¿Cómo respondemos cuando nuestro pasado nos acusa?",
      "¿Qué nos enseña la historia del ladrón arrepentido en la cruz?"
    ],
    actividad: "Cada uno escribe en un papel la palabra «Deuda». Luego, encima, escribe en letras grandes «Pagada: Colosenses 2:14».",
    oracion: "Padre justo, gracias porque en Cristo no hay ninguna condenación para nosotros. Te alabamos por tu gracia. Amén."
  },
  "nuevo-nacimiento": {
    apertura: "Muestre el dibujo o la foto de una oruga y de una mariposa. Pregunte: ¿qué cambió? Todo. Así es el nuevo nacimiento.",
    preguntas: [
      "¿Por qué Nicodemo, siendo tan religioso, necesitaba nacer de nuevo?",
      "¿Qué diferencia hay entre mejorar por fuera y nacer de nuevo?",
      "¿Qué señales muestran que alguien tiene una vida nueva en Cristo?"
    ],
    actividad: "Cada uno escribe dos columnas: «Antes» y «Ahora», con un cambio que Dios ha hecho en su vida o que anhela que haga.",
    oracion: "Espíritu Santo, gracias por la vida nueva. Haz nuevas todas las cosas en nosotros. Amén."
  },
  santificacion: {
    apertura: "Lleve una planta o una rama con fruto. Pregunte: ¿cómo crece el fruto? No con esfuerzo, sino permaneciendo unido a la planta (Juan 15:5).",
    preguntas: [
      "¿Qué fruto del Espíritu necesitas más esta semana?",
      "¿Por qué el crecimiento espiritual es un proceso y no un momento?",
      "¿Cómo podemos ayudarnos unos a otros a crecer?"
    ],
    actividad: "El grupo elige una de las misiones secundarias del juego (oración, estudio bíblico, servicio o evangelismo) para hacerla durante la semana, y la comenta en la próxima reunión.",
    oracion: "Señor, queremos permanecer en ti como la rama en la vid. Produce en nosotros el fruto de tu Espíritu. Amén."
  },
  guerra: {
    apertura: "Muestre o dibuje cada pieza de la armadura de Dios y pida al grupo que adivine para qué sirve.",
    preguntas: [
      "Según Efesios 6:12, ¿contra quién es realmente nuestra lucha?",
      "¿Cuál es el ataque más frecuente en tu vida, y qué pieza de la armadura necesitas para enfrentarlo?",
      "¿Por qué la oración es parte de la armadura?"
    ],
    actividad: "Memoricen juntos Efesios 6:10-11 usando el ejercicio del «Libro de versículos» del juego.",
    oracion: "Señor, nos vestimos de toda tu armadura. Estamos firmes en la victoria de Cristo. Mayor es el que está en nosotros. Amén."
  },
  perseverancia: {
    apertura: "Muestre una medalla, o pregunte quién ha corrido alguna carrera: ¿qué hace falta para terminarla?",
    preguntas: [
      "¿Qué «pesos» nos frenan en la vida de fe?",
      "¿Qué aprendemos de Job sobre ser sinceros con Dios en medio de la prueba?",
      "¿Cómo podemos animarnos unos a otros para no rendirnos?"
    ],
    actividad: "Cada uno escribe una nota de ánimo con un versículo para otro miembro del grupo y se la entrega.",
    oracion: "Señor, ponemos los ojos en Jesús. Danos nuevas fuerzas para correr con paciencia la carrera que tenemos por delante. Amén."
  },
  glorificacion: {
    apertura: "Pregunte: si pudieras describir el cielo con una sola palabra, ¿cuál sería? Luego lean juntos Apocalipsis 21:1-4.",
    preguntas: [
      "¿Qué es lo que más esperas de la eternidad con Dios?",
      "¿Cómo cambia la esperanza del cielo nuestra manera de vivir hoy?",
      "¿Por qué solo entran quienes están inscritos en el libro de la vida del Cordero?"
    ],
    actividad: "Repasen en el «Mapa del camino» las 12 etapas. Cada uno dice cuál lo marcó más. Den espacio a quien quiera recibir a Cristo, con la oración del final del juego.",
    oracion: "Señor Jesús, gracias por el camino de la salvación, de principio a fin. Esperamos tu venida. Amén. ¡Ven, Señor Jesús!"
  }
};

NIVELES.forEach((n) => { n.guia = GUIA[n.id]; });
