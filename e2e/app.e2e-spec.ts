import { Test2a2Page } from './app.po';

describe('test2a2 App', () => {
  let page: Test2a2Page;

  beforeEach(() => {
    page = new Test2a2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
