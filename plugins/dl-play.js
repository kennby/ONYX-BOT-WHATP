import fetch from 'node-fetch';

let sending = false;

const handler = async (m, { command, usedPrefix, conn, text }) => {
    if (!text) throw `Ingrese el nombre o el enlace`;
    
    if (sending) return;
    sending = true;

    try {
        const apiUrls = [
            `https://api.cafirexos.com/api/ytplay?text=${text}`,
            `https://api.cafirexos.com/api/ytplay?text=${text}`
        ];

        let data;

        for (const url of apiUrls) {
            try {
                const res = await fetch(url);
                data = await res.json();
                if (data.resultado && data.resultado.url) {
                    break;
                }
            } catch {}
        }

        if (!data.resultado || !data.resultado.url) {
            sending = false;
            throw `Error, inténtelo de nuevo.`;
        }

        let apiUrl;
        let mimeType;
        let fileName;

        if (command === 'play') {
            apiUrl = `https://api.cafirexos.com/api/v1/ytmp3?url=${data.resultado.url}`;
            mimeType = 'audio/mpeg';
            fileName = 'error.mp3';
        } else if (command === 'play2') {
            apiUrl = `https://api.cafirexos.com/api/v1/ytmp4?url=${data.resultado.url}`;
            mimeType = 'video/mp4';
            fileName = 'error.mp4';
        }

        let buff;

        conn.reply(m.chat, '_Descargando archivo, por favor espera..._', m)

        try {
            buff = await conn.getFile(apiUrl);
        } catch {
            sending = false;
            throw `Error, inténtelo de nuevo.`;
        }

        const dataMessage = `*Título:* ${data.resultado.title}\n\n*Publicado:* ${data.resultado.publicDate}\n\n*Canal:* ${data.resultado.channel}\n\n*URL:* ${data.resultado.url}`;
        await conn.sendMessage(m.chat, { text: dataMessage }, { quoted: m });

        if (buff) {
            await conn.sendMessage(m.chat, {[mimeType.startsWith('audio') ? 'audio' : 'video']: buff.data, mimetype: mimeType, fileName: fileName}, {quoted: m});
            sending = false;
        } else {
            sending = false;
            throw `Error, inténtelo de nuevo.`;
        }
    } catch (error) {
        sending = false;
        throw `Error, inténtelo de nuevo.`;
    }
};

handler.help = ['play', 'play2'];
handler.tags = ['descargas']
handler.command = ['play', 'play2'];

export default handler;
