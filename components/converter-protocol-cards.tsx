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

export const ProtocolCards = React.memo(() => (
  <div className="grid grid-cols-2 gap-3 text-sm">
    {PROTOCOL_CARDS.map((protocol) => (
      <div key={protocol.name} className="flex items-center gap-2 p-2 rounded-lg bg-muted min-w-0">
        <span className="font-mono text-xs bg-secondary px-2 py-1 rounded truncate max-w-full">
          {protocol.name}
        </span>
      </div>
    ))}
  </div>
));

ProtocolCards.displayName = 'ProtocolCards';
