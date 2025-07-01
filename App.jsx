
import React from 'react';

export default function FundingLayer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#13131a] to-[#1e1e2e] text-white font-sans overflow-x-hidden">
      <section className="text-center px-6 py-24 relative">
        <img src="/logo.png" alt="Funding Layer Logo" className="mx-auto mb-6 w-20 h-20" />
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Funding Layer</h1>
        <p className="text-2xl md:text-3xl mb-6 opacity-80">
          Back Builders. Not Just Apps.
        </p>
        <p className="text-md md:text-lg max-w-3xl mx-auto mb-10 opacity-60">
          A decentralized funding loop where $FDLY holders earn from the talent they back. Join the builder capital revolution.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition">
            Buy $FDLY on Pump.fun
          </a>
          <a href="https://t.me/FundingLayer" target="_blank" rel="noopener noreferrer" className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">
            Join Telegram
          </a>
          <a href="https://x.com/FundingLayer" target="_blank" rel="noopener noreferrer" className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">
            Follow on X
          </a>
        </div>
      </section>
    </div>
  );
}
