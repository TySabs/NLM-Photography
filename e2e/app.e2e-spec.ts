import { NlmPage } from './app.po';

describe('nlm App', () => {
  let page: NlmPage;

  beforeEach(() => {
    page = new NlmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
