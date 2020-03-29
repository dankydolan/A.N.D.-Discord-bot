const codes = {
    "1" : "2695993", "2" : "2695999", "3" : "2695992", "4" : "3439972", "5" : "2695995", "6" : "2695989", "7" : "2696006", "8" : "3439970", "9" : "2695990", "10" : "2695996", "11" : "2695994", "12" : "3902330", "13" : "2695986", "14" : "2696000", "15" : "2696005", "16" : "3439853", "17" : "2809098", "18" : "2809068", "19" : "2809112", "20" : "3439829", "21" : "2864479", "22" : "2864457", "23" : "2864487", "24" : "3439801", "25" : "2747006", "26" : "2749738", "27" : "2749749", "28" : "3439840", "29" : "2695968", "30" : "2695972", "31" : "2695967", "32" : "3439955",
    
}
const api = "https://api.battlemetrics.com/servers/";  
const snekfetch = require("snekfetch");
const Discord = require("discord.js");

 

module.exports = {
    name: "server",
    category: "info",
    description: "Shows info and how many people are playing on the requested server",
    run: async (client, message, args) => {


        args.length > 0
        const id = codes[args[0]]
        const url = api + id 
        


        snekfetch.get(url).then(r => {            
           let body = r.body;

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
