const Discord = require('discord.js');
const bot = new Discord.Client();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: true});

bot.on('ready', () => {
    console.log(`WilyCraft Disocrd Integration Bot ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link => {
        console.log(link);
    })

    bot.user.setActivity("WILYFOX");
});

app.post('/post', urlencodedParser, async (req, res) => {
    let players = req.body.players;
    let worlds = req.body.worlds;

    let embed = new Discord.MessageEmbed()
        .setTitle(`WilyCraft Discord Integration`)
        .setColor(`#dcdcdc`)
        .addFields(
            { name: 'Игроки', value: players },
            { name: 'Миры', value: worlds },
        );

    await bot.channels.fetch('781598931409829899').then(channel => {
        channel.send(embed);
    });
    
    console.log(name, text);
    res.end();
});

app.listen(process.env.PORT, () => {
    bot.login(process.env.TOKEN);
});