const Telegraf = require('telegraf')
const TelegrafInlineMenu = require('telegraf-inline-menu')

const menu = new TelegrafInlineMenu(ctx => `Hey ${ctx.from.first_name}!`)
menu.setCommand('start')

menu.simpleButton('I am excited!', 'a', {
    doFunc: ctx => ctx.reply('As am I!')
})


const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(menu.init())

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('control', (ctx) => ctx.reply(`[INFO] i'm ready`))
bot.command('kill', ({ reply }) => reply('YEAH!!!'))
bot.launch()
