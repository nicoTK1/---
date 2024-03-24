//comando de https://github.com/nicoTK1/NicoBotLite-MD
import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {conn, command}) => {
  if (command === 'consejo') {
    const consejo = consejos[Math.floor(Math.random() * consejos.length)];
    const mensaje = `╭━━━━━━━━ ✤ ━━━━━━━━╮\n⠀⠀😻 𝖢𝗈𝗇𝗌𝖾𝗃𝗈 𝖣𝖾𝗅 𝖣𝗂𝖺 💖\n\n➺ ${consejo}\n\n╰━━━━━━━━ ✤ ━━━━━━━━╯`;
    await m.reply(mensaje);
  }

  if (command === 'fraseromantica') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `╭━━━━━━━━ ✤ ━━━━━━━━╮\n⠀⠀😻 𝖥𝗋𝖺𝗌𝖾 𝖱𝗈𝗆𝖺𝗇𝗍𝗂𝖼𝖺 💖\n\n➺ ${frase_romantica}\n\n╰━━━━━━━━ ✤ ━━━━━━━━╯`;
    await m.reply(mensaje);
  }

  if (command == 'historiaromantica') {
    try {
      const cerpe = await cerpen(`cinta romantis`);
      const storytime = await translate(cerpe.cerita, {to: 'es', autoCorrect: true}).catch((_) => null);
      const titletime = await translate(cerpe.title, {to: 'es', autoCorrect: true}).catch((_) => null);
      conn.reply(m.chat, `᭥🫐᭢ Título: ${titletime.text}
᭥🍃᭢ Autor: ${cerpe.author}
────────────────
${storytime.text}`, m);
    } catch {
      const err = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=Elabora%20una%20historia%20romantica%20que%20use%20el%20siguiente%20formato:%20%E1%AD%A5%F0%9F%AB%90%E1%AD%A2%20T%C3%ADtulo:%20%E1%AD%A5%F0%9F%8D%83%E1%AD%A2%20Autor:%20%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%20hsitoria...%20adalah&user=user-unique-id`);
      const json = await err.json();
      const fraseChat = json.result;
      conn.reply(m.chat, fraseChat, m);
    }
  }
};
handler.tags = ['frases'];
handler.command = handler.help = ['consejo', 'fraseromantica', 'historiaromantica'];
export default handler;

async function cerpen(category) {
  return new Promise((resolve, reject) => {
    const title = category.toLowerCase().replace(/[()*]/g, '');
    const judul = title.replace(/\s/g, '-');
    const page = Math.floor(Math.random() * 5);
    axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
          const $ = cheerio.load(get.data);
          const link = [];
          $('article.post').each(function(a, b) {
            link.push($(b).find('a').attr('href'));
          });
          const random = link[Math.floor(Math.random() * link.length)];
          axios.get(random).then((res) => {
            const $$ = cheerio.load(res.data);
            const hasil = {
              title: $$('#content > article > h1').text(),
              author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
              kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
              lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
              cerita: $$('#content > article > p').text(),
            };
            resolve(hasil);
          });
        });
  });
}

global.frasesromanticas = [
  'Eres la luz que ilumina mi vida en la oscuridad.',
  'Contigo, cada día es una nueva aventura llena de amor.',
  'Tus ojos son el reflejo del cielo en el que quiero perderme.',
  'Cada latido de mi corazón lleva tu nombre.',
  'En tus brazos encontré el hogar que siempre busqué.',
  'Eres el sueño que nunca quiero despertar.',
  'El amor verdadero es estar juntos en las buenas y en las malas.',
  'No existen distancias cuando dos corazones están unidos.',
  'Tus besos son la melodía que acelera mi corazón.',
  'Amar es ver en ti lo que nadie más puede ver.',
  'En cada latido, te llevo conmigo a todas partes.',
  'El amor que siento por ti es mi fuerza y mi inspiración.',
  'Tus palabras dulces son mi alimento emocional diario.',
  'Eres el regalo más preciado que la vida me ha dado.',
  'El tiempo se detiene cuando estoy junto a ti.',
  'En tu sonrisa encuentro la felicidad que buscaba.',
  'Cada día a tu lado es una historia de amor sin fin.',
  'Nuestro amor es como un cuento de hadas hecho realidad.',
  'Tus abrazos son mi refugio en este mundo caótico.',
  'Eres la razón por la que creo en el destino.',
  'Amar es descubrir cada día algo nuevo que admiro en ti.',
  'Tu amor es el lienzo en blanco donde pinto mi felicidad.',
  'Contigo, el futuro es un camino lleno de promesas y sueños.',
  'Eres el faro que guía mi corazón en la oscuridad.',
  'La magia del amor se encuentra en cada gesto que compartimos.',
  'Nuestro amor es un baile eterno de pasión y ternura.',
  'En tus brazos, el mundo entero desaparece y solo existimos tú y yo.',
  'El amor es el idioma en el que nuestros corazones conversan.',
  'Eres el pedacito que me faltaba para completar mi alma.',
  'Amar es encontrar en ti todo lo que nunca supe que necesitaba.',
  'En cada latido, siento el eco de tu amor.',
'Tú y yo, una historia escrita en las estrellas.',
'Eres la melodía que siempre tarareo en mi mente.',
'Nuestro amor es un poema que nunca deja de rimar.',
'En tus ojos encuentro la paz que anhelaba.',
'Contigo, el universo parece conspirar a nuestro favor.',
'Amar es encontrar el hogar en el abrazo del otro.',
'Cada suspiro es un susurro de mi amor por ti.',
'Tú eres el sol que ilumina incluso los días más oscuros.',
'En cada beso, encuentro la magia de un nuevo comienzo.',
'Nuestro amor es un secreto compartido con el universo.',
'Eres mi refugio seguro en medio de la tormenta.',
'Contigo, la vida es un lienzo lleno de colores vibrantes.',
'En cada sonrisa tuya, encuentro la razón de mi felicidad.',
'Tú y yo, dos almas que bailan al compás del amor.',
'Amar es descubrir un mundo nuevo en el brillo de tus ojos.',
'Eres la respuesta a todas mis preguntas sobre el amor.',
'Nuestro amor es un viaje sin fin hacia la eternidad.',
'En cada sueño, eres el protagonista de mi historia.',
'Contigo, el tiempo se desvanece y solo queda el momento presente.',
'Eres la inspiración detrás de cada uno de mis logros.',
'Tú y yo, una canción de amor que nunca deja de sonar.',
'Amar es encontrar el paraíso en el calor de tus brazos.',
'En cada caricia, encuentro la promesa de un amor eterno.',
'Nuestro amor es como una rosa que florece en el jardín del corazón.',
'Contigo, incluso las simples cosas se vuelven extraordinarias.',
'Eres mi musa, mi confidente, mi todo.',
'Amar es sentir mariposas en el estómago con solo pensar en ti.',
'En cada momento juntos, encuentro la plenitud de mi ser.',
'Tú y yo, dos mitades que se complementan perfectamente.',
'Eres el sueño del que nunca quiero despertar.',
'Contigo, el amor se convierte en una obra maestra en constante evolución.',
'Nuestro amor es como un jardín que florece con cada estación.',
'En tus abrazos, encuentro el consuelo que necesito.',
'Tú eres mi destino, mi razón de ser.',
'Contigo, el futuro parece lleno de infinitas posibilidades.',
'Eres el amor de mi vida, mi más grande aventura.',
'En cada mirada, encuentro un universo entero por descubrir.',
'Tú y yo, una conexión que trasciende el tiempo y el espacio.',
'Amar es crecer juntos, aprender juntos, ser juntos.',
'Nuestro amor es un fuego que arde eternamente en nuestros corazones.',
'En cada palabra tuya, encuentro la melodía de mi alma.',
'Tú eres el faro que guía mi barco en el océano de la vida.',
'Contigo, cada día es una oportunidad para amar más profundamente.',
'Eres mi paz en medio del caos, mi calma en la tormenta.',
'Amar es bailar bajo la lluvia sin miedo a mojarse.',
'En cada recuerdo, encuentro la chispa de nuestro amor.',
'Tú y yo, una promesa de amor que perdura más allá de las palabras.',
'Nuestro amor es como un libro abierto, lleno de páginas por escribir.',
'Contigo, cada momento se convierte en un tesoro que atesoro.',
'Eres el sueño que nunca quiero despertar, la fantasía que nunca quiero que termine.',
'Amar es abrazar todas las partes de ti, incluso las que aún no conozco.',
'En cada desafío, encuentro la fuerza para seguir adelante porque tú estás a mi lado.',
'Tú eres mi roca, mi apoyo inquebrantable en este viaje llamado vida.',
'Contigo, cada día es una nueva aventura que espero con ansias.',
'Amar es confiar en que juntos podemos superar cualquier obstáculo.',
'En cada beso robado, encuentro la esencia misma de nuestra pasión.',
'Tú y yo, unidos por un hilo invisible que trasciende la distancia.',
'Nuestro amor es como un río que fluye constantemente, poderoso e inagotable.',
'Contigo, el mundo parece más brillante, más hermoso, más lleno de vida.',
'Eres el amor de mi vida, mi mejor amigo, mi todo.',
'Amar es ver el universo entero en tus ojos y sentirme en casa.',
'En cada abrazo, encuentro la seguridad de saber que nunca estoy solo.',
'Tú eres mi sol en los días grises, mi arcoíris después de la tormenta.',
'Contigo, descubrí que el amor verdadero es más dulce que cualquier fantasía.',
'Eres mi inspiración, mi motivación, mi razón para levantarme cada mañana.',
'Amar es aprender a ser vulnerable y encontrar fuerza en esa vulnerabilidad.',
'En cada sueño compartido, encuentro la promesa de un futuro juntos.',
'Tú y yo, una danza eterna entre dos almas destinadas a estar juntas.',
'Nuestro amor es como una canción perfecta, con cada nota en su lugar.',
'Contigo, cada día es una nueva página en nuestro libro de amor.',
'Eres el refugio al que siempre puedo volver, el puerto seguro en la tempestad.',
'Amar es elegirte cada día, incluso cuando las cosas se ponen difíciles.',
'En cada momento de silencio, encuentro la paz de estar contigo.',
'Tú eres mi más grande alegría, mi mayor bendición, mi amor eterno.',
'Contigo, descubrí que el amor no tiene límites, no conoce fronteras.',
'Eres mi complemento perfecto, la pieza que faltaba en el rompecabezas de mi vida.',
'Amar es encontrar en ti un hogar, un refugio seguro en medio del caos.',
];

global.consejos = [
  'Acepta que los cambios son parte natural de la vida, y aprende a adaptarte a ellos.',
  'Nunca dejes de aprender; el conocimiento es una herramienta poderosa.',
  'Cuida de tu salud física y mental, son fundamentales para una vida plena.',
  'Disfruta de las pequeñas cosas, pues son ellas las que dan sentido a la vida.',
  'Aprende a perdonar, tanto a los demás como a ti mismo, para liberar tu corazón.',
  'Valora el tiempo que pasas con tus seres queridos, es el regalo más valioso que puedes dar y recibir.',
  'Sé amable y compasivo con los demás, cada acto de bondad puede marcar la diferencia en sus vidas.',
  'Aprende a decir \'no\' cuando sea necesario, y establece límites saludables.',
  'Encuentra tiempo para hacer lo que te apasiona, pues eso nutre tu alma y te hace sentir vivo.',
  'No te compares con los demás, cada persona tiene su propio camino y ritmo en la vida.',
  'Escucha a tu pareja con empatía y comprensión, la comunicación es la base de una relación sólida.',
  'No tengas miedo de expresar tus sentimientos, la honestidad es esencial en el amor.',
  'Aprende a ceder y a comprometerte, el amor requiere de sacrificio y esfuerzo mutuo.',
  'Sorprende a tu pareja de vez en cuando, mantén viva la chispa del romance.',
  'Respeta la individualidad de tu pareja y permítele crecer como persona.',
  'El amor propio es igual de importante que amar a alguien más; cuídate y valórate.',
  'Recuerda que una relación sana se basa en la confianza mutua y el respeto.',
  'Elige a alguien que te complemente y te haga ser una mejor versión de ti mismo.',
  'El amor verdadero no te hace sentir menos, te hace sentir más.',
  'Amar es un verbo, es una elección diaria que se cultiva con acciones y palabras.',
  'Encuentra un trabajo que te apasione, y nunca sentirás que estás trabajando.',
  'Sé proactivo y toma la iniciativa en tu trabajo, eso será valorado por tus superiores.',
  'Aprende de tus errores y fracasos, son oportunidades para crecer y mejorar.',
  'Mantén una actitud positiva y busca soluciones ante los desafíos laborales.',
  'Cultiva buenas relaciones con tus colegas, el trabajo en equipo es clave para el éxito.',
  'Establece metas claras y realistas, y trabaja con determinación para alcanzarlas.',
  'No tengas miedo de pedir ayuda o buscar mentoría, siempre hay algo nuevo que aprender.',
  'Reconoce y valora tus logros, celebra tus éxitos por pequeños que sean.',
  'Busca un equilibrio entre tu vida laboral y personal, ambos aspectos son importantes.',
  'El trabajo es una parte importante de tu vida, pero no es lo único que define quién eres.',
  'Cree en ti mismo y en tu capacidad para lograr lo que te propongas.',
  'Visualiza tus metas y sueños, imagina cómo te sentirás al alcanzarlos.',
  'Encuentra inspiración en aquellos que han superado obstáculos similares a los tuyos.',
  'Acepta los fracasos como parte del proceso, son oportunidades para aprender y crecer.',
  'Rodéate de personas positivas y que te impulsen hacia adelante.',
  'Mantén una mentalidad abierta y dispuesta a aprender cosas nuevas.',
  'Recuerda por qué empezaste cuando te sientas desmotivado; reconecta con tu propósito.',
  'Divide tus metas en pequeños pasos, eso hará el camino más alcanzable y menos abrumador.',
  'No tengas miedo de perseguir tus sueños, la vida es demasiado corta para vivir con arrepentimientos.',
  'Confía en que, con esfuerzo y perseverancia, puedes lograr todo lo que te propongas.',
  'Comunica tus sentimientos abierta y honestamente con tu pareja',
'Aprende a escuchar activamente a tu pareja sin juzgar',
'Cultiva la empatía para entender mejor los sentimientos y perspectivas de tu pareja',
'Haz pequeños gestos de amor y aprecio a diario, como enviar mensajes de texto cariñosos o preparar una comida especial',
'Respeta los espacios y tiempos individuales de cada uno dentro de la relación',
'Acepta y celebra las diferencias entre tú y tu pareja, son lo que hace la relación única',
'Mantén viva la chispa del romance con citas regulares y sorpresas románticas',
'Trabaja en resolver los conflictos de manera constructiva y respetuosa',
'No temas mostrar tu vulnerabilidad ante tu pareja, la verdadera intimidad se construye sobre la honestidad emocional',
'Cultiva la confianza mutua siendo honesto y fiel en la relación',
'Aprende a perdonar y dejar ir resentimientos pasados para construir un futuro más feliz juntos',
'Apoya y alienta los sueños y metas de tu pareja, incluso si difieren de los tuyos',
'Exprésale a tu pareja lo agradecido que estás por tenerlo/a en tu vida',
'Sé paciente y comprensivo/a cuando tu pareja esté pasando por momentos difíciles',
'Celebra los éxitos y logros de tu pareja como si fueran los tuyos propios',
'Establece rituales o tradiciones compartidas que fortalezcan el vínculo entre ustedes',
'Sorprende a tu pareja con detalles inesperados que demuestren cuánto te importa',
'Aprende a comprometerte y buscar soluciones que beneficien a ambos en situaciones difíciles',
'Haz tiempo de calidad juntos, incluso en medio de agendas ocupadas',
'Respeta los límites personales de tu pareja y respeta su espacio cuando lo necesite',
'Celebra y aprecia las cualidades únicas de tu pareja que te enamoraron en primer lugar',
'Nunca subestimes el poder de un abrazo reconfortante en los momentos difíciles',
'Valora la compañía de tu pareja y disfruta de los momentos de silencio juntos',
'Apoya los intereses y pasatiempos individuales de tu pareja, incluso si no los compartes',
'Demuestra tu amor y apoyo en público y en privado',
'Mantén viva la pasión física en la relación, explorando juntos nuevas formas de intimidad',
'Recuerda que el amor es un trabajo en progreso, requiere esfuerzo y dedicación constante',
'Fomenta un ambiente de apoyo mutuo donde ambos puedan crecer y florecer como individuos',
'Sé un/a buen/a oyente cuando tu pareja necesite desahogarse o compartir sus preocupaciones',
'Celebra los hitos importantes de la relación, como aniversarios y momentos especiales',
'Cultiva un sentido de humor compartido para mantener la ligereza y la alegría en la relación',
'Sé fiel a tu palabra y cumple tus promesas, esto construye confianza y seguridad en la relación',
'Haz espacio para la espontaneidad y las aventuras juntos, manteniendo viva la emoción',
'Aprende a dejar ir el control y confiar en el amor y la conexión que comparten',
'Sé paciente y comprensivo/a cuando tu pareja esté pasando por cambios o crisis personales',
'Dedica tiempo a reflexionar sobre lo que amas de tu pareja y exprésalo regularmente',
'Haz un esfuerzo consciente por demostrar aprecio y gratitud por las pequeñas cosas que hace tu pareja por ti',
'Busca oportunidades para aprender y crecer juntos como pareja, manteniendo la curiosidad y la exploración',
'Sé un/a defensor/a leal y firme de tu relación cuando enfrenten desafíos externos',
'Recuerda que el amor es un viaje, no un destino; disfruta del viaje y crece juntos en el camino',
'Sé abierto/a y receptivo/a a recibir amor y afecto de tu pareja en todas sus formas',
'Celebra la individualidad y la autonomía de tu pareja, permitiéndole ser quien es realmente',
'Mantén viva la llama del romance con gestos espontáneos y muestras de cariño',
'Haz tiempo para conectarte emocionalmente con tu pareja, compartiendo tus pensamientos y sentimientos más profundos',
'Cultiva un sentido de complicidad y camaradería en la relación, compartiendo secretos y risas juntos',
'Sé un/a apoyo incondicional para tu pareja en tiempos de dificultad o duda',
'Practica la aceptación y el respeto hacia las diferencias individuales en la relación',
'Aprende a pedir ayuda y apoyo cuando lo necesites, tu pareja está ahí para ti',
'Sé creativo/a en la forma en que demuestras tu amor y aprecio por tu pareja',
'Investiga en los intereses y pasiones de tu pareja, mostrando interés genuino en lo que le importa',
'Fomenta un ambiente de seguridad y confianza donde tu pareja se sienta libre de ser auténtico/a',
'Demuestra tu amor de formas no verbales, como a través de gestos de afecto y contacto físico',
'Mantén viva la excitación y la curiosidad en la relación, explorando nuevas experiencias juntos',
'Aprende a resolver los conflictos de manera constructiva, buscando soluciones que beneficien a ambos',
'Cultiva la gratitud diaria por la presencia y el amor de tu pareja en tu vida',
'Sé un/a compañero/a de equipo solidario/a, trabajando juntos/as para superar los desafíos que enfrentan',
'Practica la honestidad y la transparencia en la comunicación',
];
