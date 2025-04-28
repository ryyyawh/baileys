const makeWASocket =  require('./Ryyalpha/sock.js');
const { useMultiFileAuthState } = require('@whiskeysockets/baileys');
const logger = require('./Xyylsssss/logger.js');
const chalk = require('chalk')
const bindMessageHandler = require('./Ryy — это разработчик👨‍💻/msg.js');

console.clear();
console.log(
  chalk.blue(`
XYLAYS CORE ( CJS TYPE ) BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS CORE ( CJS TYPE ) BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS CORE ( CJS TYPE ) BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS CORE ( CJS TYPE ) BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS CORE ( CJS TYPE ) BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS CORE ( CJS TYPE ) BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS CORE ( CJS TYPE ) BAILEYS SUCCES CONNECTED THANKS FOR USE
  `)
);
console.log(chalk.green('[ SYSTEM ]'), 'Starting Your bot...\n');

const startSock = async () => {
  const { state, saveCreds } = await useMultiFileAuthState('./сеансов 🎰');
  const sock = await makeWASocket({ state, saveCreds, logger });

  bindMessageHandler(sock);
  sock.ev.on('creds.update', saveCreds);
};

startSock();