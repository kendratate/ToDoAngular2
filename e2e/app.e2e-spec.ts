import { ToDoAngular2Page } from './app.po';

describe('to-do-angular2 App', function() {
  let page: ToDoAngular2Page;

  beforeEach(() => {
    page = new ToDoAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
