const Client = require('./src/Client.js');
global.__basedir = __dirname;

// setup
const Discord = require('discord.js');
const bot = new Discord.Client();

// initialize client
function init() {
  client.loadEvents('./src/events');
  client.loadCommands('./src/commands');
  bot.login('NzYwNDY4MzkzNzQ4MzMyNTc2.X3MfYQ.Yt3wL2Nu46m4zIEm35P93Z52noI');
}

init();
