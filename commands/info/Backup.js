const api = "https://api.battlemetrics.com/servers/3439972";
const snekfetch = require("snekfetch");
const Discord = require("discord.js");


module.exports = {
    name: "scorched",
    category: "info",
    description: "Show relevant info about home servers",
    run: async (client, message, args) => {
        snekfetch.get(api).then(r => {            
          let body = r.body;
          console.log(body);

           var servername = {Server:body.data.attributes.name};
           var IP = {IP:body.data.attributes.ip};
           var port = {Port:body.data.attributes.port};
           var players = {Players:body.data.attributes.players};
           var status = {Status:body.data.attributes.status};

           let embed = new Discord.MessageEmbed()
           .setAuthor(body.data.attributes.name)
           .setDescription("Players: " + body.data.attributes.players)
           .addField("IP: " + body.data.attributes.ip, value= "Port: " + body.data.attributes.port)
           .setColor("#ff0000")
           .setFooter("Status: " + body.data.attributes.status)

           message.channel.send({embed: embed});

            
            
            
            
            



            
        }
        
            
        
    );
}}
