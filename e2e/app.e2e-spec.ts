import { BankOfPalletsClientAdminPage } from './app.po';

describe('bank-of-pallets-client-admin App', () => {
  let page: BankOfPalletsClientAdminPage;

  beforeEach(() => {
    page = new BankOfPalletsClientAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
