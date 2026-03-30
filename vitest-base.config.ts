import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 5000,
    hookTimeout: 5000,
    browser: {
      screenshotFailures: false
    },
    expect: {
      poll: {
        interval: 5
      }
    }
  }
});
