// Archivo: script.js - VERSIÓN FINAL CON AJUSTE DE PUNTA DE FLECHA

// ----------------------------------------------------
// OBJETO CENTRAL DE DATOS: ¡MODIFICA ESTOS VALORES!
// ----------------------------------------------------

const dataGloomhaven = {
    // Datos Principales
    grupo: "Discípules de Mikaela",
    reputacion: 6, 
    prosperidadNivel: 2,
    prosperidadProgreso: 4, 
    jugadores: ["Zaki", "Dani", "Siscu", "Jose", "Miquel"], 
    
    // Logros
    logrosGrupales: [
        "primeros pasos", 
        "los planes de Jekserah", 
        "mapa del tesoro", 
        "encargo siniestro",
        "el recado de un demonio",
        "incensario de romperrocas"
    ], 
    logrosGlobales: [
        "gobierno de la ciudad militarista", 
        "la comerciante huye", 
        "tecnología antigua",
        "el poder de la mejora",
        "la grieta neutralizada"
    ], 
    objetosDisponibles: "1-21, 92, 101, 107, 123, 124 y 132", 
    personajes: [], 

    // Lista de Escenarios 
    escenarios: [
        // ID 0: GLOOMHAVEN (Inicio de Campaña)
        { 
            id: 0, 
            nombre: "GLOOMHAVEN: Inicio de campaña", 
            estado: "inicial", 
            map_pos: { row: 0, col: 1 },
            vieneDe: "Ninguno (Inicio de Campaña)",
            requisitos: "Ninguno",
            objetivos: "Localizar a un ladrón y recuperar unos documentos robados por encargo de Jekserah.",
            textoEscenario: [
                "Todos necesitamos comer. Sea cual sea el motivo por el que habéis venido a Gloomhaven, por el que habéis llegado a los confines del mundo, este hecho no cambia. Un mercenario no puede luchar con el estómago vacío. Así que, cuando Jekserah, una Valrath ataviada con una capa roja y suficientes joyas de oro como para pagar la comida de una década, se acerca a vosotros en el León Durmiente y se ofrece a pagaros diez monedas de oro por localizar a un ladrón y recuperar algunas pertenencias robadas... Bueno, parece una excusa tan buena como cualquier otra para quitarse la borrachera de encima y empezar a saldar deudas. —Ese ladrón me ha robado unos documentos importantes —dice la comerciante de piel roja mientras mueve la cola con agitación—. No me importa lo que le hagáis, sólo que me traigáis lo que es mío.",
                "Con la descripción de Jekserah, no resultó difícil sacudir a algunos matones callejeros y sonsacarles la localización del escondite de los ladrones. En Gloomhaven, todo mercenario que se precie debe saber cómo romper unos cuantos cráneos. **Vuestro objetivo es el Túmulo Negro. Suena a lugar encantador.**"
            ], 
            conclusion: "Éxito. Se ha recuperado el botín para Jekserah.",
            recompensas: ["10 monedas de oro (inicial)"],
            logros: ["Gobierno de la ciudad: Militarista (Global)"], 
            nuevasUbicaciones: ["Túmulo Negro (1)"] 
        }, 
        
        
// ID 1: TÚMULO NEGRO (Tu escenario actual)
        {
            id: 1, 
            nombre: "Túmulo Negro", 
            estado: "completado", 
            map_pos: { row: 1, col: 1 }, 
            vieneDe: "GLOOMHAVEN: Inicio de campaña (0)",
            requisitos: "Ninguno", 
            objetivos: "Matar a todos los enemigos.", 
            textoEscenario: [
                "Resulta bastante sencillo encontrar la colina. A solo un paseo de la Puerta del Mercado Nuevo ya puede verse sobresaliendo de las lindes del Soto Cadáver, como si de una rata bajo una alfombra se tratase. Cuando os acercáis, os percatáis de que el montículo está formado por tierra negra. La pequeña puerta cubierta de maleza da paso a unas desgastadas escaleras de piedra que llevan a la oscuridad. A medida que descendéis por las escaleras, percibís agradecidos una luz que emana desde abajo. Por desgracia, esa luz viene acompañada del inconfundible hedor a muerte. Cuando llegáis a los últimos escalones, os preguntáis qué clase de ladrones levantarían su campamento en tan horrible lugar. Y no tardáis en encontrar la respuesta: un rudo grupo de asesinos que no parecen haberse tomado bien vuestra repentina aparición. Uno de los ladrones que se encuentra en la parte trasera coincide con la descripción del que buscáis. —Encargaos de estos desgraciados —dice mientras retrocede hasta una salida de la cámara—. Apenas conseguís distinguir su silueta mientras se dirige hacia un pasillo y sale por una puerta a su izquierda. —Bien, no todos los días te encuentras con gente tan estúpida como para darte personalmente sus objetos de valor —sonríe uno de los más grandes mientras desenvaina una espada oxidada—. Ahora, os mataremos. Vaya sorpresa se van a llevar. Si tuvierais algo de valor, posiblemente no estaríais aquí abajo."
            ], 
            conclusion: [ 
                "Con el último de los bandidos muerto, os tomáis un momento para recuperar el aliento y quitaos de la cabeza la visión de los cadáveres vivientes desgarrándoos la piel. Vuestra presa no se encuentra entre los muertos. Os estremecéis solo con pensar en los horrores que os esperan abajo en las catacumbas."
            ], 
            recompensas: [], 
            logros: ["Primeros pasos (Grupo)"], 
            nuevasUbicaciones: ["Guarida del túmulo (2)"] 
        },

        // ID 2: GUARIDA DEL TÚMULO (EXISTENTE)
        {
            id: 2, 
            nombre: "Guarida del Túmulo", 
            estado: "completado", 
            map_pos: { row: 1, col: 2 },
            vieneDe: "Túmulo Negro", 
            requisitos: "Primeros pasos (Grupo) COMPLETO", 
            objetivos: "Matar al Capitán bandido y a todos los enemigos revelados.", 
            textoEscenario: [
                "El hedor a muerte y carne podrida se vuelve más denso mientras os abrís paso entre los cadáveres de vuestros enemigos y os adentráis cada vez más en este cementerio subterráneo. Guiados por los susurros apagados de una conversación, avanzáis por el laberinto de criptas y entráis en una pequeña cámara llena de ladrones con cara de pocos amigos y preparados para atacar.",
                "Sin duda custodian algo, así que debéis estar en el lugar correcto."
            ], 
           
            conclusion: [ 
                "Escudriñando la carnicería que queda tras la batalla, encontráis un alijo al fondo de la sala que contiene los pergaminos por los que os contrataron. No podéis evitar echarles un vistazo, pero lo que haya escrito en ellos está en un antiguo lenguaje que desconocéis. No obstante, os llama la atención un mapa de la zona rural norte. Una curva del río Aguasmanas está claramente marcada como punto importante. Mientras os planteáis buscar más información sobre la llamada \"Penumbra\", decidís que ese lugar también podría ser un punto de interés para vosotros.",
                "Pero, de momento, podéis dejarlo a un lado. Guardáis los pergaminos y regresáis a Gloomhaven para obtener vuestra recompensa.",
                "Os reunís con Jekserah de nuevo en el León Durmiente, le entregáis los papeles y os paga la cantidad acordada.",
                "—¿Sabéis qué? —os susurra ella entre el bullicio de la taberna—. Si estáis interesados, puede que tenga otro trabajo para vosotros. Una tribu de inox ha saqueado algunas de mis caravanas en el Bosque de las Dagas cuando se dirigían a la capital. He informado a la milicia, pero no han hecho nada —dice con desprecio—. Os puedo indicar la dirección de su campamento. Si les dais una lección, os pagaré aún más.",
                "Pone un tosco mapa del bosque sobre la mesa y se levanta, con las joyas tintineando a cada uno de sus movimientos.",
                "—Venid a verme cuando hayáis terminado."
            ], 
            recompensas: ["10 de oro para cada personaje", "+1 de prosperidad"], 
            logros: [], 
            // ¡IMPORTANTE! Se mantiene la lista de ubicaciones de texto, ahora con dos salidas
            nuevasUbicaciones: ["Campamento Inox (3)", "Cripta de los Malditos (4)"] 
        },

        // ID 3: CAMPAMENTO INOX (EXISTENTE)
        {
            id: 3, 
            nombre: "Campamento Inox", 
            estado: "completado", 
            map_pos: { row: 1, col: 3 }, 
            vieneDe: "Guarida del Túmulo (2)",
            requisitos: "La comerciante huye (Global) INCOMPLETO", 
            objetivos: "Matar a un número de enemigos igual al número de personajes por cinco.", 
            textoEscenario: [
                "Así que esta comerciante quiere darles una lección a unos asaltantes de caravanas. Parece bastante razonable. Aunque, por la cantidad adecuada de dinero, casi cualquier cosa parece razonable.",
                "Os adentráis en el Bosque de las Dagas y empezáis a rastrear el campamento haciendo uso del tosco mapa de Jekserah. Está bien escondido, pero, siguiendo las indicaciones señaladas en el pergamino, os topáis con una densa agrupación de chozas en un pequeño claro del bosque. Sólo falta entrar y darles una lección, así servirán de ejemplo para futuros asaltantes."
            ], 
            conclusion: [
                "Mientras corréis por el bosque, huyendo del olor a carne quemada, tenéis el tiempo suficiente para reflexionar sobre vuestras acciones.",
                "No os cabe duda de que vuestros remordimientos se ven reflejados en vuestros rostros cuando os reunís con Jekserah, esta vez en su mansión. Con el ceño fruncido, os da un saco de monedas.",
                "—Eran ladrones y asesinos —dice mientras mira fijamente—. Se merecían lo que les habéis hecho. Y no habláis más sobre este tema. Tengo una tarea más que me gustaría que llevarais a cabo. Necesito un diamante de tamaño considerable para un cliente, pero no logro encontrar ninguno aquí en la ciudad. Hay murmullos de diamantes, pero se encuentra en las montañas del sur, perdida en el bosque. He oído que la han invadido los Inoxes con alguna fuerza más inteligente orquestándolos, eso sin duda. Si conseguís llegar y traerme el diamante más grande que encontréis, os daré una notable recompensa. (9)",
                "Dos enormes guardias espaldas Inox de Jekserah se acercan y os indican que abandonéis la mansión.",
                "—Ahora, dejadme sola.",
                "Fuera, mientras reflexionáis sobre vuestra nueva misión, oís una voz tras vosotros.",
                "—¿Sabéis que lo que busca no son beneficios, ¿verdad?",
                "Os dais la vuelta y veis salir a una hembra Quatryl del callejón trasero de la casa de Jekserah. Lleva puesta una armadura de cuero oscuro y sostiene un artilugio llamativo lleno de engranajes zumbando, coronado por una pieza de metal cónica conectada a un tubo.",
                "—Argeise, guardia de la ciudad —se presenta ella—. Lo sé, no lo parezco, pero si hay alguien que no es lo que parece, es la Valrath con la que habéis estado tratando. Es cierto que es una comerciante, pero está tramando algo mucho más siniestro. Desde que llegué aquí, está intentando derrocar a los militares y tenemos mucha curiosidad por saber qué está maquinando. Mirad, podéis cumplir sus órdenes como buenos cachorritos si eso es lo que queréis, pero si lo que realmente pretendéis es ayudar a esta ciudad a mantener la paz y a que no nos invadan los salvajes, tengo una idea mejor. Lleguemos al fondo de los planes de Jekserah y averigüemos quién es en realidad. (8)"
            ], 
            recompensas: ["15 de oro para cada personaje", "+1 de prosperidad"],
            logros: ["Los planes de Jekserah (Grupo)"], 
            nuevasUbicaciones: ["Almacén de Gloomhaven (8)", "Mina de diamantes (9)"] 
        },

        // ID 4: CRIPTA DE LOS MALDITOS (AÑADIDO - Placeholder)
        { 
            id: 4, 
            nombre: "Cripta de los Malditos", 
            estado: "completado", 
            map_pos: { row: 2, col: 2 },
            vieneDe: "Guarida del Túmulo (2)",
            requisitos: "Ninguno",
            objetivos: "Matar a todos los enemigos.",
            textoEscenario: ["Las revelaciones del comandante de los bandidos acerca de una \"Penumbra\" no sientan bien a vuestros estómagos mientras buscáis la curva del río Aguasmanas: hay algo aquí que despierta el interés de esos maníacos.",
                "En cierto modo, os sorprende encontrar las ruinas de una antigua cripta medio cubierta de musgo y hiedra. La historia de este lugar es antigua y oscura. Sin más información que ésa, os adentráis en las profundidades. Independientemente de lo que estén tramando esas sabandijas, estáis decididos a descubrirlo, incluso después de tropezaros con un gran grupo de bandidos y de muertos vivientes al final de la escalera.",
                "—Habéis cometido un error viniendo aquí —susurra uno de los bandidos. Pero vosotros no estáis de acuerdo. Estáis exactamente donde queréis estar."
            ],
            conclusion: ["Está claro que habéis interrumpido algún tipo de ritual que se estaba llevando a cabo aquí. Estos demonios elementales pertenecen a un plano de existencia completamente distinto, pero, de alguna manera, los sectarios han conseguido traerlos a este mundo.",
                "En el altar de la sala trasera, hay una gran cantidad de garabatos hechos para estos rituales. No toda la escritura es inteligible, pero os da la sensación de que esta cripta es un lugar poderoso antaño utilizado por alguna antigua civilización. Los antiguos hicieron uso del poder de los elementos para mejorar sus propias vidas y, aunque el verdadero destino que sufrieron está más allá de vuestro conocimiento, resulta obvio que no acabó bien.",
                "Entre los pergaminos también hay notas sobre un par de lugares de poder que también se encuentran en esta zona. Uno parece muy usado por la secta y el otro está marcado como invadido por despiadados muertos vivientes. Parece que tenéis la oportunidad de interrumpir más rituales (5) o bien la de hacer buenas migas con ellos al ayudar a eliminar una amenaza. (6)"
            ],
            recompensas: ["Recompensa de la Misión 4"],
            logros: [], 
            nuevasUbicaciones: ["Cripta ruinosa (5)", "Cripta decadente (6)"] 
        },
        // ID 82: NUEVO ESCENARIO (POSICIÓN CALCULADA: 250, 400)
        { 
            id: 82, 
            nombre: "Montaña ardiente", // Nombre temporal
            estado: "pendiente", 
            map_pos: { row: 2, col: 1 },
            vieneDe: "Cripta de los Malditos (4)",
            requisitos: "Ninguno",
            objetivos: "Desconocido",
            textoEscenario: ["Desconocido"],
            conclusion: ["Desconocido"],
            recompensas: [],
            logros: ["desconocido"], 
            nuevasUbicaciones: ["Desconocido"] 
        },
        // ID 65: NUEVO ESCENARIO 
        { 
            id: 65, 
            nombre: "Mina de azufre", 
            estado: "pendiente", 
            map_pos: { row: 1, col: 0 },
            vieneDe: "Túmulo Negro (1)",
            requisitos: "Ninguno",
            objetivos: "Desconocido",
            textoEscenario: ["Desconocido"],
            conclusion: ["Desconocido"],
            recompensas: [],
            logros: ["desconocido"], 
            nuevasUbicaciones: ["Desconocido"] 
        },
    ],
    // Conexiones: Ahora incluye el enlace doble desde el escenario 2 con offset
    conexiones: [
        { origen: 0, destino: 1, tipo: 'alternativa', offset: 0 }, 
        { origen: 1, destino: 2, tipo: 'alternativa', offset: 0 }, 
        { origen: 2, destino: 3, tipo: 'alternativa', offset: 0 }, 
        { origen: 2, destino: 4, tipo: 'alternativa', offset: 0 }, 
        { origen: 4, destino: 82, tipo: 'alternativa', offset: 0 }, 
        { origen: 1, destino: 65, tipo: 'alternativa', offset: 0 },
    ]
};
// ----------------------------------------------------
// CONSTANTES DE COORDENADAS (NUEVAS)
// ----------------------------------------------------
// Espaciado horizontal entre el centro de los nodos (en px). Basado en los 300px originales.
const COL_SPACING = 280; 
// Espacio vertical entre el centro de los nodos (en px). Basado en los 100px originales.
const ROW_SPACING = 100; 
// Margen inicial izquierdo. 100px + (col * 300) = 400px (para col 1).
const INITIAL_LEFT_OFFSET = 100; 
// Margen inicial superior. 50px + (row * 100) = 50px (para row 0).
const INITIAL_TOP_OFFSET = 50; 

// ----------------------------------------------------
// FUNCIONES DE PLANTILLA Y CÁLCULO
// ----------------------------------------------------

/** Calcula el modificador de precios de la tienda basado en la reputación. */
function calcularModificador(reputacion) {
    if (reputacion >= 18) return -5;
    if (reputacion >= 14) return -4;
    if (reputacion >= 10) return -3;
    if (reputacion >= 7) return -2; 
    if (reputacion >= 2) return -1; 
    if (reputacion >= -1) return 0; 
    if (reputacion >= -5) return +1;
    if (reputacion >= -9) return +2;
    if (reputacion >= -13) return +3;
    if (reputacion >= -17) return +4;
    return +5; 
}

/** * Cierra el modal actual y abre el modal del escenario de destino.
 * @param {number} idDestino El ID del escenario que se quiere mostrar.
 */
function simularClickEscenario(idDestino) {
    document.getElementById('modal-detalle').style.display = 'none';

    const escenarioDestino = dataGloomhaven.escenarios.find(e => e.id === idDestino);
    
    if (escenarioDestino) {
        mostrarDetalleEscenario(escenarioDestino);
    }
}


/** Genera el contenido HTML del modal (Lógica con botones de navegación y estructura reordenada) */
function crearDetalleEscenario(esc) {
    const toUnorderedList = (items) => items && items.length > 0 ? items.map(item => `<li>${item}</li>`).join('') : "<li>Ninguno / No aplica</li>";
    const toParagraphs = (textArray) => textArray && textArray.length > 0 ? textArray.map(p => `<p>${p}</p>`).join('') : "<p>No hay texto de historia para este escenario.</p>";
    
    // --- LÓGICA DE CONEXIONES ---
    
    // CAMBIO CLAVE: Usa filter para obtener todas las conexiones salientes
    const conexionesSalientes = dataGloomhaven.conexiones.filter(c => c.origen === esc.id);
    
    let nuevasUbicacionesHtml = ''; 
    
    if (conexionesSalientes.length > 0) {
        // Itera sobre todas las conexiones salientes para crear un botón por cada una
        conexionesSalientes.forEach((conn, index) => {
            const destinoId = conn.destino;
            // Usa el texto del array nuevasUbicaciones, que debe coincidir con el orden de las conexiones
            const ubicacionTexto = esc.nuevasUbicaciones[index] || `Escenario ${destinoId} (Aleatorio!!)`; 
            
            nuevasUbicacionesHtml += `
                <button class="enlace-escenario-btn siguiente" onclick="simularClickEscenario(${destinoId})">
                    ${ubicacionTexto}
                </button>
            `;
        });
    } else {
        // Si no hay conexiones, muestra el texto simple o "Ninguna"
        nuevasUbicacionesHtml = esc.nuevasUbicaciones.length > 0 
            ? `<p>${esc.nuevasUbicaciones.join(', ')}</p>` 
            : "<p>Ninguna</p>";
    }

    // 2. Enlace al escenario anterior
    let enlaceAnteriorHtml = '';
    const conexionAnterior = dataGloomhaven.conexiones.find(c => c.destino === esc.id);
    if (conexionAnterior) {
        const origenEsc = dataGloomhaven.escenarios.find(e => e.id === conexionAnterior.origen);
        if (origenEsc) {
            enlaceAnteriorHtml = `
                <p><strong>Viene de:</strong>
                    <button class="enlace-escenario-btn anterior" onclick="simularClickEscenario(${conexionAnterior.origen})">
                        ${origenEsc.id === 0 ? origenEsc.nombre : `${String(origenEsc.id).padStart(0, '0')}: ${origenEsc.nombre}`}
                    </button>
                </p>
            `;
        }
    }
    
    // --- LÓGICA CONDICIONAL PARA ESCENARIO 0 (INICIO DE CAMPAÑA - Conexiones/Recompensas simplificadas) ---
    if (esc.id === 0) {
        return `
            ${toParagraphs(esc.textoEscenario)}
            <hr>
            <h3>CONEXIONES Y RECOMPENSAS:</h3>
            <p><strong>Nuevas ubicaciones:</strong></p>
            ${nuevasUbicacionesHtml} 
            <p><strong>LOGROS:</strong></p>
            <ul>${toUnorderedList(esc.logros)}</ul>
        `;
    }
    // --- LÓGICA ESTÁNDAR PARA EL RESTO DE ESCENARIOS (ID > 0) ---
    else {
        // Generación del HTML de recompensas solo si hay recompensas definidas.
        let recompensasHtml = '';
        if (esc.recompensas && esc.recompensas.length > 0) {
            recompensasHtml = `
                <p><strong>RECOMPENSAS:</strong></p>
                <ul>${toUnorderedList(esc.recompensas)}</ul>
            `;
        }

        return `
            <p><strong>REQUISITOS:</strong> ${esc.requisitos}</p>
            <p><strong>OBJETIVOS:</strong> ${esc.objetivos}</p>
            <hr>
            ${toParagraphs(esc.textoEscenario)}
            <hr>
            <h3>CONCLUSIÓN:</h3>
            ${toParagraphs(esc.conclusion)}
            <p><strong>LOGROS:</strong></p>
            <ul>${toUnorderedList(esc.logros)}</ul>
            
            ${recompensasHtml} 

            <hr>
            <h3>CONEXIONES:</h3>
            ${enlaceAnteriorHtml} 
            <p><strong>Nuevas ubicaciones:</strong></p>
            ${nuevasUbicacionesHtml}
        `;
    }
}

// ----------------------------------------------------
// FUNCIONES DE RENDERIZADO (MAPA Y MODAL)
// ----------------------------------------------------

/** * Dibuja una línea simple entre los bordes de los elementos, aplicando un offset manual si es necesario.
 * Incluye lógica para acortar la línea y dejar espacio para la punta de flecha.
 */
function drawArrow(source, target, tipo, container, customOffset = 0) {
    // 1. Obtener coordenadas y dimensiones
    const sourceRect = source.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Coordenadas de los CENTROS (punto de referencia)
    let cx1 = sourceRect.left + sourceRect.width / 2 - containerRect.left;
    let cy1 = sourceRect.top + sourceRect.height / 2 - containerRect.top;
    let cx2 = targetRect.left + targetRect.width / 2 - containerRect.left;
    let cy2 = targetRect.top + targetRect.height / 2 - containerRect.top;

    // Dimensiones de medio nodo para calcular el borde. (Nodos son 200px de ancho y ~60px de alto)
    const HALF_WIDTH = 100;
    const HALF_HEIGHT_ESTIMATE = 20; 
    const ALIGNMENT_THRESHOLD = 5;

    // 2. Aplicar el offset manual (para separar líneas paralelas)
    let x1_offset = cx1;
    let y1_offset = cy1;
    let x2_offset = cx2;
    let y2_offset = cy2;
    
    if (customOffset !== 0) {
        const dx_abs = Math.abs(cx2 - cx1);

        // Si la línea es casi vertical (mueve la línea horizontalmente)
        if (dx_abs < ALIGNMENT_THRESHOLD) { 
            x1_offset += customOffset;
            x2_offset += customOffset;
        } 
        // Si es horizontal o diagonal (mueve la línea verticalmente)
        else { 
            y1_offset += customOffset;
            y2_offset += customOffset;
        }
    }
    
    // 3. Recalcular la geometría de la línea (basada en el offset aplicado)
    const dx = x2_offset - x1_offset;
    const dy = y2_offset - y1_offset;
    let centerDistance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx); // Ángulo en radianes

    // 4. Calcular la distancia de INTERSECCIÓN con el borde del nodo
    let intersectionDistance = 0;
    
    if (Math.abs(dx) < ALIGNMENT_THRESHOLD) { 
        intersectionDistance = HALF_HEIGHT_ESTIMATE; // Vertical: Usa media altura
    } 
    else if (Math.abs(dy) < ALIGNMENT_THRESHOLD) {
        intersectionDistance = HALF_WIDTH; // Horizontal: Usa medio ancho
    }
    else {
        // En diagonales, usamos un promedio para reducir el solapamiento.
        intersectionDistance = (HALF_WIDTH + HALF_HEIGHT_ESTIMATE) / 2;
    }
    
    // 5. Ajustar la distancia y las coordenadas de inicio
    
    // -> MODIFICACIÓN CLAVE PARA PUNTA DE FLECHA:
    // Distancia necesaria para la punta de flecha (7px de largo + 1px de margen)
    const ARROW_HEAD_SPACE = 23; 
    const EXTRA_REDUCTION_ORIGIN = 17; 
    
    // La distancia total se reduce: (Inicio) + (Destino) + (Espacio para la punta)
    const reduction = (intersectionDistance + EXTRA_REDUCTION_ORIGIN) + intersectionDistance + ARROW_HEAD_SPACE; // <-- LÍNEA CLAVE MODIFICADA
    
    // La distancia final es la distancia entre centros menos la reducción total
    const finalDistance = Math.max(0, centerDistance - reduction); 

    // Mover el punto de inicio (x1, y1) desde el centro al borde del nodo
    const totalOriginOffset = intersectionDistance + EXTRA_REDUCTION_ORIGIN;
    let x1 = x1_offset + Math.cos(angle) * totalOriginOffset;
    let y1 = y1_offset + Math.sin(angle) * totalOriginOffset;
    
    // 6. Crear y dibujar la flecha
    const arrow = document.createElement('div');
    arrow.className = `arrow ${tipo}`;
    
    arrow.style.width = `${finalDistance}px`; 
    arrow.style.left = `${x1}px`;
    arrow.style.top = `${y1}px`;
    arrow.style.transformOrigin = '0 0';
    // Convertir a grados para CSS
    arrow.style.transform = `rotate(${angle * 180 / Math.PI}deg)`; 
    
    container.appendChild(arrow);
}


function mostrarDetalleEscenario(escenario) {
    const modal = document.getElementById('modal-detalle');
    const titulo = document.getElementById('modal-titulo');
    const cuerpo = document.getElementById('modal-cuerpo');

    // Título del modal: "Escenario 001: Nombre del Escenario"
    titulo.textContent = escenario.id === 0 
        ? escenario.nombre 
        : `Escenario ${String(escenario.id).padStart(0, '0')}: ${escenario.nombre}`;
    cuerpo.innerHTML = crearDetalleEscenario(escenario);
    
    modal.style.display = "block";
}

/** NUEVA FUNCIÓN: Muestra el modal de datos de grupo. */
function mostrarDatosGrupoModal() {
    document.getElementById('modal-datos-grupo').style.display = "block";
}


/** Actualiza el panel de resumen con el formato Base44 y renderiza el mapa. */
function actualizarBlackboard() {
    // 1. Actualiza Cabecera (AHORA EN EL MODAL DE DATOS)
    document.getElementById('nombre-grupo').textContent = dataGloomhaven.grupo;
    
    // 2. Actualiza Tarjetas de Datos (AHORA EN EL MODAL DE DATOS)
    const modPrecios = calcularModificador(dataGloomhaven.reputacion);
    const colorMod = modPrecios < 0 ? 'green' : (modPrecios > 0 ? 'red' : 'white');

    document.getElementById('prosperidad').textContent = `${dataGloomhaven.prosperidadNivel} + ${dataGloomhaven.prosperidadProgreso} / 5`;
    
    document.getElementById('reputacion-val').textContent = (dataGloomhaven.reputacion >= 0 ? '+' : '') + dataGloomhaven.reputacion;
    document.getElementById('reputacion-mod').innerHTML = `Modificador de precios: <span style="color: ${colorMod};">${modPrecios}</span>`;
    
    document.getElementById('objetos-disponibles').textContent = dataGloomhaven.objetosDisponibles;

    // 3. Actualiza Logros (AHORA EN EL MODAL DE DATOS)
    const createLogroTags = (items, tipo) => items.map(item => `<span class="logro-tag ${tipo}">${item}</span>`).join('');
    
    document.getElementById('logros-grupales').innerHTML = createLogroTags(dataGloomhaven.logrosGrupales, 'grupal');
    document.getElementById('logros-globales').innerHTML = createLogroTags(dataGloomhaven.logrosGlobales, 'global');

    // 4. Renderiza el Mapa de Escenarios
    const contMapa = document.getElementById('mapa-escenarios');
    contMapa.innerHTML = ''; 
    
    dataGloomhaven.escenarios.forEach(esc => {
        const div = document.createElement('div');
        div.className = `escenario ${esc.estado}`;
        div.id = `escenario-${esc.id}`; 
        div.dataset.mision = esc.id;
        
        // Muestra el ID para los escenarios > 0: **001**Nombre
        div.innerHTML = esc.id === 0 ? esc.nombre : `<strong>${String(esc.id).padStart(0, '0')}</strong>${esc.nombre}`;
        // --- LÓGICA DE COORDENADAS (NUEVA) ---
        const map_pos = esc.map_pos;
        // left = Margen Inicial + Columna * Espaciado
        const left = INITIAL_LEFT_OFFSET + map_pos.col * COL_SPACING;
        // top = Margen Inicial + Fila * Espaciado
        const top = INITIAL_TOP_OFFSET + map_pos.row * ROW_SPACING;
        
        div.style.top = `${top}px`;
        div.style.left = `${left}px`;
        // ---------------------------------------
        div.addEventListener('click', () => mostrarDetalleEscenario(esc));
        contMapa.appendChild(div);
    });
    
    // 5. Renderiza las Líneas de Conexión
dataGloomhaven.conexiones.forEach(conn => {
    const sourceDiv = document.getElementById(`escenario-${conn.origen}`);
    const targetDiv = document.getElementById(`escenario-${conn.destino}`);
    
    if (sourceDiv && targetDiv) {
        // --- CÓDIGO A MODIFICAR ---
        
        // 1. Encontrar el objeto de escenario destino para obtener su estado
        const targetEscenario = dataGloomhaven.escenarios.find(e => e.id === conn.destino);
        
        // 2. Determinar la clase CSS a aplicar
        // Usaremos el estado del destino (e.g., 'completado') para crear la clase (e.g., 'estado-completado')
        const estadoClase = `estado-${targetEscenario.estado}`; 
        
        // 3. Llamar a drawArrow con la nueva clase
        drawArrow(sourceDiv, targetDiv, estadoClase, contMapa, conn.offset || 0);

        // --- FIN DEL CÓDIGO MODIFICADO ---
        }
    });

    // 6. Configurar el cierre del modal de DETALLE (Original)
    const modalDetalle = document.getElementById('modal-detalle');
    const spanCloseDetalle = modalDetalle.querySelector('.cerrar-modal');
    spanCloseDetalle.onclick = () => modalDetalle.style.display = "none";
    
    // 7. Configurar la LÓGICA del nuevo modal de DATOS DE GRUPO
    const modalDatos = document.getElementById('modal-datos-grupo');
    const btnAbrirDatos = document.getElementById('btn-abrir-datos');
    const spanCloseDatos = modalDatos.querySelector('.cerrar-modal');
    
    btnAbrirDatos.addEventListener('click', mostrarDatosGrupoModal);
    spanCloseDatos.onclick = () => modalDatos.style.display = "none";
    
    // 8. Configurar el cierre global al hacer click fuera
    window.onclick = (event) => { 
        if (event.target === modalDetalle) {
            modalDetalle.style.display = "none";
        }
        if (event.target === modalDatos) {
            modalDatos.style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', actualizarBlackboard);