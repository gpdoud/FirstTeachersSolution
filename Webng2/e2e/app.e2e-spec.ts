import { Webng2Page } from './app.po';

describe('webng2 App', () => {
  let page: Webng2Page;

  beforeEach(() => {
    page = new Webng2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
