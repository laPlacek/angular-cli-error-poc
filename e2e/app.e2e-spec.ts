import { DiggdocPage } from './app.po';

describe('diggdoc App', function() {
  let page: DiggdocPage;

  beforeEach(() => {
    page = new DiggdocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
