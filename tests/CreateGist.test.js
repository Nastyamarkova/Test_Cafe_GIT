import Navigation from "../page-objects/components/navigation";
import { userRole } from "../page-objects/components/authhelper";
import createGist from "../page-objects/pages/CreateGistPage";

const navbar = new Navigation();
const gist = new createGist();

fixture`Create new public Gist`.page`https://github.com/`
  .skipJsErrors()
  .disablePageCaching.beforeEach(async (t) => {
    await t.click(navbar.signInBtn);
    await t.useRole(userRole);
  });

test("Create public gist with active account", async () => {
  await navbar.navigateToCreateGistPage();
  await gist.fillGistForm(
    "My new public gist",
    "Create public gist with active account"
  );
  await gist.createPublicGist();
  await gist.checkCreatedGist("My new public gist");
});

test("Create secret gist with active account", async () => {
  await navbar.navigateToCreateGistPage();
  await gist.fillGistForm(
    "My new secret gist",
    "Create secret gist with active account"
  );
  await gist.createSecretGist();
  await gist.checkCreatedGist("My new secret gist");
});
