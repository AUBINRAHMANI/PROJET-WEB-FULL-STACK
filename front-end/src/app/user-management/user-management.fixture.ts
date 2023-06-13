import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class UserManagementFixture extends E2EComponentFixture {


  getUserList(){
    return this.page.$$('user-list');
  }

}
