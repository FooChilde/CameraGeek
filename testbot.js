//CameraGeek
//A Discord bot for Camera Department
//Written by Michael L. Foo
//GitHub (https://github.com/michaellfoo/CameraGeek)

const Discord = require("discord.js");
const config = require("./testConfig.json");

const client = new Discord.Client();

client.on('ready', () => {
  console.log('The client is ready!');
})

client.login(config.BOT_TOKEN);

const prefix = ":";

//Message functions
client.on("message", function(message) {

//Ignore other bots
  if (!message.content.startsWith(prefix) || message.author.bot) return;

//
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

//Help command
  if (command === "help") {
    message.channel.send(`Here is a list of my supported commands:\n**args-info:**`);
    return;
  }

//Ping function
  else if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

//Tests for arguments
  else if (command === 'args-info') {
    if (!args.length) {
      message.channel.send(`You didn't provide any arguments, ${message.author}!`);
      return;
    }

    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }

//Start CameraGeek commands

//Converts feet into meters
  else if (command === "meters") {
    if (!args.length) {
      return message.channel.send(`You didn't provide a distance in feet (decimal), ${message.author}!`);
    }

    let [distanceFeet] = args;
    let distanceMeters = Number((distanceFeet / 3.3).toFixed(1));
    message.reply(`\n${args}ft is ~${distanceMeters}m.`);
  }

//Converts meters into feet
  else if (command === "feet") {
    if (!args.length) {
      return message.channel.send(`You didn't provide a distance in meters (decimal), ${message.author}!`);
    }

    let [distanceMeters] = args;
    let distanceFeet = Number((distanceMeters * 3.3).toFixed(1));
    message.reply(`\n${args}m is ~${distanceFeet}ft.`);
  }

//Calculates close focus for diopters, works in inches, feet and meters
  else if (command === "diopter") {
    if (!args.length) {
      return message.channel.send(`You didn't provide a distance unit and close focus, ${message.author}!`);
    }

    let [unit, closeFocus] = args;


    if (unit === "ft") {
      let closeFocusM = closeFocus / 3.3;
      let dioHalf = (closeFocusM/((.5 * closeFocusM) + 1));
      let dioFull = (closeFocusM/((1 * closeFocusM) + 1));
      let dioTwo = (closeFocusM/((2 * closeFocusM) + 1));
      let dioThree = (closeFocusM/((3 * closeFocusM) + 1));
      let dioHalfFt = Number((dioHalf * 3.3).toFixed(1));
      let dioFullFt = Number((dioFull * 3.3).toFixed(1));
      let dioTwoFt = Number((dioTwo * 3.3).toFixed(1));
      let dioThreeFt = Number((dioThree * 3.3).toFixed(1));
      message.reply(`minimum focus will be the following...\n+1/2 Dio: ${dioHalfFt}ft.\n+1 Dio: ${dioFullFt}ft.\n+2 Dio: ${dioTwoFt}ft.\n+3 Dio: ${dioThreeFt}ft.`);
      return;
    }

    if (unit === "in") {
      let closeFocusM = (closeFocus / 12) / 3.3;
      let dioHalf = (closeFocusM/((.5 * closeFocusM) + 1));
      let dioFull = (closeFocusM/((1 * closeFocusM) + 1));
      let dioTwo = (closeFocusM/((2 * closeFocusM) + 1));
      let dioThree = (closeFocusM/((3 * closeFocusM) + 1));
      let dioHalfFt = Number(((dioHalf * 3.3) * 12).toFixed(0));
      let dioFullFt = Number(((dioFull * 3.3) * 12).toFixed(0));
      let dioTwoFt = Number(((dioTwo * 3.3) * 12).toFixed(0));
      let dioThreeFt = Number(((dioThree * 3.3) * 12).toFixed(0));
      message.reply(`minimum focus will be the following...\n+1/2 Dio: ${dioHalfFt}in.\n+1 Dio: ${dioFullFt}in.\n+2 Dio: ${dioTwoFt}in.\n+3 Dio: ${dioThreeFt}in.`);
      return;
    }

    if (unit === "m") {
      let dioHalf = Number((closeFocus/((.5 * closeFocus) + 1)).toFixed(2));
      let dioFull = Number((closeFocus/((1 * closeFocus) + 1)).toFixed(2));
      let dioTwo = Number((closeFocus/((2 * closeFocus) + 1)).toFixed(2));
      let dioThree = Number((closeFocus/((3 * closeFocus) + 1)).toFixed(2));
      message.reply(`minimum focus will be the following...\n+1/2 Dio: ${dioHalf}m.\n+1 Dio: ${dioFull}m.\n+2 Dio: ${dioTwo}m.\n+3 Dio: ${dioThree}m.`);
      return;
    }

  }

//Mic Check
  else if (command === "check") {
    message.reply(`Good check!`);
    return;
  }
});