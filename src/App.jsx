import React, { useEffect, useState } from 'react';

export default function App() {
  const [cryptoData, setCryptoData] = useState({});
  const [alertTriggered, setAlertTriggered] = useState(false);
  const [newsHeadlines, setNewsHeadlines] = useState([]);

  // Fetch real-time crypto prices (XRP, ADA, BTC in AUD)
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ripple,cardano,bitcoin&vs_currencies=aud')
      .then(res => res.json())
      .then(data => setCryptoData(data))
      .catch(err => console.error('Failed to fetch crypto prices:', err));
  }, []);

  // Fetch news (sample macro news RSS feed)
  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.investing.com/rss/news_285.rss')
      .then(res => res.json())
      .then(data => {
        const headlines = data.items.slice(0, 5).map(item => item.title);
        setNewsHeadlines(headlines);
        const keywords = ['tariff', 'trump', 'ban', 'fed', 'china'];
        if (headlines.some(headline => keywords.some(keyword => headline.toLowerCase().includes(keyword)))) {
          setAlertTriggered(true);
        }
      })
      .catch(err => console.error('Failed to fetch news:', err));
  }, []);

  const formatAUD = value => value?.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' });

  const xrpPrice = cryptoData?.ripple?.aud || 0;
  const adaPrice = cryptoData?.cardano?.aud || 0;
  const btcPrice = cryptoData?.bitcoin?.aud || 0;

  const xrpHoldings = 2153.165;
  const adaHoldings = 1829.821;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📊 Nick's Market Watch</h1>
      {alertTriggered && (
        <div className="bg-red-600 text-white text-center py-2 px-4 mb-4 rounded-xl animate-pulse">
          ⚠️ Macro Alert: News triggered a watchword!
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🪙 Live Crypto Prices</h2>
          <p>XRP: {formatAUD(xrpPrice)}</p>
          <p>ADA: {formatAUD(adaPrice)}</p>
          <p>BTC: {formatAUD(btcPrice)}</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">💼 Holdings</h2>
          <p>XRP ({xrpHoldings}): {formatAUD(xrpHoldings * xrpPrice)}</p>
          <p>ADA ({adaHoldings}): {formatAUD(adaHoldings * adaPrice)}</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🧠 Buy Zone Watchlist</h2>
          <p>Meta, Nvidia, Google – Monitoring key levels...</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">📰 Macro News (Live)</h2>
          <ul className="list-disc list-inside">
            {newsHeadlines.length > 0 ? newsHeadlines.map((headline, index) => (
              <li key={index}>{headline}</li>
            )) : <li>Loading headlines...</li>}
          </ul>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🇦🇺 ASX Export Watch</h2>
          <p>Monitoring BHP, FMG, LYC for trade shifts...</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">⚠️ Alerts</h2>
          <p>Watching news feed for tariff/policy events...</p>
        </div>
      </div>
    </div>
  );
}
