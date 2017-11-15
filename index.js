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


var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("Ready")
});

bot.on("message", function(message) {
    if (message.author.equals.apply(bot.user)) return;

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
            if (!args[1]) {
                var embed = new Discord.RichEmbed() 
                    .addField("Prefix",PREFIX)
                    .addField("Commands","info \nping \n8ball", true)
                    .addField("Meaning","Gives bot info \nPong! \nPredicts your fate!", true)
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
            break;

            
        default:
            message.channel.sendMessage("I do not know this, please teach me.")
            
    }
});



bot.login(TOKEN);
