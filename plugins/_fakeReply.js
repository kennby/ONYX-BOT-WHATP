import fetch from 'node-fetch'
export async function before(m,{conn }) {
	
	let who = m.sender ? m.sender : conn.user.jid && conn.user.jid ? conn.user.jid : '0@s.whatsapp.net'
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/816d2dc60f0e2fa6878e6.jpg')
	
	//reply link wa
   global.rpl = { contextInfo: { externalAdReply: { mediaUrl: dygp, mediaType: 'VIDEO', description: '', title: packname, body: '', thumbnailUrl: pp, sourceUrl: dygp }}} 
	
	//reply link PayPal
    global.rpyp = { contextInfo: { externalAdReply: { mediaUrl: fgpyp, mediaType: 'VIDEO', description: '', title: '', body: '', thumbnailUrl: pp, sourceUrl: fgpyp }}}
    
    //reply Instagram 
    global.rpig = { contextInfo: { externalAdReply: { mediaUrl: fgig, mediaType: 'VIDEO', description: '', title: '', body: '', thumbnailUrl: pp, sourceUrl: fgig }}} 
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: fgyt, mediaType: 'VIDEO', description: ' : ' + fgyt, title: '', body: '', thumbnailUrl: pp, sourceUrl: fgyt }}}

}
