
let timeLeft = 85;


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}


function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(timeLeft);
    
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timerInterval);
    }
}

const timerInterval = setInterval(updateTimer, 1000);


updateTimer();
