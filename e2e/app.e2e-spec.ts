import { InstapollWebPage } from './app.po';

describe('instapoll-web App', () => {
  let page: InstapollWebPage;

  beforeEach(() => {
    page = new InstapollWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
