import { Selector, t } from "testcafe";

class LoginPage {
  constructor() {
    this.messageError = Selector(".js-flash-alert");
  }

  async errorMessage(message) {
    await t.expect(this.messageError.innerText).contains(message);
  }
}

export default LoginPage;
