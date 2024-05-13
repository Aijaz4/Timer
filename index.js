let totalSeconds = 0;
let timerInterval;

function startTimer() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    totalSeconds = hours * 3600 + minutes * 60 + seconds;
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
    
}

function updateTimer() {
    if (totalSeconds > 0) {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        document.querySelector('.hou').textContent = hours.toString().padStart(2, '0');
        document.querySelector('.min').textContent = minutes.toString().padStart(2, '0');
        document.querySelector('.sec').textContent = seconds.toString().padStart(2, '0');

        totalSeconds--;
    } else {
        clearInterval(timerInterval);
        alert('Time is up!');
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.querySelector('.hou').textContent = '00';
    document.querySelector('.min').textContent = '00';
    document.querySelector('.sec').textContent = '00';
}