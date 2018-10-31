const Discord = require("discord.js");
const settings = require('../settings.json')
const client = new Discord.Client();
// Variables
client.ownerID = settings.ownerid;
client.prefix = settings.prefix;
client.color = settings.color;
client.footer = settings.footer;

module.exports.run = async (client, message, args) => {

    let prefix = settings.prefix;
    if (!message.content.startsWith(settings.prefix)) return;
    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setTitle("San Andreas Law Bot Commands")
        .setThumbnail(bicon)
        .addField("Default Prefix", `!`)
        .addField("Moderation", `**Ban**\nUsage: ${settings.prefix}ban (user) (reason)\n**Kick**\nUsage: ${settings.prefix}kick (user) (reason)\n**Mute**\nUsage: ${settings.prefix}mute <user> <seconds/minutes/hours/days>\n**Say**\nUsage: ${settings.prefix}say (message)\n**Purge**\n ${settings.prefix}purge (# of message you want deleted)\n**SetActivity**\nUsage: ${settings.prefix}setactivity (activity you want the bot to "play")\n**Lockdown**\nUsage: ${settings.prefix}lockdown (time hh-mm-ss) (optional: release/unlock)`)
        .addBlankField()
        .addField("Guild Commands", `**Server Info :** It wil show the server's info\n${settings.prefix}serverinfo\n**User Info : ** It will show you the bot's information\n${settings.prefix}userinfo\n**Bot Info :** it will show you the bot's information\n${settings.prefix}serverinfo\n`)
        .setFooter(`Requested by : ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .setColor('RANDOM')
        .addBlankField()
        .addField("Other Commands", `**Uptime**\n Usage: ${settings.prefix}uptime\n**Report**\nUsage: ${settings.prefix}report (user) (reason)`)
        .addBlankField()
        .addField("Patrol Host Commands", `**Patrol Start**\n Usage: ${settings.prefix}patrol-start\n**Patrol Over**\n Usage: ${settings.prefix}patrol-over\n**Brief Start**\n Usage: ${settings.prefix}brief-start\n**Brief Over**\n Usage: ${settings.prefix}brief-over\n`);

    message.author.send(botembed);
    message.channel.send("📬✅ **Check your DM's**")
}

module.exports.help = {
    name: "help"
}