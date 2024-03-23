//comando de https://github.com/nicoTK1/NicoBotLite-MD
import axios from 'axios';
import fetch from 'node-fetch';
const handler = async (m, { conn, usedPrefix, command, text, args }) => {
  const [efecto, ...textoArray] = text.split(" ");
  const texto = textoArray.join("");

  if (!efecto) {
    let voiceList = await getVoiceList();
    let responseText = `[❗] 𝙉𝙤 𝙝𝙖𝙯 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙙𝙤 𝙪𝙣 𝙚𝙛𝙚𝙘𝙩𝙤, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙞𝙣𝙜𝙧𝙚𝙨𝙖 𝙪𝙣 𝙚𝙛𝙚𝙘𝙩𝙤 𝙙𝙚 𝙫𝙤𝙯.\n\n—◉ 𝙀𝙡𝙞𝙜𝙚 𝙪𝙣𝙤 𝙙𝙚 𝙡𝙤𝙨 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚𝙨 𝙚𝙛𝙚𝙘𝙩𝙤𝙨:\n`;

    for (let i = 0, count = 0; count < 100 && i < voiceList.resultado.length; i++) {
      const entry = voiceList.resultado[i];
      if (entry.ID.length <= 20) {
        responseText += `*◉ ${usedPrefix + command} ${entry.ID} tu_texto_aquí*\n`;
        count++;
      }
    }

    return conn.sendMessage(m.chat, { text: responseText.trim() }, { quoted: m });
  }

  let efectoValido = false;
  let voiceList = await getVoiceList();
  for (const entry of voiceList.resultado) {
    if (entry.ID === efecto) {
      efectoValido = true;
      break;
    }
  }

  if (!efectoValido) return conn.sendMessage(m.chat, { text: `[❗] 𝙀𝙡 𝙚𝙛𝙚𝙘𝙩𝙤 𝙥𝙧𝙤𝙥𝙤𝙧𝙘𝙞𝙤𝙣𝙖𝙙𝙤 𝙣𝙤 𝙚𝙭𝙞𝙨𝙩𝙚 𝙚𝙣 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖, 𝙪𝙩𝙞𝙡𝙞𝙯𝙖 ${usedPrefix + command} 𝙥𝙖𝙧𝙖 𝙘𝙤𝙣𝙤𝙘𝙚𝙧 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖 𝙙𝙚 𝙚𝙛𝙚𝙘𝙩𝙤𝙨` }, { quoted: m });

  if (!texto) return conn.sendMessage(m.chat, {text: `[❗] 𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙚𝙡 𝙩𝙚𝙭𝙩𝙤 𝙦𝙪𝙚 𝙦𝙪𝙞𝙚𝙧𝙖𝙨 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙧 𝙖 𝙖𝙪𝙙𝙞𝙤.\n\n*—◉ Ejemplo:*\n*◉ ${usedPrefix + command} ${efecto} 𝙃𝙤𝙡𝙖, 𝙚𝙨𝙩𝙚 𝙚𝙨 𝙪𝙣 𝙚𝙟𝙚𝙢𝙥𝙡𝙤 𝙙𝙚 𝙪𝙨𝙤 𝙙𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`}, {quoted: m});

  let masivo = await makeTTSRequest(texto, efecto);
  conn.sendMessage(m.chat, {audio: {url: masivo.resultado}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
};

handler.command = /^(g?tts2)$/i;
export default handler;

const secretKey = 'fe2ee40099494579af0ecf871b5af266';
const userId = 'SrgwcKcLzSY63IdsAxd1PzscFjL2';

async function getVoiceList() {
  const url = 'https://play.ht/api/v2/voices';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      AUTHORIZATION: `Bearer ${secretKey}`,
      'X-USER-ID': userId
    }
  };
  try {
    const response = await fetch(url, options);
    const responseData = await response.json(); 
    const uniqueData = responseData.reduce((acc, current) => {
      if (!acc.some(item => item.id === current.id)) {
        acc.push(current);
      }
      return acc;
    }, []);
    const simplifiedList = uniqueData.map(entry => ({
      ID: entry.id,
      name: entry.name,
      lenguaje: entry.language  
    }));
    return { resultado: simplifiedList ? simplifiedList : '[❗] 𝙀𝙧𝙧𝙤𝙧, 𝙣𝙤 𝙨𝙚 𝙤𝙗𝙩𝙪𝙫𝙤 𝙧𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖 𝙙𝙚 𝙡𝙖 𝘼𝙋𝙄.' };
  } catch (error) {
    console.error('Error:', error);
    return { resultado: '[❗] 𝙀𝙧𝙧𝙤𝙧, 𝙣𝙤 𝙨𝙚 𝙤𝙗𝙩𝙪𝙫𝙤 𝙧𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖 𝙙𝙚 𝙡𝙖 𝘼𝙋𝙄.' };
    throw error;
  }
}

async function makeTTSRequest(texto, efecto) {
  const requestData = {text: texto, voice: efecto};
  const headers = {
    'Authorization': `Bearer ${secretKey}`,
    'X-User-Id': userId,
    'accept': 'text/event-stream',
    'content-type': 'application/json'
  };
  try {
    const response = await axios.post('https://play.ht/api/v2/tts', requestData, { headers });
    const events = response.data.split('\r\n\r\n');
    const eventData = events.find(event => event.includes('"stage":"complete"'));
    const urlMatch = eventData.match(/"url":"([^"]+)"/);
    const url = urlMatch ? urlMatch[1] : null;
    return { resultado: url ? url : '[❗] 𝙐𝙍𝙇 𝙣𝙤 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙖 𝙚𝙣 𝙡𝙖 𝙧𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖.' };
  } catch (error) {
    console.error('Error:', error);
    return { resultado: '[❗] Error, no se obtuvo respuesta de la API.' };
  }
}
