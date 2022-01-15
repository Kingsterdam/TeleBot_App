const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Telegram Bot Token
const token = '5055706177:AAE50OyXZFQh7DdASjxH53PPn8iyOpghoLU';

const postData = "Delhi past Covid peak, cases to go down now, says Health Minister Satyendra Jain";


//   Telegram bot module
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; 
  bot.sendMessage(chatId, resp);
});

// const data = 'Hi my name is Rahul';
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat bot
  bot.sendMessage(chatId,postData);
});
