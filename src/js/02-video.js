import throttle from "lodash.throttle";
import Player from '@vimeo/player';

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    
player.on('timeupdate', throttle(getCurrentTime, 500));
 function getCurrentTime (data) {
localStorage.setItem('videoplayer-current-time', data.seconds);
};

const currentTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(currentTime).then(function (seconds) {
    console.log(seconds);
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:           
            break;
    }
});