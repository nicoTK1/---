const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('✅️ 𝘊𝘏𝘈𝘛 𝘋𝘌𝘚𝘉𝘈𝘕𝘌𝘈𝘋𝘖 𝘊𝘖𝘕 𝘌𝘟𝘐𝘛𝘖, 𝘠𝘈 𝘗𝘜𝘌𝘋𝘌𝘕 𝘜𝘚𝘈𝘙 𝙉𝙞𝙘𝙤𝘽𝙤𝙩𝙇𝙞𝙩𝙚 - 𝙈𝘿');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unbanchat$/i;
handler.rowner = true;
export default handler;

