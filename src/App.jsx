// FundingLayer.xyz - Enhanced Futuristic UI (React + Tailwind CSS)

import React from 'react';

export default function FundingLayer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] to-[#161623] text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-center px-6 py-28 bg-[radial-gradient(circle_at_top_left,_#1c1c3c,_#000)] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/grid.svg')] bg-cover z-0"></div>
        <div className="relative z-10">
          <img src="/logo.png" alt="Funding Layer Logo" className="mx-auto mb-6 w-24 h-24 animate-pulse drop-shadow-2xl" />
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white leading-[1.4] md:leading-[1.5]">
            Funding Layer
          </h1>
          <p className="text-xl md:text-2xl mt-6 mx-auto opacity-70 max-w-2xl leading-snug">
            Back the Talent. Not Just the App.
          </p>
          <p className="text-md md:text-lg max-w-2xl mx-auto mt-4 opacity-60 leading-relaxed">
            A decentralized protocol where builders raise capital and backers earn from future success.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a href="https://t.me/FundingLayer" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-tr from-white to-gray-300 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform">
              Join Telegram
            </a>
            <a href="https://x.com/FundingLayer" target="_blank" rel="noopener noreferrer" className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Follow on X
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-24 bg-[#121220] text-center">
        <h2 className="text-4xl font-bold mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: 'Fund the Ecosystem',
              text: 'FDLY will bootstrap an ecosystem where top builders are supported via decentralized funding loops.',
            },
            {
              title: 'Launch Builder Tokens',
              text: 'Once live, $FDLY holders can help launch builder tokens and earn early access + governance power.',
            },
            {
              title: 'Revenue Sharing',
              text: 'Future dApps by builders send earnings to splits contracts — rewarding backers in $SOL or $FDLY.',
            },
          ].map((step, i) => (
            <div key={i} className="bg-[#1e1e2f] p-6 rounded-2xl border border-[#2f2f44] shadow-xl hover:scale-[1.02] transition-transform">
              <h3 className="text-xl font-semibold mb-3 text-white/90">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="px-6 py-24 text-center bg-[#0e0e1a]">
        <h2 className="text-4xl font-bold mb-12">Roadmap</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          {[
            {
              title: 'Phase 1: Website + Community',
              text: 'Launch FundingLayer.xyz. Start onboarding builders and gathering community momentum.'
            },
            {
              title: 'Phase 2: Token Launch',
              text: 'Launch $FDLY on Solana with transparent supply, zero team minting, and community LP bootstrap.'
            },
            {
              title: 'Phase 3: Builder Applications',
              text: 'Screen builders via on-chain/off-chain metrics, publish shortlists for DAO vote & token allocations.'
            },
            {
              title: 'Phase 4: Revenue Sharing',
              text: 'Deploy revenue contracts to distribute builder yield and retroactive grants to early $FDLY holders.'
            },
            {
              title: 'Phase 5: Governance + Exchange',
              text: 'Launch DAO and move $FDLY to Jupiter/Raydium with staking pools and token analytics.'
            },
          ].map((step, i) => (
            <div key={i} className="bg-[#1b1b2a] p-5 rounded-xl border border-[#2b2b3a]">
              <h3 className="text-xl font-semibold mb-2 text-white/90">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Builder Application */}
      <section className="px-6 py-24 text-center bg-[#15151f]">
        <h2 className="text-3xl font-bold mb-4">Are You a Builder?</h2>
        <p className="max-w-xl mx-auto mb-6 text-white/60">
          We're looking for serious creators and devs to join the Funding Layer experiment. Apply now and get early support from the ecosystem.
        </p>
        <a href="https://forms.gle/3BkYoqDQze2mYVe57" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold transition shadow-md">
          Submit Builder Profile
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-8 text-gray-500 bg-[#0a0a12]">
        &copy; 2025 Funding Layer. All rights reserved. Built on Solana. <br />
        Not financial advice. This is an experimental decentralized protocol.
      </footer>
    </div>
  );
}
