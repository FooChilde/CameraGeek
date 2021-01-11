//CameraGeek
//A Discord bot for Camera Department
//Written by Michael L. Foo
//GitHub (https://github.com/michaellfoo/CameraGeek)

const Discord = require("discord.js");
const config = require("./testConfig.json");

const client = new Discord.Client();

const prefix = ">";

client.on(`ready`, () => {
  console.log(`Client is ready!`)


  //Message functions
  client.on("message", function(message) {

    //Ignore other bots
      if (!message.content.startsWith(prefix) || message.author.bot) return;

    //Trim prefix from command and find args
      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();

    //Help function
      if (command === "help" && args[0] == null) {
        console.log(`Serching for help with the following arguments: ${args}`);
        const embed = new Discord.MessageEmbed()
          .setTitle(`CameraGeek Commands Help`)
          .setColor('#ffa13d')
          .addFields(
            {
              name:  `Here is a list of my supported commands:`,
              value: `-----------------------------------\n
                      diopter <unit> <distance> - Finds close focus with different diopter strengths.\n
                      findfeet <distance in meters> - Converts meters to feet.\n
                      findmeters <distance in feet> - Converts feet to meters.\n
                      miccheck - Checks to see if CameraGeek is on walkie!\n
                      ping - Shows message latency.\n
                      rollout <format> <fps> <mag size> - Calculates the shoot time of a length of film at a given frame rate.\n
                      version - Shows current CameraGeek version number. (For development purposes)\n`
            }
          )
        message.channel.send(embed);
        return;
      }
      if (command === "help" && args[0] === "diopter") {
        console.log(`Serching for help with the following arguments: ${args}`);
        const embed = new Discord.MessageEmbed()
          .setTitle(`Diopter Help`)
          .setColor('#ffa13d')
          .addFields(
            {
              name:  `!diopter <unit> <close focus>`,
              value: `Finds the close focus of a lens with different diopter strengths.\n
                      Uses the formula: f / (( d * f ) + 1 )\n
                      f = original close focus\n
                      d = diopter strength`
            }
          )
        message.channel.send(embed);
        return;          
      }
      else if (command === "help" && args[0] === "findfeet") {
        console.log(`Serching for help with the following arguments: ${args}`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Find Feet Help`)
        .setColor('#ffa13d')
        .addFields(
          {
            name:  `!findfeet <distance in meters>`,
            value: `Converts meters into feet.\n
                    Approximates to ~3.3 feet per meter.`
          }
        )
        message.channel.send(embed);
        return;
      }
      else if (command === "help" && args[0] === "findmeters") {
        console.log(`Serching for help with the following arguments: ${args}`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Find Meters Help`)
        .setColor('#ffa13d')
        .addFields(
          {
            name:  `!findmeters <distance in feet>`,
            value: `Converts feet into meters.\n
                    Approximates to ~3.3 feet per meter.`
          }
        )
        message.channel.send(embed);
        return;
      }
      else if (command === "help" && args[0] === "rollout") {
        console.log(`Serching for help with the following arguments: ${args}`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Rollout Help`)
        .setColor('#ffa13d')
        .addFields(
          {
            name:  `!rollout <format> <frame rate> <mag length>`,
            value: `Calculates the shoot time of a length of film at a given frame rate.\n
                    Available formats:\n
                    <8> - Super8mm\n
                    <16> - 16mm\n
                    <35> - 35mm 4-perf\n
                    <353perf> - 35mm 3-perf\n
                    <352perf> - 35mm 2-perf\n
                    <65> - 65mm`
          }
        )
        message.channel.send(embed);
        return;
      }

    //Help template
      // else if (command === "help" && args[0] === "") {
      //   console.log(`Serching for help with the following arguments: ${args}`);
      //   const embed = new Discord.MessageEmbed()
      //   .setTitle(``)
      //   .setColor('#ffa13d')
      //   .addFields(
      //     {
      //       name:  `!command <arg1> <arg2>`,
      //       value: `\n
      //               \n
      //               \n
      //               `
      //     }
      //   )
      //   message.channel.send(embed);
      //   return;
      // }



    //Devhelp function
      if (command === "dev") {
        if (message.member.roles.cache.find(r => r.name === "Developer")) {
          console.log(`${Date.now()}: User is a dev, replying...`)
          const embed = new Discord.MessageEmbed()
            .setTitle(`CameraGeek Developer Command Help`)
            .setColor('#ffa13d')
            .addFields(
                {name: `Here is a list of supported developer commands:`,
                value: `-----------------------------------\n
                        miccheck - Checks is CameraGeek is on walkie!\n
                        version - Shows current CameraGeek version number. (For development purposes)\n`}
            )
          message.channel.send(embed);
          return;
        }
        else {
          message.channel.send(`Sorry ${message.author}, it doesn't look like you're a developer. Contact one of them if you'd like to contribute to the project!`);
          return;
        }
      }

    //CameraGeek developer functions

    //Tests for arguments
      else if (command === "args-info") {
        if (!args.length) {
          return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
        return;
      }

    //Start CameraGeek main functions

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
          const embed = new Discord.MessageEmbed()
            .setTitle(`Close Focus with Diopter Strengths`)
            .setColor('#ffa13d')
            .addFields(
                {name: `Original Close Focus is ${closeFocus}ft.`,
                value: `---------------------------\n
                        +1/2 Diopter: ${dioHalfFt}ft.\n
                        +1 Diopter: ${dioFullFt}ft.\n
                        +2 Diopter: ${dioTwoFt}ft.\n
                        +3 Diopter: ${dioThreeFt}ft.`}
            )
          message.channel.send(embed);
          return;
        }

        if (unit === "in") {
          let closeFocusM = (closeFocus / 12) / 3.3;
          let dioHalf = (closeFocusM/((.5 * closeFocusM) + 1));
          let dioFull = (closeFocusM/((1 * closeFocusM) + 1));
          let dioTwo = (closeFocusM/((2 * closeFocusM) + 1));
          let dioThree = (closeFocusM/((3 * closeFocusM) + 1));
          let dioHalfIn = Number(((dioHalf * 3.3) * 12).toFixed(0));
          let dioFullIn = Number(((dioFull * 3.3) * 12).toFixed(0));
          let dioTwoIn = Number(((dioTwo * 3.3) * 12).toFixed(0));
          let dioThreeIn = Number(((dioThree * 3.3) * 12).toFixed(0));
          const embed = new Discord.MessageEmbed()
            .setTitle(`Close Focus with Diopter Strengths`)
            .setColor('#ffa13d')
            .addFields(
                {name: `Original Close Focus is ${closeFocus}in.`,
                value: `---------------------------\n
                        +1/2 Diopter: ${dioHalfIn}in.\n
                        +1 Diopter: ${dioFullIn}in.\n
                        +2 Diopter: ${dioTwoIn}in.\n
                        +3 Diopter: ${dioThreeIn}in.`}
            )
          message.channel.send(embed);
          return;
        }

        if (unit === "m") {
          let dioHalf = Number((closeFocus/((.5 * closeFocus) + 1)).toFixed(2));
          let dioFull = Number((closeFocus/((1 * closeFocus) + 1)).toFixed(2));
          let dioTwo = Number((closeFocus/((2 * closeFocus) + 1)).toFixed(2));
          let dioThree = Number((closeFocus/((3 * closeFocus) + 1)).toFixed(2));
          const embed = new Discord.MessageEmbed()
            .setTitle(`Close Focus with Diopter Strengths`)
            .setColor('#ffa13d')
            .addFields(
                {name: `Original Close Focus is ${closeFocus}m.`,
                value: `---------------------------\n
                        +1/2 Diopter: ${dioHalf}.\n
                        +1 Diopter: ${dioFull}.\n
                        +2 Diopter: ${dioTwo}.\n
                        +3 Diopter: ${dioThree}.`}
            )
            message.channel.send(embed);
          return;
        }

      }

    //Converts feet into meters
      else if (command === "findmeters") {
        if (!args.length) {
          return message.channel.send(`You didn't provide a distance in feet (decimal), ${message.author}!`);
        }

        let [distanceFeet] = args;
        let distanceMeters = Number((distanceFeet / 3.3).toFixed(1));
        const embed = new Discord.MessageEmbed()
          .setColor('#ffa13d')
          .addFields(
              {name: `Feet to Meters`,
              value: `${distanceFeet}ft is equal to ${distanceMeters}m.`}
          )
          message.channel.send(embed);
          return;
      }

    //Converts meters into feet
      else if (command === "findfeet") {
        if (!args.length) {
          return message.channel.send(`You didn't provide a distance in meters (decimal), ${message.author}!`);
        }

        let [distanceMeters] = args;
        let distanceFeet = Number((distanceMeters * 3.3).toFixed(1));
        const embed = new Discord.MessageEmbed()
          .setColor('#ffa13d')
          .addFields(
              {name: `Meters to Feet`,
              value: `${distanceMeters}m is equal to ${distanceFeet}ft.`}
          )
          message.channel.send(embed);
          return;
      }

    //Mic Check
      else if (command === "miccheck") {
        message.reply(`Good check!`);
        return;
      }

    //Ping function
      if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
        return;
      }

    //Rollout function
      if (command === "rollout") {

      let [format, fps, magSize] = args;
      console.log(`User entered !rollout for ${format}mm film @${fps}fps, ${magSize}ft mag.`);

      const firlRef = ['frames per foot', 'feet per minute @ 24fps']
      const film8 = [80, 18]
      const film16 = [40, 36]
      const film35 = [16, 90]
      const film353perf = [21.333, 67.501]
      const film352perf = [32, 45]
      const film65 = [12.8, 112.5]

        if (!args.length) {
          return message.channel.send(`You didn't provide a format (in mm), frame rate or a foot length, ${message.author}! Type "!help rollout" for command syntax.`);
        }

        if (format == '8') {
          let secPerFoot = (film8[0] / fps);
          let rolloutTime = (secPerFoot * magSize); //rollout time in seconds
          console.log(`Seconds per foot: ${secPerFoot}, rollout time: ${rolloutTime}sec.`);
          let magMinutes = Number((rolloutTime / 60) - ((rolloutTime % 60) / 100)).toFixed(0);
          let magSeconds = Number(rolloutTime % 60).toFixed(2);
          let shotFrames = Number(film8[0] * magSize).toFixed(0);
          if (rolloutTime > 60) {
            const embed = new Discord.MessageEmbed()
              .setColor('#ffa13d')
              .setTitle(`${magSize}ft mag of Super8mm @${fps}fps`)
              .addFields(
                  {name: `Mag will roll out in ${Number(magMinutes).toFixed(0)}min ${Number(magSeconds).toFixed(1)}sec.`,
                  value: `In that time you can shoot up to ${shotFrames} frames!`}
              )
            message.channel.send(embed);
          }
          if (rolloutTime < 60) {
            const embed = new Discord.MessageEmbed()
              .setColor('#ffa13d')
              .setTitle(`${magSize}ft mag of Super8mm @${fps}fps`)
              .addFields(
                  {name: `Mag will roll out in ${Number(magSeconds).toFixed(1)}sec.`,
                  value: `In that time you can shoot up to ${shotFrames} frames!`}
              )
            message.channel.send(embed);
          }
          return;
        }
        if (format == '16') {
          let secPerFoot = (film16[0] / fps);
          let rolloutTime = (secPerFoot * magSize); //rollout time in seconds
          console.log(`Seconds per foot: ${secPerFoot}, rollout time: ${rolloutTime}sec.`);
          let magMinutes = Number((rolloutTime / 60) - ((rolloutTime % 60) / 100)).toFixed(0);
          let magSeconds = Number(rolloutTime % 60).toFixed(2);
          let shotFrames = Number(film16[0] * magSize).toFixed(0);
          if (rolloutTime > 60) {
            const embed = new Discord.MessageEmbed()
              .setColor('#ffa13d')
              .setTitle(`${magSize}ft mag of 16mm @${fps}fps`)
              .addFields(
                  {name: `Mag will roll out in ${Number(magMinutes).toFixed(0)}min ${Number(magSeconds).toFixed(1)}sec.`,
                  value: `In that time you can shoot up to ${shotFrames} frames!`}
              )
            message.channel.send(embed);
          }
          if (rolloutTime < 60) {
            const embed = new Discord.MessageEmbed()
              .setColor('#ffa13d')
              .setTitle(`${magSize}ft mag of 16mm @${fps}fps`)
              .addFields(
                  {name: `Mag will roll out in ${Number(magSeconds).toFixed(1)}sec.`,
                  value: `In that time you can shoot up to ${shotFrames} frames!`}
              )
            message.channel.send(embed);
          }
          return;
        }
        if (format == '35') {
          let secPerFoot = (film35[0] / fps);
          let rolloutTime = (secPerFoot * magSize); //rollout time in seconds
          console.log(`Seconds per foot: ${secPerFoot}, rollout time: ${rolloutTime}sec.`);
          let magMinutes = Number((rolloutTime / 60) - ((rolloutTime % 60) / 100)).toFixed(0);
          let magSeconds = Number(rolloutTime % 60).toFixed(2);
          let shotFrames = Number(film35[0] * magSize).toFixed(0);
          if (rolloutTime > 60) {
            const embed = new Discord.MessageEmbed()
              .setColor('#ffa13d')
              .setTitle(`${magSize}ft mag of 35mm @${fps}fps`)
              .addFields(
                  {name: `Mag will roll out in ${Number(magMinutes).toFixed(0)}min ${Number(magSeconds).toFixed(1)}sec.`,
                  value: `In that time you can shoot up to ${shotFrames} frames!`}
              )
            message.channel.send(embed);
          }
          if (rolloutTime < 60) {
            const embed = new Discord.MessageEmbed()
              .setColor('#ffa13d')
              .setTitle(`${magSize}ft mag of 35mm @${fps}fps`)
              .addFields(
                  {name: `Mag will roll out in ${Number(magSeconds).toFixed(1)}sec.`,
                  value: `In that time you can shoot up to ${shotFrames} frames!`}
              )
            message.channel.send(embed);
          }
          return;
        }
        if (format == '353perf') {
          let secPerFoot = (film353perf[0] / fps);
          let rolloutTime = (secPerFoot * magSize); //rollout time in seconds
          console.log(`Seconds per foot: ${secPerFoot}, rollout time: ${rolloutTime}sec.`);
          let magMinutes = Number((rolloutTime / 60) - ((rolloutTime % 60) / 100)).toFixed(0);
          let magSeconds = Number(rolloutTime % 60);
          let shotFrames = Number(film353perf[0] * magSize).toFixed(0);
          if (rolloutTime > 60) {
            const embed = new Discord.MessageEmbed()
              .setColor('#ffa13d')
              .setTitle(`${magSize}ft mag of 35mm 3-perf @${fps}fps`)
              .addFields(
                  {name: `Mag will roll out in ${Number(magMinutes).toFixed(0)}min ${Number(magSeconds).toFixed(1)}sec.`,
                  value: `In that time you can shoot up to ${shotFrames} frames!`}
              )
            message.channel.send(embed);
          }
          if (rolloutTime < 60) {
            const embed = new Discord.MessageEmbed()
              .setColor('#ffa13d')
              .setTitle(`${magSize}ft mag of 35mm 3-perf @${fps}fps`)
              .addFields(
                  {name: `Mag will roll out in ${Number(magSeconds).toFixed(1)}sec.`,
                  value: `In that time you can shoot up to ${shotFrames} frames!`}
              )
            message.channel.send(embed);
          }
          return;
        }
        if (format == '352perf') {
          let secPerFoot = (film352perf[0] / fps);
          let rolloutTime = (secPerFoot * magSize); //rollout time in seconds
          console.log(`Seconds per foot: ${secPerFoot}, rollout time: ${rolloutTime}sec.`);
          let magMinutes = Number((rolloutTime / 60) - ((rolloutTime % 60) / 100)).toFixed(0);
          let magSeconds = Number(rolloutTime % 60);
          let shotFrames = Number(film352perf[0] * magSize).toFixed(0);
          if (rolloutTime > 60) {
            const embed = new Discord.MessageEmbed()
              .setColor('#ffa13d')
              .setTitle(`${magSize}ft mag of 35mm 2-perf @${fps}fps`)
              .addFields(
                  {name: `Mag will roll out in ${Number(magMinutes).toFixed(0)}min ${Number(magSeconds).toFixed(1)}sec.`,
                  value: `In that time you can shoot up to ${shotFrames} frames!`}
              )
            message.channel.send(embed);
          }
          if (rolloutTime < 60) {
            const embed = new Discord.MessageEmbed()
              .setColor('#ffa13d')
              .setTitle(`${magSize}ft mag of 35mm 2-perf @${fps}fps`)
              .addFields(
                  {name: `Mag will roll out in ${Number(magSeconds).toFixed(1)}sec.`,
                  value: `In that time you can shoot up to ${shotFrames} frames!`}
              )
            message.channel.send(embed);
          }
          return;
        }
        if (format == '65') {
          let secPerFoot = (film65[0] / fps);
          let rolloutTime = (secPerFoot * magSize); //rollout time in seconds
          console.log(`Seconds per foot: ${secPerFoot}, rollout time: ${rolloutTime}sec.`);
          let magMinutes = Number((rolloutTime / 60) - ((rolloutTime % 60) / 100)).toFixed(0);
          let magSeconds = Number(rolloutTime % 60).toFixed(2);
          let shotFrames = Number(film65[0] * magSize).toFixed(0);
          if (rolloutTime > 60) {
            const embed = new Discord.MessageEmbed()
              .setColor('#ffa13d')
              .setTitle(`${magSize}ft mag of 65mm @${fps}fps`)
              .addFields(
                  {name: `Mag will roll out in ${Number(magMinutes).toFixed(0)}min ${Number(magSeconds).toFixed(1)}sec.`,
                  value: `In that time you can shoot up to ${shotFrames} frames!`}
              )
            message.channel.send(embed);
          }
          if (rolloutTime < 60) {
            const embed = new Discord.MessageEmbed()
              .setColor('#ffa13d')
              .setTitle(`${magSize}ft mag of 65mm @${fps}fps`)
              .addFields(
                  {name: `Mag will roll out in ${Number(magSeconds).toFixed(1)}sec.`,
                  value: `In that time you can shoot up to ${shotFrames} frames!`}
              )
            message.channel.send(embed);
          }
          return;
        }

      }

    //Version function
      if (command === "version") {
        message.reply(`CameraGeek is currently on ${config.version}!`);
        return;
      }

  })

})
client.login(config.token);