import { Selector, t } from "testcafe";
import Navigation from "../page-objects/components/navigation";
import LoginPage from "../page-objects/pages/LoginPage";
import { incorrectRole, userRole } from "../page-objects/components/authhelper";

const navbar = new Navigation();
const loginPage = new LoginPage();

fixture`Checking login page`.page`https://github.com/`.skipJsErrors()
  .disablePageCaching;

test.skip("Login to GitHub with invalid credentials", async (t) => {
  await t.click(navbar.signInBtn);
  await t.useRole(incorrectRole);
  await loginPage.errorMessage("Login and/or password are wrong.");
});

test.skip("Login to GitHub with valid credentials", async (t) => {
  await t.click(navbar.signInBtn);
  await t.useRole(userRole);
  await navbar.userIsLoggedin();
});
