import React, { useState } from 'react';

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [compounds, setCompounds] = useState('1');
  const [result, setResult] = useState(null);

  const calculateCompoundInterest = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseInt(compounds, 10);

    if (isNaN(P) || isNaN(r) || isNaN(t) || isNaN(n)) {
      setResult('入力が正しくありません。');
      return;
    }

    const amount = P * Math.pow(1 + r / n, n * t);
    setResult(amount.toFixed(2));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
      <h1 className="text-3xl font-bold mb-4">compound interest calculator</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block mb-2 font-semibold">principal ($)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">annual interest rate (%)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">investment period (year)</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Compound interest calculation frequency</label>
          <select
            value={compounds}
            onChange={(e) => setCompounds(e.target.value)}
            className="p-2 border rounded w-full"
          >
            <option value="1">year</option>
            <option value="4">quarter</option>
            <option value="12">month</option>
            <option value="365">day</option>
          </select>
        </div>
        <button
          onClick={calculateCompoundInterest}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
        >
          calculate
        </button>
        {result && (
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h2 className="text-lg font-bold">amount: {result} $ </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;