import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 5000,
    hookTimeout: 5000,
    browser: {
	  enabled: true,
	  name: 'chromium',
	  provider: 'playwright',
      screenshotFailures: false
    },
    expect: {
      poll: {
        interval: 5
      }
    }
  }
});
