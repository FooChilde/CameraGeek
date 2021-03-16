//CameraGeek
//A Discord bot for Camera Department
//Written by Michael L. Foo
//GitHub (https://github.com/FooChilde/CameraGeek)

// var forever = require('forever-monitor');

// var child = new (forever.Monitor)('index.js', {
//   max: 3,
//   silent: true,
//   args: []
// });

// child.on('exit', function () {
//   console.log('index.js has exited after 3 restarts');
// });

// child.start();

const Discord = require("discord.js");
const config = require("./testConfig.json");

const client = new Discord.Client();

const prefix = ">";

client.on(`ready`, () => {
  console.log(`Logged in as ${client.user.tag}!`)


  //Message functions
  client.on("message", function(message) {
  	let msgID = message.id;
  	let msgUser = message.author.tag;
  	let msgContent = message.content;


	//Ignore non-command messages & other bots
	  if (!message.content.startsWith(prefix) || message.author.bot) return;

	//Command logging  
	  console.log(`(${Date.now()}) ${msgUser} used command: ${msgContent}`);

	//Trim prefix from command and find args
	  const args = message.content.slice(prefix.length).trim().split(/ +/);
	  const command = args.shift().toLowerCase();

	//Help function
	  if (command === "help" && args[0] == null) {
		// console.log(`Serching for help with the following arguments: ${args}`);
		const embed = new Discord.MessageEmbed()
		  .setTitle(`CameraGeek Commands Help`)
		  .setColor('#ffa13d')
		  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
		  .setTimestamp()
		  .addField(`Here is a list of my supported commands:`, `----------`, false)
		  .addField(`\\diopter <unit> <distance>`, `Finds close focus with different diopter strengths.`, true)
		  .addField(`\\findfeet <distance in meters>`, `Converts meters to feet.`, true)
			.addField(`\\findmeters <distance in feet>`, `Converts feet to meters.`, true)
			.addField(`\\lacroix`, `Thirsty? Have CameraGeek go on a crafty run. (Reacts with the :lacroix: emoji)`, true)
			.addField(`\\maxfps <camera>`, `Displays the maximum frames per second in different sensor modes for a given camera.`, true)
			.addField(`\\miccheck`, `Checks to see if CameraGeek is on walkie!`, true)
			.addField(`\\ping`, `Shows message latency.`, true)
			.addField(`\\rollout <format> <fps> <mag size>`, `Calculates the shoot time of a length of film at a given frame rate.`, true)
			.addField(`\\version`, `Shows current CameraGeek version number. (For development purposes)`, true)
		message.channel.send(embed);
		return;
	  }
	  if (command === "help" && args[0] === "diopter") {
			// console.log(`Serching for help with the following arguments: ${args}`);
			const embed = new Discord.MessageEmbed()
			  .setTitle(`Diopter Help`)
			  .setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
			  .addField(`\\diopter <unit> <close focus>`, `Finds the close focus of a lens with different diopter strengths.\nUses the formula: f / (( d * f ) + 1 )\nf = original close focus\nd = diopter strength`, false)
			message.channel.send(embed);
			return;          
	  }
	  else if (command === "help" && args[0] === "findfeet") {
			// console.log(`Serching for help with the following arguments: ${args}`);
			const embed = new Discord.MessageEmbed()
				.setTitle(`Find Feet Help`)
				.setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
				.addField(`\\findfeet <distance in meters>`, `Converts meters into feet.\nApproximates to ~3.3 feet per meter.`, false)
			message.channel.send(embed);
			return;
	  }
	  else if (command === "help" && args[0] === "findmeters") {
			// console.log(`Serching for help with the following arguments: ${args}`);
			const embed = new Discord.MessageEmbed()
				.setTitle(`Find Meters Help`)
				.setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
			  .addField(`\\findmeters <distance in feet>`, `Converts feet into meters.\nApproximates to ~3.3 feet per meter.`, false)
			message.channel.send(embed);
			return;
	  }
	  else if (command === "help" && args[0] === "maxfps") {
			// console.log(`Serching for help with the following arguments: ${args}`);
			const embed = new Discord.MessageEmbed()
				.setTitle(`Max FPS Help`)
				.setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
				.addField(`\\maxfps <camera>`, `Displays the maximum frames per second in different sensor modes for a given camera.`, false)
				.addField(`Available Digital cameras:`, `----------`, false)
				.addField(`<alexamini>`, `ARRI ALEXA Mini`, true)
				.addField(`<alexaxt>`, `ARRI ALEXA XT`, true)
				.addField(`<alexasxt>`, `ARRI ALEXA SXT W`, true)
				.addField(`<alexa65>`, `ARRI ALEXA 65`, true)
				.addField(`<minilf>`, `ARRI Mini LF`, true)
				.addField(`<alexalf>`, `ARRI ALEXA LF`, true)
				.addField(`<amira>`, `ARRI AMIRA`, true)
				.addField(`<venice>`, `SONY VENICE`, true)
				.addField(`<dxl>`, `Panavision DXL & DXL2`, true)
				.addField(`Available Film Cameras:`, `----------`, false)
				.addField(`<arricam>`, `Various ARRICAM bodies`, true)
				.addField(`<arriflex>`, `Various Arriflex bodies`, true)
				.addField(`<aaton>`, `Various Aaton bodies`, true)
				.addField(`<panavision>`, `Various Panavision bodies`, true)
			message.channel.send(embed);
			return;
	  }
	  else if (command === "help" && args[0] === "rollout") {
			// console.log(`Serching for help with the following arguments: ${args}`);
			const embed = new Discord.MessageEmbed()
				.setTitle(`Rollout Help`)
				.setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
				.addField(`\\rollout <format> <frame rate> <mag length>`, `Calculates the shoot time of a length of film at a given frame rate.`, false)
				.addField(`Available formats:`, `----------`, false)
				.addField(`<8>`, `Super8mm`, true)
				.addField(`<16>`, `16mm`, true)
				.addField(`<35>`, `35mm 4-perf`, true)
				.addField(`<353perf>`, `35mm 3-perf`, true)
				.addField(`<352perf>`, `35mm 2-perf`, true)
				.addField(`<65>`, `65mm`, true)
			message.channel.send(embed);
			return;
	  }

	//Help template
	  // else if (command === "help" && args[0] === "") {
	  //   console.log(`Serching for help with the following arguments: ${args}`);
	  //   const embed = new Discord.MessageEmbed()
	  //   .setTitle(``)
	  //   .setColor('#ffa13d')
		//   .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
		//   .setTimestamp()
	  //   .addFields(
	  //     {
	  //       name:  `\\command <arg1> <arg2>`,
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
		  console.log(`${Date.now()}: ${msgUser} is a dev, replying...`)
		  const embed = new Discord.MessageEmbed()
				.setTitle(`CameraGeek Developer Command Help`)
				.setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
				.addField(`Here is a list of supported developer commands:`, `----------`, false)
				.addField(`\\miccheck`, `Checks is CameraGeek is on walkie!`, true)
				.addField(`\\version`, `Shows current CameraGeek version number. (For development purposes)`, true)
		  message.channel.send(embed);
		  return;
		}
		else {
		  message.channel.send(`Sorry ${message.author}, it doesn't look like you're a developer. Contact one of them if you'd like to contribute to the project!`)
		  .then(msg => {
		  		msg.delete({ timeout: 10000})
		  	})
		
	  	message.channel.messages.fetch({around: `${msgID}`, limit: 1})
			  .then(messages => {
			    messages.first().delete();
			  });
		  return;
		}
	  }

	//CameraGeek developer functions

	//Tests for arguments
	  else if (command === "args-info") {
		if (!args.length) {
		  message.channel.send(`You didn't provide any arguments, ${message.author}!`)
		  	.then(msg => {
		  		msg.delete({ timeout: 10000})
		  	});
	  	message.channel.messages.fetch({around: `${msgID}`, limit: 1})
			  .then(messages => {
			    messages.first().delete();
			  });
		  return;
		}
		message.channel.send(`Command name: ${command}\nArguments: \n${args.join(' ')}`);
		return;
	  }

	//Start CameraGeek main functions

	//Calculates close focus for diopters, works in inches, feet and meters
	  else if (command === "diopter") {
		if (!args.length) {
		  message.channel.send(`You didn't provide a distance unit and close focus, ${message.author}!`)
		  .then(msg => {
		  		msg.delete({ timeout: 10000})
		  	})
		
	  	message.channel.messages.fetch({around: `${msgID}`, limit: 1})
			  .then(messages => {
			    messages.first().delete();
			  });
		  return;
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
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
				.addField(`Original Close Focus is ${closeFocus}ft.`, `----------`, false)
				.addField(`+1/2 Diopter`, `${dioHalfFt}ft.`, true)
				.addField(`+1 Diopter`, `${dioFullFt}ft.`, true)
				.addField(`+2 Diopter`, `${dioTwoFt}ft.`, true)
				.addField(`+3 Diopter`, `${dioThreeFt}ft.`, true)
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
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
				.addField(`Original Close Focus is ${closeFocus}ft.`, `----------`, false)
				.addField(`+1/2 Diopter`, `${dioHalfIn}in.`, true)
				.addField(`+1 Diopter`, `${dioFullIn}in.`, true)
				.addField(`+2 Diopter`, `${dioTwoIn}in.`, true)
				.addField(`+3 Diopter`, `${dioThreeIn}in.`, true)
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
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
				.addField(`Original Close Focus is ${closeFocus}ft.`, `----------`, false)
				.addField(`+1/2 Diopter`, `${dioHalf}m.`, true)
				.addField(`+1 Diopter`, `${dioFull}m.`, true)
				.addField(`+2 Diopter`, `${dioTwo}m.`, true)
				.addField(`+3 Diopter`, `${dioThree}m.`, true)
			message.channel.send(embed);
		  return;
		}

	  }

	//Converts feet into meters
	  else if (command === "findmeters") {
		if (!args.length) {
		  message.channel.send(`You didn't provide a distance in feet (decimal), ${message.author}!`)
		  .then(msg => {
		  		msg.delete({ timeout: 10000})
		  	})
		
	  	message.channel.messages.fetch({around: `${msgID}`, limit: 1})
			  .then(messages => {
			    messages.first().delete();
			  });
		  return;
		}

		let [distanceFeet] = args;
		let distanceMeters = Number((distanceFeet / 3.3).toFixed(1));
		const embed = new Discord.MessageEmbed()
		  .setColor('#ffa13d')
		  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
		  .setTimestamp()
		  .addField(`Feet to Meters`, `${distanceFeet}ft is equal to ${distanceMeters}m.`, false)
		  message.channel.send(embed);
		  return;
	  }

	//Converts meters into feet
	  else if (command === "findfeet") {
		if (!args.length) {
		  message.channel.send(`You didn't provide a distance in meters (decimal), ${message.author}!`)
		  .then(msg => {
		  		msg.delete({ timeout: 10000})
		  	})
		
	  	message.channel.messages.fetch({around: `${msgID}`, limit: 1})
			  .then(messages => {
			    messages.first().delete();
			  });
		  return;
		}

		let [distanceMeters] = args;
		let distanceFeet = Number((distanceMeters * 3.3).toFixed(1));
		const embed = new Discord.MessageEmbed()
		  .setColor('#ffa13d')
		  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
		  .setTimestamp()
		  .addField(`Meters to Feet`, `${distanceMeters}m is equal to ${distanceFeet}ft.`, false)
		  message.channel.send(embed);
		  return;
	  }

  //La Croix function
    else if (command === "lacroix") {
    	let laCroix = "<:lacroix:797293051386134548>"
    	console.log(`${laCroix}`)
      return message.channel.send(`${laCroix}`);
    }

	//Max FPS function
		else if (command === "maxfps") {
			if (!args.length) {
			  message.channel.send(`You didn't provide a camera, ${message.author}!`)
			  .then(msg => {
		  		msg.delete({ timeout: 10000})
		  	})
		
	  	message.channel.messages.fetch({around: `${msgID}`, limit: 1})
			  .then(messages => {
			    messages.first().delete();
			  });
		  return;
			}

			//Start digital cameras
			else if (args[0] === "minilf") {
				const embed = new Discord.MessageEmbed()
					.setTitle(`ARRI Mini LF`)
					.setColor('#ffa13d')
				  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
				  .setTimestamp()
					.setURL('https://www.arri.com/en/learn-help/learn-help-camera-system/frequently-asked-questions/alexa-mini-lf-faq#accordion-83760')
					.addField(`Max Frame Rates:`, `----------`, false)
					.addField(`ProRes`, `OG 4.5K @ 40 fps\n2.39:1 4.5K @ 60fps\n16:9 UHD @ 60fps\n16:9 HD @ 90fps`, true)
					.addField(`ARRIRAW`, `OG 4.5K @ 40 fps\n2.39:1 4.5K @ 60fps\n16:9 UHD @ 60fps\n16:9 HD @ 90fps`, true)
					message.channel.send(embed);
					return;
			}

			else if (args[0] === "alexalf") {
				const embed = new Discord.MessageEmbed()
					.setTitle(`ARRI ALEXA LF`)
					.setColor('#ffa13d')
				  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
				  .setTimestamp()
					.setURL('https://www.arri.com/en/learn-help/learn-help-camera-system/frequently-asked-questions/alexa-lf-faq#accordion-41416')
					.addField(`Max Frame Rates:`, `----------`, false)
					.addField(`ProRes`, `OG 4.5K @ 60 fps\n2.39:1 4.5K @ 100fps\n16:9 UHD @ 60fps\n16:9 HD @ 60fps`, true)
					.addField(`ARRIRAW`, `OG 4.5K @ 90 fps\n2.39:1 4.5K @ 150fps\n16:9 UHD @ 90fps\n16:9 HD @ 60fps`, true)
					message.channel.send(embed);
					return;
			}

			else if (args[0] === "alexa65") {
				const embed = new Discord.MessageEmbed()
					.setTitle(`ARRI ALEXA 65`)
					.setColor('#ffa13d')
				  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
				  .setTimestamp()
					.setURL('https://www.arrirental.com/en/cameras/alexa-65#ALX6517')
					.addField(`Max Frame Rate:`, `65 OG @ 60fps`, false)
					message.channel.send(embed);
					return;
			}

			else if (args[0] === "alexamini") {
				const embed = new Discord.MessageEmbed()
					.setTitle(`ARRI ALEXA Mini`)
					.setColor('#ffa13d')
				  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
				  .setTimestamp()
					.setURL('https://www.arri.com/en/camera-systems/cameras/alexa-mini#K1.0003873')
					.addField(`Max Frame Rates:`, `----------`, false)
					.addField(`ProRes`, `OG 4.5K @ 60 fps\n2.39:1 4.5K @ 100fps\n16:9 UHD @ 60fps\n16:9 HD @ 60fps`, true)
					.addField(`ARRIRAW`, `OG 4.5K @ 90 fps\n2.39:1 4.5K @ 150fps\n16:9 UHD @ 90fps\n16:9 HD @ 60fps`, true)
					message.channel.send(embed);
					return;
			}

			else if (args[0] === "alexasxt") {
				const embed = new Discord.MessageEmbed()
					.setTitle(`ARRI ALEXA SXT W`)
					.setColor('#ffa13d')
				  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
				  .setTimestamp()
					.setURL('https://www.arri.com/en/camera-systems/cameras/alexa-sxt-w#K1.0014744')
					.addField(`Max Frame Rates:`, `----------`, false)
					.addField(`ProRes`, `OG 4K @ 48fps\nOG 3.4K @ 60\n4:3 2.8K @ 60\n16:9 4K @ 50fps\n16:9 3.2K @ 72fps\n16:9 2K @ 120fps\n16:9 HD @ 120fps\n6:5 4K Ana @ 60fps\n6:5 2K Ana @ 96fps`, true)
					.addField(`ARRIRAW`, `OG 3.4K @ 90fps\n16:9 3.2K @ 120fps\n16:9 2.8K @ 120fps\n6:5 2.6K @ 96fps`, true)
					message.channel.send(embed);
					return;
			}

			else if (args[0] === "alexaxt") {
				const embed = new Discord.MessageEmbed()
					.setTitle(`ARRI ALEXA XT PLUS`)
					.setColor('#ffa13d')
				  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
				  .setTimestamp()
					.setURL('https://cinequipt.com/cms-files/ALEXA_Pocket_Guide_SUP_11.0_01.pdf')
					.addField(`Max Frame Rates:`, `----------`, false)
					.addField(`ProRes`, `4:3 2K @ 48fps\n16:9 3.2K @ 30fps\n16:9 2K @ 60fps\n16:9 HD @ 120fps`, true)
					.addField(`ARRIRAW`, `OG @ 75fps\n4:3 Cropped @ 96fps\n4:3 Full @ 90fps\n16:9 @ 120fps`, true)
					.addField(`DNxHD`, `HD @ 120fps`, true)
					message.channel.send(embed);
					return;
			}

			else if (args[0] === "amira") {
				const embed = new Discord.MessageEmbed()
					.setTitle(`ARRI AMIRA`)
					.setColor('#ffa13d')
				  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
				  .setTimestamp()
					.setURL('https://www.arri.com/en/camera-systems/cameras/amira#K1.71700.0')
					.addField(`Max Frame Rates:`, `----------`, false)
					.addField(`ProRes`, `UHD @ 60fps\n3.2K @ 60fps\n2K @ 200fps\nHD @ 200fps\nS16 HD @ 200fps`, true)
					.addField(`MFX/ARRIRAW`, `16:9 2.8K @ 48 fps`, true)
					.addField(`MPEG-2`, `HD @ 23.976 - 59.94fps`, true)
					message.channel.send(embed);
					return;
			}

			else if (args[0] === "venice") {
				const embed = new Discord.MessageEmbed()
					.setTitle(`SONY VENICE`)
					.setColor('#ffa13d')
				  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
				  .setTimestamp()
					.setURL('https://pro.sony/ue_US/products/digital-cinema-cameras/venice#ProductSpecificationsBlock-venice')
					.addField(`Max Frame Rates:`, `----------`, false)
					.addField(`6K`, `3:2 @ 60fps\n1.85:1 @ 72fps\n2.39:1 @ 90fps`, true)
					.addField(`5.7K`, `16:9 @ 30fps`, true)
					.addField(`4K`, `6:5 @ 30fps\n4:3 @ 75fps\n1.85:1 @ 110fps\n 2.39:1 @ 120fps`, true)
					.addField(`3.8K`, `16:9 @ 60fps`, true)
					message.channel.send(embed);
					return;
			}

			else if (args[0] === "dxl") {
				const embed = new Discord.MessageEmbed()
					.setTitle(`Panavision DXL & DXL2`)
					.setColor('#ffa13d')
				  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
				  .setTimestamp()
					.setURL('https://panalab.panavision.com/sites/default/files/docs/documentLibrary/DXL%20Quick%20Guide%20V_5_35_5.pdf')
					.addField(`Max Frame Rates:`, `----------`, false)
					.addField(`8K`, `1.78:1 @ 60fps\n2.4:1 @ 75fps`, true)
					.addField(`7.5K`, `1.78:1 @ 60fps\n2.4:1 @ 75fps`, true)
					.addField(`7K`, `1.78:1 @ 60fps\n2.4:1 @ 75fps`, true)
					.addField(`6.5K`, `1.78:1 @ 75fps\n2.4:1 @ 90fps`, true)
					.addField(`6K`, `1.78:1 @ 75fps\n2.4:1 @ 100fps`, true)
					.addField(`5K`, `1.78:1 @ 96fps\n2.4:1 @ 120fps`, true)
					.addField(`4K`, `1.78:1 @ 120fps\n2.4:1 @ 150fps`, true)
					.addField(`3K`, `2.4:1 @ 200fps`, true)
					.addField(`2K`, `2.4:1 @ 300fps`, true)
					message.channel.send(embed);
					return;
			}

			//Start film cameras
			else if (args[0] === "arricam") {
				const embed = new Discord.MessageEmbed()
					.setTitle(`ARRICAM`)
					.setColor('#ffa13d')
				  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
				  .setTimestamp()
					.addField(`Max Frame Rates:`, `----------`, false)
					.addField(`ST:3`, `60fps`, true)
					.addField(`LT:3`, `40fps`, true)
					message.channel.send(embed);
					return;
			}

			else if (args[0] === "arriflex") {
				const embed = new Discord.MessageEmbed()
					.setTitle(`Arriflex`)
					.setColor('#ffa13d')
				  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
				  .setTimestamp()
					.addField(`Max Frame Rates:`, `----------`, false)
					.addField(`435`, `150fps`, true)
					.addField(`535`, `60fps`, true)
					.addField(`416`, `75fps`, true)
					.addField(`416 Plus HS`, `150fps`, true)
					.addField(`SR2/SR3`, `75fps`, true)
					.addField(`SR3 HS`, `150fps`, true)
					message.channel.send(embed);
					return;
			}

			else if (args[0] === "aaton") {
				const embed = new Discord.MessageEmbed()
					.setTitle(`Aaton`)
					.setColor('#ffa13d')
				  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
				  .setTimestamp()
					.addField(`Max Frame Rates:`, `----------`, false)
					.addField(`A-Minima`, `50fps`, true)
					.addField(`Xtera`, `75fps`, true)
					.addField(`Penelope`, `40fps`, true)
					message.channel.send(embed);
					return;
			}

			else if (args[0] === "panavision") {
				const embed = new Discord.MessageEmbed()
					.setTitle(`Panavision`)
					.setColor('#ffa13d')
				  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
				  .setTimestamp()
					.addField(`Max Frame Rates:`, `----------`, false)
					.addField(`Millennium`, `50fps`, true)
					.addField(`XL2`, `50fps`, true)
					.addField(`65SPFX`, `36fps`, true)
					.addField(`65HSSM`, `72fps`, true)
					message.channel.send(embed);
					return;
			}

		}

	//Mic Check function
	  else if (command === "miccheck") {
		message.reply(`Good check!`);
		return;
	  }

	//Ping function
	  if (command === "ping") {
		const timeTaken = Date.now() - message.createdTimestamp;
		message.reply(`Pong! This message had a latency of ${timeTaken}ms.`)
		.then(msg => {
		  		msg.delete({ timeout: 10000})
		  	})
		
	  	message.channel.messages.fetch({around: `${msgID}`, limit: 1})
			  .then(messages => {
			    messages.first().delete();
			  });
		return;
	  }

	//Rolemembers function
		if (command === "rolemembers") {

			let roleName = args.join(' ');
			const guildMembers = message.guild.members.cache;
			const guildRole = message.guild.roles.cache.find(role => role.name == roleName);
      const roleMembers = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == guildRole)).map(member => member.user.id);
      // console.log(`${roleMembers.join("\n")}`);
      const embed = new Discord.MessageEmbed()
				.setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
				.addField(`Users with the role ${roleName}:`, `${`<@` + roleMembers.join(">\n<@") + `>`}`, false)
      // message.author.send(`Users with the role ${roleName}:\n${`<@` + roleMembers.join(">\n<@") + `>`}`);
      message.author.send(embed);
      message.channel.send(`A direct message has been sent to ${message.author}. Check your DMs!`)
	      .then(msg => {
			  		msg.delete({ timeout: 10000})
			  	})
			
		  	message.channel.messages.fetch({around: `${msgID}`, limit: 1})
				  .then(messages => {
				    messages.first().delete();
				  });
			return;
		}

	//Rollout function
	  if (command === "rollout") {

	  let [format, fps, magSize] = args;
	  // console.log(`User entered \\rollout for ${format}mm film @${fps}fps, ${magSize}ft mag.`);
	  const filmRef = ['frames per foot', 'feet per minute @ 24fps']
	  const film8 = [80, 18]
	  const film16 = [40, 36]
	  const film35 = [16, 90]
	  const film353perf = [21.333, 67.501]
	  const film352perf = [32, 45]
	  const film65 = [12.8, 112.5]

		if (!args.length) {
		  message.channel.send(`You didn't provide a format (in mm), frame rate or a foot length, ${message.author}!`)
		  .then(msg => {
		  		msg.delete({ timeout: 10000})
		  	})
		
	  	message.channel.messages.fetch({around: `${msgID}`, limit: 1})
			  .then(messages => {
			    messages.first().delete();
			  });
		  return;
		}

		if (format == '8') {
			const rolloutFormat = "Super8mm";
		  let secPerFoot = (film8[0] / fps);
		  let rolloutTime = (secPerFoot * magSize); //rollout time in seconds
		  // console.log(`Seconds per foot: ${secPerFoot}, rollout time: ${rolloutTime}sec.`);
		  let magMinutes = Number((rolloutTime / 60) - ((rolloutTime % 60) / 100)).toFixed(0);
		  let magSeconds = Number(rolloutTime % 60).toFixed(2);
		  let shotFrames = Number(film8[0] * magSize).toFixed(0);
		  if (rolloutTime > 60) {
			const embed = new Discord.MessageEmbed()
			  .setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
			  .setTitle(`${magSize}ft mag of ${rolloutFormat} @${fps}fps`)
			  .addField(`Mag will roll out in ${Number(magMinutes).toFixed(0)}min ${Number(magSeconds).toFixed(1)}sec.`, `In that time you can shoot up to ${shotFrames} frames!`)
			message.channel.send(embed);
		  }
		  if (rolloutTime < 60) {
			const embed = new Discord.MessageEmbed()
			  .setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
			  .setTitle(`${magSize}ft mag of ${rolloutFormat} @${fps}fps`)
			  .addField(`Mag will roll out in ${Number(magSeconds).toFixed(1)}sec.`, `In that time you can shoot up to ${shotFrames} frames!`)
			message.channel.send(embed);
		  }
		  return;
		}
		if (format == '16') {
			const rolloutFormat = "16mm";
		  let secPerFoot = (film16[0] / fps);
		  let rolloutTime = (secPerFoot * magSize); //rollout time in seconds
		  // console.log(`Seconds per foot: ${secPerFoot}, rollout time: ${rolloutTime}sec.`);
		  let magMinutes = Number((rolloutTime / 60) - ((rolloutTime % 60) / 100)).toFixed(0);
		  let magSeconds = Number(rolloutTime % 60).toFixed(2);
		  let shotFrames = Number(film16[0] * magSize).toFixed(0);
		  if (rolloutTime > 60) {
			const embed = new Discord.MessageEmbed()
			  .setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
			  .setTitle(`${magSize}ft mag of ${rolloutFormat} @${fps}fps`)
			  .addField(`Mag will roll out in ${Number(magMinutes).toFixed(0)}min ${Number(magSeconds).toFixed(1)}sec.`, `In that time you can shoot up to ${shotFrames} frames!`)
			message.channel.send(embed);
		  }
		  if (rolloutTime < 60) {
			const embed = new Discord.MessageEmbed()
			  .setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
			  .setTitle(`${magSize}ft mag of ${rolloutFormat} @${fps}fps`)
			  .addField(`Mag will roll out in ${Number(magSeconds).toFixed(1)}sec.`, `In that time you can shoot up to ${shotFrames} frames!`)
			message.channel.send(embed);
		  }
		  return;
		}
		if (format == '35') {
			const rolloutFormat = "35mm 4-perf";
		  let secPerFoot = (film35[0] / fps);
		  let rolloutTime = (secPerFoot * magSize); //rollout time in seconds
		  // console.log(`Seconds per foot: ${secPerFoot}, rollout time: ${rolloutTime}sec.`);
		  let magMinutes = Number((rolloutTime / 60) - ((rolloutTime % 60) / 100)).toFixed(0);
		  let magSeconds = Number(rolloutTime % 60).toFixed(2);
		  let shotFrames = Number(film35[0] * magSize).toFixed(0);
		  if (rolloutTime > 60) {
			const embed = new Discord.MessageEmbed()
			  .setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
			  .setTitle(`${magSize}ft mag of ${rolloutFormat} @${fps}fps`)
			  .addField(`Mag will roll out in ${Number(magMinutes).toFixed(0)}min ${Number(magSeconds).toFixed(1)}sec.`, `In that time you can shoot up to ${shotFrames} frames!`)
			message.channel.send(embed);
		  }
		  if (rolloutTime < 60) {
			const embed = new Discord.MessageEmbed()
			  .setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
			  .setTitle(`${magSize}ft mag of ${rolloutFormat} @${fps}fps`)
			  .addField(`Mag will roll out in ${Number(magSeconds).toFixed(1)}sec.`, `In that time you can shoot up to ${shotFrames} frames!`)
			message.channel.send(embed);
		  }
		  return;
		}
		if (format == '353perf') {
			const rolloutFormat = "35mm 3-perf";
		  let secPerFoot = (film353perf[0] / fps);
		  let rolloutTime = (secPerFoot * magSize); //rollout time in seconds
		  // console.log(`Seconds per foot: ${secPerFoot}, rollout time: ${rolloutTime}sec.`);
		  let magMinutes = Number((rolloutTime / 60) - ((rolloutTime % 60) / 100)).toFixed(0);
		  let magSeconds = Number(rolloutTime % 60);
		  let shotFrames = Number(film353perf[0] * magSize).toFixed(0);
		  if (rolloutTime > 60) {
			const embed = new Discord.MessageEmbed()
			  .setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
			  .setTitle(`${magSize}ft mag of ${rolloutFormat} @${fps}fps`)
			  .addField(`Mag will roll out in ${Number(magMinutes).toFixed(0)}min ${Number(magSeconds).toFixed(1)}sec.`, `In that time you can shoot up to ${shotFrames} frames!`)
			message.channel.send(embed);
		  }
		  if (rolloutTime < 60) {
			const embed = new Discord.MessageEmbed()
			  .setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
			  .setTitle(`${magSize}ft mag of ${rolloutFormat} @${fps}fps`)
			  .addField(`Mag will roll out in ${Number(magSeconds).toFixed(1)}sec.`, `In that time you can shoot up to ${shotFrames} frames!`)
			message.channel.send(embed);
		  }
		  return;
		}
		if (format == '352perf') {
			const rolloutFormat = "35mm 2-perf";
		  let secPerFoot = (film352perf[0] / fps);
		  let rolloutTime = (secPerFoot * magSize); //rollout time in seconds
		  // console.log(`Seconds per foot: ${secPerFoot}, rollout time: ${rolloutTime}sec.`);
		  let magMinutes = Number((rolloutTime / 60) - ((rolloutTime % 60) / 100)).toFixed(0);
		  let magSeconds = Number(rolloutTime % 60);
		  let shotFrames = Number(film352perf[0] * magSize).toFixed(0);
		  if (rolloutTime > 60) {
			const embed = new Discord.MessageEmbed()
			  .setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
			  .setTitle(`${magSize}ft mag of ${rolloutFormat} @${fps}fps`)
			  .addField(`Mag will roll out in ${Number(magMinutes).toFixed(0)}min ${Number(magSeconds).toFixed(1)}sec.`, `In that time you can shoot up to ${shotFrames} frames!`)
			message.channel.send(embed);
		  }
		  if (rolloutTime < 60) {
			const embed = new Discord.MessageEmbed()
			  .setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
			  .setTitle(`${magSize}ft mag of ${rolloutFormat} @${fps}fps`)
			  .addField(`Mag will roll out in ${Number(magSeconds).toFixed(1)}sec.`, `In that time you can shoot up to ${shotFrames} frames!`)
			message.channel.send(embed);
		  }
		  return;
		}
		if (format == '65') {
			const rolloutFormat = "65mm";
		  let secPerFoot = (film65[0] / fps);
		  let rolloutTime = (secPerFoot * magSize); //rollout time in seconds
		  // console.log(`Seconds per foot: ${secPerFoot}, rollout time: ${rolloutTime}sec.`);
		  let magMinutes = Number((rolloutTime / 60) - ((rolloutTime % 60) / 100)).toFixed(0);
		  let magSeconds = Number(rolloutTime % 60).toFixed(2);
		  let shotFrames = Number(film65[0] * magSize).toFixed(0);
		  if (rolloutTime > 60) {
			const embed = new Discord.MessageEmbed()
			  .setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
			  .setTitle(`${magSize}ft mag of ${rolloutFormat} @${fps}fps`)
			  .addField(`Mag will roll out in ${Number(magMinutes).toFixed(0)}min ${Number(magSeconds).toFixed(1)}sec.`, `In that time you can shoot up to ${shotFrames} frames!`)
			message.channel.send(embed);
		  }
		  if (rolloutTime < 60) {
			const embed = new Discord.MessageEmbed()
			  .setColor('#ffa13d')
			  .setFooter("Prefix: \\ \nThis bot is still a work in progress", `https://raw.githubusercontent.com/FooChilde/CameraGeek/v0.1.1/logo.png?token=ADAIWNT7NK5V3MM526NAFNK77S57G`)
			  .setTimestamp()
			  .setTitle(`${magSize}ft mag of ${rolloutFormat} @${fps}fps`)
			  .addField(`Mag will roll out in ${Number(magSeconds).toFixed(1)}sec.`, `In that time you can shoot up to ${shotFrames} frames!`)
			message.channel.send(embed);
		  }
		  return;
		}

	  }

	//Version function
	  if (command === "version") {
		message.reply(`CameraGeek is currently on ${config.version}!`)
		.then(msg => {
		  		msg.delete({ timeout: 10000})
		  	})
		
	  	message.channel.messages.fetch({around: `${msgID}`, limit: 1})
			  .then(messages => {
			    messages.first().delete();
			  });
		return;
	  }

  })

})
client.login(config.token);