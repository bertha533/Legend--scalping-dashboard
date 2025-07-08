
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

let history = [];

function simulateSignal() {
  const signal = Math.random() > 0.5 ? "BUY" : "SELL";
  const confidence = Math.floor(Math.random() * 50 + 50);
  const sl = (Math.random() * 0.005).toFixed(4);
  const tp = (Math.random() * 0.010).toFixed(4);

  document.getElementById("signal").innerText = signal;
  document.getElementById("confidence").innerText = confidence + "%";
  document.getElementById("sl").innerText = sl;
  document.getElementById("tp").innerText = tp;

  const entry = `${signal} | Conf: ${confidence}% | SL: ${sl} | TP: ${tp}`;
  history.unshift(entry);
  if (history.length > 5) history.pop(); // keep only last 5 signals

  const historyList = document.getElementById("history");
  historyList.innerHTML = "";
  history.forEach(h => {
    const li = document.createElement("li");
    li.textContent = h;
    historyList.appendChild(li);
  });
}

setInterval(simulateSignal, 3000);
simulateSignal();
