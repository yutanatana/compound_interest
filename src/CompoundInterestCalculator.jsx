import React, { useState } from 'react';
import './CompoundInterestCalculator.css';  // CSSファイルをインポート

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [compounds, setCompounds] = useState('1');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculateCompoundInterest = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseInt(compounds, 10);

    if (isNaN(P) || isNaN(r) || isNaN(t) || isNaN(n)) {
      setError('input is not correct');
      setResult(null);
      return;
    }

    const amount = P * Math.pow(1 + r / n, n * t);
    setResult(amount.toFixed(2));
    setError('');
  };

  return (
    <div className="container">
      <h1>Compound Interest Calculator</h1>
      <div>
        <label>Initial Investment ($)</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label>Estimated Interest Rate (%)</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div>
        <label>Investment Period (years)</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div>
        <label>Compound Interest Frequency</label>
        <select
          value={compounds}
          onChange={(e) => setCompounds(e.target.value)}
        >
          <option value="1">Annually</option>
          <option value="4">Quarterly</option>
          <option value="12">Monthly</option>
          <option value="365">Daily</option>
        </select>
      </div>
      <button onClick={calculateCompoundInterest}>Calculate</button>

      {error && <div className="error">{error}</div>}
      {result && (
        <div className="result">
          Amount: ${result}
        </div>
      )}
    </div>
  );
};

export default CompoundInterestCalculator;
