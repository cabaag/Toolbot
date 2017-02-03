import { ToolbotPage } from './app.po';

describe('toolbot App', function() {
  let page: ToolbotPage;

  beforeEach(() => {
    page = new ToolbotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
