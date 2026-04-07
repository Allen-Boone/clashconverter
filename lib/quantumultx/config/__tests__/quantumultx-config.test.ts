/**
 * Unit tests for QuantumultX configuration constants
 * Tests the simplified proxy groups configuration (only 🚀 节点选择)
 */

import { describe, it, expect } from 'vitest';
import { QUANX_PROXY_GROUPS } from '../quantumultx-config';

describe('[QuantumultX Config] Proxy Groups', () => {
  describe('Simplified proxy groups configuration', () => {
    it('should only contain one proxy group: 🚀 节点选择', () => {
      // Should only have one proxy group
      expect(QUANX_PROXY_GROUPS.length).toBe(1);
    });

    it('should have 🚀 节点选择 as the first and only proxy group', () => {
      const firstGroup = QUANX_PROXY_GROUPS[0];

      expect(firstGroup.name).toBe('🚀 节点选择');
      expect(firstGroup.type).toBe('static');
    });

    it('should configure 🚀 节点选择 to use all proxies', () => {
      const firstGroup = QUANX_PROXY_GROUPS[0];

      // Should use all proxies (useAllProxies: true)
      expect(firstGroup.useAllProxies).toBe(true);

      // Should have empty proxies array (will be filled dynamically)
      expect(firstGroup.proxies).toEqual([]);
    });
  });
});
