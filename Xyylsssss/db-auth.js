const { useMultiFileAuthState } = require('baileys');

const getAuthState = async () => {
  const { state, saveCreds } = await useMultiFileAuthState('./сеансов 🎰');
  return { state, saveCreds };
};

module.exports = getAuthState;