const codes = {
    "1" : "2695993"
}


const api = "https://api.battlemetrics.com/servers/";
const snekfetch = require("snekfetch");
const Discord = require("discord.js");

 

module.exports = {
    name: "playerlist",
    category: "info",
    description: "Shows info and exact players that are on the requested server",
    run: async (client, message, args) => {


        const playerc = "?include=player"
        const id = codes["1"]
        const url = api + id + playerc
        console.log(url)

        snekfetch.get(url).then(r => {            
           let body = r.body;
           console.log(body)

           var servername = {Server:body.data.attributes.name};
           var playerslist = {Playerslist:body.included.attributes};
           console.log(playerslist)
        
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
