import { Role } from "testcafe";
import loginPage from "../pages/loginPage";

const loginPageUrl = `${loginPage.baseUrl}${loginPage.url}`;


export const validUser = Role(
  loginPageUrl,
  async () => {
    await loginPage.login("developer_test@o2.pl", 'test123');
  },
  { preserveUrl: true }
);

export const invalidUser = Role(
  loginPageUrl,
  async () => {
    await loginPage.login("invalid@o2.pl", 'invalid');
  },
  { preserveUrl: true }
);