export async function before(m) {

const username = conn.getName(m.sender)

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`👋 𝘏𝘖𝘓𝘈 ${username}¡!
 *${saludo}*

 *👑 BOT* _𝐍𝐢𝐜𝐨𝐁𝐨𝐭𝐋𝐢𝐭𝐞-𝐌𝐃_ ©️Copyright 𝘽𝙮 TK1

*⚠️ Nota:* No Envié Spam Al Bot!
⚡️ Escriba !menu Para Ver Los Comandos Que Dispongo!

*🥀 Si Tienes Duda O Sugerencia Contacta A Mi Creador: 📍*
💖 +543512161919 🧸

*⚡️ Escribe !grupos Para Ver Los Grupos Oficiales Del Bot 🦊*

📍 ¿Quieres Apoyar En El Proyecto Del Bot Para Que Siempre Tenga Actualizaciones? Puedes Apoyarnos Con Una Estrellita🌟 Al Repositorio.`) 
user.pc = new Date * 1
}
