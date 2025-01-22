import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [convertedValue, setConvertedValue] = useState({ USD: '', SEK: '', GBP: '' });
  const [currencyRates, setCurrencyRates] = useState(null);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        const data = await response.json();
        setCurrencyRates(data);
      } catch (error) {
        console.error('Virhe valuuttakurssien haussa:', error);
      }
    };
    fetchCurrencyRates();
  }, []);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const convertCurrency = () => {
    if (!amount || isNaN(amount) || !currencyRates) {
      alert('Syötä kelvollinen määrä ja varmista, että valuuttakurssit on ladattu.');
      return;
    }

    setConvertedValue({
      USD: (amount * currencyRates.USD).toFixed(2),
      SEK: (amount * currencyRates.SEK).toFixed(2),
      GBP: (amount * currencyRates.GBP).toFixed(2),
    });
  };

  if (!currencyRates) {
    return <div>Ladataan valuuttakursseja...</div>;
  }

  return (
    <div className="converter" style={{ backgroundColor: '#d3f9d8', color: '#000' }}>
      <h2>Valuuttamuunnin</h2>
      <input
        type="number"
        value={amount}
        onChange={handleChange}
        placeholder="Syötä määrä"
        style={{ marginBottom: '10px', padding: '5px' }}
      />
      <button onClick={convertCurrency} style={{ backgroundColor: '#ff0000', color: '#fff', padding: '5px 10px' }}>
        Muunna
      </button>

      <div className="results" style={{ marginTop: '20px' }}>
        {convertedValue.USD && <p>Dollari: {convertedValue.USD} USD</p>}
        {convertedValue.SEK && <p>Kruunu: {convertedValue.SEK} SEK</p>}
        {convertedValue.GBP && <p>Punta: {convertedValue.GBP} GBP</p>}
      </div>
    </div>
  );
};

export default CurrencyConverter;
