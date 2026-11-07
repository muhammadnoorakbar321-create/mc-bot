const mineflayer = require('mineflayer');
const express = require('express');

const botOptions = {
  host: THUNDERSSMP.enderman.cloud
  port: 30988,
  username: 'AFK_Bot_Pro',
  version: '26.3';
  auth: 'offline'
};

function createBot() {
  const bot = mineflayer.createBot(botOptions);
  bot.on('spawn', () => console.log('✅ Bot Joined!'));
  bot.on('end', () => setTimeout(createBot, 10000));
  bot.on('error', (err) => console.log('⚠️ Error: ', err.message));
}
createBot();

const app = express();
app.get('/', (req, res) => res.send('Bot Online!'));
app.listen(3000);
