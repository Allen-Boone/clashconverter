// ============================================================================
// Strongly Typed ProxyNode Definitions
// ============================================================================

// Re-export all proxy node types from the dedicated types file
export type {
  ProxyType,
  SSProxyNode,
  SSRProxyNode,
  VMessProxyNode,
  VLESSProxyNode,
  TrojanProxyNode,
  HysteriaProxyNode,
  Hysteria2ProxyNode,
  HTTPProxyNode,
  SOCKS5ProxyNode,
  LegacyProxyNode,
  ProxyNode,
} from './types/proxy-nodes';

// Re-export validators (used in clash parser)
export { safeValidateProxyNode } from './types/validators';

// ============================================================================
// Helper Types
// ============================================================================

/**
 * Parsed proxy result with name and config
 */
export interface ParsedProxy {
  name: string;
  config: ProxyNode;
}

