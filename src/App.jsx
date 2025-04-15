import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📊 Nick's Market Watch</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">📈 Live Crypto & Stock Tickers</h2>
          <p>Live pricing for XRP, ADA, BTC, META, NVDA, etc. coming soon...</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🪙 Holdings</h2>
          <p>XRP: 2,153.165 (~$6,945.54 AUD)</p>
          <p>ADA: 1,829.821 (~$1,843.56 AUD)</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🧠 Buy Zone Watchlist</h2>
          <p>Meta, Google, Nvidia — awaiting signal</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">📰 News & Macro Alerts</h2>
          <p>Live macro feed will be displayed here</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🇦🇺 ASX Export Watch</h2>
          <p>BHP, FMG, LYC — trade flow impact coming soon</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">⚠️ Alerts & Triggers</h2>
          <p>Tariff news, crypto pumps, macro moves</p>
        </div>
      </div>
    </div>
  )
}
