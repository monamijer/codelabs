import { TestBed } from '@angular/core/testing';
import { page } from 'vitest/browser';
import { App } from './app';

class AppTester {
  readonly fixture = TestBed.createComponent(App);
  readonly title = page.getByRole('heading', { level: 1 });
}

describe('App', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should have a title', async () => {
    const tester = new AppTester();

    await expect.element(tester.title).toHaveTextContent('Ponyracer');
  });
});
