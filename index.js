//CameraGeek
//A Discord bot for Camera Department
//Written by Michael L. Foo
//GitHub (https://github.com/michaellfoo/CameraGeek)

const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "!";

//Message functions
client.on("message", function(message) {

//Ignore other bots
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

//Ping function
  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

//Tests for arguments
  else if (command === 'args-info') {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }

    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }

//Start CameraGeek functions

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
      message.reply(`\nPlus half dio: ${dioHalfFt}ft.\nPlus 1 dio: ${dioFullFt}ft.\nPlus 2 dio: ${dioTwoFt}ft.\nPlus 3 dio: ${dioThreeFt}ft.`);
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
      message.reply(`\nPlus half dio: ${dioHalfFt}in.\nPlus 1 dio: ${dioFullFt}in.\nPlus 2 dio: ${dioTwoFt}in.\nPlus 3 dio: ${dioThreeFt}in.`);
      return;
    }

    if (unit === "m") {
      let dioHalf = Number((closeFocus/((.5 * closeFocus) + 1)).toFixed(2));
      let dioFull = Number((closeFocus/((1 * closeFocus) + 1)).toFixed(2));
      let dioTwo = Number((closeFocus/((2 * closeFocus) + 1)).toFixed(2));
      let dioThree = Number((closeFocus/((3 * closeFocus) + 1)).toFixed(2));
      message.reply(`\nPlus half dio: ${dioHalf}m.\nPlus 1 dio: ${dioFull}m.\nPlus 2 dio: ${dioTwo}m.\nPlus 3 dio: ${dioThree}m.`);
      return;
    }

    //message.reply(`\nPlus half dio: ${dioHalf}m.\nPlus 1 dio: ${dioFull}m.\nPlus 2 dio: ${dioTwo}m.\nPlus 3 dio: ${dioThree}m.`);
  }

//Mic Check
  else if (command === "check") {
    message.reply(`Good check!`);
    return;
  }
});

client.login(config.BOT_TOKEN);