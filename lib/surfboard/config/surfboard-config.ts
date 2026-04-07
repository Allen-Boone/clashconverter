/**
 * Surfboard configuration constants
 * Contains General section, Proxy Groups, and Rules for Surfboard format
 *
 * Surfboard uses Surge-like format with surge_ver = -3 (special identifier for Surfboard)
 * Reference: subconverter implementation
 */

// General section configuration for Surfboard
export const SURFBOARD_GENERAL = [
  'loglevel = notify',
  'interface = 127.0.0.1',
  'skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local',
  'ipv6 = false',
  'dns-server = system, 223.5.5.5, 1.1.1.1, 8.8.8.8',
  'exclude-simple-hostnames = true',
  'enhanced-mode-by-rule = true',
];

// Empty remote sections (user can add custom remotes)
export const SURFBOARD_PROXY_REMOTE = '';
export const SURFBOARD_RULE_REMOTE = '';

// Local rule types supported by Surfboard
export const SURFBOARD_RULE_TYPES = [
  'DOMAIN',
  'DOMAIN-SUFFIX',
  'DOMAIN-KEYWORD',
  'IP-CIDR',
  'SRC-IP-CIDR',
  'GEOIP',
  'MATCH',
  'FINAL',
  'IP-CIDR6',
  'PROCESS-NAME',
  'IN-PORT',
  'DEST-PORT',
  'SRC-IP',
];

// Default rules for Surfboard
export const SURFBOARD_RULES = [
  'GEOIP,CN,🎯 全球直连',
  'FINAL,🐟 漏网之鱼',
];

// Remote rules URLs (using ACL4SSR rulesets)
export const SURFBOARD_REMOTE_RULES = [
  'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyGFWlist.list,🚀 节点选择'
];

// MITM configuration (disabled by default)
export const SURFBOARD_MITM: string[] = [];

// URL Rewrite section (empty - user can add custom rewrites)
export const SURFBOARD_URL_REWRITE: string[] = [];

// Header Rewrite section (empty - user can add custom rewrites)
export const SURFBOARD_HEADER_REWRITE: string[] = [];

// Script section (empty - user can add custom scripts)
export const SURFBOARD_SCRIPT: string[] = [];

// Host section (empty - user can add custom hosts)
export const SURFBOARD_HOST: string[] = [];

// Policy types for Surfboard (Surge-compatible)
export type SurfboardPolicyType = 'select' | 'url-test' | 'fallback' | 'load-balance';

// Proxy group configuration interface
export interface SurfboardProxyGroupConfig {
  name: string;
  type: SurfboardPolicyType;
  url?: string;
  interval?: number;
  tolerance?: number;
  proxies: string[];
  useAllProxies?: boolean;
}

// Minimal proxy groups - only 🚀 节点选择
export const SURFBOARD_PROXY_GROUPS: SurfboardProxyGroupConfig[] = [
  {
    name: '🚀 节点选择',
    type: 'select',
    proxies: [],
    useAllProxies: true,
  },
];
