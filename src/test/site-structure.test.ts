import { describe, expect, it } from 'vitest';
import { FIELD_MAP, FIELDS } from '@/config/fields';
import { STANDARD_TOPICS } from '@/config/content-registry';
import {
  APP_PATHS,
  DISCOVERY_NAV_ITEMS,
  FOOTER_NAV_ITEMS,
  PRIMARY_NAV_ITEMS,
  SITE_DESTINATIONS,
} from '@/config/site-navigation';

describe('site structure', () => {
  const registeredPaths = new Set(Object.values(APP_PATHS));

  it('keeps every navigation surface on a registered application path', () => {
    for (const item of [...PRIMARY_NAV_ITEMS, ...FOOTER_NAV_ITEMS, ...DISCOVERY_NAV_ITEMS]) {
      expect(registeredPaths.has(item.path)).toBe(true);
    }
  });

  it('keeps canonical destination paths unique', () => {
    const paths = Object.values(SITE_DESTINATIONS).map((destination) => destination.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it('keeps field slugs unique', () => {
    const slugs = FIELDS.map((field) => field.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('derives every standard topic into exactly one declared field', () => {
    const topicMembership = new Map<string, string[]>();

    for (const field of FIELDS) {
      if (field.slug === 'all') continue;
      for (const topic of field.topics) {
        const owners = topicMembership.get(topic) ?? [];
        owners.push(field.slug);
        topicMembership.set(topic, owners);
      }
    }

    for (const topic of STANDARD_TOPICS) {
      expect(FIELD_MAP[topic.field], `Missing field definition for ${topic.field}`).toBeDefined();
      expect(topicMembership.get(topic.slug), `Bad field ownership for ${topic.slug}`).toEqual([topic.field]);
    }
  });
});
