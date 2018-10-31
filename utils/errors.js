const Discord = require("discord.js");
const fs = require("fs");
let config = require("../settings.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Insufficient Permission")
        .setColor(config.red)
        .addField("Permission needed", perm);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(config.red)
        .setTitle("Error")
        .addField(`${user} has perms`, perms);

    message.channel.send(embed).then(m => m.delete(5000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("You cannot ban a bot.")
        .setColor(config.red);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Could not find that user.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Please supply a reason.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}

module.exports.noLogChannel = (message, perm) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setColor(config.red)
      .setDescription('Sorry, I could not find the `#audit-log` channel. This notification was unable to be sent!');
  
    message.channel.send(embed);
  };
  
  // Used if there is no #reports channel in the guild
  module.exports.noReportChannel = (message, perm) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setColor(config.red)
      .setDescription('Sorry, I could not find the `#reports` channel. This report was unable to be sent!');
  
    message.channel.send(embed);
  };
  
  // Used if user has no permissions to execute the command
  module.exports.noPermissions = (message, perm) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription(`You have insufficent permissions to run this command.\nYou require the permission flag of **${perm}**!`)
      .setColor(config.red)
  
    message.channel.send(embed);
  };
  
  // Used if no user has been provided or if user is invalid
  module.exports.invalidUser = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('This user could not be found or does not exist!')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if no reason has been provided
  module.exports.invalidReason = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('No reason has been provided.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used for users that cannot be punished
  module.exports.cannotPunish = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('This user cannot be punished.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if a user attempts to send an empty poll
  module.exports.invalidPoll = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('Please provide a question for your poll.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if a user does not specify a number of messages to purge
  module.exports.provideNumber = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('Please provide a number of messages you would like to delete.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if a user does not specify a number of messages to purge
  module.exports.emptyMessage = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('Please specify the message you would like to send, you cannot send an empty message.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if no valid URL is provided [used in the shortenurl command]
  module.exports.invalidURL = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('Please enter a valid URL.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if no time is specified
  module.exports.invalidTime = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('You have not specified a time, using d/h/m/s')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if no time is specified
  module.exports.ownerOnly = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription(`Only <@${config.ownerid}> can use this command.`)
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if Minecraft Server IP is invalid
  module.exports.invalidIP = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('Enter a valid Minecraft IP.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if the client ID is blank.
  module.exports.invalidClientID = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('Please specify a client ID, the field cannot be left blank.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if there is no #tweet channel in the Guild
  module.exports.noTweetChannel = (message, perm) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setColor(config.red)
      .setDescription('Sorry, I could not find the `#tweet` channel.');
  
    message.channel.send(embed);
  };
  
  // Used if a user does not a message to Tweet
  module.exports.emptyMessage = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('Please specify the message you would like to tweet, you cannot send an empty tweet.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if a user attempts to send a tweet command that is not in the #tweet channel
  module.exports.incorrectChannel = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('You have sent this command in the wrong channel, try `#tweet`.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if a user attempts to send a tweet command that is not in the #tweet channel
  module.exports.noCommandName = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('Must provide a command name to reload.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if a user attempts to send a tweet command that is not in the #tweet channel
  module.exports.anotherNumber = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('Please provide a number less than 100')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if a user attempts to ban a user who is not banned.
  module.exports.userNotBanned = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setColor(config.red)
      .setDescription('This user is not banned.');
  
    message.channel.send(embed);
  };
  
  // Used if a user attempts to mute a user who is not muted.
  module.exports.userNotMuted = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('This user is not muted.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if a user attempts to mute a user who is already muted
  module.exports.userAlreadyMuted = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('This user has already been muted.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if a user attempts to send a tweet command that is not in the #tweet channel
  module.exports.noAPIKey = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('An API key is not available or could not be found, please check your `token.json` file.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if a user attempts to send a tweet command that is not in the #tweet channel
  module.exports.invalidPlatform = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('Please include a platform and username in your arguments.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if a user attempts to send a tweet command that is not in the #tweet channel
  module.exports.commandNotEnabled = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('This command is not enabled, you can turn this on via the `config.json` file.')
      .setColor(config.yellow);
  
    message.channel.send(embed);
  };
  
  // Used if a user does not specify a number of messages to purge
  module.exports.emptyCode = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('Please specify the code you would like to send.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if a user attempts to assign a role that does not exist
  module.exports.noRoleExists = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('The specified role does not exist.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if a user is trying to be assigned a role that they already have
  module.exports.userHasRole = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('The specified user already has this role.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if a user is trying to be assigned a role that they don't have
  module.exports.userDoesNotHaveRole = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('The specified user does not have this role.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
  
  // Used if a user is trying to be assigned a role that they don't have
  module.exports.specifyARole = (message) => {
    let embed = new Discord.RichEmbed()
      .setTitle('An error has occurred!')
      .setDescription('Please specify a role to assign to the user.')
      .setColor(config.red);
  
    message.channel.send(embed);
  };
