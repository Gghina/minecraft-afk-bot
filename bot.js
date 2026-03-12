const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'nojewsandniggas.falixsrv.me',
    port: 22241,
    username: 'Orphan obliterator',
    auth: 'offline',
    version: '1.21.1'
  })

  bot.on('login', () => {
    console.log('Bot joined')
  })

  bot.on('spawn', () => {
    console.log('Bot spawned')

    // anti-afk: jump every minute
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 60000)
  })

  bot.on('end', () => {
    console.log('Disconnected. Reconnecting in 5s')
    setTimeout(createBot, 5000)
  })

  bot.on('error', (err) => {
    console.log('Error:', err)
  })
}

createBot()




