// Countdown Timer
const countdown = document.getElementById("countdown");
if (countdown) {
  const eventDate = new Date("2025-12-15T00:00:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((distance / (1000 * 60)) % 60);
    const secs = Math.floor((distance / 1000) % 60);

    countdown.innerHTML = ${days}d : ${hours}h : ${mins}m : ${secs}s;
  }, 1000);
}

// Registration Form Validation
const form = document.getElementById("registerForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const event = document.getElementById("event").value;

    if (!name || !email || !phone || !event) {
      document.getElementById("message").textContent = "Please fill all fields.";
      document.getElementById("message").style.color = "red";
    } else {
      document.getElementById("message").textContent = "Registration Successful!";
      document.getElementById("message").style.color = "green";
      form.reset();
    }
  });
}