//comando de https://github.com/nicoTK1/NicoBotLite-MD
export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`𝙃𝙊𝙇𝘼 @${m.sender.split`@`[0]}, 𝘕𝘖 𝘌𝘚𝘛𝘈 𝘗𝘌𝘙𝘔𝘐𝘛𝘐𝘋𝘖 𝘌𝘕𝘝𝘐𝘈𝘙𝘔𝘌 𝘔𝘌𝘕𝘚𝘈𝘑𝘌𝘚 ( 𝘚𝘌𝘙𝘈𝘚 𝘉𝘓𝘖𝘘𝘜𝘌𝘈𝘋𝘖/𝘈 \n\n*𝚄𝙽𝙴𝚃𝙴 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾 𝙾𝙵𝙸𝙲𝙸𝙰𝙻 𝙳𝙴𝙻 𝙱𝙾𝚃* 👇\n\n${gp1}`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
