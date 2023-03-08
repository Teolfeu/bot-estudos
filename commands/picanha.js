const { SlashCommandBuilder } = require('discord.js')
const { execute } = require('./ping')
const rollDice = () =>getRandomNumber(1,6)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("picanha")
       .setDescription("Verifica se o baiano está acordado"),

    async execute(interaction) {
       await interaction.reply("Ele está dormindo, tente mais tarde!")
  }
}
