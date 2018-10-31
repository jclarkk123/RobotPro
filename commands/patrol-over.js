const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {

   // if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have manage messages.");

    let patrolEndEmbed = new Discord.RichEmbed()
    .setTitle("Patrol Over!")
    .addField("Patrol is over!", 'Thank you for the people who attended the RP.')
    .setDescription(`<@&506184163523821569> Patrol has ended!`)
    .setFooter(`© 2018 San Andreas Law, All Rights Reserved`)
    .setTimestamp()
    .setColor("#36393f")

    let role = message.guild.roles.find(role => role.name === "Patrol Host");

    if(message.member.roles.has(role.id)) {
     const patrolChannel = client.channels.find("name", "sal-patrols").send(patrolEndEmbed)
    } else {
        message.channel.send("You don't have the correct permissions to do this command!")
        message.delete(1000)
    } 

    


}

module.exports.help = {
    name: "patrol-over"
}