
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onPlay = function(data) {
    // data is an object containing properties specific to that event
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
};

// player.on('timeupdate', onPlay);
player.on('timeupdate', throttle(onPlay, 1000));

const savedData = localStorage.getItem("videoplayer-current-time");
const parsedData = JSON.parse(savedData);


player.setCurrentTime(parsedData.seconds).then(function(seconds) { 
});

