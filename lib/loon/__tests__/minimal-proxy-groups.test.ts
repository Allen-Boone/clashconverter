/**
 * TDD Test: Verify Loon [Proxy Group] contains only 🚀 节点选择
 * All other groups should be removed to keep the configuration minimal
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { FormatFactory } from '@/lib/core/factory';
import { LOON_PROXY_GROUPS } from '@/lib/loon/config/loon-config';

// Import registry to auto-initialize
import '@/lib/core/registry';

describe('[TDD] Loon Minimal Proxy Groups', () => {
  // These groups should NOT exist - they should be removed
  const groupsToRemove = [
    '🚀 手动切换',
    '📲 电报消息',
    '💬 Ai平台',
    '📹 油管视频',
    '🎥 奈飞视频',
    '📺 巴哈姆特',
    '📺 哔哩哔哩',
    '🌍 国外媒体',
    '🌏 国内媒体',
    '📢 谷歌FCM',
    'Ⓜ️ 微软Bing',
    'Ⓜ️ 微软云盘',
    'Ⓜ️ 微软服务',
    '🍎 苹果服务',
    '🎮 游戏平台',
    '🎶 网易音乐',
    '🎯 全球直连',
    '🛑 广告拦截',
    '🍃 应用净化',
    '🐟 漏网之鱼',
  ];

  describe('LOON_PROXY_GROUPS configuration', () => {
    it('should contain exactly ONE proxy group: 🚀 节点选择', () => {
      expect(LOON_PROXY_GROUPS.length).toBe(1);
      expect(LOON_PROXY_GROUPS[0].name).toBe('🚀 节点选择');
    });

    it('should NOT contain any unnecessary proxy groups', () => {
      const groupNames = LOON_PROXY_GROUPS.map(g => g.name);

      groupsToRemove.forEach(groupName => {
        expect(groupNames).not.toContain(groupName);
      });
    });

    it('should have 🚀 节点选择 configured correctly', () => {
      const mainGroup = LOON_PROXY_GROUPS[0];

      expect(mainGroup.name).toBe('🚀 节点选择');
      expect(mainGroup.type).toBe('select');
      expect(mainGroup.useAllProxies).toBe(true);
      expect(mainGroup.proxies).toEqual([]);
      expect(mainGroup.img).toBeUndefined();
    });
  });

  describe('Generated Loon configuration', () => {
    let testInput: string;
    let generatedOutput: string;

    beforeEach(() => {
      // Sample input with multiple proxy types
      testInput = [
        'ss://YWVzLTI1Ni1nY206ZzVNZUQ2RnQzQ1dsSklkQDE5OC41Ny4yNy4yMTg6NTAwNA==#HKNode1',
        'ss://YWVzLTI1Ni1nY206ZzVNZUQ2RnQzQ1dsSklkQDE5OC41Ny4yNy4yMTg6NTAwNQ==#JPNode1',
        'ss://YWVzLTI1Ni1nY206ZzVNZUQ2RnQzQ1dsSklkQDE5OC41Ny4yNy4yMTg6NTAwNg==#USNode1',
        'vmess://eyJhZGQiOiIxNTQuMjMuMTkwLjE2MiIsInBzIjoiVGVzdFByb3h5MiIsInBvcnQiOjQ0MywiaWQiOiJiOTk4NDY3NC1mNzcxLTRlNjctYTE5OC1jN2U2MDcyMGJhMmMifQ==',
        'trojan://password@server.com:443#TrojanNode1',
      ].join('\n');

      const parser = FormatFactory.createParser('txt');
      const parseResult = parser.parse(testInput);
      const generator = FormatFactory.createGenerator('loon');
      generatedOutput = generator.generate(parseResult.proxies);
    });

    it('should contain only ONE [Proxy Group] entry', () => {
      const matches = generatedOutput.match(/\[Proxy Group\]/g);
      // [Proxy Group] header should appear exactly once
      expect(matches ? matches.length : 0).toBe(1);
    });

    it('should contain only 🚀 节点选择 in proxy groups', () => {
      // Extract the [Proxy Group] section
      const groupSectionMatch = generatedOutput.match(/\[Proxy Group\]([\s\S]*?)\[/);
      expect(groupSectionMatch).toBeTruthy();

      if (groupSectionMatch) {
        const groupLines = groupSectionMatch[1].trim().split('\n');

        // Should have exactly one line for the group definition
        expect(groupLines.length).toBe(1);

        // That line should be 🚀 节点选择
        expect(groupLines[0]).toContain('🚀 节点选择');

        // Should not contain any other group names
        groupsToRemove.forEach(groupName => {
          expect(groupLines[0]).not.toContain(groupName);
        });
      }
    });

    it('should contain all actual proxy names in 🚀 节点选择', () => {
      expect(generatedOutput).toContain('HKNode1');
      expect(generatedOutput).toContain('JPNode1');
      expect(generatedOutput).toContain('USNode1');
      expect(generatedOutput).toContain('TestProxy2');
      expect(generatedOutput).toContain('TrojanNode1');
    });

    it('should have valid Loon INI structure', () => {
      expect(generatedOutput).toContain('[General]');
      expect(generatedOutput).toContain('[Proxy]');
      expect(generatedOutput).toContain('[Proxy Group]');
      expect(generatedOutput).toContain('[Rule]');
    });

    it('should not contain any unnecessary groups in output', () => {
      groupsToRemove.forEach(groupName => {
        expect(generatedOutput).not.toContain(groupName);
      });
    });
  });
});
