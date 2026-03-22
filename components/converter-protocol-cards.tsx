import React from 'react';

const PROTOCOL_CARDS = [
  { name: 'Shadowsocks' },
  { name: 'ShadowsocksR' },
  { name: 'Vmess' },
  { name: 'VLESS' },
  { name: 'Trojan' },
  { name: 'Hysteria' },
  { name: 'Hysteria2' },
  { name: 'HTTP' },
  { name: 'SOCKS5' },
] as const;

// Simplified lavender-based gradients for protocol cards
const CARD_GRADIENTS = [
  'from-lavender-400 to-lavender-600',
  'from-pink-400 to-pink-600',
  'from-blue-400 to-blue-600',
  'from-emerald-400 to-emerald-600',
  'from-amber-400 to-amber-600',
  'from-purple-400 to-purple-600',
  'from-red-400 to-red-600',
  'from-teal-400 to-teal-600',
  'from-orange-400 to-orange-600',
];

export const ProtocolCards = React.memo(() => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
    {PROTOCOL_CARDS.map((protocol, index) => (
      <div
        key={protocol.name}
        className="group relative overflow-hidden rounded-[20px] p-4 bg-lavender-50 border-white/60 neo-card transition-all duration-300 hover:-translate-y-1"
      >
        {/* Protocol badge */}
        <div className="relative z-10">
          <div className={`inline-flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br ${CARD_GRADIENTS[index % CARD_GRADIENTS.length]} neo-button mb-2`}>
            <span className="text-white text-xs font-black">
              {protocol.name.charAt(0)}
            </span>
          </div>
          <span className="text-xs font-bold text-slate-700" style={{ fontFamily: 'Nunito, sans-serif' }}>
            {protocol.name}
          </span>
        </div>
      </div>
    ))}
  </div>
));

ProtocolCards.displayName = 'ProtocolCards';
