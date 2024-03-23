const toxicRegex = /puto|negro|negra|zorra|gordo|porno|sexo|puta|down|mogolico|idiota|feo|fea|rata|estupido|imbecil|rctmre|mrd|verga|vrga|maricon/i;

export async function before(m, {isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) {
    return !1;
  }
  const user = global.db.data.users[m.sender];
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[mconn.conn.user.jid] || {};
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 5)) await m.reply('*🍧 ' + `${user.warn == 1 ? `𝘏𝘖𝘓𝘈 @${m.sender.split`@`[0]}` : `@${m.sender.split`@`[0]}`}, 𝘋𝘌𝘊𝘐𝘙 𝘓𝘈 𝘗𝘈𝘓𝘈𝘉𝘙𝘈 "${isToxic}" 𝘌𝘚𝘛𝘈 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘌𝘕 𝘌𝘚𝘛𝘌 𝘎𝘙𝘜𝘗𝘖. 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 : ${user.warn}/5.` + '*', false, {mentions: [m.sender]});
  }

  if (user.warn >= 5) {
    user.warn = 0;
    await m.reply(`*🥀 𝘏𝘖𝘓𝘈 @${m.sender.split`@`[0]}, 𝘚𝘜𝘗𝘌𝘙𝘈𝘚𝘛𝘌 𝘓𝘈𝘚 5 𝘈𝘋𝘝𝘌𝘙𝘛𝘌𝘕𝘊𝘐𝘈𝘚 ⚠️ 𝘚𝘌𝘙𝘈𝘚 𝘉𝘈𝘕𝘌𝘈𝘋𝘖/𝘈*`, false, {mentions: [m.sender]});
    user.banned = true;
    await mconn.conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    // await this.updateBlockStatus(m.sender, 'block')
  }
  return !1;
}
