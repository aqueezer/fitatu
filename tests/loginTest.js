import loginPage from '../pages/loginPage';
import homePage from '../pages/homePage';
import { validUser, invalidUser } from '../data/roles';

fixture `Invalid Login Test`;

test('invalid credentials should display error', async t => {
  await t
    .useRole(invalidUser)
    .expect(loginPage.errorMsg.visible).notOk();
});

fixture `Valid login Test`;

test('should log into fitatu', async t => {
  await t
    .useRole(validUser)
    .expect(homePage.siteTitle.exists).ok();
});
