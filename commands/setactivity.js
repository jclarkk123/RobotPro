const Discord = require('discord.js');

module.exports.run = async (client, message, args1) => {
    let args = message.content.split(" ").slice(1);
    message.delete(1000)
let status = args.join(' ')
if(message.author.id !== "261176928025837568") return message.channel.send("You can't use that !");

client.user.setActivity(status)
}