const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {


    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("No can do.");
    if (args[0] == "help") {
        message.reply("Usage: !tempmute <user> <1s/m/h/d>");
        return;
    }
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Please mention a user!");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("I cannot mute that user!");
    let reason = args.slice(2).join(" ");
    if (!reason) return message.reply("Please include a reason for this user's mute!");

    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Temporary Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
    //end of create role
    let mutetime = args[1];
    if (!mutetime) return message.reply("Thank you for specifying a time for that user's tempmute.");

    message.delete().catch(O_o => {});

    try {
        await tomute.send(`Hello! you've been muted for ${mutetime}. Sorry!`)
    } catch (e) {
        message.channel.send(`A user has been muted for ${mutetime}.`)
    }

    let muteembed = new Discord.RichEmbed()
        .setDescription(`Mute Report by ${message.author}`)
        .setColor("RANDOM")
        .addField("User Muted:", tomute)
        .addField("Time", message.createdAt)
        .addField("Duration", mutetime)
        .addField("Reason", reason);

    let incidentschannel = message.guild.channels.find(`name`, "logs");
    if (!incidentschannel) return message.reply("Cannot find the logs channel.");
    incidentschannel.send(muteembed);
    message.channel.send(`<@${tomute.id}> is muted for ${mutetime}`)
    await (tomute.addRole(muterole.id));

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> was unmuted!`);
    }, ms(mutetime));
}