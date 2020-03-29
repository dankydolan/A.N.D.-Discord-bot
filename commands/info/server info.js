const codes = {
    "1" : "2695993", 
    "2" : "2695999", 
    "3" : "2695992",
    "4" : "3439972", 
    "5" : "2695995", 
    "6" : "2695989", 
    "7" : "2696006", 
    "8" : "3439970",
    "9" : "2695990", 
    "10" : "2695996", 
    "11" : "2695994", 
    "12" : "3902330", 
    "13" : "2695986", 
    "14" : "2696000", 
    "15" : "2696005", 
    "16" : "3439853", 
    "17" : "2809098", 
    "18" : "2809068", 
    "19" : "2809112", 
    "20" : "3439829", 
    "21" : "2864479", 
    "22" : "2864457", 
    "23" : "2864487", 
    "24" : "3439801", 
    "25" : "2747006", 
    "26" : "2749738", 
    "27" : "2749749", 
    "28" : "3439840", 
    "29" : "2695968",
    "30" : "2695972", 
    "31" : "2695967", 
    "32" : "3439955",

}

const serverowners = {
    "1" : "Unknown, Needs to get scouted!", 
    "2" : "Unknown, Needs to get scouted!", 
    "3" : "Unknown, Needs to get scouted!", 
    "4" : "Home server", 
    "5" : "S2W", 
    "6" : "Unknown, Needs to get scouted!",
    "7" : "Unknown, Needs to get scouted!",  
    "8" : "Unknown, Needs to get scouted!", 
    "9" : "Unknown, Needs to get scouted!", 
    "10" : "Gang Gang", 
    "11" : "Bumba comp co shrim", 
    "12" : "Unknown, Needs to get scouted!", 
    "13" : "Unknown, Needs to get scouted!", 
    "14" : "Unknown, Needs to get scouted!", 
    "15" : "Unknown, Needs to get scouted!", 
    "16" : "Unknown, Needs to get scouted!", 
    "17" : "S2W and Domsquad", 
    "18" : "Unknown, Needs to get scouted!",  
    "19" : "Unknown, Needs to get scouted!",  
    "20" : "Inferno", 
    "21" : "Home server, North ice MDLM, Bear cave Wookies", 
    "22" : "Blaze south", 
    "23" : "Unknown, Needs to get scouted!",  
    "24" : "Unknown, Needs to get scouted!",  
    "25" : "Unknown, Needs to get scouted!",  
    "26" : "Unknown, Needs to get scouted!",  
    "27" : "Unknown, Needs to get scouted!",  
    "28" : "STD", 
    "29" : "Unknown, Needs to get scouted!",  
    "30" : "Unknown, Needs to get scouted!",  
    "31" : "Unknown, Needs to get scouted!",  
    "32" : "Unknown, Needs to get scouted!",  
  
   
}

const allycheck = {
    "1" : "No",
    "2" : "No",
    "3" : "No", 
    "4" : "Yes", 
    "5" : "No", 
    "6" : "No", 
    "7" : "No",
    "8" : "No",
    "9" : "No", 
    "10" : "No", 
    "11" : "No", 
    "12" : "No",  
    "13" : "No",   
    "14" : "No",  
    "15" : "No",   
    "16" : "No",   
    "17" : "No",
    "18" : "No", 
    "19" : "No", 
    "20" : "Neutral", 
    "21" : "Yes", 
    "22" : "No", 
    "23" : "No",
    "24" : "No",
    "25" : "No",
    "26" : "No",
    "27" : "No",
    "28" : "No", 
    "29" : "No", 
    "30" : "No", 
    "31" : "No", 
    "32" : "No", 
}

const screenshotcheck = {
    "1" : "None",
    "2" : "None",
    "3" : "None",
    "4" : "None",
    "5" : "None",
    "6" : "None",
    "7" : "None",
    "8" : "None",
    "9" : "None",
    "10" : "None",
    "11" : "None",
    "12" : "None",
    "13" : "None",
    "14" : "None",
    "15" : "None",
    "16" : "None",
    "17" : "None", 
    "18" : "None", 
    "19" : "None",
    "20" : "None", 
    "21" : "https://gyazo.com/2d620f8eb512906429b44c77b1503e90", 
    "22" : "None", 
    "23" : "None",
    "24" : "None",
    "25" : "None",
    "26" : "None",
    "27" : "None",
    "28" : "None",
    "29" : "None",
    "30" : "None",
    "31" : "None",
    "32" : "None",
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

        const serverinfo = serverowners[args[0]]
        const defserverinfo = serverinfo

        const allychecker = allycheck[args[0]]
        const defallycheck = allychecker

        const screenshotchecker = screenshotcheck[args[0]]
        const defscreenshotcheck = screenshotchecker


        snekfetch.get(url).then(r => {            
           let body = r.body;

           var servername = {Server:body.data.attributes.name};
           var IP = {IP:body.data.attributes.ip};
           var port = {Port:body.data.attributes.port};
           var players = {Players:body.data.attributes.players};
           var status = {Status:body.data.attributes.status};
           var serverinfo = defserverinfo
           var allychecker = defallycheck
           var screenshotchecker = defscreenshotcheck
        

           let embed = new Discord.MessageEmbed()
           .setAuthor(body.data.attributes.name)
           .setDescription("Players: " + body.data.attributes.players)
           .addField("IP: " + body.data.attributes.ip, value= "Port: " + body.data.attributes.port)
           .addField("**Server owner:** " + defserverinfo, value= "Ally: " + defallycheck)
           .addField("**Screenshots:** ", value= defscreenshotcheck)
           .setColor("#ff0000")
           .setFooter("Status: " + body.data.attributes.status)

           message.channel.send({embed: embed});           
        }        
    );
}}
