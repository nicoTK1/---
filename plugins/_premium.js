const handler = (m) => m;

export async function all(m) {
  for (const user of Object.values(global.db.data.users)) {
    if (user.premiumTime != 0 && user.premium) {
      if (new Date() * 1 >= user.premiumTime) {
        user.premiumTime = 0;
        user.premium = false;
        const JID = Object.keys(global.db.data.users).find((key) => global.db.data.users[key] === user);
        const usuarioJid = JID.split`@`[0];
        const textoo = `*🩷 @${usuarioJid} 𝙐𝙋𝙎, 𝘼 𝙀𝙓𝙋𝙄𝙍𝘼𝘿𝙊 𝙏𝙐 𝙋𝙍𝙀𝙈, 🦋 𝘿𝙀𝙅𝘼𝙎 𝘿𝙀 𝙎𝙀𝙍 𝙐𝙉 𝙐𝙎𝙀𝙍 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🍓.*`;
        await this.sendMessage(JID, {text: textoo, mentions: [JID]}, {quoted: ''});
      }
    }
  }
}
