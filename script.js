// script.js

// Function to play the confetti sound
function playConfettiSound() {
    const audio = new Audio('confetti-sound.mp3'); // Ensure this file is in the same directory or provide a correct path
    audio.play();
}

// Function to trigger confetti
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Event listener for the calculate button
document.getElementById('calculateBtn').addEventListener('click', function() {
    const breakTime = parseInt(document.getElementById('breakTime').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(breakTime) || breakTime <= 0) {
        resultDiv.innerText = language === 'he' ? "אנא הכנס מספר תקין של דקות." : "Please enter a valid number of minutes.";
        resultDiv.classList.remove('hidden');
        return;
    }

    const currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() + breakTime);

    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');

    resultDiv.innerText = language === 'he'
        ? `עליך לחזור בשעה ${hours}:${minutes}. תיהנה מהפסקה שלך!`
        : `You should return at ${hours}:${minutes}. \n Enjoy your break!`;
    resultDiv.classList.remove('hidden');

    // Trigger the confetti effect and sound
    triggerConfetti();
    playConfettiSound();
});

// Language toggle functionality
let language = 'he'; // Default language

document.getElementById('hebrewBtn').addEventListener('click', function() {
    language = 'he';
    document.documentElement.lang = 'he';
    document.getElementById('title').innerText = 'מחשבון זמן הפסקה';
    document.getElementById('description').innerText = 'הזן את משך ההפסקה שלך (בדקות):';
    document.getElementById('breakTime').placeholder = 'הכנס דקות';
    document.getElementById('calculateBtn').innerText = 'חשב';
    document.body.style.direction = 'rtl';
});

document.getElementById('englishBtn').addEventListener('click', function() {
    language = 'en';
    document.documentElement.lang = 'en';
    document.getElementById('title').innerText = 'Break Time Calculator';
    document.getElementById('description').innerText = 'Enter the duration of your break (in minutes):';
    document.getElementById('breakTime').placeholder = 'Enter minutes';
    document.getElementById('calculateBtn').innerText = 'Calculate';
    document.body.style.direction = 'ltr';
});