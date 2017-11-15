const Discord = require("discord.js");
const config = require("./BotSettings.json")
const TOKEN = config.TOKEN;

const PREFIX = config.PREFIX;

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Perhaps later",
    "Most certainly"
];
var killgifs = ["http://gifimage.net/wp-content/uploads/2017/08/strike-witches-gif-5.gif",
"http://gifimage.net/wp-content/uploads/2017/08/strike-witches-gif-1.gif",
"https://gifimage.net/wp-content/uploads/2017/08/strike-witches-gif-14.gif",
"https://vignette.wikia.nocookie.net/powerlisting/images/b/b6/Explosion_Megumin.gif/revision/latest?cb=20160302023153",
"https://gifimage.net/wp-content/uploads/2017/08/megumin-explosion-gif-5.gif",
"https://1.bp.blogspot.com/-7CH5vfmZqTM/WIk1xdq7KoI/AAAAAAAAuA8/Chjj3YlP6kwm0hdd5iFwHJAgfwJz-8FOQCPcB/s1600/Omake%2BGif%2BAnime%2B-%2BKono%2BSubarashii%2BSekai%2Bni%2BShukufuku%2Bwo%2521%2B2%2B-%2BEpisode%2B3%2B-%2BMegumin%2BExplosion%2B3.gif"
];

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("Ready")
});

bot.on("message", function(message) {
    if (message.author.bot) return;

    if (message.content == "hello") {
        message.channel.sendMessage("Hi there!");
    }

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()){
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        
        
        case "info":
            message.delete([])
            message.channel.sendMessage("I'm Felix-Chan, nice to meet you!")
            break;
        
        case "8ball":
            if (args[1]) {
                message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            }else {
                message.channel.sendMessage("Ask me something when you tell me this :(");
                }
            break;
        
        case "help":
        message.delete([])
            if (!args[1]) {
                var embed = new Discord.RichEmbed() 
                    .addField("Prefix",PREFIX)
                    .addField("Commands","info \nping \n8ball \nsourcecode \nkill", true)
                    .addField("Meaning","Gives bot info \nPong! \nPredicts your fate! \nProvides sourcecode \nKills the mentioned user", true)
                    .setColor("dd1122")
                message.channel.sendEmbed(embed); 
            }
            else if(args[1]=="ping".toLowerCase()) {
                var embed = new Discord.RichEmbed() 
                    .addField("ping","Makes the bot play pingpong")
                    .setColor("dd1122")
                message.channel.sendEmbed(embed)
            } 
            else if(args[1]=="info".toLowerCase()) {
                var embed = new Discord.RichEmbed() 
                    .addField("info","Provides you with some information about the bot.")
                    .setColor("dd1122")
                message.channel.sendEmbed(embed)
            }
            else if(args[1]=="8ball".toLowerCase()) {
                var embed = new Discord.RichEmbed() 
                    .addField("8ball","Decides your fate.")
                    .setColor("dd1122")
                message.channel.sendEmbed(embed)
            }   
            else if(args[1]=="kill".toLowerCase()) {
                var embed = new Discord.RichEmbed() 
                    .addField("kill","Kills the mentioned user")
                    .setColor("dd1122")
                message.channel.sendEmbed(embed)
            }   
            else if(args[1]=="sourcecode".toLowerCase()) {
                var embed = new Discord.RichEmbed() 
                    .addField("sourcecode","Gives sourcecode of the bot.")
                    .setColor("dd1122")
                message.channel.sendEmbed(embed)
            }   
            break;

        case "sourcecode":
            message.delete([])
            message.channel.sendMessage("If you think it is fine I will show you my nudes:\nhttps://github.com/PhoenixCrimson/FC")
        break;

        case "kill":
            message.delete([])
            let victim = message.mentions.users.first() || message.guild.members.get(args[0]);
            if(!victim) {
                message.channel.sendMessage("Use this when you have decided to mention the poor soul.");
            }
            else {
                var embed = new Discord.RichEmbed() 
                    .setDescription("Someone wishes you dead, " + args[1] )
                    .setImage(killgifs[Math.floor(Math.random() * killgifs.length)])
                    .setColor("dd1122")
                message.channel.sendEmbed(embed)
            }
            break;
        default:
            message.channel.sendMessage("I do not know this, please teach me.")
            
    }
});



bot.login(TOKEN);
