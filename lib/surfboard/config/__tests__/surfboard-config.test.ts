/**
 * Unit tests for Surfboard configuration constants
 * Tests the simplified proxy groups configuration (only 🚀 节点选择)
 */

import { describe, it, expect } from 'vitest';
import { SURFBOARD_PROXY_GROUPS } from '../surfboard-config';

describe('[Surfboard Config] Proxy Groups', () => {
  // These groups should NOT exist - they should be removed
  const groupsToRemove = [
    '🚀 手动切换',
    '📲 电报消息',
    '💬 Ai 平台',
    '📹 油管视频',
    '🎥 奈飞视频',
    '📺 巴哈姆特',
    '📺 哔哩哔哩',
    '🌍 国外媒体',
    '🌏 国内媒体',
    '📢 谷歌 FCM',
    'Ⓜ️ 微软服务',
    '🍎 苹果服务',
    '🎮 游戏平台',
    '🎶 网易音乐',
    '🎯 全球直连',
    '🛑 广告拦截',
    '🍃 应用净化',
    '🐟 漏网之鱼',
    '🇭🇰 香港节点',
    '🇯🇵 日本节点',
    '🇺🇲 美国节点',
    '🇸🇬 狮城节点',
    '🇨🇳 台湾节点',
    '🇰🇷 韩国节点',
    '🎥 奈飞节点',
  ];

  describe('Simplified proxy groups configuration', () => {
    it('should contain exactly ONE proxy group: 🚀 节点选择', () => {
      expect(SURFBOARD_PROXY_GROUPS.length).toBe(1);
      expect(SURFBOARD_PROXY_GROUPS[0].name).toBe('🚀 节点选择');
    });

    it('should NOT contain any unnecessary proxy groups', () => {
      const groupNames = SURFBOARD_PROXY_GROUPS.map(g => g.name);

      groupsToRemove.forEach(groupName => {
        expect(groupNames).not.toContain(groupName);
      });
    });

    it('should have 🚀 节点选择 configured correctly', () => {
      const mainGroup = SURFBOARD_PROXY_GROUPS[0];

      expect(mainGroup.name).toBe('🚀 节点选择');
      expect(mainGroup.type).toBe('select');
      expect(mainGroup.useAllProxies).toBe(true);
      expect(mainGroup.proxies).toEqual([]);
    });
  });
});
