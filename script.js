// OBJETO CENTRAL DE DATOS: ¡MODIFICA ESTOS VALORES!

const dataGloomhaven = {
    // Datos Principales
    grupo: "Discípules de Mikaela",
    reputacion: 8, 
    prosperidadNivel: 3, // Nivel de prosperidad actual
    prosperidadProgreso: 2, // Progreso hacia el siguiente nivel (0-6)
    jugadores: ["Zaki", "Dani", "Siscu", "Jose", "Miquel"], 
    
    // Logros
    logrosGrupales: [
        "primeros pasos", 
        "los planes de Jekserah", 
        "mapa del tesoro", 
        "encargo siniestro",
        "el recado de un demonio",
        "incensario de romperrocas",
        "Una invitación"    
    ], 
    logrosGlobales: [
        "gobierno de la ciudad militarista", 
        "la comerciante huye", 
        "tecnología antigua",
        "el poder de la mejora",
        "la grieta neutralizada"
    ], 
    objetosDisponibles: "1-21, 92, 101, 107, 110, 115, 123, 124, 126 y 132", 
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
 
// ID 1: TÚMULO NEGRO 
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
                "Con el último de los bandidos muerto, os tomáis un momento para recuperar el aliento y quitaos de la cabeza la visión de los cadáveres vivientes desgarrándoos la piel. Vuestra presa no se encuentra entre los muertos. Os estremecéis solo con pensar en los horrores que os esperan abajo en las catacumbas.(2)"
            ], 
            recompensas: [], 
            logros: ["Primeros pasos (Grupo)"], 
            nuevasUbicaciones: ["Guarida del túmulo (2)"] 
        },

        // ID 2: GUARIDA DEL TÚMULO 
        {
            id: 2, 
            nombre: "Guarida del Túmulo", 
            estado: "completado", 
            map_pos: { row: 1.1, col: 2 },
            vieneDe: "Túmulo Negro", 
            requisitos: "Primeros pasos (Grupo) COMPLETO", 
            objetivos: "Matar al Capitán bandido y a todos los enemigos revelados.", 
            textoEscenario: [
                "El hedor a muerte y carne podrida se vuelve más denso mientras os abrís paso entre los cadáveres de vuestros enemigos y os adentráis cada vez más en este cementerio subterráneo. Guiados por los susurros apagados de una conversación, avanzáis por el laberinto de criptas y entráis en una pequeña cámara llena de ladrones con cara de pocos amigos y preparados para atacar.",
                "Sin duda custodian algo, así que debéis estar en el lugar correcto."
            ], 
           
            conclusion: [ 
                "Escudriñando la carnicería que queda tras la batalla, encontráis un alijo al fondo de la sala que contiene los pergaminos por los que os contrataron. No podéis evitar echarles un vistazo, pero lo que haya escrito en ellos está en un antiguo lenguaje que desconocéis. No obstante, os llama la atención un mapa de la zona rural norte. Una curva del río Aguasmanas está claramente marcada como punto importante. Mientras os planteáis buscar más información sobre la llamada \"Penumbra\", decidís que ese lugar también podría ser un punto de interés para vosotros.(4)",
                "Pero, de momento, podéis dejarlo a un lado. Guardáis los pergaminos y regresáis a Gloomhaven para obtener vuestra recompensa.",
                "Os reunís con Jekserah de nuevo en el León Durmiente, le entregáis los papeles y os paga la cantidad acordada.",
                "—¿Sabéis qué? —os susurra ella entre el bullicio de la taberna—. Si estáis interesados, puede que tenga otro trabajo para vosotros. Una tribu de inox ha saqueado algunas de mis caravanas en el Bosque de las Dagas cuando se dirigían a la capital. He informado a la milicia, pero no han hecho nada —dice con desprecio—. Os puedo indicar la dirección de su campamento. Si les dais una lección, os pagaré aún más.",
                "Pone un tosco mapa del bosque sobre la mesa y se levanta, con las joyas tintineando a cada uno de sus movimientos.",
                "—Venid a verme cuando hayáis terminado.(3)"
            ], 
            recompensas: ["10 de oro para cada personaje", "+1 de prosperidad"], 
            logros: [], 
            nuevasUbicaciones: ["Campamento Inox (3)", "Cripta de los Malditos (4)"] 
        },

        // ID 3: CAMPAMENTO INOX        
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
            recompensas: ["Ninguna"],
            logros: ["Ninguno"], 
            nuevasUbicaciones: ["Cripta ruinosa (5)", "Cripta decadente (6)"], 
        },
        // ID 5: CRIPTA RUINOSA (AÑADIDO - Placeholder)
        {   
            id: 5, 
            nombre: "Cripta Ruinosa", 
            estado: "completado", 
            map_pos: { row: 3, col: 3 },
            vieneDe: "Cripta de los Malditos (4)",
            requisitos: "Ninguno",
            objetivos: "Matar a todos los enemigos.",
            textoEscenario: ["Vuestra misión está clara. Estos sectarios elementales están manipulando el tejido de la realidad de vuestro mundo y hay que detenerlos. Con este objetivo en mente, seguís la pista de los pergaminos que recuperasteis hasta la antigua cripta que suponéis que es la base de operaciones de la secta. Preparándoos para el combate, abatís la carcomida puerta e irrumpís por la entrada de la cripta. La vista que se abre ante vosotros es a la vez horrible y maravillosa. Un grupo de sectarios está llevando a cabo conjuros rituales frente a un enorme agujero negro en el aire. Los sectarios se vuelven hacia vosotros y gruñen, desenfundando sus dagas de sacrificio. Tras ellos, una oscuridad emana del agujero y toma la forma de horripilantes criaturas llenas de dientes y garras. Sois conscientes de que debéis enviar a estos horrores del plano elemental de vuelta al vacío, pero el miedo os paraliza."],
            conclusion: ["Con los sectarios y sus esbirros muertos, parece que la grieta oscura se encuentra ahora latente. Pero no por ello es menos desconcertante. Tiráis una piedra al agujero y ésta desaparece en la nada. Debéis admitir que os preguntáis si podríais entrar por la grieta y sobrevivir al viaje a donde quiera que haya acabado la piedra (10). Por otro lado, encontrar algún modo de cerrar la grieta es, probablemente, la decisión más prudente. Hay una hechicera etérida en Gloomhaven que podría saber más sobre todo este asunto de los planos. Aunque es famosa por pedir favores imposibles antes de ayudar a nadie (14) (19)."],
            recompensas: [""],
            logros: [], 
            nuevasUbicaciones: ["Plano del poder elemental (10)", "Hondonada helada (14)", "Cripta olvidada (19)"], 
        },
        // ID 6: CRIPTA DECADENTE (NUEVO)
   { 
    id: 6, 
    nombre: "Cripta Decadente", 
    estado: "completado", 
    map_pos: { row: 2, col: 3 }, 
    vieneDe: "Cripta de los Malditos (4)",
    requisitos: "Ninguno",
    objetivos: "Revelar la pieza M y matar a todos los enemigos revelados",
    textoEscenario: [
        "¿Qué sería la vida sin algo de intriga? Los sectarios han señalado claramente esta cripta como un punto problemático para ellos. Tal vez despejar ese lugar mejore vuestras relaciones con ellos. O tal vez solo encontréis un gran alijo de tesoros que no haya llegado aún a manos de los saqueadores.",
        "Cuando llegáis, el olor hace que os arrepintáis de vuestra decisión más que de ninguna otra. No es el hecho de que estéis hartos de explorar antiguas criptas decrépitas. No son los horrobles no muertos que se tambalean y gimen en las sombras. Es el olor. El olor a muerte, a inhumanidad y a carne putrefacta."
    ],
    conclusion: [
        "Después de los terribles gritos y gemidos de los no muertos, el sonido de alguien aplaudiendo resulta extraño y alarmante. Os dais la vuelta y veis una figura encapuchada de pie a pocos centímetros de vuestra antorcha. Levantáis las armas, pero no parece que la sonrisa de su rostro sea del tipo que pida a gritos borrarla a base de acero. Resulta amenazante, sí, pero de una forma que nunca antes habíais experimentado.",
        "—Buen trabajo, chicos —manifiesta la figura—, vaya, vaya, sois un grupo de lo más especial ¿eh? Y lo cierto es que habéis llamado nuestra atención despejando de no muertos descarriados esta problemática cripta. La verdad es que preferimos que nuestros no muertos sean de la variedad controlable, ¿no?",
        "Se hace un largo silencio mientras la figura continúa mirándoos, aún sonriente.",
        "—Bueno, ¿seríais tan amables de hacernos otro favor? Después, casi podríamos dar por zanjado todo ese asunto del asesinato de algunos de mis hermanos —dice mientras deja de sonreír—. Hay una nigromante en Gloomhaven. Nos ha estado causando algunos problemas, enviándonos mercenarios para que le hagan el trabajo sucio. Puede que la conozcáis. Matad a Jekserah. Traed su cabeza hasta nuestro cuartel general y puede que os perdonemos la vida. ⑧"
    ],
    recompensas: ["5 de oro para cada personaje"],
    logros: ["Los planes de Jekserah", "Encargo siniestro"], 
    nuevasUbicaciones: ["Almacén de Gloomhaven (8)"] 
},
        // ID 7: GRUTA TREPIDANTE (NUEVO - Placeholder) 
{ 
            id: 7, 
            nombre: "Gruta Trepidante", 
            fechaCompletado: "02-12-2025",
            estado: "completado", 
            map_pos: { row: 2, col: 5 },     
            vieneDe: "Almacén de Gloomhaven (8)",
            requisitos: "El poder de la mejora (Global) y La comerciante huye (Global) COMPLETOS", 
            objetivos: "Saquear todas las piezas de tesoro",
            textoEscenario: ["Entráis con cautela en el Hueso Retorcido, evitando cristales rotos, clavos y demás objetos traicioneros. Echáis un vistazo a la habitación y no veis más que los tipicos restos. Pero, antes de que podáis llamar a Hail, una explosión en una habitación del piso de arriba sacude violentamente todo el edificio.",
"-¡Ojala ardais todos en el abismo! -grita la voz incorpórea de Hail- . Elegí la choza más apartada pequeña, decrépita y desagradable que encontré para llevar a cabo mi obra, y, aun así, incluso los mayores idiotas logran encontrarla e interrumpir mis investigaciones. - La mujer translúcida aparece repentinamente ante vosotros-. Sabéis que vuestra mera presencia en este lugar cambia el flujo del éter, provocando sucesos imprevistos de consecuencias catastróficas, ¿no? Es decir, ¿cómo podríais no saberlo? ",
"Hail cierra los ojos y empieza a respirar profundamente, desapareciendo un poco más con cada exhalación.",
"-Si, accedí a ayudaros. Y esperaba que el recuerdo no fuera más que una pesadilla, pero no lo era, así que ya no me queda otro remedio. Sin embargo, lo menos que podéis hacer a cambio es avisarme antes de cruzar el umbral. - Os lanza una mirada gélida-. En cualquier caso, ¿qué es lo que queréis? Acabemos rápido con esto. ",
"Le explicáis la situación con Jekserah y la necesidad de averiguar dónde se esconde. ",
"-Ah, ¿un simple rastreo? Bien, entonces, estamos de suerte - responde Hail -. O, mejor dicho, estoy de suerte. El ingrediente principal que necesito para una tarea así es raíz dentada, que justo se me acabó la semana pasada. Iba a salir a buscar más, pero ahora puedo enviaros a vosotros a por ella en mi lugar. ¡Todos ganamos! Excepto esos infernales duendes del bosque que rondan mi lugar de recogida habitual. Espero que mueran algunos de ellos. ",
"Un pequeño mapa cae en vuestras manos, Hail hace un movimiento con los brazos y una fuerza repentina y poderosa os empuja hacia la puerta. ",
"- ¡Recordad! ¡Tocad el timbre cuando volváis y esperad 47 segundos antes de entrar por la puerta! ",
"Conseguís seguir el mapa hasta una red de pequeñas cuevas al norte del Bosque de las Dagas. El lugar se encuentra lleno de vida. hay enormes plantas frondosas, además de varios duendes y animales hostiles. Os preparáis para el ataque. "], 
            conclusion: ["Arrancáis el último arbusto y le podáis la raíz. En la gruta todavía quedan muchas criaturas hostiles, pero con la mochila ahora llena de raíz dentada, os retiráis con rapidez y, finalmente, encontráis el Camino de Piedra que va hacia Gloomhaven, de vuelta al Hueso Retorcido. Tocáis el timbre y esperáis un minuto antes de entrar por la inclinada puerta. No hay signos de Hail, así que la llamáis y esperáis. Y tarda bastante más de lo que os gustaría. ",
"Cuando por fin aparece al otro lado de la barra del bar, parece muy sorprendida de veros. ¿Eso que lleváis ahí es raíz dentada? ¡Ja! Qué casualidad, justo se me acabó la semana pasada y estaba pensando en salir a buscar. ",
"Os miráis todos, confundidos. ",
"-Oh, os envié yo a por ella, ¿verdad? - dice mientras se rasca la cabeza-. Cierto. Rastreo. Ahora lo recuerdo. Dadme las raíces, ",
"Le dais las bolsas llenas de raíz dentada. ",
"-Recordadme los detalles. ¿Jekserah? Una mujer valrath, ¿así de alta? ¿Una comerciante que coquetea con la nigromancia? ¿Lleva una capa roja y varias joyas de oro? No debería resultar difícil. ",
"Hail desaparece con las raíces y empezáis a escuchar un leve golpeteo desde el piso de arriba. Finalmente, Hail aparece ante vosotros sosteniendo un pergamino cubierto de pasta de raíz dentada muy espesa y viscosa. ",
"-Ahí tenéis. Siguiendo el mapa deberíais encontrar el camino a donde se esté escondiendo. ",
"Cogéis el mapa con indecisión. -Podría haberle limpiado la pasta, pero pensé que le añadía algo de encanto."],

            recompensas: ["Ninguna"],
            logros: ["Ninguno"],
            nuevasUbicaciones: ["Santuario de la nigromante (20)"]

},
        // ID 8: ALMACÉN DE GLOOMHAVEN (Nuevo Escenario)
{ 
            id: 8, 
            nombre: "Almacén de Gloomhaven", 
            estado: "completado", 
            map_pos: { row: 1, col: 4 }, 
            vieneDe: "Campamento Inox (3), Cripta Decadente (6)",
            requisitos: "Los planes de Jekserah (Grupo) COMPLETO Y La invasión de los muertos (Global) INCOMPLETO", 
            objetivos: "Matar a los dos Guardaespaldas inox", 
            textoEscenario: [
                "Bajo las órdenes de vuestro misterioso contacto, os dirigís hacia el almacén de Jekserah arropados por el manto de la noche. Con algo de suerte, descubriréis sus planes y podréis ponerles fin.",
                "Esperando encontraros un almacén prácticamente abandonado, os encontráis con que, en su lugar, está plagado de no muertos. Al menos eso os da una idea más clara de sus planes. No cabe duda de que ha estado usando los pergaminos de necromancia que le devolvisteis para levantar a los no muertos dentro de las murallas de la ciudad. Y ha llegado el momento de devolverlos a su descanso eterno."
    ], 
            conclusion: [ 
                "Terminada la batalla, miráis por la ventana y no hay rastro de la huidiza valrath. Habéis detenido sus planes por ahora, pero después de sus palabras, queda claro que tendréis que darle caza antes de que pueda cumplir sus amenazas. (13)",
                "—Está más allá de donde alcanza mi red de inteligencia —os dice la guardia Argeise encogiéndose de hombros cuando le preguntáis más tarde—. Me encantaría asegurarme de que no nos causará más problemas, pero ha huido de la ciudad y no estoy dispuesta a perseguirla a través de los bosques. Puede que tengáis más suerte con la hechicera etérida de la ciudad —os sugiere—. Seguro que ella puede adivinar la ubicación de esa cobarde por vosotros..., si conseguís que coopere. (14) (7)"
    ], 
            recompensas: ["+2 de reputación"],
            logros: ["La comerciante huye (Global)"], 
            nuevasUbicaciones: ["Gruta trepidante (7)", "Templo del Vidente (13)", "Hondonada Helada (14)"] 
},
            // ID 9: MINA DE DIAMANTES
{ 
            id: 9, 
            nombre: "Mina de Diamantes", 
            estado: "bloqueado", 
            map_pos: { row: 0, col: 3 }, 
            vieneDe: "Campamento Inox (3)",
            requisitos: "La comerciante huye (Global) INCOMPLETO", 
            objetivos: "Desconocido",
            textoEscenario: ["Desconocido"],
            conclusion: ["Desconocido"],
            recompensas: [],
            logros: ["desconocido"],
            nuevasUbicaciones: ["Desconocido"]

},

        // ID 10: PLANO DEL PODER ELEMENTAL (NUEVO)
        { 
            id: 10, 
            fechaCompletado: "28-07-2025",
            nombre: "Plano del Poder Elemental", 
            estado: "completado", 
            map_pos: { row: 4, col: 2 }, 
            vieneDe: "Cripta Ruinosa (5)",
            requisitos: "La grieta neutralizada (Global) INCOMPLETO",
            objetivos: "Matar a todos los enemigos",
            textoEscenario: [
                "Vuestra visión cambia y el entorno se difumina. Unos horribles lamentos os perforan los oídos. Sentís como si se os estiraran las extremidades, como si el universo intentara despedazaros.",
                "Y entonces se detiene. Abrís los ojos y veis que vuestros pies se encuentran sobre tierra firme, pero a vuestro alrededor se arremolinan extrañas energías elementales: fuego mezclándose con hielo con un poder torrencial.",
                "Recuperáis el aliento, miráis hacia atrás y os aliviáis al ver un vacío de oscuridad muy parecido a aquel que os trajo a este lugar.",
                "Sin embargo, poco os dura el alivio, ya que una resonante voz llena el aire crepitante.",
                "—¿Quiénes sois vosotros para matar a mis sirvientes e invadir mi reino? ¡Esta afrenta no quedará sin castigo!",
                "Ante vosotros las energías en el aire comienzan a crear vagas formas demoñiacas. Tendréis que luchar para abriros camino y adentraros más en este intempestivo lugar."
            ],
            conclusion: [
                "Mientras el último demonio a la vista grita y se disipa en el viento, caéis de rodillas agradecidos de que la lucha haya terminado.",
                "—Interesante —suena la voz en algún profundo lugar de vuestras mentes, arañándoos el cerebro con cada palabra—. Sois unos intrusos sorprendentemente poderosos, y lo cierto es que podríais serme de utilidad si no fuera por vuestro obvio y vulgar plan.",
                "La roca roja bajo vosotros retumba y se agrieta, abriendo una ardiente fisura a vuestros pies.",
                "—Os abro las puertas de mi reino. Venid, hablemos cara a cara.",
                "Habiendo dado ya este día un primer salto de fe, no creéis que dar otro vaya a mataros. El calor se vuelve más intenso a medida que descendéis con el aire hirviente elevándose desde abajo y ralentizando la caída. Aterrizáis con bastante seguridad en lo que parece ser un templo subterráneo. Ante vosotros se alza una terrorífica y monstruosa criatura con cuernos, se encuentra de pie sobre cuatro patas con pezuñas y sostiene un tridente.",
                "—Valientes y necios —la voz sigue resonando en el interior de vuestras cabezas—. Me seréis de utilidad. Hay un artefacto de gran poder en un templo olvidado junto al río Beso de la Sierpe. Podéis recuperarlo y traérmelo (22) o morir aquí y ahora. (21)"
            ],
            recompensas: [],
            logros: ["El recado de un demonio (Grupo)"], 
            nuevasUbicaciones: ["Trono infernal(21)", "Templo de los Elementos (22)"] 
        },
        // ID 13: NUEVO ESCENARIO 
        { 
            id: 13, 
            nombre: "Templo del Vidente", 
            estado: "pendiente", 
            map_pos: { row: 1, col: 5 },
            vieneDe: "Almacén de Gloomhaven (8)",
            requisitos: "Ninguno",
            objetivos: "Desconocido",
            textoEscenario: ["Desconocido"],
            conclusion: ["Desconocido"],
            recompensas: [],
            logros: ["desconocido"], 
            nuevasUbicaciones: ["Desconocido"] 
        },

// ID 14: HONDONADA HELADA (NUEVO)
        { 
            id: 14, 
            nombre: "Hondonada Helada", 
            estado: "completado", 
            map_pos: { row: 3, col: 4 }, 
            vieneDe: "Almacén de Gloomhaven (8), Cripta ruinosa (5)", 
            requisitos: "Ninguno",
            objetivos: "Matar a todos los enemigos", 
            textoEscenario: [
                "Necesitáis una hechicera, así que una hechicera debéis encontrar. Siguiendo las indicaciones de un etérido en el Distrito de la Caldera, os encontráis ante una taberna decrépita y abandonada: el Hueso Retorcido. Al abrir la puerta, el interior se encuentra en calma. No es lo que esperáis. Es Hail. Es una Inox de piel oscura con un vestido rojo andrajoso que se sienta junto a un barril y está contando monedas. Tiene una esfera de cristal sobre el barril, que parece ser el origen de la luz en la sala. El lugar entero está repleto de trastos, polvorientos, oxidados, mohosos y con las telarañas por doquier. Al atravesar la puerta, una mujer translúcida aparece repentinamente ante vosotros. —Oh, mirad a la mujer etérida. Ella podrá cumplir todos vuestros deseos. Todo lo que tiene que hacer es un pacto con las mareas y nuestros mayores sueños se harán realidad —suspira con frustración mientras agita las manos—. Dejadme en paz. Al moveros, ella se queda mirándoos fijamente. —Bien, dejando a un lado la interrupción, tal vez podáis ayudarme. Hoy por mí, tal vez mañana por vosotros. Así es como funcionan estos asuntos, que yo sepa. —Se da la vuelta y camina hacia unas escaleras destartaladas, pero, tras unos pocos pasos, se desvanece por completo—. Necesito una esfera, se encuentra en la Hondonada Helada, en las Montañas Cobrizas. —La voz de la mujer viene directamente de enfrente de vosotros, como si no se hubiera movido del sitio—. Traédmela y puede que os ayude.",
                "El por cierto, mi nombre es Hail. No volváis sin la esfera. El mapa resulta fácil de seguir. En las profundidades de las Montañas Cobrizas, oculto por las ventiscas de nieve, encontráis la entrada a una cueva oscura y estrecha. Las huellas de lobos alrededor de la entrada son inquietantes, pero, firmemente decididos, entráis."
            ], 
            conclusion: [
                "Con el último de vuestros adversarios muerto, os acercáis a la pared trasera de la cámara, donde una pequeña esfera azul flota sobre el suelo. Extendéis la mano lentamente y notáis que la esfera está **fría al tacto**. La agarráis firmemente y notáis que la temperatura es casi insoportable, así que la guardáis rápidamente en la bolsa y regresáis al Hueso Retorcido.",
                "Entráis en la taberna abandonada y llamáis a Hail. Deambuláis, observando el caótico desastre a vuestro alrededor sin obtener respuesta. Os preguntáis cómo Hail puede llevar a cabo cualquier tipo de hechicería en un entorno así. Al acercaros al mostrador, Hail aparece ante vosotros, sosteniendo la esfera.",
                "—¡Oh, aún estáis aquí! —Os dais la vuelta y veis a Hail en el centro de la habitación. «Qué gusto tener en experimento con vosotros», os parece bien. —Se acerca a vosotros y os tropezáis hacia atrás, cayendo sobre una mesa que se rompe en varios pedazos—. «Vamos, no seáis críos, estoy bastante segura de que saldrá bien. Hail explica que quiere intentar traer poder puro de otro plano y contenerlo en una pequeña esfera que podría otorgar grandes poderes y quien lo posea. Sin embargo, el proceso de contención requiere una gran cantidad de **metal dorado**.",
                "—Ahora que me habéis ayudado con mis cometidos, supongo que debería devolveros el favor —suspira Hail—. ¿Tenéis algo en lo que queráis exactamente? (7) (19) (31) (43)"
            ],
            recompensas: ["Logro global: El poder de la mejora"],
            logros: ["El poder de la mejora (Global)"], 
            nuevasUbicaciones: ["Gruta trepidante (7)", "Cripta olvidada (19)", "Plano de la noche (31)", "Nido de dracos (43)"] 
        },
        // ID 16: MINA DE DIAMANTES
{ 
            id: 16, 
            nombre: "El paso de la montaña", 
            estado: "pendiente", 
            map_pos: { row: 1, col: 6 }, 
            vieneDe: "Santuario de la nigromante (20)",
            requisitos: "Desconocido", 
            objetivos: "Desconocido",
            textoEscenario: ["Desconocido"],
            conclusion: ["Desconocido"],
            recompensas: [],
            logros: ["desconocido"],
            nuevasUbicaciones: ["Desconocido"]

},
// ID 18: CLOACAS ABANDONADAS (NUEVO)
{ 
            id: 18, 
            nombre: "Cloacas abandonadas", 
            estado: "completado",
            fechaCompletado: "11-02-2026",
            map_pos: { row: 3, col: 5 }, 
            vieneDe: "Santuario de la nigromante (20)",
            requisitos: "Ninguno", 
            objetivos: "matar a todos los enemigos",
            textoEscenario: ["En medio del Puente Silencioso, un guardia de la ciudad os señala una rejilla bajo el lado oeste.",
"—Es la mejor entrada a ese agujero pestilente. Buena suerte.",
"Descendéis un poco por los muros del puente y, finalmente, llegáis a una rejilla retorcida y rota por el paso de los años. Encendéis una antorcha y entráis por un camino estrecho y ligeramente inclinado, evitando la corriente de líquido marrón que corre en la dirección opuesta. Tras unos pocos minutos, el camino se divide en varios pasajes.",
"Mientras miráis a vuestro alrededor para decidir qué camino tomar, el eco de unos silbidos llega hasta vosotros a través de los pasajes de piedra. Agarráis con fuerza a vuestras armas, esforzándoos por ver las formas reptantes que se os aproximan.",
"---1---",
"Recorriendo los pasajes, acabáis en una gran habitación abierta con un aljibe en el centro. Alrededor del aljibe hay un grupo de infestores mirando hacia vosotros y gruñéndoos. Ésta debe ser la causa del envenenamiento del agua."],
            conclusion: ["Los infestores yacen muertos y su oscura sangre se mezcla con los charcos de agua del suelo. Investigáis un poco más, pero no lográis encontrar ningún tipo de veneno entre los cadáveres. ¿Es posible que estas alimañas no fueran las causantes y sólo estuvieran escondiéndose aquí, lejos de los ojos de la guardia? Al final de la sala, se aprecian unas grandes grietas en la pared que muestran un camino hacia las profundidades. (23)",
"Y si tenéis alguna forma de respirar bajo el agua, (14) o (43) podríais incluso sumergiros en el aljibe y buscar la fuente del veneno. (26)"],
            recompensas: ["ninguna"],
            logros: ["ninguno"],
        nuevasUbicaciones: ["Hondonada helada (14)", "Ruinas profundas (23)", "Antiguo aljibe (26)", "Nido de dracos (43)",]

},
        // ID 19: NUEVO ESCENARIO
        {
            id: 19, 
            fechaCompletado: "02-09-2025",
            nombre: "Cripta olvidada", 
            estado: "completado",
            map_pos: { row: 4, col: 3 }, 
            vieneDe: "Cripta Ruinosa (5)",
            requisitos: "El poder de la mejora (Global) COMPLETO", 
            objetivos: "Matar a todos los enemigos.",
            textoEscenario: [
                "—¿Qué queréis hacer qué? —dice Hail, mirando fijamente—. ¿Habéis encontrado una grieta en el Plano del Poder Elemental y queréis cerrarla? —suspira Hail—. Bueno, accedí a ayudaros. —Hail comienza a jugar con la esfera lanzándola arriba y abajo—. De acuerdo, por lo que describís, vamos a necesitar algo de trabajo extra para cerrar una grieta de esa magnitud. Podría hacerlo yo misma, pero me llevaría mucho tiempo, y tendríamos muchos problemas si nos atacaran desde el otro lado en mitad del hechizo. Sería mucho más sencillo de hacer si tuviera un incensario elemental, cosa que, siendo sinceros, sería muy oportuno, ya que necesito uno para mis estudios. Hace muchos años conocí a un poderoso elementalista que poseía uno, ahora está muerto, pero os llevaré personalmente a su cripta. No es recomendable que manejéis el incensario por vuestra cuenta.",
                "Tras un día de viaje, encontráis un enorme y descuidado mausoleo junto al río Beso de la Sierpe.",
                "—Romperrocas era un buen tipo. No obstante, acabar aplastado por piedras gigantes es uno de los peligros que todo elementalista debe asumir.",
                "Tras quitar las enormes enredaderas, os adentráis en la cripta."
            ],
            conclusion: [
                "¡Vaya! ¡Genial! —dice Hail—. Hoy en día, estos malditos sectarios están por todas partes. Seguramente también busquen el incensario, lo puede que no quieran que lo tengáis vosotros.",
                "Miráis a Hail muy confundidos y ella señala hacia las sombras, de donde emergen unas figuras oscuras con túnicas negras.",
                "—No deberías haber venido aquí, carafantasma —dice uno de ellos.",
                "—Uf —suspira Hail—. Despachad rápido a estos mentecatos. Me aburren.",
                "***",
                "Hail avanza y logra coger el incensario. Lo levanta y pronuncia unas palabras en una lengua desconocida. Un fuego estalla y destruye a los no muertos que quedaban, reduciéndolos a cenizas.",
                "—Bien, ahora que nos hemos encargado de esos estorbos, vayamos a lo divertido —dice Hail con la más pequeña de las sonrisas—. Mostradme esa grieta vuestra. (27)"
            ],
            recompensas: ["+1 de prosperidad"], 
            logros: ["Incensario de Romperrocas (Grupo)"], 
            nuevasUbicaciones: ["Grieta destructiva (27)"] 
        },
        // ESCENARIO 20: SANTUARIO DE LA NIGROMANTE (NUEVO)
        { 
            id: 20, 
            nombre: "Santuario de la nigromante", 
            estado: "completado", 
            fechaCompletado: "16-12-2025",
            map_pos: { row: 1.9, col: 6 },     
            vieneDe: "Gruta Trepidante (7)",
            requisitos: "El poder de la mejora (Global) y La comerciante huye (Global) COMPLETOS", 
            objetivos: "Desconocido",
            textoEscenario: ["Una cosa sí que es cierta: nunca habríais encontrado la guarida de Jekserah sin ayuda. Os habríais perdido irremediablemente desde hace horas en las profundidades del Bosque de las Dagas de no ser por las detalladas indicaciones que lleváis.",
                "Tras varios giros y vueltas, os encontráis frente a un antiguo mausoleo oculto entre la maleza del bosque. Un enorme tronco bloquea gran parte de la entrada principal. Este edificio debió construirse hace eras; y debe llevar olvidado gran parte de ellas.",
                "Conseguís pasar por el tronco del árbol hasta las oscuras salas de la tumba. Encendéis una antorcha y esperáis en silencio, intentando oír los ruidos de sus moradores. El sonido es débil, pero escucháis el sonido de algo arrastrándose a vuestra izquierda. Os acercáis y abrís unas puertas de piedra. Ante vosotros, la luz de la antorcha revela las sombras de los muertos vivientes. Parece que Jekserah ha puesto mucho empeño en reconstruir su ejército."],
            conclusion: ["Jekserah se derrumba mientras la vida se apaga en sus ojos. - Yo... - os susurra -. No tenéis ni idea de lo que se avecina (28)",
                "Con un último golpe de espada le cercenáis la cabeza y abandonáis ese desdichado lugar lleno de cadáveres destrozados todo lo rápido que podéis. Le entregáis la cabeza al capitán de la guardia y os pagan una generosa recompensa por ella.",            
                "—Si os interesa, puede que tenga más trabajo para vosotros —os dice con tono lúgubre—. Para empezar, los exploradores del norte nos han informado de que se han avistado unas criaturas voladoras de gran tamaño. La gente teme que sean dragones —dice sacudiendo la cabeza con irritación—. Me gustaría que os dirigierais al paso norte y lo investigarais. (16)",
                "Sin embargo, algo más cerca de casa, tenemos ciertos problemas gestándose en las alcantarillas bajo el Mercado Zozobrante. Los pozos de la zona parecen estar envenenados, y las alcantarillas se han llenado de serpientes y lodos vivientes, lo que dificulta que lo investiguemos. Necesito que descubráis la fuente del veneno. (18)"],
            recompensas: ["20 de oro para cada personaje", 
                "+1 de prosperidad",
                "+2 de reputación"],
            logros: ["Ninguno"],
            nuevasUbicaciones: ["El paso de la montaña (16)", "Cloacas abandonadas (18)", "Cámara ritual ultraterrestre (28)"],

        },
        // ESCENARIO 21
        { 
            id: 21, 
            fechaCompletado: "06-08-2025",
            nombre: "Trono Infernal", 
            estado: "completado", 
            map_pos: { row: 5, col: 2 }, 
            vieneDe: "Plano del Poder Elemental (10)",
            requisitos: "La Grieta neutralizada (Global) INCOMPLETO",
            objetivos: "Matar al demonio supremo",
            textoEscenario: [
                "Antes de que podáis echar mano a vuestras armas, el demonio se percata de vuestras intenciones.",
"— ¡Idiotas! — Su voz os provoca un dolor desgarrador en la cabeza y os tambaleáis de dolor— ¡¿Os atrevéis a atacarme en mi propio territorio?! ¡Acabáis de cometer un gran error!",
"Con un estallido de llamas, su enorme forma se desvanece en la oscuridad.",
"— ¡A mí, mis sirvientes! ¡Aplastad a estos mortales contra las piedras! ¡Decorad mi palacio con sus entrañas!",
            ], 
            conclusion: [
"Con un golpe final, la grieta se vuelve más caótica, gira violentamente y lanza zarcillos de energía en ángulos extraños. Un fuerte gemido emerge de la grieta y su intensidad aumenta hasta que su sonido invade todo el palacio. Con un destello de luz, el vacío se colapsa sobre sí mismo y, entonces, explota, produciendo una onda expansiva que destruye a todos los demonios que encuentra en su camino.",
"Cuando la onda entra en contacto con el Demonio Supremo, su aura se disipa y su grito os perfora la mente. Las piernas se le doblan y el demonio se desploma en el suelo, fragmentándose en innumerables esquirlas de roca.",
"Entonces, los gritos se detienen y el palacio se sumerge en un extraño silencio. Con la amenaza destruida, lo único que queda por hacer es saquear el palacio y regresar a vuestro propio plano.",
      ],
            recompensas: ["50 de oro para cada personaje, +1 de prosperidad, Añade el Evento de ciudad 78 al mazo"],
            logros: ["La grieta neutralizada, Si el logro Artefacto perdido está completo: Artefacto recuperado"],
            nuevasUbicaciones: [] 
        },
        // ESCENARIO 22
        { 
            id: 22, 
            nombre: "Templo de los Elementos",
            estado: "pendiente",
            fechaFallido: "24-10-2025",
            map_pos: { row: 4, col: 1 }, 
            vieneDe: "Plano del Poder Elemental (10)",
            requisitos: "El recado de un demonio (Grupo) COMPLETO o Tras la pista (grupo) COMPLETO",
            objetivos: "Destruir todos los altares",
            textoEscenario: ["Vuestro camino os ha llevado hasta el Templo de los Elementos en busca de un antiguo artefacto. Lo único que sabéis es que se supone que es muy poderoso, pero los demás detalles son muy vagos por el momento. Entráis en la decadente estructura de piedra para ver con vuestros propios ojos a qué se debe tanto alboroto", 
                "Cuando pasáis, vuestros ojos detectan signos de visitas recientes: una rama rota y huellas en el polvo. Os acercáis a la cámara principal y preparáis vuestras armas mientras varias figuras encapuchadas emergen de entre las sombras. ", 
                "- Demasiado tarde, idiotas. Ahora este templo está bajo nuestro contro y disponemos de todo su poder."],
            conclusion: ["Desconocido"],
            recompensas: [],
            logros: ["desconocido"], 
            nuevasUbicaciones: ["Desconocido"] 
        },
        // ID 23: Ruinas profundas (NUEVO)
        { 
            id: 23, 
            nombre: "Ruinas profundas", 
            estado: "pendiente", 
            map_pos: { row: 3, col: 6 },
            vieneDe: "Cloacas abandonadas (18)",
            requisitos: "Una invitación (Grupo) COMPLETO",
            objetivos: "Desconocido",
            textoEscenario: ["Desconocido"],
            conclusion: ["Desconocido"],
            recompensas: [],
            logros: ["desconocido"], 
            nuevasUbicaciones: ["Desconocido"] 
        },
        // ID 26: Antiguo aljibe (NUEVO)
        { 
            id: 26, 
            nombre: "Antiguo aljibe", 
            estado: "bloqueado",
            map_pos: { row: 4, col: 6 },
            vieneDe: "Cloacas abandonadas (18)", 
            requisitos: "Respiración subacuática (Global) o A través de las ruinas (Grupo) COMPLETOS",  
            objetivos: "Desconocido",
            textoEscenario: ["Desconocido"],
            conclusion: ["Desconocido"],
            recompensas: [],
            logros: ["desconocido"], 
            nuevasUbicaciones: ["Desconocido"] 
        },

        // ID 27: NUEVO ESCENARIO
        { 
            id: 27, 
            nombre: "Grieta destructiva",
            estado: "completado",
            map_pos: { row: 5, col: 3 },
            vieneDe: "Cripta olvidada (19)",
            requisitos: "Artefacto perdido (Global) INCOMPLETO e Incensario de Romperrocas (Grupo) COMPLETO",
            objetivos: "Proteger a Hail durante 10 rondas",
            textoEscenario: ["De regreso a la Cripta Ruinosa, Hail casi parece feliz mientras camina por el fango con vosotros, impaciente por ayudaros a luchar contra los demonios y los no muertoos",
"—Ha pasado mucho tiempo desde la última vez que salí de Gloomhaven —os comenta, balanceando el incensario elemental mientras camina—. Necesito estar en la ciudad para llevar a cabo mis investigaciones, pero sienta bien tomarse un pequeño descanso y viajar a este plano de nuevo. Además, ahora ya no es tan peligroso.",
"Miráis a la étérida de forma inquisitiva.",
"—Los encuentros con los sectarios y los demonios no son precisamente amistosos, desde luego, pero la última vez que estuve por estas tierras... Bueno, es algo de lo que juré que nunca hablaría.",
"Hail se sume en el silencio hasta que llegáis a la cripta. Al abrir las antiguas puertas casi esperáis que, de nuevo, el lugar esté plagado de sectarios y demonios, pero las estancias de piedra están desoladas y en silencio. Os dirigís hacia la cámara principal, donde encontráis la grieta gigante, situada sobre el altar demoníaco.",
"—Bueno, está claro que no bromeabais —dice Hail—. ¡Esto es una belleza! ¡Su amplitud y estabilidad son impresionantes!",
"—Hail camina por el perímetro del altar mientras arroja arena al aire y observa cómo cae—. Gracias al incensario del viejo Romperrocas, estoy bastante segura de poder cerrarlo, aunque no creo que a las fuerzas del otro lado de la grieta les vaya a hacer mucha gracia.",
"Hail levanta el incensario sobre su cabeza con un brazo y sumerge el otro en la grieta hasta la altura de su codo.",
"—¡Acérquense, damas y caballeros! Estamos a punto de presenciar un espectáculo de muerte."],  
            conclusion: ["Hail grita con una intensidad espeluznante. La miráis con miedo de que más demonios os hayan sobrepasado y la estén atacando. Entonces, veis como saca el brazo de la grieta, marchito y humeante.",
"Cuando sus dedos nudosos despejan las energías caóticas, la grieta vacila y empieza a menguar. En la cámara se levanta un fuerte viento y, por primera vez, los demonios que luchan contra vosotros muestran miedo. En lugar de clavaros las garras a vosotros, las aferran al suelo de piedra en un intento desesperado de no sucumbir a la atracción de la grieta.",
"Pero sus esfuerzos son inútiles. Todos y cada uno de ellos son devueltos a su plano. La grieta se encoge hasta convertirse en un punto brillante y acaba desapareciendo.",
"Hail se derrumba y corréis a su lado.",
"—Oh, no os preocupéis por mí —tose—, estaré bien. Este viejo cuerpo ha pasado por cosas mucho peores. —A Hail le da un ataque de tos que no tarda en convertirse en risa—. Aunque eso ha sido increíble, ¿eh? Si hay algo para lo que puedo confiar en vosotros, es para encontrar desafíos como éste. Ayudadme a levantarme. He de volver a Gloomhaven de inmediato. Tengo muchas ideas nuevas para mis investigaciones. Venid cuando queráis, encontraré la manera de agradecéroslo como os merecéis."],
            recompensas: ["+1 de prosperidad","100 de oro para cada personaje - este oro debe gastarse de immediato en mejoras" ],    
            logros: ["La grieta neutralizada (Global)"],
            nuevasUbicaciones: ["Ninguna"]
        },
// ID 28: CÁMARA RITUAL ULTRATERRESTRE (NUEVO)
        { 
            id: 28, 
            nombre: "Cámara ritual ultraterrestre", 
            estado: "completado", 
            fechaCompletado: "13-01-2026",
            map_pos: { row: 2, col: 7 },
            vieneDe: "Santuario de la nigromante (20)",
            requisitos: "Encargo siniestro (Grupo) COMPLETO",
            objetivos: "Matar a todos los enemigos",
            textoEscenario: ["Cuando entráis en la cripta, una cara familiar os saluda al pie de las escaleras, sonriendo de oreja a oreja.",
"—Oh, habéis venido. De nuevo, quiero agradeceros vuestra ayuda en la eliminación de esa molesta nigromante. Venid, dejadme hacer las presentaciones.",
"La figura encapuchada os guía por unas puertas de piedra a una enorme sala y señala una grieta negra y llameante en el aire.",
"—Este —comienza, incapaz de ocultar su regocijo— es nuestro maestro: la Penumbra, que deseaba daros las gracias personalmente por asesinar a tantos de nuestros hermanos y por retrasar nuestros planes.",
"A través de la grieta entra un grupo de horrendos y abultados cadáveres que se tambalean hacia vosotros.",
"—¡Escoria insignificante! —os grita de repente la eufórica figura—. ¿Pensabais que podríais ganaros nuestro favor tan fácilmente? ¡Estáis aquí para morir! ¡Para uniros a nuestra causa como cadáveres, al igual que el resto de estos idiotas indignos!"],
            conclusion: ["Agotados, dejáis caer vuestras armas. Por suerte, no parece que vayan a llegar más no muertos por la grieta, pero, aun así, su existencia y la presencia de la Penumbra es preocupante.",
"—Lo habéis hecho bien —una voz tenue y fría que parece venir de la oscuridad frente a vosotros rompe el silencio—. Mis esbirros no son capaces de perdonar, pero yo sí. Venid, venid a mí. Entrad en mi reino. Abrazad lo inevitable.",
"La grieta está ante vosotros. Podéis llegar hasta el final o podéis daros la vuelta y abandonar este lugar, ignorando la llamada de la Penumbra."],
            recompensas: [],
            logros: ["Una invitación"], 
            nuevasUbicaciones: ["Santuario de la Penumbra (29)"] 
        },
        // ID 29: SANTUARIO DE LA PENUMBRA (NUEVO)
        { 
            id: 29, 
            nombre: "Santuario de la Penumbra", 
            estado: "pendiente", 
            map_pos: { row: 3.2, col: 7 },
            vieneDe: "Cámara ritual ultraterrestre (28)",
            requisitos: "Una invitación (Grupo) COMPLETO",
            objetivos: "Desconocido",
            textoEscenario: ["Desconocido"],
            conclusion: ["Desconocido"],
            recompensas: [],
            logros: ["desconocido"], 
            nuevasUbicaciones: ["Desconocido"] 
        },
        // ID 31: NUEVO ESCENARIO 
        { 
            id: 31, 
            nombre: "Plano de la noche", 
            estado: "bloqueado", 
            map_pos: { row: 4, col: 4 },
            vieneDe: "Hondonada Helada (14)",
            requisitos: "El poder de la mejora (Global) y Artefacto recuperado (Global) COMPLETOS",
            objetivos: "Desconocido",
            textoEscenario: ["Desconocido"],
            conclusion: ["Desconocido"],
            recompensas: [],
            logros: ["desconocido"], 
            nuevasUbicaciones: ["Desconocido"] 
        },
        // ID 43: NUEVO ESCENARIO 
        { 
            id: 43, 
            nombre: "Nido de dracos", 
            estado: "pendiente", 
            map_pos: { row: 4.4, col: 5 },
            vieneDe: "Hondonada Helada (14)",
            requisitos: "El poder de la mejora (Global) COMPLETO",
            objetivos: "Desconocido",
            textoEscenario: ["Desconocido"],
            conclusion: ["Desconocido"],
            recompensas: [],
            logros: ["desconocido"], 
            nuevasUbicaciones: ["Desconocido"] 
        },
        //ID 57: NUEVO ESCENARIO
        { 
    id: 57, 
    nombre: "MP - Investigación", 
    estado: "completado", 
    map_pos: { row: 3, col: 2 }, // Ubicado a la izquierda del escenario 5 (5,3)
    vieneDe: "Escenario 5",
    requisitos: "Misión personal \"Venganza\"",
    objetivos: "Matar al espía",
    textoEscenario: [
        "Recopilar información sobre la muerte de vuestro amigo no fue tarea fácil, pero vuestra incesante investigación os acaba llevando a conocer a cierto teniente corrupto emplazado en los barracones occidentales. Aparentemente, se le conoce por hacer la vista gorda ante ciertos delitos en el Mercado Zozobrante, y estaba de guardia la noche que asesinaron a vuestro amigo. Ha llegado el momento de tirar abajo algunas puertas y obtener algunas respuestas, cueste lo que cueste."
    ],
    conclusion: [
        "Al buscar entre los restos del espía, encontráis una nota con la fecha de una reunión fuera de la ciudad en una cabaña remota y algo sobre recolectar cadáveres. Esperáis con ansia esa reunión para cobraros vuestra venganza. 58",
        "Descubierto el espía, el resto de los guardias de la ciudad os da las gracias."
    ],
    recompensas: ["+1 de reputación"],
    logros: [], 
    nuevasUbicaciones: ["Cabaña ensangrentada (58)"] 
},
// ID 58: NUEVO ESCENARIO
{ 
    id: 58, 
    nombre: "Cabaña ensangrentada", 
    estado: "completado", 
    map_pos: { row: 3, col: 1 }, // Ubicado a la izquierda del escenario 57 (5,2)
    vieneDe: "Investigación (57)",
    requisitos: "Misión personal \"Venganza\"",
    objetivos: "Matar al Cosechador",
    textoEscenario: [
        "Rodeáis la pequeña cabaña en la Costa de los Anzuelos y preparáis vuestras armas. Sin embargo, el propietario del lugar no está del todo desprevenido. Unos grandes elementales de tierra y una patrulla de atormentadores acompañados de grotescos duendes negros custodian ambas entradas. Entráis en acción con la esperanza de deshaceros de todos ellos antes de que den la alarma."
    ],
    conclusion: [
        "La sed de sangre es algo extraño, una vez saciada, te convierte en una cáscara vacía. La daga cae al suelo mientras una fría sensación os invade. El trabajo está hecho y ha llegado el momento de seguir adelante, por duro que resulte."
    ],
    recompensas: [
        "Misión \"Venganza\" completa",
        "<a href=\"#\" onclick=\"abrirModalImagen('sobreX.jpg'); return false;\">Abre el sobre X</a>",
        "+2 de reputación",
    ],
    logros: [], 
    nuevasUbicaciones: [] 
},
       
        // ID 65: MINA DE AZUFRE 
        { 
            id: 65, 
            nombre: "Mina de azufre", 
            estado: "pendiente", 
            fechaFallido: "21-11-2025",
            map_pos: { row: 0, col: 2 },
            vieneDe: "Túmulo Negro (1)",
            requisitos: "Ninguno",
            objetivos: "Matar a todos los enemigos y saquear todas las piezas de tesoro",
            textoEscenario: ["No puede decirse que la ubicación de la Mina de Azufre sea un secreto, su hedor se percibe fácilmente a una milla de distancia. Sin embargo, el mapa que encontrasteis hace una mención particular a un artefacto poderoso de una civilización extinta: una especie de taladro a vapor que podría ser de mucha utilidad si acabara en las manos adecuadas. A medida que os acercáis el olor a podrido se va volviendo más fuerte hasta que apenas podéis respirar."],
            conclusion: ["Desconocido"],
            recompensas: [],
            logros: ["desconocido"], 
            nuevasUbicaciones: ["Desconocido"] 
        },
        // ID 67: Biblioteca arcana
        { 
            id: 67, 
            nombre: "Biblioteca arcana", 
            estado: "completado", 
            map_pos: { row: 0, col: 4 },
            vieneDe: "Almacén de Gloomhaven (8)", 
            requisitos: "Ninguno",
            objetivos: "Matar al Golem arcano",
            textoEscenario: [
                "Parece que las antiguas escrituras que encontrasteis del místico y lunático Morsbane eran ciertas. Sus desvaríos hablan acerca de un gran tesoro que él custodiaba y que solo se volvería más poderoso y valioso con el tiempo. Ese malvado lleva ya mucho tiempo muerto, pero, siguiendo las escrituras, encontráis las ruinas de lo que una vez fue su gran torre.",
                "Ahora es poco más que escombros. Cualquier tesoro que estuviera en su interior o ya no está o ha quedado enterrado en las profundidades, pero no sois tan fáciles de disuadir. En la base de la colina, veis una puerta de piedra cubierta de vegetación. Pero, desgraciadamente, está custodiada por varias criaturas amenazantes del bosque."
            ],
            conclusion: [
                "—Gracias —al proferir su última palabra los glifos en las extremidades del Gólem comienzan a desvanecerse y varios trozos de piedra caen de su estructura.",
                "Buscando en la biblioteca, encontráis un viejo diario que detalla cómo se le otorgó inteligencia y capacidad de aprendizaje al Gólem. Sin embargo, lo que aprendió es que era un monstruo sin alma y que no podía conocer nada más, ya que se le ordenó que nunca abandonara el lugar y que matara a todos los intrusos. También encontráis un brillante núcleo de poder dentro del cuerpo del gólem."
            ],
            recompensas: ["Núcleo de energía (Objeto 132)"],
            logros: ["Tecnología antigua (Global)"], 
            nuevasUbicaciones: [] 
        },
         // ID 82: Montaña ardiente 
        { 
            id: 82, 
            nombre: "Montaña ardiente", 
            estado: "completado", 
            fechaCompletado: "21-11-2025",
            map_pos: { row: 2, col: 1 },
            vieneDe: "Cripta de los Malditos (4)",
            requisitos: "Ninguno",
            objetivos: "Sacrificar un artefacto o escapar con todos los artefactos",
            textoEscenario: ["Siguiendo el rastro de los inox, encontráis en una hendidura los restos quemados y derrumbados de su poblado.", 
"Una nube oscura corona la montaña trasera. Seguís un viejo camino de piedra, aparentemente intacto, que serpentea por el terreno chamuscado y termina en un acantilado de cientos de metros de altura. Encontráis unas grandes puertas de piedra, cálidas al tacto y esculpidas en la ladera de la montaña. Una vez dentro, veis charcos de llamas líquidas iluminando la sala con un espeluznante brillo rojo. Los cadáveres carbonizados de los savvas están esparcidos por todas partes. La tierra da una violenta sacudida y varios demonios vuelven sus miradas hacia vosotros.",
"Los savvas intentan convertir esta cámara trasera en su última defensa. Los cuerpos destrozados y achicharrados de muchos de ellos yacen en los alrededores. Un trono ocupa el centro de la cámara y, sobre él, el cuerpo de un majestuoso savvas sostiene un martillo y un casco. Chamuscadas en la pared se leen las siguientes palabras: 'Locura'. 'La bestia se despierta'. 'Es imposible controlar el poder de la montaña'. 'Devuélvelos y se dormirán de nuevo'  "],
            conclusion: ["Atravesáis las puertas de piedra con el calor y las cenizas pisándoos los talones. El temblor de la montaña continúa creciendo mientras bajáis por el camino de piedra, ajora lleno de fisuras. El cielo se ha vuelto negro y grandes rocas caen por las laderas. Apenas conseguís escapar de regreso a Gloomhaven. La devastación del volcán se percibe incluso desde allí."],
            recompensas: ["-1 de reputación", "-2 de prosperidad"],
            logros: ["Ninguno"], 
            nuevasUbicaciones: ["Ninguna"] 
        },
        // INSERCIÓN DEL ESCENARIO 93
        { 
            id: 93, 
            nombre: "Barco naufragado", 
            estado: "completado", 
            map_pos: { row: 0, col: 5 }, 
            vieneDe: "Biblioteca arcana (67)",
            requisitos: "Mapa del tesoro (Grupo) COMPLETO",
            objetivos: "Matar a todos los enemigos.",
            textoEscenario: [
                "Agarráis el descolorido mapa y os lo pegáis al pecho como si fuera una manta para protegeros de los fuertes vientos del norte. Habéis estado navegando en un pequeño barco alquilado durante lo que os han parecido siglos en busca de ese barco hundido olvidado hace ya tiempo. Tal vez, si os acercáis más al mapa, conseguiréis que los trazos y las cifras se vean más claros y podáis descifrarlos.",
                "Cuando ya no os quedan pocas esperanzas, divisáis en el horizonte una isla que os da un mal presentimiento. A medida que os acercáis, distinguís el contorno de un barco estrellado con los arrecifes de la isla, medio hundido y que apenas se sostiene.",
                "Navegáis hacia el lado más lejano de la isla, donde una playa remota y acogedora os permite echar anclas con más seguridad. La idea del tesoro que os espera a bordo de la nave os ayuda a luchar contra el viento, pero vuestros pensamientos también rondan los peligros que podrían estar protegiéndolo. Mientras vuestro bote navega hasta la orilla, veis un banco de acechadores que se levanta desde las olas dándoos la bienvenida. Quién sabe cuánto tiempo llevarán siguiendo vuestro barco desde las profundidades, esperando el momento oportuno para atacaros."
            ],
            conclusion: [
                "Los espíritus parecen tranquilos y los acechadores se han retirado. Tras saquear todo lo que podéis del barco, estáis ansiosos por navegar de vuelta a Gloomhaven y poner los pies en tierra seca y cálida.",
                "Echáis un último vistazo a la extraña isla y al barco encallado para luego poneros en marcha."
            ],
            recompensas: ["10 PX para cada personaje"],
            logros: [], 
            nuevasUbicaciones: [] 
        },

    ],
    // conexiones entre escenarios: escribir el origen y destino por ID de escenario, 
    // reduction es para reducir la longitud de la conexión (opcional), 
    // y offsetY es para desplazar la conexión verticalmente (opcional)
    //se pueden definir estos tipos de conexiones: 'principal', 'alternativa', 'bloqueada'. 
    // Principal es la línea más gruesa, alternativa es una línea más delgada, bloqueada es una línea discontinua.
    conexiones: [
        { origen: 0, destino: 1, tipo: 'alternativa', offset: 0 }, 
        { origen: 1, destino: 2, tipo: 'alternativa', offset: 0 }, 
        { origen: 1, destino: 65, tipo: 'alternativa', offset: 0, reduction: 5 }, // conexión reducida en 50px para evitar solapamiento
        { origen: 2, destino: 3, tipo: 'alternativa', offset: 0 }, 
        { origen: 2, destino: 4, tipo: 'alternativa', offset: 0 },  
        { origen: 3, destino: 8, tipo: 'alternativa', offset: 0 }, 
        { origen: 3, destino: 9, tipo: 'alternativa', offset: 0 }, 
        { origen: 4, destino: 5, tipo: 'alternativa', offset: 0 }, 
        { origen: 4, destino: 6, tipo: 'alternativa', offset: 0 }, 
        { origen: 4, destino: 82, tipo: 'alternativa', offset: 0 },
        { origen: 5, destino: 10, tipo: 'alternativa', offset: 0 },
        { origen: 5, destino: 14, tipo: 'alternativa', offset: 0 },
        { origen: 5, destino: 19, tipo: 'alternativa', offset: 0 },
        { origen: 5, destino: 57, tipo: 'alternativa', offset: 0 },
        { origen: 6, destino: 8, tipo: 'alternativa', offset: 0 },
        { origen: 7, destino: 20, tipo: 'alternativa', offset: 0},
        { origen: 8, destino: 7, tipo: 'alternativa', offset: 0 }, 
        { origen: 8, destino: 13, tipo: 'alternativa', offset: 0 },
        { origen: 8, destino: 14, tipo: 'alternativa', offset: 0 }, 
        { origen: 8, destino: 67, tipo: 'alternativa', offset: 0 }, 
        { origen: 10, destino: 21, tipo: 'alternativa', offset: 0 }, 
        { origen: 10, destino: 22, tipo: 'alternativa', offset: 0 },
        { origen: 14, destino: 7, tipo: 'alternativa', offset: 0 }, 
        { origen: 14, destino: 19, tipo: 'alternativa', offset: 0 }, 
        { origen: 14, destino: 31, tipo: 'alternativa', offset: 0 },
        { origen: 14, destino: 43, tipo: 'alternativa', offset: 0 },
        { origen: 18, destino: 14, tipo: 'alternativa', offset: 0 },
        { origen: 18, destino: 23, tipo: 'alternativa', offset: 0 },
        { origen: 18, destino: 26, tipo: 'alternativa', offset: 0, reduction: 10},
        { origen: 18, destino: 43, tipo: 'alternativa', offsetY: 30, reduction: 30}, // conexión reducida  para evitar solapamiento
        { origen: 19, destino: 27, tipo: 'alternativa', offset: 0 },
        { origen: 20, destino: 16, tipo: 'alternativa', offset: 0 },
        { origen: 20, destino: 18, tipo: 'alternativa', offset: 0 },
        { origen: 20, destino: 28, tipo: 'alternativa', offset: 0, reduction: 10, }, // conexión reducida  para evitar solapamiento
        { origen: 28, destino: 29, tipo: 'alternativa', offset: 0, reduction: 20, offsetY: 20 }, // conexión reducida para evitar solapamiento
        { origen: 57, destino: 58, tipo: 'alternativa', offset: 0 },
        { origen: 67, destino: 93,  offset: 0 }, 
    ]           
};
// ----------------------------------------------------
// CONSTANTES DE COORDENADAS (NUEVAS)
// ----------------------------------------------------
// Espaciado horizontal entre el centro de los nodos (en px). Basado en los 300px originales.
const COL_SPACING = 230; 
// Espacio vertical entre el centro de los nodos (en px). Basado en los 100px originales.
const ROW_SPACING = 105; 
// Margen inicial izquierdo. 100px + (col * 300) = 400px (para col 1).
const INITIAL_LEFT_OFFSET = -200; 
// Margen inicial superior. 50px + (row * 100) = 50px (para row 0).
const INITIAL_TOP_OFFSET = 30; 

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
    // **CAMBIO CLAVE: Utilizamos filter() en lugar de find()**
    const conexionesAnteriores = dataGloomhaven.conexiones.filter(c => c.destino === esc.id);
    
    if (conexionesAnteriores.length > 0) {
        let botonesHtml = '';
        conexionesAnteriores.forEach(conn => {
            const origenEsc = dataGloomhaven.escenarios.find(e => e.id === conn.origen);
            if (origenEsc) {
                botonesHtml += `
                    <button class="enlace-escenario-btn anterior" onclick="simularClickEscenario(${conn.origen})">
                        ${origenEsc.id === 0 ? origenEsc.nombre : `${String(origenEsc.id).padStart(0, '0')}: ${origenEsc.nombre}`}
                    </button>
                `;
            }
        });
        // Unimos todos los botones generados
        enlaceAnteriorHtml = `<p><strong>Viene de:</strong> ${botonesHtml}</p>`;
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
function drawArrow(source, target, tipo, container, customOffset = 0, customReduction = 0, customOffsetY = 0) { 
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
    // Modificar estos valores para desplazar las flechas más cerca o más lejos del borde.
    // En diagonales, se usa un promedio para reducir el solapamiento.
    const HALF_WIDTH = 85; // Ancho / 2 (200px / 2 = 100px, menos un margen de 15px)
    const HALF_HEIGHT_ESTIMATE = 22; //Altura / 2 estimada (60px / 2 = 30px, menos un margen de 8px)
    const ALIGNMENT_THRESHOLD = 5; // Umbral para considerar líneas como "casi verticales" o "casi horizontales"

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
    // Aplicar desplazamiento vertical forzado
    if (customOffsetY !== 0) {
        y1_offset += customOffsetY;
        y2_offset += customOffsetY;
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
        intersectionDistance = (HALF_WIDTH + HALF_HEIGHT_ESTIMATE) / 1.3;
    }
    
    // 5. Ajustar la distancia y las coordenadas de inicio
    
    // -> MODIFICACIÓN CLAVE PARA PUNTA DE FLECHA:
    // Distancia necesaria para la punta de flecha (7px de largo + 1px de margen)
    const ARROW_HEAD_SPACE = 21; // Espacio para la punta de flecha al final del conector
    const EXTRA_REDUCTION_ORIGIN = 15; // Espacio extra en el origen del conector para evitar solapamiento
    
    // La distancia total se reduce: (Inicio) + (Destino) + (Espacio para la punta)
    const reduction = (intersectionDistance + EXTRA_REDUCTION_ORIGIN) + intersectionDistance + ARROW_HEAD_SPACE + customReduction; // <-- LÍNEA CLAVE MODIFICADA
    
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


function mostrarDetalleEscenario(escenario) { // Recibe el objeto escenario completo
    const modal = document.getElementById('modal-detalle');
    const titulo = document.getElementById('modal-titulo');
    const cuerpo = document.getElementById('modal-cuerpo');

    // Título del modal: "Escenario 1: Nombre del Escenario"
    // --- CÓDIGO NUEVO PARA EL TÍTULO Y LA ETIQUETA DE ESTADO ---

// 1. Mapeo de estados a texto legible
const textoEstado = {
    completado: "Completado",
    pendiente: "Pendiente",
    bloqueado: "Bloqueado",
    inicial: "Inicial"
};

// 2. Generar el título base del escenario
const tituloTexto = escenario.id === 0 
    ? escenario.nombre 
    : `Escenario ${String(escenario.id).padStart(0, '0')}: ${escenario.nombre}`;

// 3. Crear el HTML de la etiqueta de estado
const estadoTagHtml = `<span class="estado-tag estado-${escenario.estado}">${textoEstado[escenario.estado]}</span>`;

// 4. Combinar título y etiqueta usando innerHTML
titulo.innerHTML = tituloTexto + estadoTagHtml;

// 5. Generar el HTML de la fecha de completado (Subtítulo)
    let fechaHtml = '';
    // Solo si está completado Y tiene la propiedad fechaCompletado
    if (escenario.estado === 'completado' && escenario.fechaCompletado) {
        // Creamos un párrafo con una clase especial para el estilo
        fechaHtml = `<p class="modal-subtitulo-fecha">Completado el: <strong>${escenario.fechaCompletado}</strong></p>`;
    }
    // --- 5.1: Añade el tag de fecha fallido ---
    if (escenario.fechaFallido) {
    fechaHtml += `<p class="modal-subtitulo-fecha fallido"><i class="fas fa-times-circle"></i> Intento fallido el: <strong>${escenario.fechaFallido}</strong></p>`;
}
    // 6. Construir el Cuerpo del modal, incluyendo la fecha como primer elemento
    // La función `crearDetalleEscenario(escenario)` debería devolver el resto del HTML del cuerpo.
    cuerpo.innerHTML = fechaHtml + crearDetalleEscenario(escenario);
    
    modal.style.display = "block";
}

// Muestra el modal de datos de grupo. 
function mostrarDatosGrupoModal() {
    document.getElementById('modal-datos-grupo').style.display = "block";
}


/** Actualiza el panel de resumen del grupo y renderiza el mapa. */
function actualizarBlackboard() {
    // 1. Actualiza Cabecera (AHORA EN EL MODAL DE DATOS)
    document.getElementById('nombre-grupo').textContent = dataGloomhaven.grupo;
    
    // 2. Actualiza Tarjetas de Datos (AHORA EN EL MODAL DE DATOS)
    const modPrecios = calcularModificador(dataGloomhaven.reputacion);
    const colorMod = modPrecios < 0 ? 'green' : (modPrecios > 0 ? 'red' : 'white');
    // denominador del progreso de prosperidad es variable en función del nivel actual
    document.getElementById('prosperidad').textContent = `${dataGloomhaven.prosperidadNivel} + ${dataGloomhaven.prosperidadProgreso} / 6`;
    
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
    
    dataGloomhaven.escenarios.forEach(esc => { // Recibe el objeto escenario completo
        // Crea el div del escenario
        const div = document.createElement('div'); // Div contenedor del escenario
        div.className = `escenario ${esc.estado}`;
        div.id = `escenario-${esc.id}`; 
        div.dataset.mision = esc.id; 
        
        // Muestra el ID para los escenarios > 0: **001**Nombre
        div.innerHTML = esc.id === 0 ? esc.nombre : `<strong>${String(esc.id).padStart(0, '0')}</strong>${esc.nombre}`;
        
        // Añadir marca de próxima partida si existe
            if (esc.fechaProximapartida) {
            const marcaFecha = document.createElement('div');
            marcaFecha.className = 'marca-proxima-partida';
            marcaFecha.textContent = `🎯 Próxima partida: ${esc.fechaProximapartida}`;
        div.appendChild(marcaFecha);
            }                
        // ---  Marca de Intento Fallido ---
            if (esc.fechaFallido) {
            const marcaFallido = document.createElement('div');
            marcaFallido.className = 'marca-intento-fallido';
            // Usamos un icono de calavera o X (FontAwesome ya está incluido en tu head)
            marcaFallido.innerHTML = `<i class="fas fa-skull"></i> Fallido: ${esc.fechaFallido}`;
            div.appendChild(marcaFallido);
}
  

        // --- LÓGICA DE COORDENADAS (NUEVA) --
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
        
        // 1. Encontrar el objeto de escenario destino para obtener su estado
        const targetEscenario = dataGloomhaven.escenarios.find(e => e.id === conn.destino);
        
        // 2. Determinar la clase CSS a aplicar
        // Usaremos el estado del destino (e.g., 'completado') para crear la clase (e.g., 'estado-completado')
        const estadoClase = `estado-${targetEscenario.estado}`; 
        
        // 3. Llamar a drawArrow con la nueva clase
        drawArrow(sourceDiv, targetDiv, estadoClase, contMapa, conn.offset || 0, conn.reduction || 0, conn.offsetY || 0);

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
    // ----------------------------------------------------
    // FASE 9. Establecer la Vista Inicial Centrada en el Escenario 0 (GLOOMHAVEN)
    // ----------------------------------------------------
    
    const contViewport = document.querySelector('.mapa-columna'); // El elemento con overflow: auto
    const escenarioInicial = dataGloomhaven.escenarios.find(e => e.id === 0);
    
    if (escenarioInicial && contViewport) {
        // 1. Obtener el div del escenario ya renderizado
        const divInicial = document.getElementById(`escenario-0`); 

        // 2. CALCULAR DIMENSIONES DINÁMICAS (Sincronización con CSS)
        // offsetWidth/offsetHeight lee el tamaño real (width + padding + border)
        const halfNodeWidth = divInicial.offsetWidth / 2;
        const halfNodeHeight = divInicial.offsetHeight / 2;
        
        const { row, col } = escenarioInicial.map_pos;

        // A. Calcular la posición central del Escenario 0:
        // Posición Left (X) del centro del nodo
        const targetX = INITIAL_LEFT_OFFSET + col * COL_SPACING + halfNodeWidth; // <-- Usa valor dinámico
        
        // Posición Top (Y) del centro del nodo
        const targetY = INITIAL_TOP_OFFSET + row * ROW_SPACING + halfNodeHeight; // <-- Usa valor dinámico

        // B. Determinar la posición de SCROLL necesaria para centrar el punto:
        const scrollX = targetX - (contViewport.clientWidth / 2);
        const scrollY = targetY - (contViewport.clientHeight / 2);
        
        // C. Aplicar el scroll al VIEWPORT
        contViewport.scrollLeft = scrollX;
        contViewport.scrollTop = scrollY;
            marcarUltimaPartida(dataGloomhaven.escenarios); // Llama a la función para marcar la última partida

    }
            // Llama a la función para marcar la última partida
        function marcarUltimaPartida(escenarios) { 
        const hoy = new Date();
        let ultima = null;

         escenarios.forEach(esc => {
            if (!esc.fechaCompletado) return;

    const fecha = new Date(esc.fechaCompletado.split('-').reverse().join('-')); // formato dd-mm-yyyy
    const esFutura = fecha > hoy;
    const esProxima = esc.fechaProximapartida === esc.fechaCompletado;

    if (!esFutura && !esProxima) {
      if (!ultima || fecha > new Date(ultima.fechaCompletado.split('-').reverse().join('-'))) {
        ultima = esc;
      }
    }
  });

  if (!ultima) return;

  const nodo = document.getElementById(`escenario-${ultima.id}`);
  if (!nodo) return;

  const marca = document.createElement('div');
  marca.className = 'marca-ultima-partida';
  marca.textContent = `✅ Última victoria: ${ultima.fechaCompletado}`;
  nodo.appendChild(marca);
}
}
 // Mostrar el contenido del Sobre X al hacer clic en el enlace
function abrirModalImagen() {
    // 1. Crear el elemento modal de fondo
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.zIndex = '1000';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';

    // 2. Crear el contenedor de la imagen y el botón
    const contenido = document.createElement('div');
    contenido.style.textAlign = 'center';

    // 3. Crear la imagen 
    const imagen = document.createElement('img');
    imagen.src = 'sobreX.jpg'; // Reemplaza esto con la URL de la imagen
    imagen.style.maxWidth = '90vw';
    imagen.style.maxHeight = '90vh';
    imagen.style.display = 'block';

    // 4. Crear el botón de cerrar
    const botonCerrar = document.createElement('button');
    botonCerrar.textContent = 'Cerrar';
    botonCerrar.style.marginTop = '10px';
    botonCerrar.onclick = function() {
        document.body.removeChild(modal);
    };

    // 5. Ensamblar y añadir al DOM
    contenido.appendChild(imagen);
    contenido.appendChild(document.createElement('br')); // Espacio
    contenido.appendChild(botonCerrar);
    modal.appendChild(contenido);
    document.body.appendChild(modal);
}   


document.addEventListener('DOMContentLoaded', actualizarBlackboard); // Espera a que el DOM esté cargado antes de ejecutar


function centrarEscenario(idEscenario) {
  const contenedor = document.getElementById('mapa-escenarios');
  const nodo = document.getElementById(`escenario-${idEscenario}`);
  if (!nodo || !contenedor) return;

  const offsetX = nodo.offsetLeft + nodo.offsetWidth / 2 - contenedor.clientWidth / 2;
  const offsetY = nodo.offsetTop + nodo.offsetHeight / 2 - contenedor.clientHeight / 2;

  contenedor.scrollTo({
    left: offsetX,
    top: offsetY,
    behavior: 'smooth'
  });
}

function scrollProximaPartida() {
  const escenarios = dataGloomhaven.escenarios;
  const proximo = escenarios.find(e => e.fechaProximapartida);
  if (proximo) centrarEscenario(proximo.id);
}

function scrollUltimaPartida() {
  const hoy = new Date();
  let ultima = null;

  dataGloomhaven.escenarios.forEach(e => {
    if (!e.fechaCompletado) return;
    const fecha = new Date(e.fechaCompletado.split('-').reverse().join('-'));
    if (fecha < hoy && (!ultima || fecha > new Date(ultima.fechaCompletado.split('-').reverse().join('-')))) {
      ultima = e;
    }
  });

  if (ultima) centrarEscenario(ultima.id);
}

document.addEventListener('DOMContentLoaded', () => {
  const btnProxima = document.getElementById('btn-proxima-partida');
  const btnUltima = document.getElementById('btn-ultima-partida');
  if (btnProxima) btnProxima.addEventListener('click', scrollProximaPartida);
  if (btnUltima) btnUltima.addEventListener('click', scrollUltimaPartida);
});
