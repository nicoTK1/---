//https://github.com/nicoTK1/NicoBotLite-MD

import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");

          m.reply(`_*[ MINI CURSO ]*_\n\n*Entra al numero: +54 351 361 0400 hay encontrarás idiomas basicos de programación!*\n\n*Tambien puedes contactar a: +54 351 361 0400*\n\n_Difruta del mini curso_ 📍`);
            });
}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['aprender']
handler.register = true
export default handler
