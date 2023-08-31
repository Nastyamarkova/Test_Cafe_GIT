import { Selector, t } from "testcafe";

class createGist {
  constructor() {
    this.descriptionInput = Selector("input").withAttribute(
      "name",
      "gist[description]"
    );
    this.textInput = Selector(".CodeMirror-line");
    this.dropdownWithType = Selector("summary").withAttribute(
      "aria-label",
      "Select a type of pull request"
    );
    this.gistPublicBtn = Selector(".select-menu-item-heading").withText(
      "Create public gist"
    );
    this.gistSecreteBtn = Selector(".select-menu-item-heading").withText(
      "Create secret gist"
    );
  }

  async fillGistForm(description, text) {
    await t.typeText(this.descriptionInput, description);
    await t.typeText(this.textInput, text);
  }

  async selectTypeOfGist(text) {
    await t.click(Selector("button").withText(text));
  }
  async createPublicGist() {
    await t.setTestSpeed(0.5);
    await t.click(this.dropdownWithType);
    await t.click(this.gistPublicBtn);
    await this.selectTypeOfGist("Create public gist");
  }

  async createSecretGist() {
    await t.setTestSpeed(0.5);
    await t.click(this.dropdownWithType);
    await t.click(this.gistSecreteBtn);
    await this.selectTypeOfGist("Create secret gist");
  }
  async checkCreatedGist(typeOfGist) {
    await t.expect(Selector("div").innerText).contains(typeOfGist);
  }
}

export default createGist;
