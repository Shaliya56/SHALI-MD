const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "7UciXZ4R#bFpA9cXuiXZ165wNONmBvp_S-wBESnOzGJ80ZezMC2Y",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Shaliya56/SHALI-MD/blob/950d82b580993255742d3df40aa59beeebbc5d37/Images/20250727_133740.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 SHALI-MD Is Alive Now😍*",
BOT_OWNER: '94761167172',  // Replace with the owner's phone number



};
