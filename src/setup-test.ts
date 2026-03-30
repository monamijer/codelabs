import { afterEach, beforeEach, expect, vi } from 'vitest';
import { Locator, locators } from 'vitest/browser';

beforeEach(() => {
  vi.spyOn(console, 'error');
});

afterEach(() => {
  // check if there are no console errors
  expect(console.error, 'There should be no console errors (see src/setup-test.ts)').not.toHaveBeenCalled();
});

locators.extend({
  getByCss(selector: string) {
    return selector;
  }
});

declare module 'vitest/browser' {
  interface LocatorSelectors {
    getByCss(selector: string): Locator;
  }
}
