import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['51907364682', 'KENN', true],
  [''], 
  [''] 
] //Numeros de owner 

global.mods = [''] 
global.prems = ['', '', '']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'ONYX' 
global.author = 'KENN' 
global.fgig = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v' 
global.dygp = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.fgsc = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v' 
global.fgyt = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.fgpyp = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.fglog = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v' 

global.wait = '⌛'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
