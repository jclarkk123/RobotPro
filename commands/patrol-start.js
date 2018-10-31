const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {

    let prePatrolEmbed = new Discord.RichEmbed()
    .setTitle("Patrol Start")
    .addField("Patrol is starting!", 'Head to your respected channels for Roleplay!')
    .setDescription(`<@&506184163523821569> Patrol is Starting!`)
    .setFooter(`© 2018 San Andreas Law, All Rights Reserved`)
    .setTimestamp()
    .setColor("#36393f")

    let role = message.guild.roles.find(role => role.name === "Patrol Host");

    if(message.member.roles.has(role.id)) {
     const patrolChannel = client.channels.find("name", "sal-patrols").send("@everyone" + prePatrolEmbed)
    } else {
        message.channel.send("You don't have the correct permissions to do this command!")
        message.delete(1000)
    }


    //const patrolChannel = client.channels.find("name", "patrols").send(prePatrolEmbed)
}

module.exports.help = {
    name: "patrol-start"
}