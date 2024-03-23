import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, {conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const groupName = (await conn.groupMetadata(m.chat)).subject;
  const groupAdmins = participants.filter((p) => p.admin);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const img = await (await fetch(pp)).buffer();
  const chat = global.db.data.chats[m.chat];
  const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)];
  const mentionsContentM = [m.sender, m.messageStubParameters[0]];
  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

  if (chat.detect2 && m.messageStubType == 29) {
    let txt1 = `𝙍𝙀𝘾𝙄𝙀𝙉𝙏𝙀𝙈𝙀𝙉𝙏𝙀 𝙃𝙐𝘽𝙊 𝙐𝙉 𝙉𝙐𝙀𝙑𝙊 𝘼𝘿𝙈𝙄𝙉 🍓\n\n`;
    txt1 += `*𝘎𝘙𝘜𝘗𝘖:* ${groupName}\n`;
    txt1 += `*𝘕𝘌𝘞 𝘈𝘋𝘔𝘐𝘕:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt1 += `*𝘓𝘌 𝘋𝘐𝘖 𝘈𝘋𝘔:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt1, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 30) {
    let txt2 = `𝙍𝙀𝘾𝙄𝙀𝙉𝙏𝙀𝙈𝙀𝙉𝙏𝙀 𝙎𝙀 𝙌𝙐𝙄𝙏𝙊 𝙐𝙉 𝘼𝘿𝙈𝙄𝙉 🍓\n\n`;
    txt2 += `*Grupo:* ${groupName}\n`;
    txt2 += `*𝘚𝘌 𝘓𝘌 𝘘𝘜𝘐𝘛𝘖 𝘈:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt2 += `*𝘚𝘌 𝘓𝘖 𝘚𝘈𝘊𝘖:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt2, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 27) {
    let txt3 = `𝙃𝘼𝙔 𝙐𝙉 𝙉𝙐𝙀𝙑𝙊 𝙄𝙉𝙏𝙀𝙂𝙍𝘼𝙉𝙏𝙀 🍓\n\n`;
    txt3 += `*𝘎𝘙𝘜𝘗𝘖:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt3 += `*𝘕𝘌𝘞 𝘔𝘌𝘔𝘉𝘌𝘙:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt3 += `*𝘓𝘖 𝘈𝘎𝘙𝘌𝘎𝘖:* @${m.sender.split`@`[0]}`;
    } else {
      txt3 += `*𝘕𝘌𝘞 𝘔𝘌𝘔𝘉𝘌𝘙:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt3, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 28) {
    let txt4 = `𝙎𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝙊 𝘼 𝙐𝙉 𝙀𝙓 𝙄𝙉𝙏𝙀𝙂𝙍𝘼𝙉𝙏𝙀 🍓\n\n`;
    txt4 += `*Grupo:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt4 += `*𝘌𝘓𝘐𝘔𝘐𝘕𝘈𝘋𝘖:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt4 += `*𝘓𝘖 𝘌𝘓𝘐𝘔𝘐𝘕𝘖:* @${m.sender.split`@`[0]}`;
    } else {
      txt4 += `*𝘌𝘓𝘐𝘔𝘐𝘕𝘈𝘋𝘖:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt4, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 32) {
    let ax;
    if (m.messageStubParameters[0] === m.sender) {
      ax = 'Salido';
    } else {
      ax = 'Eliminado';
    }
    let txt5 = `𝙎𝙀 𝘼 ${ax} 𝘼 𝙐𝙉 𝙀𝙓 𝙄𝙉𝙏𝙀𝙂𝙍𝘼𝙉𝙏𝙀\n\n`;
    txt5 += `*𝘎𝘙𝘜𝘗𝘖:* ${groupName}\n`;
    if (ax === '𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊') {
      txt5 += `*𝘌𝘟 𝘔𝘌𝘔𝘉𝘌𝘙:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt5 += `*𝘌𝘓𝘐𝘔𝘐𝘕𝘈𝘋𝘖 𝘹:* @${m.sender.split`@`[0]}`;
    } else {
      txt5 += `*𝙎𝙀 𝙁𝙐𝙀:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt5, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 26) {
    let accion;
    if (m.messageStubParameters[0].split`@`[0] === 'on') {
      accion = 'Cerrado';
    } else {
      accion = 'Abierto';
    }
    let txt6 = `𝙃𝘼𝙔 𝙐𝙉𝘼 𝙉𝙐𝙀𝙑𝘼 𝘾𝙊𝙉𝙁𝙄𝙂 🍓\n\n`;
    txt6 += `*𝘎𝘙𝘜𝘗𝘖:* ${groupName}\n`;
    txt6 += `*𝘌𝘓 𝘎𝘙𝘜𝘗𝘖 𝘚𝘌:* ${'```' + accion + '```'}\n`;
    txt6 += `*𝘓𝘖 𝘌𝘑𝘌𝘊𝘜𝘛𝘖:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt6, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 21) {
    let txt7 = `𝙉𝙐𝙀𝙑𝙊 𝙉𝙊𝙈𝘽𝙍𝙀 𝙀𝙉 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 🍓\n\n`;
    txt7 += `*𝘕𝘌𝘞 𝘕𝘈𝘔𝘌:* ${'```' + groupName + '```'}\n`;
    txt7 += `*𝘓𝘖 𝘊𝘈𝘔𝘉𝘐𝘖:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt7, mentions: mentionsContentM}, {quoted: fkontak2});
  }
}
