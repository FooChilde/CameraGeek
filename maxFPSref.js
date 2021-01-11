if (command === "maxfps" && args[0] === "minilf") {
	const embed = new Discord.MessageEmbed()
		.setTitle(`ARRI Mini LF`)
		.setColor('#ffa13d')
		.addFields(
	    {
			name:  `Max Frame Rates:`,
			value: `----------------\n
			    		LF Open Gate ProRes 4.5K @ 40 fps\n
							LF Open Gate ARRIRAW 4.5K @ 40 fps\n
							LF 16:9 ProRes HD @ 90 fps\n
							LF 16:9 ProRes 2K @ 90 fps\n
							LF 16:9 ProRes UHD @ 60 fps\n
							LF 16:9 ARRIRAW UHD @ 60 fps\n
							LF 2.39:1 ProRes 4.5K @ 60 fps\n
							LF 2.39:1 ARRIRAW 4.5K @ 60 fps`
	    }
		message.channel.send(embed);
}

if (command === "maxfps" && args[0] === "alexalf") {
	const embed = new Discord.MessageEmbed()
		.setTitle(`ARRI ALEXA LF`)
		.setColor('#ffa13d')
		.addFields(
	    {
			name:  `Max Frame Rates:`,
			value: `----------------\n
			    		LF Open Gate ProRes 4.5K @ 60 fps\n
							LF Open Gate ARRIRAW 4.5K @ 90 fps\n
							LF 16:9 ProRes HD @ 60 fps\n
							LF 16:9 ProRes 2K @ 60 fps\n
							LF 16:9 ProRes UHD @ 60 fps\n
							LF 16:9 ARRIRAW UHD @ 90 fps\n
							LF 2.39:1 ProRes 4.5K @ 100 fps\n
							LF 2.39:1 ARRIRAW 4.5K @ 150 fps`
	    }
		message.channel.send(embed);
}

if (command === "maxfps" && args[0] === "alexamini") {
	const embed = new Discord.MessageEmbed()
		.setTitle(`ARRI ALEXA Mini`)
		.setColor('#ffa13d')
		.addFields(
	    {
			name:  `Max Frame Rates:`,
			value: `----------------\n
			    		LF Open Gate ProRes 4.5K @ 60 fps\n
							LF Open Gate ARRIRAW 4.5K @ 90 fps\n
							LF 16:9 ProRes HD @ 60 fps\n
							LF 16:9 ProRes 2K @ 60 fps\n
							LF 16:9 ProRes UHD @ 60 fps\n
							LF 16:9 ARRIRAW UHD @ 90 fps\n
							LF 2.39:1 ProRes 4.5K @ 100 fps\n
							LF 2.39:1 ARRIRAW 4.5K @ 150 fps`
	    }
		message.channel.send(embed);
}

if (command === "maxfps" && args[0] === "alexasxt") {
	const embed = new Discord.MessageEmbed()
		.setTitle(`ARRI ALEXA SXT W`)
		.setColor('#ffa13d')
		.addFields(
	    {
			name:  `Max Frame Rates:`,
			value: `----------------\n
			    		16:9 ProRes HD @ 120 fps\n
							16:9 ProRes 2K @ 120 fps\n
							16:9 ProRes 3.2K @ 72 fps\n
							16:9 Prores 4K UHD @ 50 fps\n
							16:9 ARRIRAW 2.8K @ 120 fps\n
							16:9 ARRIRAW 3.2K @ 120 fps\n
							6:5 ProRes 2K Anamorphic @ 96 fps\n
							6:5 ProRes 4K Cine Anamorphic @ 60 fps\n
							6:5 ARRIRAW 2.6K @ 96 fps\n
							4:3 ProRes 2.8K @ 60 fps\n
							4:3 ARRIRAW 2.8K @ 96 fps\n
							Open Gate ProRes 3.4K @ 60 fps\n
							Open Gate ProRes 4K Cine @ 48 fps\n
							Open Gate ARRIRAW 3.4K @ 90 fps`
	    }
		message.channel.send(embed);
}

if (command === "maxfps" && args[0] === "alexaxt") {
	const embed = new Discord.MessageEmbed()
		.setTitle(`ARRI ALEXA XT PLUS`)
		.setColor('#ffa13d')
		.addFields(
	    {
			name:  `Max Frame Rates:`,
			value: `----------------\n
							16:9 ProRes HD @ 120 fps\n
							16:9 ProRes 2K @ 60 fps\n
							16:9 ProRes 3.2K @ 30 fps\n
							16:9 DNxHD HD @ 120 fps\n
							16:9 ARRIRAW @ 120 fps\n
							4:3 Full ProRes 2K @ 48 fps\n
							4:3 Full ARRIRAW @ 90 fps\n
							4:3 Cropped ARRIRAW @ 96 fps\n
							Open Gate ARRIRAW @ 75 fps`
	    }
		message.channel.send(embed);
}

if (command === "maxfps" && args[0] === "amira") {
	const embed = new Discord.MessageEmbed()
		.setTitle(`ARRI AMIRA`)
		.setColor('#ffa13d')
		.addFields(
	    {
			name:  `Max Frame Rates:`,
			value: `----------------\n
			    		ProRes HD @ 200 fps\n
							ProRes S16 HD @ 200 fps\n
							ProRes 2K @ 200 fps\n
							ProRes 3.2K @ 60 fps\n
							ProRes UHD @ 60 fps\n
							MFX/ARRIRAW 16:9 2.8K @ 48 fps\n
							MPEG-2 HD: 23.976 - 59.94 fps`
	    }
		message.channel.send(embed);
}

if (command === "maxfps" && args[0] === "venice") {
	const embed = new Discord.MessageEmbed()
		.setTitle(`SONY VENICE`)
		.setColor('#ffa13d')
		.addFields(
	    {
			name:  `Max Frame Rates:`,
			value: `----------------\n
			    		4K 2.39:1 @ 120 fps\n
							4K 17:9 @ 110 fps\n
							3.8K 16:9 @ 60 fps\n
							4K 4:3 @ 75 fps\n
							4K 6:5 @ 30 fps\n
							6K 2.39:1 @ 90 fps\n
							6K 17:9/1.85:1 @ 72 fps\n
							5.7K 16:9 @ 30 fps\n
							6K 3:2 @ 60 fps`
	    }
		message.channel.send(embed);
}


// ARRI Mini LF

// LF Open Gate ProRes 4.5K @ 40 fps
// LF Open Gate ARRIRAW 4.5K @ 40 fps
// LF 16:9 ProRes HD @ 90 fps
// LF 16:9 ProRes 2K @ 90 fps
// LF 16:9 ProRes UHD @ 60 fps
// LF 16:9 ARRIRAW UHD @ 60 fps
// LF 2.39:1 ProRes 4.5K @ 60 fps
// LF 2.39:1 ARRIRAW 4.5K @ 60 fps

// ARRI LF

// LF Open Gate ProRes 4.5K @ 60 fps
// LF Open Gate ARRIRAW 4.5K @ 90 fps
// LF 16:9 ProRes HD @ 60 fps
// LF 16:9 ProRes 2K @ 60 fps
// LF 16:9 ProRes UHD @ 60 fps
// LF 16:9 ARRIRAW UHD @ 90 fps
// LF 2.39:1 ProRes 4.5K @ 100 fps
// LF 2.39:1 ARRIRAW 4.5K @ 150 fps

// ARRI ALEXA Mini

// ProRes HD @ 200 fps
// ProRes S16 HD @ 200 fps
// ProRes 2K @ 200 fps
// ProRes 3.2K @ 60 fps
// ProRes UHD @ 60 fps
// ProRes 4:3 2.8K @ 50 fps
// ProRes 2:39:1 2K Ana. @ 120 fps
// ProRes HD Ana. @ 120 fps
// MFX/ARRIRAW 16:9 2.8K @ 48 fps
// MFX/ARRIRAW 3.4K Open Gate @ 30 fps

// ARRI ALEXA SXT W

// 16:9 ProRes HD @ 120 fps
// 16:9 ProRes 2K @ 120 fps
// 16:9 ProRes 3.2K @ 72 fps
// 16:9 Prores 4K UHD @ 50 fps
// 16:9 ARRIRAW 2.8K @ 120 fps
// 16:9 ARRIRAW 3.2K @ 120 fps
// 6:5 ProRes 2K Anamorphic @ 96 fps
// 6:5 ProRes 4K Cine Anamorphic @ 60 fps
// 6:5 ARRIRAW 2.6K @ 96 fps
// 4:3 ProRes 2.8K @ 60 fps
// 4:3 ARRIRAW 2.8K @ 96 fps
// Open Gate ProRes 3.4K @ 60 fps
// Open Gate ProRes 4K Cine @ 48 fps
// Open Gate ARRIRAW 3.4K @ 90 fps'

// ARRI AMIRA

// ProRes HD @ 200 fps
// ProRes S16 HD @ 200 fps
// ProRes 2K @ 200 fps
// ProRes 3.2K @ 60 fps
// ProRes UHD @ 60 fps
// MFX/ARRIRAW 16:9 2.8K @ 48 fps
// MPEG-2 HD: 23.976 - 59.94 fps


// SONY VENICE

// 4K 2.39:1 1-120fps
// 4K 17:9 1-110fps
// 3.8K 16:9 1-60 fps
// 4K 4:3 1-75 fps
// 4K 6:5 1-30 fps
// 6K 2.39:1 1-90 fps
// 6K 17:9/1.85:1 1-72 fps
// 5.7K 16:9 1-30 fps
// 6K 3:2 1-60 fps


