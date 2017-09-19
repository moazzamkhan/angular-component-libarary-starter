import { MyComponentLibraryPage } from './app.po';

describe('my-component-library App', () => {
  let page: MyComponentLibraryPage;

  beforeEach(() => {
    page = new MyComponentLibraryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
