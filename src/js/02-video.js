import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function(data) {
  localStorage.setItem("STORAGE_KEY", data.seconds);
};


const savedData = localStorage.getItem("STORAGE_KEY");
const parsedData = JSON.parse(savedData);
// console.log('Data', parsedData);


player.setCurrentTime(parsedData).then(function(seconds) {
  
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

player.on('timeupdate', throttle(onPlay, 1000));



 