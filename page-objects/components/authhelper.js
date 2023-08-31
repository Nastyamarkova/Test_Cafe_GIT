import { Role } from "testcafe";
import { Selector, t } from "testcafe";

const loginInput = Selector("#login_field");
const passwordInput = Selector("#password");
const submitBtn = Selector("input").withAttribute("name", "commit");

const incorrectUsername = process.env.INCORRECT_USERNAME;
const incorrectPassword = process.env.INCORRECT_PASSWORD;

const username = process.env.MY_USERNAME;
const password = process.env.MY_PASSWORD;

export const incorrectRole = Role("https://github.com/login", async (t) => {
  await t.typeText(loginInput, incorrectUsername, {
    paste: true,
    replace: true,
  });
  await t.typeText(passwordInput, incorrectPassword, {
    paste: true,
    replace: true,
  });
  await t.click(submitBtn);
});

export const userRole = Role("https://github.com/login", async (t) => {
  await t.typeText(loginInput, username, { paste: true, replace: true });
  await t.typeText(passwordInput, password, { paste: true, replace: true });
  await t.click(submitBtn);
});
