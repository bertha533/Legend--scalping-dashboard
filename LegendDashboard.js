import React, { useEffect, useState } from "react";
import "./LegendDashboard.css";

const pairs = ["EUR/USD", "XAU/USD"];

const generateSignal = (pair) => {
  const direction = Math.random() > 0.5 ? "Buy" : "Sell";
  const entry = (direction === "Buy"
    ? Math.random() * (1.1000 - 1.0800) + 1.0800
    : Math.random() * (1.2400 - 1.2200) + 1.2200
  ).toFixed(4);
  const stopLoss = (direction === "Buy"
    ? parseFloat(entry) - 0.0020
    : parseFloat(entry) + 0.0020
  ).toFixed(4);
  const takeProfit = (direction === "Buy"
    ? parseFloat(entry) + 0.0040
    : parseFloat(entry) - 0.0040
  ).toFixed(4);
  const reason = direction === "Buy"
    ? "Order block support bounce"
    : "Liquidity sweep at resistance";
  return {
    pair,
    direction,
    entry,
    stopLoss,
    takeProfit,
    reason,
  };
};

export default function LegendDashboard() {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    setSignals(pairs.map(generateSignal));
    const interval = setInterval(() => setSignals(pairs.map(generateSignal)), 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      {signals.map((s, i) => (
        <div key={i} className="signal-card">
          <h2>{s.pair}</h2>
          <p><strong>Action:</strong> {s.direction}</p>
          <p><strong>Entry:</strong> {s.entry}</p>
          <p><strong>Stop Loss:</strong> {s.stopLoss}</p>
          <p><strong>Take Profit:</strong> {s.takeProfit}</p>
          <p className="reason">{s.reason}</p>
        </div>
      ))}
    </div>
  );
}