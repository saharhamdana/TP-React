import React, { useState } from 'react';

export default function MiniCalculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    // Vérifier si les valeurs sont des nombres
    if (isNaN(numA) || isNaN(numB)) {
      setError("Erreur : veuillez entrer des nombres valides !");
      setResult(null);
      return;
    }

    setError('');
    setResult(numA + numB); // exemple : addition
  };

  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>Mini Calculatrice</h3>
      <input
        type="text"
        placeholder="Entrez a"
        value={a}
        onChange={(e) => setA(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Entrez b"
        value={b}
        onChange={(e) => setB(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleCalculate}>Calculer</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && <p>Résultat : {result}</p>}
    </div>
  );
}
