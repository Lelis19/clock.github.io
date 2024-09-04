function updateClock() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const now = new Date();
    
    const options = { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const brasiliaTime = now.toLocaleTimeString('pt-BR', options);

    const [hours, minutes, seconds] = brasiliaTime.split(':');
    
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

setInterval(updateClock, 1000);
updateClock();

