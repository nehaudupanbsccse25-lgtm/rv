// Countdown Timer for the Fest

// Set the event date (example: March 20, 2025)
const eventDate = new Date("March 20, 2025 10:00:00").getTime();

const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  if (timeLeft <= 0) {
    countdown.innerHTML = "🎉 The Fest Has Begun!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();
