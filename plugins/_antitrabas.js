//comando de https://github.com/nicoTK1/NicoBotLite-MD
//

import * as fs from 'fs';

export async function before(m, {conn, isAdmin, isBotAdmin, usedPrefix}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  const delet = m.key.participant;
  const bang = m.key.id;
  const name = await conn.getName(m.sender);
  const fakemek = {'key': {'participant': '0@s.whatsapp.net', 'remoteJid': '0@s.whatsapp.net'}, 'message': {'groupInviteMessage': {'groupJid': '51995386439-1616969743@g.us', 'inviteCode': 'm', 'groupName': 'P', 'caption': '𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝', 'jpegThumbnail': null}}};
  if (chat.antiTraba && m.text.length > 5000) { // Cantidad máxima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, {text: `𝙀𝙡 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧 @${m.sender.split('@')[0]} 𝘼𝙘𝙖𝙗𝙖 𝙙𝙚 𝙢𝙖𝙣𝙙𝙖𝙧 𝙪𝙣 𝘽𝙄𝙉𝘼𝙍𝙄𝙊 💀 -.-!`, mentions: [m.sender]}, {quoted: fakemek});
    conn.sendMessage(m.chat, `*[ ! ] 𝘿𝙀𝙏𝙀𝘾𝙏𝙀 𝙐𝙉 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘾𝙊𝙉 𝙈𝙐𝘾𝙃𝙊𝙎 𝘾𝘼𝙍𝘼𝘾𝙏𝙀𝙍𝙀𝙎 👻 [ ! ]*\n`, `${isBotAdmin ? '' : '𝙉𝙤 𝙨𝙤𝙮 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧, 𝙉𝙤 𝙥𝙪𝙚𝙙𝙤 𝙝𝙖𝙘𝙚𝙧 𝙣𝙖𝙙𝙖 💀 :/'}`, m);
    // await conn.sendButton(m.chat, `*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : 'No soy administrador, no puedo hacer nada :/'}`, author, ['[ DESACTIVAR ANTI TRABAS ]', usedPrefix+'apagar antitraba'], fakemek )
    if (isBotAdmin && bot.restrict) {
      conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
        	setTimeout(() => {
        	conn.sendMessage(m.chat, {text: `Marcar el chat como leido ✓\n${'\n'.repeat(400)}\n=> El número : wa.me/${m.sender.split('@')[0]}\n=> Alias : ${name}\n[ ! ] Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en los dispositivos`, mentions: [m.sender]}, {quoted: fakemek});
      }, 0);
      setTimeout(() => {
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }, 1000);
    } else if (!bot.restrict) return m.reply('[ ! ] 𝘗𝘢𝘳𝘢 𝘳𝘦𝘢𝘭𝘪𝘻𝘢𝘳 𝘢𝘤𝘤𝘪𝘰𝘯𝘦𝘴 𝘥𝘦 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘤𝘪ó𝘯, 𝘮𝘪 𝘥𝘶𝘦ñ𝘰 𝘕𝘐𝘊𝘖 𝘵𝘪𝘦𝘯𝘦 𝘲𝘶𝘦 𝘦𝘯𝘤𝘦𝘯𝘥𝘦𝘳 𝘦𝘭 𝘮𝘰𝘥𝘰 𝘳𝘦𝘴𝘵𝘳𝘪𝘯𝘨𝘪𝘥𝘰!');
  }
  return !0;
}
