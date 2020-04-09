import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

const loginPage = {
  url:            'app/#/login/',
  usernameInput:  $('#username'),
  passwordInput:  $('#password'),
  loginBtn:       $('.rounded-button-base.page-login__submit-button'),
  errorMsg:       $('.input-base__validation-error-message'),

  async login(username, password) {
    await t
      .typeText(this.usernameInput, username)
      .typeText(this.passwordInput, password)
      .click(this.loginBtn);
  }
}
export default {...basePage, ...loginPage}