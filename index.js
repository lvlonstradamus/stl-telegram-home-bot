console.log('[OK]')
const Telegraf = require('telegraf')

const bot = new Telegraf('838117254:AAHihInYXXHm4Fo2UQuqdLmsiyCKKZnZo3E')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
