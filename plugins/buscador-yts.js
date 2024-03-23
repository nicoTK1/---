//comando de https://github.com/nicoTK1/NicoBotLite-MD
import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, {conn, text}) => {
  if (!text) throw '🧸 𝘘𝘜𝘌 𝘘𝘜𝘐𝘌𝘙𝘌𝘚 𝘉𝘜𝘚𝘊𝘈𝘙 𝘌𝘕 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 ?? ';
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ 🧸 *_Enlace :_* ${v.url}
↳ 📍 *_Duración :_* ${v.timestamp}
↳ 🧩 *_Subido :_* ${v.ago}
↳ 👁 *_Vistas :_* ${v.views}`;
    }
  }).filter((v) => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m);
};
handler.help = ['ytsearch *<texto>*'];
handler.tags = ['search'];
handler.command = ['ytsearch', 'yts'];
export default handler;
