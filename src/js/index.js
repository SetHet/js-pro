import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video");
const btn_play =  document.querySelector("#btn-play");
const btn_mute =  document.querySelector("#btn-mute");



const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
    ],
});

btn_play.onclick = () => player.togglePlay();
btn_mute.onclick = () => player.toggleMute();