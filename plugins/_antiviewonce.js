//comando de https://github.com/nicoTK1/NicoBotLite-MD
const {downloadContentFromMessage} = (await import('@whiskeysockets/baileys'));

export async function before(m, {isAdmin, isBotAdmin}) {
  const chat = db.data.chats[m.chat];
  if (/^[.~#/\$,](read)?viewonce/.test(m.text)) return;
  if (!chat?.antiviewonce || chat?.isBanned) return;
  if (m.mtype == 'viewOnceMessageV2') {
    const msg = m.message.viewOnceMessageV2.message;
    const type = Object.keys(msg)[0];
    const media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video');
    let buffer = Buffer.from([]);
    for await (const chunk of media) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    const cap = '😻 𝗔𝗾𝘂𝗶 𝗡𝗼 𝗦𝗲 𝗣𝘂𝗲𝗱𝗲 𝗢𝗰𝘂𝗹𝘁𝗮𝗿 𝗡𝗮𝗱𝗮 🍓'
    if (/video/.test(type)) {
      return mconn.conn.sendFile(m.chat, buffer, 'error.mp4', `${msg[type].caption ? msg[type].caption + '\n\n' + cap : cap}`, m);
    } else if (/image/.test(type)) {
      return mconn.conn.sendFile(m.chat, buffer, 'error.jpg', `${msg[type].caption ? msg[type].caption + '\n\n' + cap : cap}`, m);
    }
  }
}
