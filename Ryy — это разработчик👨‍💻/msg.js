const bindMessageHandler = (sock) => {
  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const from = msg.key.remoteJid;
    const text =
      msg.message.conversation ||
      msg.message.extendedTextMessage?.text ||
      msg.message.imageMessage?.caption ||
      '';

    console.log(`Message from ${from}: ${text}`);

    if (text.toLowerCase() === 'ping') {
      await sock.sendMessage(from, { text: 'pong' });
    }
  });
};

module.exports = bindMessageHandler;