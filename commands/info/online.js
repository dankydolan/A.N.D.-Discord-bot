module.exports = {
    name: "online",
    category: "info",
    description: "Checks to see if the bot is online and gives the current build version",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`**Bot is online running build 1.4.3!**`);
    }
}
