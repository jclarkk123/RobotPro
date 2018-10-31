const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {


    let briefoverEmbed = new Discord.RichEmbed()
    .setTitle("Briefing is starting!")
    .addField("Debriefing is start!", 'You can join now for debriefing! but will be locked later!')
    .setDescription(`<@&506184163523821569> Briefing over!`)
    .setFooter(`© 2018 San Andreas Law, All Rights Reserved`)
    .setTimestamp()
    .setColor("#36393f")

        let role = message.guild.roles.find(role => role.name === "Patrol Host");

    if(message.member.roles.has(role.id)) {
        message.delete(1000)
     const patrolChannel = client.channels.find("name", "sal-patrols").send(briefoverEmbed)
    } else {
        message.channel.send("You don't have the correct permissions to do this command!")  
        message.delete(1000)
    }


    //const patrolChannel = client.channels.find("name", "patrols").send(briefoverEmbed)
}

module.exports.help = {
    name: "brief-start"
}