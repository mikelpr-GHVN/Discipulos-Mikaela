// Archivo: script.js - VERSIÓN CON LÓGICA DE MODAL BLACKBOARD

// ----------------------------------------------------
// OBJETO CENTRAL DE DATOS: ¡MODIFICA ESTOS VALORES!
// ----------------------------------------------------

const dataGloomhaven = {
    // Datos Principales
    grupo: "Discípulos de Mikaela",
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

    // Lista de Escenarios (Corta para el ejemplo)
    escenarios: [
        { id: 0, nombre: 'Gloomhaven', estado: 'pendiente', map_pos: { top: '30%', left: '50%' }, requisitos: [], desbloquea: [1, 2] },
        { id: 1, nombre: 'Guarida de la Niebla', estado: 'completado', map_pos: { top: '20%', left: '30%' }, requisitos: [], desbloquea: [3, 4] },
        { id: 2, nombre: 'Cámara Antigua', estado: 'pendiente', map_pos: { top: '45%', left: '70%' }, requisitos: ['Gobierno de la Ciudad Militarista'], desbloquea: [5] },
        { id: 3, nombre: 'Bosque Negro', estado: 'pendiente', map_pos: { top: '10%', left: '15%' }, requisitos: ['Primeros pasos'], desbloquea: [] },
        { id: 4, nombre: 'Cueva del Dragón', estado: 'bloqueado', map_pos: { top: '35%', left: '40%' }, requisitos: ['El recado de un demonio'], desbloquea: [6] },
        { id: 5, nombre: 'Templo de las Llaves', estado: 'bloqueado', map_pos: { top: '60%', left: '85%' }, requisitos: ['Tecnología antigua'], desbloquea: [] },
        { id: 6, nombre: 'Torre del Tiempo', estado: 'completado', map_pos: { top: '5%', left: '50%' }, requisitos: [], desbloquea: [7, 8] },
        { id: 7, nombre: 'Pico de la Montaña', estado: 'pendiente', map_pos: { top: '15%', left: '65%' }, requisitos: ['El poder de la mejora'], desbloquea: [] },
        { id: 8, nombre: 'Lago Escondido', estado: 'bloqueado', map_pos: { top: '55%', left: '60%' }, requisitos: ['La grieta neutralizada'], desbloquea: [] },
    ],

    // Lista de Conexiones
    conexiones: [
        { origen: 0, destino: 1, tipo: 'normal' },
        { origen: 0, destino: 2, tipo: 'alternativa' },
        { origen: 1, destino: 3, tipo: 'normal' },
        { origen: 1, destino: 4, tipo: 'normal' },
        { origen: 2, destino: 5, tipo: 'normal' },
        { origen: 4, destino: 6, tipo: 'normal' },
        { origen: 6, destino: 7, tipo: 'normal' },
        { origen: 6, destino: 8, tipo: 'normal' },
    ]
};

// ----------------------------------------------------
// VARIABLES GLOBALES (Añadimos las del nuevo modal)
// ----------------------------------------------------
const contMapa = document.getElementById('mapa-escenarios');
const nombreGrupoEl = document.getElementById('nombre-grupo');
const reputacionValEl = document.getElementById('reputacion-val');
const reputacionModEl = document.getElementById('reputacion-mod');
const prosperidadEl = document.getElementById('prosperidad');
const logrosGrupalesEl = document.getElementById('logros-grupales');
const logrosGlobalesEl = document.getElementById('logros-globales');
const completadosEl = document.getElementById('escenarios-completados');
const objetosEl = document.getElementById('objetos-disponibles');

// Nuevos elementos del modal Blackboard
const modalBlackboard = document.getElementById('modal-blackboard');
const btnAbrirBlackboard = document.getElementById('abrir-blackboard');
const btnCerrarBlackboard = document.getElementById('cerrar-blackboard');
const modalDetalle = document.getElementById('modal-detalle'); // El modal anterior

let escenarioSeleccionado = null;

// ----------------------------------------------------
// FUNCIONES DE UTILIDAD Y CÁLCULO
// ----------------------------------------------------

function calcularModificador(reputacion) {
    if (reputacion >= 19) return "-5";
    if (reputacion >= 15) return "-4";
    if (reputacion >= 11) return "-3";
    if (reputacion >= 7) return "-2";
    if (reputacion >= 3) return "-1";
    if (reputacion >= -2) return "+0";
    if (reputacion >= -6) return "+1";
    if (reputacion >= -10) return "+2";
    if (reputacion >= -14) return "+3";
    if (reputacion >= -18) return "+4";
    return "+5";
}

// ... (Aquí irían las funciones de drawArrow, mostrarDetalleEscenario, toggleEstadoEscenario) ...
// **NOTA: No he incluido las funciones completas para no duplicar un código muy largo, pero asume que están aquí.**
// Asegúrate de que las tienes en tu script.js

// ----------------------------------------------------
// FUNCIÓN PRINCIPAL DE RENDERIZADO Y LÓGICA
// ----------------------------------------------------

function actualizarBlackboard() {
    // 1. Datos del grupo
    nombreGrupoEl.textContent = dataGloomhaven.grupo;

    // 2. Reputación y modificador
    reputacionValEl.textContent = dataGloomhaven.reputacion > 0 ? `+${dataGloomhaven.reputacion}` : dataGloomhaven.reputacion;
    reputacionModEl.textContent = `Modificador de precios: ${calcularModificador(dataGloomhaven.reputacion)}`;
    reputacionValEl.className = dataGloomhaven.reputacion > 0 ? 'positivo' : (dataGloomhaven.reputacion < 0 ? 'negativo' : '');
    
    // 3. Prosperidad y Objetos
    prosperidadEl.textContent = dataGloomhaven.prosperidadNivel;
    objetosEl.textContent = dataGloomhaven.objetosDisponibles;

    // 4. Conteo de Escenarios Completados
    const completados = dataGloomhaven.escenarios.filter(e => e.estado === 'completado').length;
    completadosEl.textContent = completados;

    // 5. Logros
    logrosGrupalesEl.innerHTML = dataGloomhaven.logrosGrupales.map(l => `<span class="logro-item"><i class="fas fa-certificate"></i> ${l}</span>`).join('');
    logrosGlobalesEl.innerHTML = dataGloomhaven.logrosGlobales.map(l => `<span class="logro-item"><i class="fas fa-globe"></i> ${l}</span>`).join('');

    // 6. Mapa de Escenarios (Borrar y Redibujar)
    contMapa.innerHTML = ''; 
    
    dataGloomhaven.escenarios.forEach(esc => {
        // ... (Aquí va la creación de los nodos div) ...
        const div = document.createElement('div');
        div.className = `escenario ${esc.estado}`;
        div.id = `escenario-${esc.id}`; 
        div.dataset.mision = esc.id;
        
        // Muestra el ID para los escenarios > 0
        div.innerHTML = esc.id === 0 ? esc.nombre : `<strong>${String(esc.id).padStart(3, '0')}</strong>${esc.nombre}`;
        div.style.top = esc.map_pos.top;
        div.style.left = esc.map_pos.left;
        div.addEventListener('click', () => mostrarDetalleEscenario(esc));
        contMapa.appendChild(div);
    });
    
    // 7. Renderiza las Líneas de Conexión
    dataGloomhaven.conexiones.forEach(conn => {
        const sourceDiv = document.getElementById(`escenario-${conn.origen}`);
        const targetDiv = document.getElementById(`escenario-${conn.destino}`);
        
        if (sourceDiv && targetDiv) {
            drawArrow(sourceDiv, targetDiv, conn.tipo, contMapa, conn.offset || 0);
        }
    });

    // 8. Configurar el cierre del modal de detalle (EXISTENTE)
    const spanCloseDetalle = document.querySelector('#modal-detalle .cerrar-modal');
    if (spanCloseDetalle) {
        spanCloseDetalle.onclick = () => { modalDetalle.style.display = 'none'; };
    }
}

// ----------------------------------------------------
// LÓGICA DE APERTURA/CIERRE DEL NUEVO MODAL BLACKBOARD
// ----------------------------------------------------

if (btnAbrirBlackboard) {
    btnAbrirBlackboard.addEventListener('click', () => {
        modalBlackboard.style.display = 'block';
    });
}

if (btnCerrarBlackboard) {
    btnCerrarBlackboard.addEventListener('click', () => {
        modalBlackboard.style.display = 'none';
    });
}

// Cierra cualquier modal si se hace clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target === modalBlackboard) {
        modalBlackboard.style.display = 'none';
    }
    if (event.target === modalDetalle) {
        modalDetalle.style.display = 'none';
    }
});

// Inicialización

actualizarBlackboard();

