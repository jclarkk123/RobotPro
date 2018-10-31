const Discord = require('discord.js');
const settings = require('./settings.json');
const client = new Discord.Client();
const newUsers = new Discord.Collection();
let xp = require('./xp.json');

// Variables
client.ownerID = settings.ownerid;
client.prefix = settings.prefix;
client.color = settings.color;
client.footer = settings.footer;

// Extension Script
const tools = require('./utils/functions.js')
const errors = require('./utils/errors.js')


client.on('message', message => {

    if (!message.member) return;
    if (!message.author.bot && message.channel.type !== 'text') {
        const embed = new Discord.MessageEmbed()
        .setColor(client.color)
        .setTitle('Sorry, this bot only runs in this server!')
        .setDescription('**If you would like to invite it, please click [here](https://discordapp.com/api/oauth2/authorize?client_id=451829224307818517&permissions=8&scope=bot).**')
        .setFooter(client.footer)

        
        message.channel.send(embed).catch(err => console.log(err));
    }
})

client.on('guildMemberAdd', member => {

    let welcomeEmbed = new Discord.RichEmbed()
            .setAuthor(member.displayName, member.displayAvatarURL)
            .setColor('#36393f')
            .setDescription(`Welcome ${member} to San Andreas Law!`)
            .setTimestamp()
            .setFooter('® 2018 San Andreas Law, All Rights Reserved')


            const welcomeChannel = member.guild.channels.find(ch => ch.name === 'welcomes');

            welcomeChannel.send(welcomeEmbed)
});

client.on('guildMemberRemove', member => {

    let leaveEmbed = new Discord.RichEmbed()
            .setAuthor(member.displayName, member.displayAvatarURL)
            .setColor('#36393f')
            .setDescription(`${member} just left San Andreas Law :(`)
            .setTimestamp()
            .setFooter('® 2018 San Andreas Law, All Rights Reserved')

    const leaveChannel = member.guild.channels.find(ch => ch.name === 'welcomes');

    leaveChannel.send(leaveEmbed)
})

// XP 

let xpAdd = Math.floor(Math.random() * 7) + 8;
console.log(xpAdd);

if(!xp[message.author.id]){
  xp[message.author.id] = {
    xp: 0,
    level: 1
  };
}


let curxp = xp[message.author.id].xp;
let curlvl = xp[message.author.id].level;
let nxtLvl = xp[message.author.id].level * 300;
xp[message.author.id].xp =  curxp + xpAdd;
if(nxtLvl <= xp[message.author.id].xp){
  xp[message.author.id].level = curlvl + 1;
  let lvlup = new Discord.RichEmbed()
  .setTitle("Level Up!")
  .setColor(purple)
  .addField("New Level", curlvl + 1);

  message.channel.send(lvlup).then(msg => {msg.delete(5000)});
}
fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
  if(err) console.log(err)
});

client.on('message', message => {
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let args = message.content.slice(client.prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if (!msg.startsWith(client.prefix)) return;
    if (message.author.bot) return;

    try {
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args, tools);
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log(`${message.author.tag} ran the command ${cmd}`);
    }

})


client.on('ready', () => {
    console.log("ready!")
});






































client.login(settings.token)