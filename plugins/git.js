const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/VJuPuTP.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*😈𝕊ℍ𝔸ℍ𝕀𝔻-𝕊ℍ𝔸ℤℤ😈*
*𝕆𝕨𝕟𝕖𝕣 𝕟𝕦𝕞𝕓𝕖𝕣 wa.me/918078391406?text=Hi*
*𝕊𝕙𝕒𝕙𝕚𝕕-𝕤𝕙𝕒𝕫𝕫 𝔻𝕖𝕒𝕕𝕡𝕠𝕠𝕝 𝕘𝕚𝕥𝕙𝕦𝕓𝕝𝕚𝕟𝕜   https://github.com/shazz-shahid/Deadpool*
*𝔸𝕞𝕖𝕖𝕣-𝕜𝕒𝕝𝕝𝕦𝕞𝕥𝕙𝕠𝕕𝕚 𝕡𝕚𝕜𝕒𝕔𝕙𝕦 𝕘𝕚𝕥𝕙𝕦𝕓𝕝𝕚𝕟𝕜 https://github.com/ameer-kallumthodi/Pikachu*
`}) 

}));
