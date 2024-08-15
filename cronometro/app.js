const btnStartPause = document.getElementById('btn-start-pause');
const btnRestart = document.getElementById('btn-restart');
const crono = document.getElementById('crono')


let [hours, minutes, seconds] = [0, 0, 0]

let timeInterval;
let cronoStatus = 'pause';

const cronoUpdate = () => {
    seconds++

    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;


        if(minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

  

    const secondsWithFormat = format(seconds);
    const minutesWithFormat = format(minutes);
    const hoursWithFormat = format(hours);

    crono.innerText = `${hoursWithFormat}:${minutesWithFormat}:${secondsWithFormat}`

}


const format = (timeUnit) => {
    return timeUnit < 10 ? '0' + timeUnit : timeUnit;
}

btnStartPause.addEventListener('click', () => {
    if(cronoStatus === 'pause') {
        timeInterval = window.setInterval(cronoUpdate, 1000);
        btnStartPause.innerHTML = '<i class="bi bi-pause-fill" id="btn-start-pause"></i>';
        btnStartPause.classList.remove('start');
        btnStartPause.classList.add('pause');
        cronoStatus = 'start'
    } else {
        window.clearInterval(timeInterval);
        btnStartPause.innerHTML = '<i class="bi bi-play-fill" id="btn-start-pause"></i>';
        btnStartPause.classList.remove('pause');
        btnStartPause.classList.add('start');
        cronoStatus = 'pause';
    }
})


// reStart crono

btnRestart.addEventListener('click', (e) => {
    window.clearInterval(timeInterval);

    hours = 0;
    minutes = 0;
    seconds = 0;

    crono.innerText = '00:00:00';

    btnStartPause.innerHTML = '<i class="bi bi-play-fill" id="btn-start-pause"></i>';
    btnStartPause.classList.remove('pause');
    btnStartPause.classList.add('start');

    cronoStatus = 'pause';
})