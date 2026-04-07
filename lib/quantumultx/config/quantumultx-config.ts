/**
 * QuantumultX configuration constants
 * Contains General section, Policy types, and Rules for QuantumultX format
 */

// General section configuration for QuantumultX
export const QUANX_GENERAL = [
  'excluded_routes=192.168.0.0/16, 172.16.0.0/12, 100.64.0.0/10, 10.0.0.0/8',
  'geo_location_checker=http://ip-api.com/json/?lang=zh-CN',
  'network_check_url=http://www.baidu.com/',
];

// DNS section configuration for QuantumultX
export const QUANX_DNS = [
  'server=119.29.29.29',
  'server=223.5.5.5',
  'server=1.1.1.1',
  'server=8.8.8.8',
];

// Remote sections (empty - user can add custom remotes)
export const QUANX_SERVER_REMOTE = '';
export const QUANX_FILTER_REMOTE = '';
export const QUANX_REWRITE_REMOTE = '';

// Local rule types supported by QuantumultX
export const QUANX_RULE_TYPES = [
  'DOMAIN',
  'DOMAIN-SUFFIX',
  'DOMAIN-KEYWORD',
  'IP-CIDR',
  'SRC-IP-CIDR',
  'GEOIP',
  'MATCH',
  'FINAL',
  'USER-AGENT',
  'HOST',
  'HOST-SUFFIX',
  'HOST-KEYWORD',
];

// Default rules for QuantumultX
export const QUANX_RULES = [
  'GEOIP,CN,🎯 全球直连',
  'FINAL,🐟 漏网之鱼',
];

// Remote rules URLs (using ACL4SSR rulesets)
export const QUANX_REMOTE_RULES = [
  'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyGFWlist.list,🚀 节点选择'
];

// MITM configuration (disabled by default)
export const QUANX_MITM: string[] = [];

// Rewrite section (empty - user can add custom rewrites)
export const QUANX_REWRITE_LOCAL: string[] = [];

// Host section (empty - user can add custom hosts)
export const QUANX_HOST_LOCAL: string[] = [];

// Script section (empty - user can add custom scripts)
export const QUANX_SCRIPT: string[] = [];

// Policy types for QuantumultX
export type QuanxPolicyType = 'static' | 'url-latency-benchmark' | 'available' | 'round-robin';

// Proxy group configuration interface
export interface QuanxProxyGroupConfig {
  name: string;
  type: QuanxPolicyType;
  url?: string;
  interval?: number;
  tolerance?: number;
  proxies: string[];
  useAllProxies?: boolean;
  img?: string; // img-url attribute
}

// Minimal proxy groups for QuantumultX - only 🚀 节点选择
export const QUANX_PROXY_GROUPS: QuanxProxyGroupConfig[] = [
  {
    name: '🚀 节点选择',
    type: 'static',
    proxies: [],
    useAllProxies: true,
  },
];
