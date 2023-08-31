import { Selector, t } from "testcafe";

class Navigation {
  constructor() {
    this.signInBtn = Selector("a").withAttribute("href", "/login");
    this.avatarImg = Selector("img").withAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/60579467?v=4"
    );
    this.menuBtn = Selector("#global-create-menu-button");
    this.newGistBtn = Selector("span").withText("New gist");
  }

  async userIsLoggedin(t) {
    await t.expect(this.signInBtn.exists).notOk;
    await t.expect(this.avatarImg.exists).ok;
  }
  async navigateToCreateGistPage() {
    await t.click(this.menuBtn);
    await t.click(this.newGistBtn);
  }
}

export default Navigation;
