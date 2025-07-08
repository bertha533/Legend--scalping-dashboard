
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function simulateSignal() {
  const signal = Math.random() > 0.5 ? "BUY" : "SELL";
  const confidence = Math.floor(Math.random() * 50 + 50);
  const sl = (Math.random() * 0.005).toFixed(4);
  const tp = (Math.random() * 0.010).toFixed(4);

  document.getElementById("signal").innerText = signal;
  document.getElementById("confidence").innerText = confidence + "%";
  document.getElementById("sl").innerText = sl;
  document.getElementById("tp").innerText = tp;
}

setInterval(simulateSignal, 3000);  // Update every 3s
simulateSignal();
