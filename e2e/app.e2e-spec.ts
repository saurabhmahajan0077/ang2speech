import { SpeechRecogPage } from './app.po';

describe('speech-recog App', () => {
  let page: SpeechRecogPage;

  beforeEach(() => {
    page = new SpeechRecogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
